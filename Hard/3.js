/*
Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const string = "web_development";

// const camelCase = (string) => {
//   let stringArr = string.split("_");
//   for (let i = 1; 1 < stringArr.length; i++) {
//     stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
//   }
//   return stringArr.join("");
// };

const camelCase = (string) => {
  let stringArr = string.split("_");
  for (let i = 1; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  }
  return stringArr.join("");
};

console.log(camelCase(string));

module.exports = camelCase;
