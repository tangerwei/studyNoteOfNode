/**
 * Created by erwei.tang on 2017/2/14.
 */
function eg1() {
    var net = require('net');
    var server = net.createServer(function (socket) {
        socket.on('data',function (data) {
            socket.write("hello");
        });
        socket.on('end',function () {
            console.log('connect end');
        })
        socket.write('hello to join node.js book');
    });
    server.listen(6666,function () {
        console.log('server bound');
    });
}
//eg1();
function eg2() {
    var net = require('net');
    var server = net.createServer();
    server.on('connection',function (socket) {
        //new connecttion
        socket.write('is that you?');
    });
    server.on('error',function () {
        console.log('error');
    })
    server.listen(8124);
}
//eg2();

function eg3() {
    var net = require('net');
    var server = net.createServer();
    server.on('connection',function (socket) {
        socket.write('is me');
        this.close(function(){
            console.log('server is alreaddy close');
        });
    });
    /*
    *server.on('close',function () {
    *   console.log('all connections of this server is close');
    *})in this way cannot handle a close event
    */
    server.listen(8124,function () {
        console.log('begin listen');
    })
}
//eg3();

function eg4(){
    var net = require('net');
    var server = net.createServer(function(socket){
        socket.write('Echo server\r\n');
        socket.pipe(socket);
    })
    server.listen(8124,'127.0.0.1');
}
//eg4();