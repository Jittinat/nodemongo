var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017" //2717 is a default port of mongo

mongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo = db.db("example01") //name db in mongo 

    dbo.createCollection("student",function(err,res){
        if(err) throw err                   //if fail throw error
        console.log("Collection created")   //if success print to console
        
        var obj = [ 
        { id: "1", firstname: "Bob", lastname: "Cat", age: 21, major: "Math" },
        { id: "2", firstname: "Tom", lastname: "Cat", age: 18, major: "Science" },
        { id: "3", firstname: "Marry", lastname: "Lamb", age: 19, major: "Science" },
        { id: "4", firstname: "Linda", lastname: "Lamb", age: 21, major: "IT" },
      ]
      dbo.collection("student").insertMany(obj,function(err,res){
        if(err) throw err
        console.log("Inserted "+res.insertedCount+ " items")
        db.close()
    })

    var query = { major: "Science"};
    dbo.collection("student").find(query).toArray(function(err,result){
        if (err) throw err
        console.log(result)
        db.close()
    })


    var queryage = {age: { $lt:20} }
    var keysort = {age: -1}
    dbo.collection("student").find(queryage).sort(keysort).toArray(function(err,result){
    if (err) throw err
        console.log(result)
        db.close()
    })

    var queryln = { lastname: "Lamb"}
    var newvalue = {$set: {lastname: "Fox"}}
    dbo.collection("student").updateMany(queryln, newvalue, function(err, res) {
        if (err) throw err;
        console.log(" document updated");
        db.close();
      });

    var myobj = { id: "5", firstname: "Adam", lastname: "Zoo", age: 22, major: "Math"};
    dbo.collection("student").insertOne(myobj, function(err, res) {
    if (err) throw err;
        console.log(res);
        db.close();
    });
    db.close//close database
    })
})
