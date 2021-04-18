# MongoDB

MongoDB is a document database, which means it stores data in JSON-like documents.

## MongoDB structure

MongoDB is a no-sql database which means it isn't using table.\
For instance every MongoDb database has collections.\
Every collection has documents which in turn are JSON format.

## MongoDB commands and queries

### `use db_name`

This command is used to create a database\
where db_name is the name of the dabatase.

### `db.dropDatabase()`

This command is used to drop a database you've created.

### `show dbs`

This command shows you all the databases you have at the moment.

### `db.createCollection(name, options)`

This command create a collection in your database\
where name is the name of the collection and options\
is used to specify the configuration of the collection.

### `db.COLLECTION_NAME.drop()`

This command is used to drop a collection\
where COLLECTION_NAME is the name of the collection.

### `db.COLLECTION_NAME.insert(document)`

This command is used to add an document to our collection\
where COLLECTION_NAME is the name of the collection and\
the document has to be a JSON file format code.

### `db.COLLECTION_NAME.find()`

This command is used to query (find) a document in our collection.\
It can be found by id which is automaticaly created for every document\
inserted in our collection or by other parameters added by us.\
If this function is used without parameters it lists all documents.

### `db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)`

This command is used to update the content of a document.\
Down bellow I will show a little demonstration of this query

Let's consider that our collection has these documents:
```
  { "_id" : ObjectId(5983548781331adf45ec5), "title":"MongoDB Overview"}
  { "_id" : ObjectId(5983548781331adf45ec6), "title":"NoSQL Overview"}
  { "_id" : ObjectId(5983548781331adf45ec7), "title":"Tutorials Point Overview"}  
```
If we execute this command it will change the title of the document\
which MongoDB Overview and replace it wth New MongoDB Overview

```
>db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>db.mycol.find()
{ "_id" : ObjectId(5983548781331adf45ec5), "title":"New MongoDB Tutorial"}
{ "_id" : ObjectId(5983548781331adf45ec6), "title":"NoSQL Overview"}
{ "_id" : ObjectId(5983548781331adf45ec7), "title":"Tutorials Point Overview"}
```

## What I have demonstrated

In this POC I have demonstrated a Login/Registrarion form using MongoDB for data storage and Flask for it's interpretation.

