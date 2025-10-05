//4. has paramiter has return
function sumNumber(a, b) {
    return a + b
}

function showHelloAndBye(fname, lname) {
    console.log(`hello ${fname} ${lname}`);
    return `bye ${fname} ${lname}`
}

console.log(`10+20= ${sumNumber(10,20)}`);

console.log(showHelloAndBye('Sombat', 'Jaidee'));