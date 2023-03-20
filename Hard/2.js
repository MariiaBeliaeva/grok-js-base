/*
Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'
*/

const longestString = (array) => {
  if (array.length === 0) {
    return null;
  } else {
    array.sort(function (a, b) {
      return b.length - a.length;
    });
    return array[0];
  }
};

module.exports = longestString;
