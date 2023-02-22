// Es Module 到处内容，CommonJs 导入内容
const math = require('./js/math.js');
// CommonJs导出内容，ES Module导入内容
import format from './js/format.js';

console.log(math.mul(20, 30));
console.log(math.sum(20, 30));

console.log(format.dateFormat('aaa'));
console.log(format.dateFormat('bbb'));