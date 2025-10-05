//arrow function
let data1 = () => {
    console.log(11111);
}

const data2 = (n1, n2) => {
    console.log(n1 + n2);
    return `noooooooo`
}

data1()
console.log(data2(10, 20));
data1 = 'test'
console.log(data1);

console.log('--------------------');

let info1 = param1 => {
    console.log(param1);
}

let info2 = param1 => console.log('param1');

let info3 = () =>{
    return 'hello'
}

let info4 = () => 'hello'