//Call back function

function showHello(){
    console.log("Hello");
}

const hi = () => {
    return "hi"
}

function wow(n1, n2, n3,n4){
console.log('----------------');
console.log(n1);
n2()
console.log(n3());
console.log('----------------');
}

wow('test', showHello, hi, () => {console.log('ohhhhhhh')});