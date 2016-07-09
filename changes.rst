=====================
Release Announcements
=====================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

.. _citeproc-js docs: http://citeproc-js.readthedocs.io/en/latest/changes.html

----------------
`v4.0.29.10m87`_
----------------

.. _v4.0.29.10m87: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m87

Update translators and styles
  This should happen more often!

Update citeproc-js to 1.1.113
  See the `citeproc-js docs`_ for details

----------------
`v4.0.29.10m86`_
----------------

.. _v4.0.29.10m86: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m86

Update citeproc-js to 1.1.112
  See the `citeproc-js docs`_ for details


----------------
`v4.0.29.10m85`_
----------------

.. _v4.0.29.10m85: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m85

*Note that several version increments are skipped here. This was due
to repeated failures of the Firefox plugin signing mechanism, on a day
when I did not have time and patience to reset the state of the
archive before making fresh release attempts.*

Pass genre value to CSL
  This value was apparently not being included in citations in
  Juris-M, where it is sometimes set under its native database name of
  ``genre`` without internal remapping.

----------------
`v4.0.29.10m79`_
----------------

.. _v4.0.29.10m79: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m79

Allow installs on Firefox 47
  Simple change to the install configuration.

Upgrade to citeproc-js 1.1.108
  See the `citeproc-js docs`_ for details

----------------
`v4.0.29.10m78`_
----------------

.. _v4.0.29.10m78: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m78

Jurisdiction updates
  Add jurisdiction data for Australia, Switzerland and Singapore, and High Court
  data for England and Wales.

----------------
`v4.0.29.10m76`_
----------------

.. _v4.0.29.10m76: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.10m76

Language Preferences
  (1) The earlier change that limited "language" and "script"
  selections to their respective roles has been reversed.
  The data on which the menus are based (the IANA Language
  Subtag Registry) is not sufficient rigorous in classifying
  tags, and this was causing show-stopping problems for some
  users. Removing the restriction seems the best way of
  resolving the issue.
  
  (2) The page layout of the top half of the Language Preferences pane
  has been reorganized. The presentation may be a little cleaner on
  some systems---and it is much easier for developers (including me)
  to follow.

Extra field in Reports
  I have placed a border around Extra comments in generated reports.
  We use this to return comments on bibliography entries to
  our students (in the Nagoya University Faculty of Law),
  and the emphasis improves the readability of feedback reports.

Client name
  The name of the client was still showing as "ML-Zotero" in
  tab mode. This has been fixed.

Legal items in the center pane
  Some further code changes help assure that something meaningful
  appears in the Title column of the center pane for legal items.

Race condition avoided
  I recently enabled the re-saving of item data, to force the
  hacked-in data for Juris-M items to be properly allocated in
  the database. This proved an obsession too far, as it triggered
  a race condition (an infinite loop) on some database entries.
  The change has been reversed.

Jurisdictions
  The data behind the Jurisdiction search-as-you-type field and the 
  citation process has been updated from the `Legal Resource Registry`_.

.. _`Legal Resource Registry`: https://fbennett.github.io/legal-resource-registry

Upgrade citeproc-js
  See the changes up to `citeproc-js v1.1.103`_ for details.

.. _`citeproc-js v1.1.103`: https://citeproc-js.readthedocs.org/en/latest/changes.html

---------------
`v4.0.29.9m75`_
---------------

.. _v4.0.29.9m75: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.9m75

Sync mask for Genre field in Patent
  The previous release missed out a sync mask for this extended
  field, causing sync to fail when data was present in it. This
  has been fixed.

Import translation fixes
  While working on multilingual data across databases, I discovered
  that some multilingual data was not being imported. This has been fixed.

---------------
`v4.0.29.9m74`_
---------------

.. _v4.0.29.9m74: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.9m74

Search-as-you-type conditions for Court
  The search facility in the Court field recognized only text from
  the beginning of the target entry. This was proving to be a royal
  pain with U.S. federal court decisions, so I have loosen the
  conditions: search will now select entries that match the
  entered text anywhere in the field.

Genre field for Patent
  One of our M.A. finalists has cited several trademark filings
  in his thesis. After some casting about, I decided that
  the Patent type is a reasonably good fit for many types of
  filings. The addition of a Genre field gives it flexibility
  for multi-purposing.

