window.promises = [];
let promises = [
  new Promise((resolve) => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5 + 1)),
  new Promise((resolve) => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5 + 1)),
  new Promise((resolve) => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5 + 1)),
  new Promise((resolve) => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5 + 1)),
  new Promise((resolve) => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5 + 1))
];

Promise.any(promises).then(result => {
  document.getElementById('output').innerHTML = result;
});
// Do not change the code above this
// add your promises to the array `promises`
