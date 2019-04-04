=====================
Development proposals
=====================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

.. toctree::
   :hidden:
   :maxdepth: 3

   dev-sync-simplification
   dev-language-preferences


This area contains information on changes to Jurism that I am
contemplating.  Things described here will involve a significant
amount of work, and significant changes to client code. Accordingly,
they will need to be planned carefully and thoroughly tested before
deployment---and I am *very much open* to collaboration in the coding
and testing. Comments posted to the Jurism support list are also very
much welcome.

--------------

`Simplified Jurism sync data`_
    This is a description of a simplified schema for representing
    Jurism extended fields in data synced to Zotero. It is intended as
    a complete substitute for the current JSON encoding of extended
    fields. This would make Jurism entries safe to edit in a
    vanilla Zotero client, and remove a significant burden of
    complexity for future development.

---------------------

`Improved language preferences panel`_
    Zotero are beginning to convert the user interface to `React`_, in
    preparation for migrating their code base away from Firefox to a
    new home in `Electron`_. The conversion is already happening, and
    the Preferences panel is `the next target in their roadmap`__.
    The current language preferences panel is Jurism is not intuitive
    to work with, and intimidating to new users. The React migration
    will be an opportunity to refashion it in a more inviting form. I
    could really use some help on this one.

--------------
    
__ https://github.com/zotero/zotero/issues/1674

.. _Improved language preferences panel: dev-language-preferences.html

.. _React: https://reactjs.org/

.. _Electron: https://electronjs.org/

.. _Simplified Jurism sync data: dev-sync-simplification.html

