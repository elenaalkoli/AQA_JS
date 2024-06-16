/*
// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом,
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении.
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

// function checkString(string) {
//     if (!string || typeof name !== "string") {
//         throw new Error("Please provide a valid string")
//     }
//     else {
//         let stringToArray = string.toLowerCase.split('');
//         const calculatedArray = stringToArray.map(letter, index, array) => {
//             if letter[i].has
//         })
//     }
// }

/*
// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 
//341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942,
    3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123]

function getPricesCalcutation(getTotalPrice, getAveragePrice) {
    return `Итого ${getTotalPrice}, средняя цена товара ${getAveragePrice}`
}
const getTotalPrice = prices.reduce((result, price) => result + price, 0)
// result - промеж.рез-т куда складывем, применяя к каждому элементу price действие, начиная с 0
const getAveragePrice = getTotalPrice / prices.length;
console.log(getPricesCalcutation(getTotalPrice, getAveragePrice));

/*
// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: 
//количество гласных букв.Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/
const arr = ['I', 'am', 'the', 'coolest', 'AQA', 'Engineer', 'ever'];
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length; //regex that will match any vowel, the i flag makes it case-insensitive
    // and the g flag stands for "global" or in other words "don't stop after the first match".
}
function getSortedArrayByVowels(arr) {
    return arr.sort((a, b) => getCount(a) - getCount(b)) //сортировка по возрастанию ИЛИ const getSortedArrayByVowels = arr => arr.sort((a, b) => getCount(a) - getCount(b));
}
console.log(getSortedArrayByVowels(arr))

// var resultOfStringMatch = "The quick brown fox jumps over the lazy dog".match(/[aeiou]/ig);
// console.log(resultOfStringMatch)


// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными 
//   глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара.
//   Пример:
//   const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]