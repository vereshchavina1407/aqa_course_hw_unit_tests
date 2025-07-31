/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let n = +prompt();
let strN = String(n);
strN_2 = strN+strN
strN_3 = strN+strN+strN
let result = parseInt(strN) + parseInt(strN_2) + parseInt(strN_3)
console.log(result)