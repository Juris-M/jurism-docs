==============================================
Proposal: Improvements to Citeproc Test Runner
==============================================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

.. toctree::
   :hidden:
   :maxdepth: 3


This outlines some ideas for improving the workflow for maintaining
style-level test suites using `Citeproc Test Runner`_.

--------
Overview
--------

Data for test fixtures can be drawn directly from Zotero libraries via
`api.zotero.org`. This could streamline the test-creation process with
adjustments to the role of library data, the layout of test fixtures
and the capabilities of the test runner.

^^^^^^^^^^^^^^^^^^
Library data items
^^^^^^^^^^^^^^^^^^

One library item will correspond to one test fixture: if the metadata
of an item is to be used in multiple tests, it must be duplicated. There
are two special requirements, beyond core metadata:

1. A short one-line description of the test for which the item is intended
   should be set in the Abstract field.
2. The item should be placed in a collection named for the ID name of
   (each/the) style to be tested, such as ``jm-oscola``.

^^^^^^
Layout
^^^^^^

In addition to an INPUT field, style tests should have an ITEM_KEY
field containing a comma-delimited list of Zotero item keys for
the items used in the test. Fixture keys are checked when updates
are performed via the ``cslrun`` script.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Citeproc Test Runner: ``cslrun``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``cslrun`` script will have a new option ``-u`` (``--update``),
which calls the Zotero API to get a list of all items in the collection
bearing the same name as the name of the style tests subdirectory
(which in turn should correspond to the style ID name), casting draft
fixtures for any items that are not already represented (by their
ITEM_KEY values) in the existing tests.
