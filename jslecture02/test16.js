//Expression function

//Named function expression
let data1 = function() {
    console.log(11111);
}

//Anonymous function expression
let data2 = function(n1, n2) {
    console.log(n1 + n2);
    return `noooooooo`
}

data1()
console.log(data2(10, 20));
data1 = 'test'
