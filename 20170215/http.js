/*
 *
 */
function eg1() {
    var http = require('http');
    var fs = require('fs');
    var buf = Buffer.from('hello');
    http.createServer(function (req, res) {
        res.writeHead(200,{"Content-Type":'text/plain'})
        console.log(req);
        res.end(buf);
    }).listen(8014, '127.0.0.1');
    console.log('this is a custom');
}
eg1(); //程序运行出错