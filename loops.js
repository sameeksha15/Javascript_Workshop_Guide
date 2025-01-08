let arr = [1, 2, 3, 4, 5];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log("------------");
// for in loop
for (let index in arr) {
    console.log(arr[index]);
}

console.log("------------");
// for of loop
for (let value of arr) {
    console.log(value);
}
