// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'].map(e => e.toLowerCase());
const myPizzas = ['4 Cheeses', "Pineapple", "Luisianian", 'diablo']

function checkCompetitorPizzas(myPizzasArray) {
    {
        if (!Array.isArray(myPizzasArray)) {
            throw new Error("Please provide a valid array")
        }
        else {
            const uniquePizzas = [];
            for (const pizza of myPizzasArray) { // для каждого элемента из массива myPizzas - of ищет по значению/in по индексу
                if (!competitorPizzas.includes(pizza.toLowerCase())) { //если искомая строка НЕ найдена в массиве ИЛИ -->
                    // if (competitorPizzas.indexOf(pizza.toLowerCase()) === -1) { //если индекса по искомой строке pizza НЕ найдено 
                    uniquePizzas.push(pizza)
                }
            }
            if (uniquePizzas.length > 0) {
                return uniquePizzas
            }
            else return null
        }
    }
}
console.log(checkCompetitorPizzas(myPizzas));


// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово 
//с наибольшим количеством букв. Если таких слов несколько - выводит их все.

function getBiggestAmountOfLetters(sentence) {
    if (!sentence || typeof sentence !== 'string') {
        console.log("Please provide a valid sentence");
    } else {
        const sentenceInArr = sentence.split(" ");
        greatestNumberOfWords = 0;
        let outputWord = [];
        for (let i = 0; i < sentenceInArr.length; i++) {
            if (sentenceInArr[i].length > greatestNumberOfWords) {
                greatestNumberOfWords = sentenceInArr[i].length;
                outputWord = [sentenceInArr[i]];  // не пушить сюда, а перезаписывать
            }
            else if (sentenceInArr[i].length === greatestNumberOfWords) {
                outputWord.push(sentenceInArr[i]) // 
            }
        }
        return outputWord;
    }
}
console.log(getBiggestAmountOfLetters('I am the greatest AQA Engineer'))

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function getUniqueValues(array) {
    if (!Array.isArray(array)) {
        throw new Error("Please provide a valid array of numbers")
    }
    else {
        let uniqueArray = [...new Set(array)]; //создаем новый массив уникальных элементов
        return uniqueArray;
    }
}
const arrNum = [1, 2, 4, 1, 1, 2, 2, 4, 5, 6]
console.log(getUniqueValues(arrNum))


// // 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkPalindrom(word) {
    if (!word || typeof word !== 'string') {
        console.log("Please provide a valid word");
    } else {
        const reversedWord = word.toLowerCase().split("").reverse().join(""); //разделили на массив, перевернули, соединили в строку без пробела
        // console.log(reversedWord)
        if (reversedWord === word.toLowerCase()) {
            return `The entered word is a palindrome`
        }
        else return `The entered word is not a palindrome`
    }
}
console.log(checkPalindrom('ABba'))


