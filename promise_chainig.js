new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // Promise resolved with the value 1    
}).then(function(result) { 
    console.log(result); // 1
    return result * 2;
}).then(function(result) { 
    console.log(result); // 2
    return result * 2;
}).then(function(result) {
    console.log(result); // 4
    return result * 2;
});

// Every call to a .then returns a new promise, so that we can call the next .then on it.