function createLocalServer() {
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
        getData(req.url, function (data) {
            if(data === false){
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end();
                return;
            }
            var mine = require('./mine').types;
            var datatype = req.url.split('.');
            type = datatype[datatype.length - 1].toLowerCase();
            var minetype = mine[type] ? mine[type] : 'text/plain';
            res.writeHead(200, { "Content-Type": minetype});
            res.end(data);
        })
    }).listen(8014);
}
createLocalServer();//success to create a local server

function getData(url, callback) {
    var path = __dirname + '/webSiteData' + url;
    var fs = require('fs');
    //判断文件是否存在，api文档建议直接操作文件，如果错误再判断具体情况
    fs.readFile(path, function (err, data) {
        if (err) {
            console.error('readFile ' + path +' error!');
            callback(false);
            return;
        }
        callback(data);
    })
}

function serverComplete() {
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
        console.log(res);
    }).listen(8014);
}