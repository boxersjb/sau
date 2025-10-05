//Loop with Array
let arr = [
    10, 
    "Jaidee", 
    true, 
    {id: 1, name: "Deemark"}, 
    [50, 60, 70]
]

console.log(arr[1]); //Jaidee
console.log(arr[4][1]); //60
console.log(arr[3].name); //Jaidee

arr.forEach((test, index) => {
    console.log(test, index);
}); 
console.log('====================');

arr.map((test, index) => {
    console.log(test, index);
});
console.log('====================');

for(let test of arr) {
    console.log(test);
}
console.log('====================');

for(let index in arr) {
    console.log(arr[index]);
}
console.log('====================');