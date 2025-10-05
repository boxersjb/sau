//Loop and object
let obj = {
    name : 'Sombat',
    age : 20,
    isStudent : true,
    address : {
        province : 'Korat',
        contry : 'Thailand'
    },
    food: ['KFC', 'Pizza', 'Buger']
}

console.log(obj.age); //20
console.log(obj.address.province);
console.log(obj.food[1]); //Pizza
obj.address.contry = 'USA'
console.log(obj.address.contry); //USA
console.log('====================');
console.log(obj);


for(let key in obj) {
    console.log(key);
}
console.log('====================');

for(let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
console.log('====================');

for(let value of Object.values(obj)) {
    console.log(value);
}
console.log('====================');

for(let key of Object.keys(obj)) {
    console.log(key);
}
console.log('====================');