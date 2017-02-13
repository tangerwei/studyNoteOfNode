/**
 * Created by erwei.tang on 2017/2/13.
 */
var a = 'this is just a string';
var b = new Buffer(a,'utf-8');
var c = new Buffer(a);
// console.log(b);
// console.log(c);

//all of above is dispatched,
//because these are not safe,and we could use Buffer.from ,Buffer.alloc and Buffer.allocUnsafe replace
//now
const _b = Buffer.alloc(10);
const _c = Buffer.alloc(10,1);
// console.log(_b);
// console.log(_c);
const _d = Buffer.allocUnsafe(10);//this _d might have old data,should write again
// console.log(_d);

var arr = [1,2,3,4,5,10];
var buf = Buffer.from(arr);
console.log(buf);
console.log(buf.toString());

var st = 'this is just a strings ';
var stbuf = Buffer.from(st,'Base64');
console.log(stbuf);
console.log(stbuf.toString('Base64'));
// there is some charset lost at the end of string

var stbuf2 = Buffer.from(st);
console.log(stbuf2);
console.log(stbuf2.toString());
//default encode is utf-8 and this is not lose anything

console.log(Buffer.isEncoding('gbk'));
//this function is used to see if the node approve the encode