let string = "I am a string";

// length
console.log(`string length: ${string.length}`);

// charAt
console.log(`charAt: ${string.charAt(0)}`);

// charCodeAt
console.log(`charCodeAt: ${string.charCodeAt(0)}`);

// indexOf
console.log(`indexOf: ${string.indexOf("a")}`);

// lastIndexOf
console.log(`lastIndexOf: ${string.lastIndexOf("a")}`);

// includes
console.log(`includes: ${string.includes("a")}`);

// startsWith
console.log(`startsWith: ${string.startsWith("I")}`);

// endsWith
console.log(`endsWith: ${string.endsWith("g")}`);

// toUpperCase
console.log(`toUpperCase: ${string.toUpperCase()}`);

// toLowerCase
console.log(`toLowerCase: ${string.toLowerCase()}`);

// split
let splitStr = string.split(" ");

console.log(`splitStr: ${splitStr}`);

// slice
let sliceStr = string.slice(2, 5);
console.log(`sliceStr: ${sliceStr}`);

// substring
let substringStr = string.substring(2, 5);
console.log(`substringStr: ${substringStr}`);

// replace
let replaceStr = string.replace("a", "b");
console.log(`replaceStr: ${replaceStr}`);

// repeat
let repeatStr = string.repeat(2);
console.log(`repeatStr: ${repeatStr}`);

// trim
let trimStr = "  I am a string  ";
console.log(`trimStr: ${trimStr.trim()}`);

// search
let searchStr = string.search("a");
console.log(`searchStr: ${searchStr}`);