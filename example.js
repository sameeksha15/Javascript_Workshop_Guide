console.log("script loaded");

setTimeout(() => {
  console.log("timeout 1");
}, 2000);

new Promise((resolve, reject) => {
  console.log("promise 1");
  resolve();
}).then(() => {
  console.log("promise 1 resolved");
});

setTimeout(() => {
  console.log("timeout 2");
}, 0);

console.log("script end");
