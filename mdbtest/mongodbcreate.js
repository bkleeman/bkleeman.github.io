var MongoClient = require('mongodb').MongoClient;

let phrase = "<your password here>";
let connStr = `mongodb+srv://${phrase}:${phrase}@cluster0-ptdbw.mongodb.net/test?retryWrites=true&w=majority;`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});