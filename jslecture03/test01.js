const sau01 = require('dti-wow.js')
const {displayHey, total} = require('dti-woo.js')

console.log(sau01.data1);
console.log(sau01.data2);

sau01.data1 = 'hello'
console.log(sau01.data1);

console.log(sau01.sum(10, 20)); //arguments

displayHey()
console.log(total(10, 20));