Translator for all legal types
  Primary legal resources are cited in translation frequently
  enough to justify adding the Translator creator to all
  legal types, so I have done that.

Firefox 46 compatibility fix
  Firefox 46 brought an upgrade to the browser JavaScript engine,
  and the upgrade broke some legacy code in the Juris-M version\
  of the CSL editor. This has been fixed.

Help link in Language Preferences
  The help link in the Language Preferences pane was pointing
  to an unhelpful location. Emilian Heyns kindly filed a pull
  request with the URL of a more meaningful target page.

Jurisdictions
  The data behind the Jurisdiction search-as-you-type field and the 
  citation process has been updated from the `Legal Resource Registry`_.

.. _`Legal Resource Registry`: https://fbennett.github.io/legal-resource-registry

---------------
`v4.0.29.8m72`_
---------------

.. _v4.0.29.8m72: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m72

Fix scoping error
  The fix introduced by ``m70`` was broken due to a scoping
  error (a call to a variable that did not exist in the
  context of the caller). This has been fixed.

---------------
`v4.0.29.8m71`_
---------------

.. _v4.0.29.8m71: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m71

Bump Firefox version
  This release permits Juris-M to run on Firefox 46. Oops.
  There were no other changes in this release.

---------------
`v4.0.29.8m70`_
---------------

.. _v4.0.29.8m70: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m70


Bump Firefox version
  Firefox continues to issue releases at a blistering pace.
  This fixes some compatibility issues in legacy Juris-M code.

Update citeproc-js
  The citeproc-js citation engine was upgraded to 1.1.101.


---------------
`v4.0.29.8m69`_
---------------

.. _v4.0.29.8m69: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m69

Multilingual ``conferenceName``
  The Conference Name field was not multilingualize-able. This has been fixed.

Upgrade citeproc-js
  Update citeproc-js to 1.1.99.

---------------
`v4.0.29.8m68`_
---------------

.. _v4.0.29.8m68: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m68

Update jurisdictions from `Legal Resource Registry`_.

---------------
`v4.0.29.8m67`_
---------------

.. _v4.0.29.8m67: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m67

Translator for legal cases
  Added the Translator creator to the Case type.

.. _v4.0.29.8m66: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.8m66

This release is an update to address a number of minor bugs uncovered
since v4.0.29.6m62 went live, and to merge in some upstream changes
from Zotero.

^^^^^^^^^^^^^
Juris-M fixes
^^^^^^^^^^^^^

Bugfixes for document cite extraction
   Thanks to patient feedback from Hem Sras, bugs introduced by the document
   cite extraction code have been fixed. If you experienced stability issues
   in the word processor plugins, these should be resolved in this release.

   I am happy to confirm that document cite extraction is at last
   working well, as of this 4.0.29.8m66 release, after bugfixes on several
   fronts.

Import translation fixes
   Thanks to detailed feedback from Emiliano Heyns, the author and maintainer
   of the Better BibTeX plugin for Zotero, numerous bugs in Juris-M import
   have been fixed. Failures ranged from records that could crash the
   import translator, to records that would lose data or place it in the
   wrong field. Export and import of ``CSL JSON`` and Zotero RDF records,
   in particular (the two formats capable of losslessly round-tripping
   Juris-M records) should now be more satisfactory.

Proper composition of synced items
   This is a change with no visible effects. The Zotero sync
   servers recognize only fields that are present in official Zotero.
   To make Juris-M sync-compatible with Zotero, at sync time the extra
   field data added to Juris-M records is removed from sync items, and
   placed in the **Extra** field. When server-side items are then
   synced to another Juris-M client, the encoded data is *meant to be*
   restored to the relevant fields. This is invisible to the user in
   the Juris-M client (although the encoded data is visible in the
   online view of some items).

   The bug was that on sync-down, this extra information was being
   stored in the *database* Juris-M record, although it was properly
   assigned to fields when the items were opened. This would
   potentially be a problem during some upgrades, when database
   records are accessed directly before Juris-M startup. No such
   upgrade will happen in the medium term, but after Zotero 5.0 goes
   live, we will need to perform migration steps. By fixing this 
   small anomaly now, we can assure a smoother transition to the
   new architecture, probably toward the end of this calendar year.

