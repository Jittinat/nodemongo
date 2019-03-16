//var http=require('http');
//http.createServer(function(request, response)
//{

//response.writeHead(200,{'Content-Type':'text/plain'});

//response.end('Hello World\n');
//}).listen(8081);
//console.log('Server running at http://127.0.0.1:8081/');
//////////

//////////
//var circle = require('./circle.js');
//var pi = Math.PI;
//console.log(circle.pi);
//console.log(circle.add(1,2));
//////////


///////////
//var util = require('util');
//var fs = require('fs');
/*
function readFile(str, callback){
    var lines =[];
    fs.readFile(str, function (err, data) {
        if (err) throw err; 
        lines.push(data); 
        console.log(data.toString());
    });
   callback(lines);
}

var a, b;
readFile('./20.txt', function(data){
    a= data;
}); 

readFile('./10.txt',function(data){
    b= data;
}); */
//util.log("a -- "+a);
//util.log("b -- " +b);
/////////

////////
/*
var assert = require('assert');
function add(a, b) {
return a+b;
}
var expected = add(1,2);
assert( expected=== 4,'one plus two is three');
*/
/////////

////////
/*
buf = new Buffer(10);
buf.write("abcdefghj","ascii");
//console.log(buf.toString('base64'));
buf = buf.slice(0,5);
console.log(buf.toString('utf8'));
*/
////////

///////

//////////
/*
var crypto=require('crypto');
var fs=require('fs');
var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('file.txt');
s.on('data',function(d) {
shasum.update(d);
});
s.on('end',function() {
var d = shasum.digest('hex');
console.log(d+' file.txt');
});*/
//////////////

///////////
/*
var dns = require('dns');
dns.lookup('www.google.com', function
onLookup(err,addresses, family) {
console.log('addresses:', addresses);
});
*/
//////////

///////////

var fs=require('fs')
var readMe = fs.readFileSync('./user.txt','utf8')
console.log(readMe)

var words = readMe.split('\n');
console.log(words[0].toString('utf8'));
console.log(words[1].toString('utf8'));

var buf1 = new Buffer(words[0])
//buf1.write(words[0],"ascii");
console.log(buf1.toString('base64'));

var crypto=require('crypto');
var fs=require('fs');
var shasum = crypto.createHash('sha1');

shasum.update(words[1]);
words[1] = shasum.digest('hex');
var buf2 = new Buffer(words[1])

fs.mkdir('Data', function(){
      fs.writeFileSync('./Data/Output.txt', readMe + '\n' + buf1.toString('base64') +'\n' +buf2 )
      })

// dikw,ufio