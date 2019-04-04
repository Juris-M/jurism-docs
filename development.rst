
=====================
Development proposals
=====================

.. include:: substitutions.txt
|CCBYSA|_ `Frank Bennett <https://twitter.com/fgbjr>`_

------------------------

---------------------
Development proposals
---------------------

This area contains information on changes to Jurism that I am
contemplating.  Things described here will involve a significant
amount of work, and significant changes to client code. Accordingly,
they will need to be planned carefully and thoroughly tested before
deployment---and I am *very much open* to collaboration in the coding
and testing. Comments posted to the Jurism support list are also very
much welcome.

------------------------
Simpler Jurism Sync Data
------------------------

This is a description of a simplified schema for representing Jurism extended
fields in data synced to Zotero. It is intended as a complete substitute for
the current JSON encoding of extended fields.

^^^^^^^^^^
Deployment
^^^^^^^^^^

Jurism will uniformly sync-up entries with a new key:value syntax.

Bidirectional sync of key:value data will be performed in the ordinary
way, unpacking recognized item-type settings and field content values
onto Jurism items on sync-down, and again encoding data in key:value
form on sync-up.

Jurism will continue to recognize MLZ-encoded JSON when present in
sync-down data. The timestamp of such items will be touched immediately
to trigger a sync-up response to the server.

If wholesale conversion of online data is desired, that can be
accomplished by restoring local data to the online library, using the
Zotero option for that purpose. If library content is viewed and
edited only through Jurism clients, this is not necessary, as the
conversion is entirely transparent to the client.

Older Jurism clients synced to a converted library will receive the
human-readable content in the Extra field, and in-item extended field
data will be removed. The new Jurism client will be configured to
restore the key:value data of all such items locally upon
installation, in the same way as in sync-down conversion. In this case
the timestamp of the item will not be touched. Only the local item
will be modified.

Zotero clients synced to a library with key:value Jurism encoding will
receive the human-readable content in the Extra field. The entries can
be edited in Zotero with minimal risk of data loss on resync to Jurism
clients.

^^^^^^
Format
^^^^^^

Entries will be set with the CSL variable name that maps to the target
field in Jurism. That differs from the current MLZ JSON objects, which
use Zotero/Jurism field names.

Ordinary fields are simple::

  Container Title: My title

Creator fields are also done in the format currently recognized::

  Series Editor: John Doe

The item type is represented in the same way::

  Type: gazette
  
The language code of multilingual variants is set with two hyphens
immediately after the variable name::

  Series Editor--ja-JP: ジョン　ドウ

^^^^^^^^^^
Processing
^^^^^^^^^^

First things first. The `type` key will be processed before all
others, because field validity depends on the item type.

Comprehensive mappings that identify non-Zotero fields with their
CSL-M JSON equivalents are already shipped with Jurism, and will
be used to control the conversion.

The processor will parse extended data into CSL-M JSON if received
in raw form, permitting multilingual entries to be processed in
Zotero as well Jurism.

When data is ingested by Jurism, entries that cannot be parsed into
first-class Jurism items will remain in the Extra field. Ingestion
of a field may fail for several reasons:

1. The type of the Jurism item is not the base type of the
   item type set in extended data. In this case, no extended
   fields will be ingested, all will remain in the
   Extra field.
2. The base CSL JSON key is not a CSL-M variable.
3. The language tag of the entryis not valid under BCP 47.
4. The base CSL JSON key is not valid for the item type.
5. The field contains a language tag with content, but no parent field
   exists in the data.
6. A value for the key already exists in first-class data.
7. There are multiple keys referencing the same headline field
   or field variant.
   
The patterns above miss one further requirement. Language codes may be
declared for a headline field, whether in first-class Jurism data or
in the key:value listing. For this case, a key with a language and no
content will set a language on the corresponding headline field::

  Series Editor--zh:

Neither the processor nor the ingester will write an
empty field into first-class data. Such entries will be
used only to set a language tag on a headline field.
