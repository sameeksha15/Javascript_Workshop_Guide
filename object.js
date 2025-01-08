let obj = {
    name: "John",
    age: 25,
    city: "New York"
};

// keys
console.log(`keys: ${Object.keys(obj)}`);

// values
console.log(`values: ${Object.values(obj)}`);

// entries
console.log(`entries: ${Object.entries(obj)}`);

// assign
let obj1 = {
    name: "John"
};

let obj2 = {
    age: 25
};

let assignObj = Object.assign(obj1, obj2);
console.log(`obj1: ${Object.entries(obj1)}`);

// freeze
let freezeObj = Object.freeze(obj);
obj.name = "Doe";
console.log(`freezeObj: ${Object.entries(freezeObj)}`);
console.log(`obj: ${Object.entries(obj)}`);

// hasOwnProperty
let hasOwn = obj.hasOwnProperty("name");
console.log(`hasOwn: ${hasOwn}`);

// ...spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArr = [...arr1, ...arr2];
console.log(`combinedArr: ${combinedArr}`);

let newObj = { x: 1, y: 2, z: 3 };
let newObj2 = { a: 4, b: 5, c: 6 };

let combinedObj = { ...newObj, ...newObj2 };
console.log(`combinedObj: ${JSON.stringify(combinedObj)}`);


// destructuring
let arr3 = [1, 2, 3];
let [first, second, third] = arr3;
console.log(`first: ${first}`);
console.log(`second: ${second}`);
console.log(`third: ${third}`);

let obj3 = { x: 1, y: 2, z: 3 };
let { x, y, z } = obj3;

console.log(`x: ${x}`);
console.log(`y: ${y}`);
console.log(`z: ${z}`);

// objects passed as refernces
let obj7 = { x: 1, y: 2, z: 3 };
let obj8 = obj7;

obj8.x = 10;
console.log(`obj7: ${JSON.stringify(obj7)}`);
console.log(`obj8: ${JSON.stringify(obj8)}`);

// deep copy
let obj11 = { x: 1, y: 2, z: 3 };

// using structuredClone
let obj13 = structuredClone(obj11);

obj13.x = 10;
console.log(`obj11: ${JSON.stringify(obj11)}`);
console.log(`obj13: ${JSON.stringify(obj13)}`);