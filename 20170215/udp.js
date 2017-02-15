function udpServer() {
    var dgram = require('dgram');
    var server = dgram.createSocket('udp4');
    server.on('message', function (msg, rinfo) {
        console.log('server got: ' + msg + ' from ' + rinfo.address + ':' + rinfo.port);
    });
    server.on('listening', function () {
        var address = server.address();
        console.log('server listening ' + address.address + ':' + address.port);
    });
    server.on('close', function () {
        console.log('server close');
    })
    server.bind(41234);
}
function updClient() {
    var dgram = require('dgram');
    var message = Buffer.from('这是 upd 客户端');
    var client = dgram.createSocket('udp4');
    // client.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
    //     client.close();
    // })//可以使用
    client.send(message, 41234, 'localhost', function (err, bytes) {
        client.close();//注意send函数的调用参数中port和address都是指server的
    });
}
//udpServer();
//updClient();