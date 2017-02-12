/**
 * Created by pc on 2017/2/12.
 */

//process.stdout -->standard output
//process.stderr -->standard error

process.stdout.write('this is stdout');
process.stderr.write('this is stderr');

process.stdin.setEncoding('utf-8');//一般用utf-8读取全文本

process.stdin.on('data',function (data) {
    console.log(data);
})

// process.stdin.on('readable',function () {
//     var data =process.stdin.read();
//     console.log(data);
// })

process.on('exit',function () {
    console.log('program will exit');
})

//SIGINT -->signal interrupted
process.on('SIGINT',function () {
    console.log('program has a sigint');
    process.exit();//必须要这行，否则无法退出，因为SIGINT改变了默认事件，原本的退出事件无效
})