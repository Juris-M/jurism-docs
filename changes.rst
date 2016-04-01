=====================
Release Announcements
=====================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

---------------
`v4.0.29.6m62`_
---------------

.. _v4.0.29.6m62: https://github.com/Juris-M/zotero/commits/v4.0.29.6m62

This is a followup release to v4.0.29.6m60, covering JM Standalone and
the Firefox plugin. The changes are few but meaningful. Highlights:

**Document cite extraction**
   In student supervision and collaboration, projects often start
   with citations drawn from a private library. When the author wishes
   to share the content with others, a mechanism is needed to copy
   references to a shared library while preserving links to the
   document. I added support for this two years ago, but it was
   unreliable: it would often fail on large documents.

   Document cite extraction has been fixed in this release. If you
   follow `the original instructions`_, it should work smoothly now.
   
   .. _the original instructions: http://citationstylist.org/2014/05/03/multilingual-zotero-extracting-embedded-references/

**Bibliography editing**
   There is a plugin button in the word processor for editing
   bibliographies.  Entries edited through the Zotero/Juris-M plugin
   are preserved across refreshes of the document, in the same way
   as directly edited citations. Changes to the processor over the
   past year had broken this: the text came through to the editor
   in a corrupted state, and a month or so ago it stopped working
   altogether.

   Bibliography editing has been fixed in this release. It should
   Just Work.

**Icons**
   Juris-M has its own logo, which was used in most places but not all.
   Zotero recently made some changes to their own logo styling, which
   I followed in haste, and badly. On some systems with high-resolution
   displays, the toolbar icon disappeared altogether.

   These display issues have been fixed, and the Juris-M logo should
   now appear consistently across the product.

**JM Standalone with JM for Firefox**
   When Zotero for Firefox is used with Standalone Zotero, clicking on
   the Zotero icon in the browser is meant to raise Standalone to the
   foreground. When Standalone is running, and using the same database
   as the Firefox plugin, the latter is meant to kick into "connector
   mode," and it is meant to shift back to "full Zotero" when Standalone
   is closed.

   These features were not working properly in the Juris-M versions.
   The browser plugin would crash when JM Standalone was started after
   the browser; and foregrounding often did not seem to work correctly
   either. I have studied the protocols that carry communication
   between the two processes, and this is now working better in Linux,
   at least. I haven't tested under Windows or the Mac, but you may
   have better experience there as well.

**ZotFile returns**
   Due to code-signing requirements, and as a matter of general
   etiquette and sound engineering, separate products are meant to
   have separate system IDs. In the early development of "Multilingual
   Zotero," I left the Zotero ID unchanged. Times are changing, and I
   gave JM for Firefox its own ID last year. I cheated in JM
   Standalone, though, until a week ago---and when I made the change
   to improve consistency, JM Standalone refused to install `ZotFile`_,
   an add-on with some very nice features for managing PDFs.

   .. _ZotFile: http://zotfile.com/

   The developer of ZotFile has kindly added the Juris-M ID to the
   plugin's list of accepted companion tools. I have also added
   a clone of ZotFile to the Juris-M site that will update itself
   automatically when new versions come out, and bundled it with
   JM Standalone to give it more exposure.
   

---------------
`v4.0.29.6m60`_
---------------

.. _v4.0.29.6m60: https://github.com/Juris-M/zotero/commits/v4.0.28.7m60

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
   The legal style modules have been revised to follow a new,
   smarter framework for legal cites. We are now set to begin
   extending jurisdiction coverage.

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

