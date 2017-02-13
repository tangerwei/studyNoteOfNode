/**
 * Created by erwei.tang on 2017/2/13.
 */
var http = require('http');
var hello = "";
for(var i = 0;i<1024 * 10;i++){
    hello +="a";
}
hello = Buffer.from(hello);
http.createServer(function (req,res) {
    res.writeHead(200);
    res.end(hello);
}).listen(8001);