^^^^^^^^^^^^^^^^^^^^^
``citeproc-js`` fixes
^^^^^^^^^^^^^^^^^^^^^

   See the changes for `citeproc-js v1.1.98`_ for details.

.. _`citeproc-js v1.1.98`: https://citeproc-js.readthedocs.org/en/latest/changes.html


^^^^^^^^^^^^^^^^^^^^^^^^^^^
Fixes inherited from Zotero
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Zotero IDs
   In another change with no visible impact to the user, new code has
   been backported from Zotero 5.0 to generate internal IDs applied
   to Zotero (and Juris-M) items.

Search-as-you-type and TAB key in creator fields
   For manual entry, a patch from Zotero to which I contributed in a minor way
   now properly sets two-author names from the search-as-you-type list
   in the ``lastName`` and ``firstName`` fields when the ``TAB`` key
   is pressed.

---------------
`v4.0.29.6m62`_
---------------

.. _v4.0.29.6m62: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.6m62

This is a followup release to v4.0.29.6m60, covering JM Standalone and
the Firefox plugin. The changes are few but meaningful. Highlights:

Document cite extraction
   In student supervision and collaboration, projects often start
   with citations drawn from a private library. When the author wishes
   to share the content with others, a mechanism is needed to copy
   references to a shared library while preserving links to the
   document. I added support for this two years ago, but it was
   unreliable: it would often fail on large documents.

   Document cite extraction has been fixed in this release. If you
   follow `the original instructions`_, it should work smoothly now.
   
   .. _the original instructions: http://citationstylist.org/2014/05/03/multilingual-zotero-extracting-embedded-references/

Bibliography editing
   There is a plugin button in the word processor for editing
   bibliographies.  Entries edited through the Zotero/Juris-M plugin
   are preserved across refreshes of the document, in the same way
   as directly edited citations. Changes to the processor over the
   past year had broken this: the text came through to the editor
   in a corrupted state, and a month or so ago it stopped working
   altogether.

   Bibliography editing has been fixed in this release. It should
   Just Work.

Icons
   Juris-M has its own logo, which was used in most places but not all.
   Zotero recently made some changes to their own logo styling, which
   I followed in haste, and badly. On some systems with high-resolution
   displays, the toolbar icon disappeared altogether.

   These display issues have been fixed, and the Juris-M logo should
   now appear consistently across the product.

JM Standalone with JM for Firefox
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

ZotFile returns
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

.. _v4.0.29.6m60: https://github.com/Juris-M/zotero/releases/tag/v4.0.29.6m60

There are many changes to the infrastructure behind this release, and
few changes to functionality apart from bug fixes. This back-room work
will allow quicker releases, and lays a solid foundation for the
development of legal style modules. For a summary of the changes to
the processor, see the `citeproc-js documentation <http://citeproc-js.readthedocs.org/en/latest/changes.html>`_. Concerning
Juris-M itself, note the following:

Processor code on GitHub
   Most citation-related programming activity takes place on GitHub,
   and I finally bit the bullet and moved the citeproc-js code there,
   for easier deployment and smoother collaboration with developers.

Automatic updates
   The browser plugins should update automatically again, after a
   manual install of the latest versions. The same should be true of
   plugins embedded in the Standalone binaries (touch wood).

Site translators
   A glitch that blocked the recognition of newly added site
   translators has been fixed.

Simpler legal style modules
   The legal style modules have been revised to follow a new,
   smarter framework for legal cites. We are now set to begin
   extending jurisdiction coverage.

Style development tutorial update
   The `Juris-M Style Development editor <https://juris-m.github.io>`_
   tutorial has been revised to reflect the new, greatly simplified
   CSL-M coding requirements supported by this release.

JM for Firefox with JM Standalone
   The Firefox plugin (or other browser connectors) and the JM
   Standalone client are *almost* playing nice together. You must
   install a handler for the zotero://select protocol to make it work
   on Mac OS X or on Linux. Under Linux, it has been tested and is
   known to work. On Windows, you must start the browser *after* JM
   Standalone. I'm not sure of the cause yet, but if started in that
   order, the (M) button will foreground JM Standalone as expected.

