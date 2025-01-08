/*Syntax

const promise = new Promise((resolve, reject) => {
    // Condition to resolve or reject the promise
  });

*/ 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sum = 4 + 5;
        resolve(sum);
    }, 2000);
});
  

// To get the result of the successful promise execution
promise.then((result) => { //The promise will return back the value passed to the resolve function 
    console.log(result); 
});
// The promise will return back the value passed to the resolve function which we can collect using the .then handler.



// If the operation is not successful
const newPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const sum = 4 + 5 + 'a';
        if(isNaN(sum)) {
            reject('Error while calculating sum.');
        } else {
            resolve(sum);
        }
    }, 2000);
});
   
// newPromise.then((result) => {
//     console.log(result);
// });


// To catch the error and avoid abrut termination, we need to register another callback using .catch
newPromise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});






// // Example of setTimeout
// console.log('fired first');
// console.log('fired second');

// setTimeout(()=>{
//     console.log('fired third');
// },2000);

// console.log('fired last');
