==============
Juris-M Extras
==============

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

------------
Introduction
------------

A few special extensions are built into |jurism| that are not
currently available in mainstream Zotero. I tend to code these
things when I see a need for them. Since my sense of need is
stronger than my skill as a coder, if often happens that Team
Zotero later introduce a solution to the target problem that is
of much higher quality than my garage-mechanic effort. So if
there are blemishes on the tools described in this section,
and if I seem reluctant to do more than keep them running in
their rudimentary form, take heart: better things are likely
around the corner.

------------------------
Document cite extraction
------------------------

One of the current limitations of Zotero for collaborative work is
that document citations are tightly bound to the library from which
they originate. When a project begins with citations drawn from the
author's own ``My Library``, there is no simple way to share the live
citations with collaborators or reviewers. |jurism| is heavily used by
students of our own faculty, and this is a common pattern over the
course of supervision. I implemented cite extraction in 2014, but
it was buggy. It took two years, but the bugs have been addressed,
and it now works reliably. The steps for its use by |jurism|-only
users and for users of mainstream Zotero, are listed below.

.. _jurism-cite-extraction:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Extracting cites (Juris-M only)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. In |jurism|, create a group library to hold the recovered citations
   (recovery to **My Library** is not supported).

2. Sync JM Standalone to show the group library in the client.

3. With |jurism| running, open a document, and in the word processor
   open Document Preferences. Open the tab for "Project Name." Set a
   nickname for the project (anything will do), and hit `Enter`, then
   tick the box next to "release for editing" and select the group
   library you have created.

4. When you close Document Preferences, |jurism| may hang briefly
   while creating items for citations in the document. When it
   returns, click "Refresh" to pick up any items that it missed on the
   first pass.

5. Save the document (which is now linked to the group library items
   exclusively). Use it as your new working copy.

6. Sync |jurism| to push the newly created items to the group library
   in your Zotero account.

7. Invite other |jurism| users to the Zotero group you have created.

.. _zotero-cite-extraction:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Extracting cites (for use in Zotero)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. From the `Juris-M site`_, install JM Standalone, a variant of
   Zotero. You may need to stop or disable Zotero to run it, but it
   will make a copy of your Zotero database at startup, and your
   existing Zotero database will not be affected.

2. Configure |jurism| to sync to your Zotero account.

3. In |jurism|, create a group library to hold the recovered citations
   (recovery to **My Library** is not supported).

4. Sync JM Standalone to show the group library in the client.

5. With |jurism| running, open a document, and in the word processor
   open Document Preferences (same as for Zotero). Open the tab for
   "Project Name." Set a nickname for the project (anything will do),
   and hit `Enter`, then tick the box next to "release for editing" and
   select the group library you have created.

6. When you close Document Preferences, |jurism| may hang briefly
   while creating items for citations in the document. When it
   returns, click "Refresh" to pick up any items that it missed on the
   first pass.

7. Save the document (which is now linked to the group library items
   exclusively). Use it as your new working copy.

8. Sync |jurism| to push the newly created items to the group library
   in your Zotero account.

9. You can now stop |jurism| (or remove it from your system entirely).

10. Open Zotero and sync. The group library should appear in your
    client, and the document should be linked to the items it
    contains.

.. _`Juris-M site`: https://juris-m.github.io/downloads

