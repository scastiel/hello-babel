// src/client/app.js
var o1 = { a: 1, b: 2 };
var o2 = { b: 3, c: 4 };
var o3 = Object.assign({}, o1, o2); // put o1 and o2 properties into a new object o3
document.getElementById('result').innerHTML = JSON.stringify(o3);
