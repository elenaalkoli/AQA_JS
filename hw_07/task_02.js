/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

function getCharCount(string) {
    if (!string || typeof string !== 'string') {
        console.log("Please provide a valid string");
    } else {
        const arrayFromString = string.split("");
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const result = arrayFromString.map((symbol) => {
            if (alphabet.includes(symbol.toLowerCase())) {
                const count = arrayFromString.filter((el) => el.toLowerCase() === symbol.toLowerCase()).length;
                return count;
            } else {
                return symbol;
            }
        });
        return result.join("");
    }
}

console.log(getCharCount('Engineer, qqq'));


/*
// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 
//341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942,
    3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123]

function getPricesCalcutation(array) {
    const getToral = array.reduce((result, price) => result + price, 0);// result - промеж.рез-т куда складывем, применяя к каждому элементу price действие, начиная с 0
    const getAverage = getToral / prices.length;
    return `Итого ${getToral}, средняя цена товара ${getAverage}`
}
console.log(getPricesCalcutation(prices));

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


// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными 
//   глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара.
//   Пример:
//   const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]