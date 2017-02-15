/*
 *
 */
function eg1() {
    var http = require('http');
    var fs = require('fs');
    http.createServer(function (req, res) {
        fs.readFile('./http.html', "binary", function (err, file) {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end(err);
            } else {
                var contentType = "text/html";
                res.writeHead(200, {
                    'Content-Type': contentType
                });
                res.write(file, "binary");
                res.end();
            }
        });
        res.end();
    }).listen(8014, '127.0.0.1');
    console.log('this is a custom');
}
//eg1(); 程序运行出错