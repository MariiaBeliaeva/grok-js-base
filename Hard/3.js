/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (string) => {
  let newSring = "";
  let upperLetter = string.letter(/_/g + 1).toUpperCase();
  string.replace(/_/g, "");
  newSring = string.join("");
};

module.exports = camelCase;
