/**
 * Created by erwei.tang on 2017/2/13.
 */
function eg1() {
    console.log('eg 1:');
    var fs = require('fs');
    var rs = fs.createReadStream('test.md');
    var data = '';
    rs.on('data',function (chunk) {
        data +=  chunk;
    });
    rs.on('end',function () {
        console.log(data)
    });
}
//eg1();
function eg2() {
    console.log('eg 2:');
    var fs = require('fs');
    var rs = fs.createReadStream('test.md',{highWaterMark:11});
    var data = '';
    rs.on('data',function (chunk) {
        data +=  chunk;
    });
    rs.on('end',function () {
        console.log(data)
    });
}
//eg2();

function eg3() {
    console.log('eg 3:');
    var fs = require('fs');
    var rs = fs.createReadStream('test.md',{highWaterMark:11});
    rs.setEncoding('utf8');
    var data = '';
    rs.on('data',function (chunk) {
        data += chunk;
    })
    rs.on('end',function () {
        console.log(data);
    })
}

function rightEg() {
    var chunks = [];
    var size = 0;
    var fs = require('fs');
    var iconv = require('iconv-lite');
    var res = fs.createReadStream('test.md',{highWaterMark:11});
    res.on('data',function (chunk) {
        chunks.push(chunk);
        size +=chunk.length;
    });
    res.on('end',function () {
        var buf = Buffer.concat(chunks,size);
        var str = iconv.decode(buf,'utf8');
        console.log(str);
    })
}
//rightEg();this example  need to install icon-lite module,you can install by npm install iconc-lite to solve this