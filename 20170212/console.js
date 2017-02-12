/**
 * Created by pc on 2017/2/12.
 */
console.log('this is a log');
console.info('this is an info');
//上面两个可以文件重定向到文件中
console.warn('this is a warn');
console.error('this is an error');

console.time('test');
for (var i = 0;i<1000000;i++){}
console.timeEnd('test');