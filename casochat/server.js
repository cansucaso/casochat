/**
 * Created by caso on 22.10.2014.
 */


var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
    console.log('New req');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
// '[116,101,115,116]'

var copy = new Buffer(JSON.parse(json)); // to hex

console.log(copy);
// <Buffer 74 65 73 74>