"use strict";

//1. Преобразовать Task 1 через switch

const MinAge = 18;
const MaxAge = 60;
let age = '23';

// switch (true) {
//     case age < MinAge:
//         console.log(`You don't have access cause your age is ${age}, it is less then ${MinAge}`)
//         break
//     case age >= MinAge && age <= MaxAge:
//         console.log(`Welcome!`)
//         break
//     case age > MaxAge:
//         console.log(`Keep calm and watch Culture channel!`)

//         break
//     default: console.log(`Technical work`)
// }

//2. Преобразовать код так, чтобы проверялся сначала тип данных, если не Number то кидалась ошибка в консоль
// 17, 18, 61, '2', 'aaa'

// if (typeof age !== 'number') {
//     console.log(`Please enter a number, your input is ${typeof age}`)
// }
// else if (age < MinAge) {
//     console.log(`You don't have access cause your age is ${age}, it is less then ${MinAge}`)
// }
// else if (age >= MinAge && age <= MaxAge) {
//     console.log(`Welcome!`)
// }
// else if (age > MaxAge) {
//     console.log(`Keep calm and watch Culture channel!`)
// }
// else console.log(`Technical work`)


//3. Преобразовать задание 2 таким образом чтобы строка в которой лежат только цифры пропускалась, преобразовываясь в Number

if (isNaN(age)) {
    console.log('Please enter a number')
}
else {
    if (age < MinAge) {
        console.log(`You don't have access cause your age is ${age}, it is less then ${MinAge}`)
    }
    if (age >= MinAge && age <= MaxAge) {
        console.log(`Welcome!`)
    }
    if (age > MaxAge) {
        console.log(`Keep calm and watch Culture channel!`)
    }
}
// console.log(isNaN(parseInt(age)))

