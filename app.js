var mongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017" //2717 is a default port of mongo

mongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbo = db.db("example01") //name db in mongo 

    ///////////createcollection/////////////
    /*dbo.createCollection("products",function(err,res){
        if(err) throw err                   //if fail throw error
        console.log("Collection created")   //if success print to console
        db.close                            //close database
    }) */

    ///////////insert one object obj/////////////
    /*
    var obj = { name: "Coffee mug", price: 10}
    dbo.collection("products").insertOne(obj,function(err,res){
        if(err) throw err
        console.log("Inserted "+res.insertedCount+ " items")
        db.close()
    })
    */

    ///////////insert many object obj/////////////
    /*
   var obj = [ 
    { name: "Book", price: 10 },
    { name: "Pencil", price: 5 },
    { name: "Calculator", price: 40 },
    { name: "Notebook", price: 15 },
    { name: "T-Shirt", price: 20 },
    { name: "Jacket", price: 20 }
  ]
  dbo.collection("products").insertMany(obj,function(err,res){
    if(err) throw err
    console.log("Inserted "+res.insertedCount+ " items")
    db.close()
})
*/

    //////////find first name of record/////////
    /*
    dbo.collection("products").findOne({}, function(err,result){
        if(err) throw err
        console.log(result.name)
        db.close()
    })
    */

    /*
    dbo.collection("products").findOne({}, function(err,result){
        if(err) throw err
        console.log(result.price)
        db.close()
    })
    */
    /*
    dbo.collection("products").findOne({}, function(err,result){
        if(err) throw err
        console.log(result)
        db.close()
    })
    */
    /*
    dbo.collection("products").find({}).toArray (function(err,result){
        if(err) throw err
        console.log(result)
        db.close()
    })
    */
    ///////////

    //////////WDF
    //////////
    /*
    var query = {name: /^C/}
    var keysort = {name: 1} //if 1 is less to more
    dbo.collection("products").find(query).sort(keysort).toArray (function(err,result){
        if(err) throw err
        console.log(result)
        db.close()
    })
    */
    ////////
    /////delete one  nononononononono

    ///////////error
    /*
    var query = {name: /^C/}
    dbo.collection("products").deleteMany(query).sort(keysort).toArray(function(err,result){ //////don't know syntax TT
        if(err) throw err
        console.log(res.result.n + " is delete") 
        db.close()
    })
    */

    /*
   var query = {name: "Jacket"}
   var updateItem = { $set: {name:"jacket", price: 50}}
   dbo.collection("products").updateOne(query), (function(err,result){ 
       if(err) throw err
       console.log("success") 
       db.close()
   })
   /*
   //////
   /////updatmany item

////////
})