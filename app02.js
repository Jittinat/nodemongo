var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "mydata"
})

con.connect(function(err){
    if(err) throw err
    console.log("connected")

    ////////////create database////////////////
    /*
    con.query("CREATE DATABASE mydata", function(err,result){
        if(err) throw err
        console.log("Database created")
    })
    */

    /////////////CREAT TABLE//////////////
    /*
    var sql = "CREATE TABLE students(id VARCHAR(5),firstname VARCHAR(50),age INT(11))"
    con.query(sql, function(err,result){
        if(err) throw err
        console.log("Table create")
    })
    */

    /*
   var sql = "INSERT INTO students (id, firstname, lastname, age) VALUES ('1','Bob', 'Cat','20')"
   con.query(sql, function(err,result){
       if(err) throw err
       console.log("insert 1 record")
   })
   */

    /*
var sql = "INSERT INTO students (id, firstname, lastname, age) VALUES ?"
var values = [
    ['1', 'Bob', 'Cat', 20],
    ['2', 'Tom', 'Cat', 19],
    ['3', 'Amy', 'Apple', 52],
    ['4', 'Hannah', 'Lamb', 21],
    ['5', 'Michael', 'Valley', 34],
    ['6', 'Sandy', 'Ocean', 28],
    ['7', 'Betty', 'Green', 15],
    ['8', 'Richard', 'Sky', 33],
    ['9', 'Susan', 'Bay', 48],
    ['10', 'Vicky', 'Yellow', 29],
    ['11', 'Ben', 'Park', 38],
    ['12', 'William', 'Central', 54],
    ['13', 'Chuck', 'May', 39],
    ['14', 'Viola', 'Sideway', 33]
  ]

  con.query(sql,[values], function(err,result){
    if(err) throw err
    console.log("Number of records inserted: " + result.affectedRows) 
  })
  */

  /*
  var sql = "SELECT * FROM students"
  con.query(sql,function(err,result,fields){
    if(err) throw err
    console.log(result)
   //console.log(fields) 
  })
  */

  /*
  var sql = "SELECT * FROM students WHERE firstname LIKE 'b%'"
  con.query(sql,function(err,result,fields){
    if(err) throw err
    console.log(result)
   //console.log(fields) 
  })
  */

  /* START FROM 2 TO 5
    var sql = "SELECT * FROM students LIMIT 5 OFFSET 2"

    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields) 
  })
  */

  //START FROM 2 TO 5
 /*
    var sql = "SELECT * FROM students LIMIT 2,5"

    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields) 
  })
  */
/*
    var sql = "DELETE FROM students WHERE firstname = 'Amy'"
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log("No. of deleted record: " +result.affectedRows)
        //console.log(fields) 
    })
    */
    
    var sql = "SELECT s.id, s.firstname, c.cid ,c.coursename FROM students s, SC sc , Course c WHERE s.id = sc.id AND sc.cid = c.cid AND c.cid = 'egco427'"
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields) 
    })

    var sql = "SELECT s.firstname ,c.cid ,c.coursename FROM students s, Course c, SC sc WHERE s.firstname = 'Tom' AND s.id = sc.id AND sc.cid = c.cid" 
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields) 
    })
})