// const asyncFunc = async() => {

// }

// const test = asyncFunc(); // Returns a Promise
// console.log(test); 


// // Example 1
// const promiseFunction = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(response => response.json()) // First `.then` to process the response
//         .then(data => {
//             console.log(data); // Second `.then` to handle the data
//         })
//         .catch(error => {
//             console.error('Error:', error); // `.catch` to handle any errors
//         });
// };
// promiseFunction();




const asyncFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
  	console.log(data);
}
asyncFunction();


// Asynchronous nature
const asyncFunc1 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    return data;
}

console.log(1);
console.log(2);

asyncFunc1().then(data => console.log(data));

console.log(3);
console.log(4);