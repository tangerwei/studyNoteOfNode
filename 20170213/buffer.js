/**
 * Created by erwei.tang on 2017/2/13.
 */
var buf = new Buffer(100);
console.log(buf.length);
buf[10] = 100;
console.log(buf[10]);
function nagativebuf(a) {
    var buf = new Buffer(100);
    buf[10] = a;
    return buf[10];
}
console.log(nagativebuf(-100));//
console.log(nagativebuf(10.34));//
console.log(nagativebuf(300));
//buf must be 0 - >256