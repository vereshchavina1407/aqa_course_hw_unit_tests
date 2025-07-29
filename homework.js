const item_1 = 5
console.log(item_1)
const item_2 = 3
console.log(item_2)
const item_3 = item_1 + item_2
console.log(item_3)
const item_4 = "Hello World"
console.log(item_4)
const item_5 = item_3
let item_6
let item_6_type
item_6 = 15
item_6_type = typeof(item_6)
console.log("item_6 == " + item_6, "item_6 == " + item_6_type)
let item_7 = String(item_6)
let item_7_type = typeof(item_7)
console.log("item_7 == " + item_7, "item_7 == " + item_7_type)

//Task 2

let n = +prompt();
let strN = String(n);
strN_2 = strN+strN
strN_3 = strN+strN+strN
let result = parseInt(strN) + parseInt(strN_2) + parseInt(strN_3)
console.log(result)x