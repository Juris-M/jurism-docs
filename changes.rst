=====================
Release Announcements
=====================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

------------
v4.0.29.6m60
------------

There are many changes to the infrastructure behind this release, and
few changes to functionality apart from bug fixes. This back-room work
will allow quicker releases, and lays a solid foundation for the
development of legal style modules. For a summary of the changes to
the processor, see the `citeproc-js documentation <http://citeproc-js.readthedocs.org/en/latest/changes.html>`_. Concerning
Juris-M itself, note the following:

**Processor code on GitHub**
   Most citation-related programming activity takes place on GitHub,
   and I finally bit the bullet and moved the citeproc-js code there,
   for easier deployment and smoother collaboration with developers.

**Automatic updates**
   The browser plugins should update automatically again, after a
   manual install of the latest versions. The same should be true of
   plugins embedded in the Standalone binaries (touch wood).

**Site translators**
   A glitch that blocked the recognition of newly added site
   translators has been fixed.

**Simpler legal style modules**
   The legal style modules have been revised to follow the new,
   smarter framework for legal cites (see link above).

**Style development tutorial update**
   The `Juris-M Style Development editor <https://juris-m.github.io>`_
   tutorial has been revised to reflect the new, greatly simplified
   CSL-M coding requirements supported by this release.

**JM for Firefox with JM Standalone**
   The Firefox plugin (or other browser connectors) and the JM
   Standalone client are *almost* playing nice together. You must
   install a handler for the zotero://select protocol to make it work
   on Mac OS X or on Linux. Under Linux, it has been tested and is
   known to work. On Windows, you must start the browser *after* JM
   Standalone. I'm not sure of the cause yet, but if started in that
   order, the (M) button will foreground JM Standalone as expected.

