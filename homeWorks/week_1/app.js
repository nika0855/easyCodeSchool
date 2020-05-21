//Сделать первую и последнию буквы строки в верхнем регистре

let string = 'some test string';

let newString = string[0].toUpperCase() + string.slice(1, -1) 
+ string[string.length - 1].toUpperCase();

console.log(newString);
//найти положение слова 'string' в строке

let value = string.indexOf('string');// 10

console.log(value);
//Найти положение второго пробела в строке

let value2 = string.lastIndexOf(" "); //9

console.log(value2);
//Получить строку с 5-го по 9-й символы.

let value3 = string.slice(5, 9);

console.log(value3); // test
//Получить число pi из Math и округлить его до 2-х знаков после точки.

num1 = (Math.PI).toFixed(2);

console.log(num1);
/*Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51.*/

num2 = Math.max(15, 11, 16, 12, 51, 12, 51, 12, 13, 51);

console.log(num2);
num3 = Math.min(15, 11, 16, 12, 51, 12, 51, 12, 13, 51);

console.log(num3);
//Получить случайное число и округлить его до двух цифр после запятой.

num4 = (Math.random()).toFixed(2);

console.log(num4);
//Получить случайное целое число от 0 до X. X - любое произвольное число.

num5 = (Math.random() * 10).toFixed(1);

console.log(num5);
//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

num6 = ( 0.6 * 100 + 0.7 * 100 ) / 100;

console.log(num6);
//Object

const users = {
  product: 'iPhone',
  details: {},
}

users.price = 1000;
users.currensy = 'dollar';

users['details']['model'] = '36';
users['details']['color'] = 'green';

console.log(users);