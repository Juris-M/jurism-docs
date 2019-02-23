========================================================
User guide: multilingual publications and bibliographies
========================================================

.. include:: substitutions.txt
|CCBYSA|_ `Jonathan Lewis <http://www.soc.hit-u.ac.jp/en/academics/faculty/lewis.html>`_

~~~~~~~~~~~~
Introduction
~~~~~~~~~~~~

You are a social scientist (or a humanities scholar, or some other kind of researcher). You read and cite previous research written in two or more languages, and you need a way to record and manage all those references. You write articles in both English and another language.

Each journal has its own requirements about how to format bibliographies. For example, when you cite a Japanese work in a Japanese journal you will just use the original author, title and so on, but when you cite the same work in an English journal you may have to write the author and title in romaji and add an English translation of the title.  With `Jurism <https://Jurism.github.io>`_ you can store all the information necessary to produce these different citation formats in one place. This means you can maintain one database of all your
citations and keep all information about each work in one place, regardless of which language that information is in. Best of all, you can use Jurism to automatically generate bibliographies in the format required by whichever journal you are writing for, whichever language you are writing in.

`Zotero <https://zotero.org>`_ itself provides some nice multilingual support, and it is continuously improving. All content is stored in Unicode; the locale used for labels and date forms in generic styles can be changed easily; and search functions recognize Asian scripts.

Jurism adds the ability to store language variants of individual fields, and flexible support for selecting the variants used in citation output. Those two features add significant complexity, and some functionality, and conventions for its use, are not obvious on the surface. This tutorial will show you how to set up Jurism to store information about works written in English and Japanese. It will then show you how to add citations and create a bibliography when writing an article in Japanese for the Japanese Journal of Sociology. Finally, it will show you how to add citations and create a bibliography when writing an article in English for the British Journal of Japanese Studies, citing Japanese works. In both cases you will be using Microsoft Word.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Getting bibliographic information into Jurism
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One of Jurism's great strengths is its ability to work with your web browser to recognize and grab bibliographic information contained in web pages. Let's do two web searches, one for an English book and one for a Japanese book, and add the results to our database. We need to start the Jurism application before doing the web search.

First, let's search Google Scholar for Jonathan Haidt's The Righteous Mind. When the results appear in Google Scholar a folder icon shows up in the menu bar which means Jurism has found multiple references in this page. We click on the folder icon, select the first item, and it is added to our Jurism database.

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe src="https://www.youtube.com/embed/3lZxyWU1k9M" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>
	

Next, let's search Japanese Amazon for Kouichirou Itoh's book about causality and data analysis. Once again, Jurism makes a new record for this book and stores the title, author names etc. in the appropriate fields.

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe src="https://www.youtube.com/embed/B43czQDfJhA" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>


You can manage all your references in Jurism by creating folders and adding tags. You can also attach links to PDF files. For further information see the "Using Zotero" section of the `Zotero documentation <https://www.zotero.org/support/>`_ .

~~~~~~~~~~~~~~~~~~~~~~~~~~
Original-language metadata
~~~~~~~~~~~~~~~~~~~~~~~~~~

The first and most important principle is that item metadata should
always be recorded in the original language in the first instance.
Translations and transliterations can be entered later as they are
needed; but the purpose of a citation is to lead the reader or the
researcher back to the original source. If the title of a document in
Russian, Khmer, Laotian or Japanese is entered as an English
translation, data is lost---the reader is forced to guess at the
original title if they want to find the original document. Therefore,
all item metadata (except for dates) should be recorded in the
original language. The variants can be added separately at a later
time.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Setting up Jurism for citing works in both Japanese and English
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we want to cite a Japanese work in an English article we will need to write the title, author etc. in romaji rather than kanji and kana. Similarly, if we are writing an article in Japanese and the bibliography must be sorted according to the kana reading of the authors' names, we need to add the yomikata of the authors' names to our database.

In order to do these things we add entries for English, Japanese, romaji and kana to Jurism's language preferences, as the following video shows. After opening Jurism's Preferences in the menu we click the Languages tab. Then we click "Add a Language" and add English; we change the nickname from en to English (the nickname can be anything you like; you can leave it as en if you prefer). Next we add Japanese in the same way. After that we click the Plus sign next to Japanese and from the Variant sub-menu we select "ALA-RC Romanization, 1997 Edition". We change the nickname from "ja-alalc97" to Romaji. Finally we once again click the Plus sign next to Japanese and from the "script" sub-menu we select "Japanese syllabaries (alias for Hiragana + Katakana) -- Hrkt". We change the nicknames from "ja-Hrkt" to Kana.

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe src="https://www.youtube.com/embed/TnlCLDChIWQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Adding multilingual information about works
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Suppose we want to quote Itoh's book in an article we are writing in English. We need to add romaji versions of the title, author etc. and also an English translation of the title. The following video shows how to do this. First we have to tell Jurism which language a field's current information is in -- in this case it's Japanese. We do this by right-clicking on the label to the left of the data, clicking "Set Field Language" and selecting Japanese. Then we right-click the label once more, choose "Add Variant", and enter either the romaji or an English translation of the item.

.. raw:: html

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
        <iframe src="https://www.youtube.com/embed/Uu6R1Xz-zSY" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    </div>


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Creating citations and a bibliography in a Japanese article
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[forthcoming]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Multilingual citations in an English article
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[forthcoming]
