let arr = [1, 2, 3, 4, 5];

// map
let newArr = arr.map((value) => {
    return value * 2;
});
console.log(`newArr: ${newArr}`);
console.log(`arr: ${arr}`);

// filter
let evenArr = arr.filter((value) => {
    return value % 2 === 0;
});

console.log(`evenArr: ${evenArr}`);

// some
let isSomeEven = arr.some((value) => {
    return value > 7;
});

console.log(`isSomeEven: ${isSomeEven}`);

// every
let isEveryEven = arr.every((value) => {
    return value % 2 === 0;
});

console.log(`isEveryEven: ${isEveryEven}`);

// indexOf
let indexOf = arr.indexOf(3); // 1 3 4 3
console.log(`indexOf: ${indexOf}`);

// lastIndexOf
let lastIndexOf = arr.lastIndexOf(3); 
console.log(`lastIndexOf: ${lastIndexOf}`);

// slice
let sliceArr = arr.slice(1, 3);
console.log(`sliceArr: ${sliceArr}`);

// splice
let spliceArr = arr.splice(1, 3);
console.log(`spliceArr: ${spliceArr}`);

console.log(`arr: ${arr}`);

// concat
let concatArr = arr.concat([10, 20, 30]);
console.log(`concatArr: ${concatArr}`);

// reverse
let reverseArr = arr.reverse();
console.log(`reverseArr: ${reverseArr}`);

// join
let joinArr = arr.join("-");
console.log(`joinArr: ${joinArr}`);

// split
let splitArr = joinArr.split("-");
console.log(`splitArr: ${splitArr}`);

// push
arr.push(10);
console.log(`arr: ${arr}`);

// pop
arr.pop();
console.log(`arr: ${arr}`);

// unshift
arr.unshift(10);
console.log(`arr: ${arr}`);

// shift
arr.shift();
console.log(`arr: ${arr}`);

// delete
delete arr[1];

console.log(`arr: ${arr}`);

