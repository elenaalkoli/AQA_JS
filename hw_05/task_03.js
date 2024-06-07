// Task 3
// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = 'Engineer';
const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G',
    'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
let vowelsInWord = '';
let consonantsInWord = '';
// console.log(vowels.map(e => e.toUpperCase()));
// console.log(consonants.map(e => e.toUpperCase()));
if (!word || typeof word !== "string" || !isNaN(word)) {
    console.log('Please provide a valid string')
} else {
    let wordInArray = word.split('');
    for (i = 0; i <= wordInArray.length; i++) {
        if (vowels.includes(wordInArray[i])) {
            vowelsInWord++;
        }
        if (consonants.includes(wordInArray[i])) {
            consonantsInWord++;
        }
    }
    console.log(`${word} contains ${vowelsInWord} vowels and ${consonantsInWord} consonants`)
}

// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

const message = 'AbC'; // 
const offset = +1;
// const messageInLowerCase = [...message.toLowerCase()] //то же самое => message.toLowerCase().split('') 
// const engAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
let result = '';
if (!message || typeof message !== "string") {
    console.log('Please provide a valid string')
}
else {
    for (let i = 0; i < message.length; i++) {
        let codeOfSymbol = message.charCodeAt(i) //получаю юникод каждого символа
        codeOfSymbol = codeOfSymbol + offset
        result += String.fromCharCode(codeOfSymbol) //обратно
    }
    console.log(result)
}
