/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

module.exports = logEachLetter;
