var fs = require('fs');
var path = require('path');
var spawnSync = require('child_process').spawnSync;

var scriptDir = path.dirname(require.main.filename);

var jurismPath = path.join(scriptDir, "..", "..", "jurism");
var docsPath = path.join(scriptDir, "..", "..", "jurism-docs");

function getTags() {
    var res = spawnSync("git", ["tag"], {cwd: jurismPath});
    tags = res.stdout.toString();
    tags = tags.split("\n").filter(obj => obj);
    return tags;
}

function getPairs(tags) {
	var newtags = [];

	for (var tag of tags) {
		var mytag = tag.replace(/^v/, "");
		var firstchar = mytag.slice(0, 1);
		if (firstchar !== "4" && firstchar != "5") {
		//if (firstchar !== "5") {
			continue;
		}
		if (mytag.indexOf("beta") > -1) {
			continue;
		}
		if (mytag.indexOf("b") > -1) {
			continue;
		}
		if (mytag.indexOf("alpha") > -1) {
			continue;
		}
		var splt = mytag.split("m");
		if (splt.length === 1) {
			splt.push(0);
		} else {
			splt[1] = parseInt(splt[1], 10);
		}
		var leftsplt = splt[0].split(".");
		for (var i in leftsplt) {
			leftsplt[i] = parseInt(leftsplt[i], 10);
		}
		while (leftsplt.length < 4) {
			leftsplt.push(0);
		}
		leftsplt.push(splt[1]);
		if (leftsplt[4] === 0) {
			continue;
		}
		newtags.push({arr: leftsplt, str: tag});
	}

	function sortVersions(a, b) {
		for (var i=0, ilen=5; i < ilen; i++) {
			if (a.arr[i] > b.arr[i]) {
				return -1;
			} else if (a.arr[i] < b.arr[i]) {
				return 1;
			}
		}
		return 0;
	}

	newtags.sort(sortVersions);
	newtags.reverse();
	newtags.push({
		arr: false,
		str: "HEAD"
	});
	newtags.reverse();

	var pairs = [];
	var lastObj = false;
	for (var item of newtags) {
		if (lastObj && (lastObj.arr[0] === item.arr[0] || lastObj.str === "HEAD")) {
			pairs.push([item.str, lastObj.str]);
		}
		lastObj = item;
	}
	return pairs;
}

function getGitLog(from, to) {
	// Get tags
	var args = [
        "log",
		"--date=format-local:%F %R (JST)",
		"--date-order",
		"--ancestry-path",
		"--format=format:------%n%n%s%n%n:commit:%n    \`%h <https://github.com/Juris-M/zotero/commit/%H>\`_%n:author:%n    %an%n:date:%n    %ad%n%+b%n",
		from + "^1.." + to + "^0"
	];
	var res = spawnSync("git", args, {cwd: jurismPath});
    res = res.stdout.toString();
    res = res.replace(/\*/g, "\n\n*")
    return res;
}

function setIndexHeader(version) {
	return "========================\n"
		+ "Juris-M changes for v" + version + ".0\n"
		+ "========================\n"
		+ "\n"
		+ ".. include:: ../../substitutions.txt\n"
		+ "|CCBYSA|_ Frank Bennett <https://twitter.com/fgbjr>_\n"
		+ "\n"
		+ "\n"
		+ ".. toctree::\n"
		+ "   :maxdepth: 1\n"
        + "\n";
}

function setVersionChangesHeader(logname) {
	return "========================================================\n"
		+ logname + "\n"
		+ "========================================================\n"
		+ "\n"
		+ ".. include:: ../../substitutions.txt\n"
		+ "|CCBYSA|_ Frank Bennett <https://twitter.com/fgbjr>_\n"
		+ "\n";
}

// Execution

function run () {
    var tags = getTags();
    var pairs = getPairs(tags);
    var logIdx = {};
    logIdx["4"] = setIndexHeader("4");
    logIdx["5"] = setIndexHeader("5");
    for (var pair of pairs) {
        var logname = pair.join("-");
        var version = logname.replace(/v?([45]).*/, "$1");
    	if (version === "4") continue;
        if (version === "5") {
            outdir="../jurism-docs/news/v5.0"
        } else if (version === "4") {
            outdir="../jurism-docs/news/v4.0"
        } else {
            console.log("Boom "+version);
            process.exit();
        }
        logIdx[version] += "   " + logname + ".rst\n";
        var logTxt = setVersionChangesHeader(logname);
        logTxt += getGitLog(pair[0], pair[1]);
        var outFile = path.join(docsPath, "news", "v" + version + ".0", logname + ".rst");
        fs.writeFileSync(outFile, logTxt);
    }
    //var outFile =  path.join(docsPath, "news", "v4.0", "index.rst");
    //fs.writeFileSync(outFile, logIdx["4"]);
    var outFile =  path.join(docsPath, "news", "v5.0", "index.rst");
    fs.writeFileSync(outFile, logIdx["5"]);
}

run();
