//Connect data
let data1 = 10
let data2 = 'hi'
console.log(data1 + ' Ah ' + data2); //10 Ah hi
console.log(data1, 'wow', data2); //10 wow hi
console.log(`${data1} Hello ${data2} ${10*20}`); //10 Hello hi

console.log('--------------------');

//break, continue in loop
for( let i = 1; i <= 10; i++ ){
    if( i == 5 ){
        break; //exit from loop
    }
    console.log(i);
}

for( let j = 1; j <= 10; j++ ){
    if( j == 5 ){
        continue; //skip current iteration
    }
    console.log(j);
}

console.log('--------------------');