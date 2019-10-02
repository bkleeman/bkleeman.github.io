var MongoClient = require('mongodb').MongoClient;

let un = "<your password here>";
let pw = "<your password here>";
let connStr = `mongodb+srv://${un}:${pw}@cluster0-ptdbw.mongodb.net/test?retryWrites=true&w=majority;`
var url = connStr;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("students").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});