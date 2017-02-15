/**
 * Created by erwei.tang on 2017/2/14.
 */
var net = require('net');
var server = net.createServer();
server.on('connection',function(socket){
    socket.write('hello');
    // socket.on('data',function(){
    //     console.log('hello data');
    // });
    // socket.on('drain',function(){
    //     console.log('drain');//只有当写入write事件返回值为false才会执行，一般用于上传限流
    // });
});

server.listen(8014,function(){
    console.log('listen success');
})