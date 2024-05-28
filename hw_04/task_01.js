"use strict";

// 1. Создать переменную "MinAge"  и присвоить ей значение 18
// 2. Создать переменную "MaxAge"  и присвоить ей значение 60
// 3. Создать переменную "age_3"  и присвоить ей значение 60
const MinAge = 18;
const MaxAge = 60;
let age = 0;


if (age < MinAge) {
    console.log(`You don't have access cause your age is ${age}, it is less then ${MinAge}`)
}
else if (age >= MinAge && age <= MaxAge) {
    console.log(`Welcome!`)
}
else if (age > MaxAge) {
    console.log(`Keep calm and watch Culture channel!`)
}
else console.log(`Technical work`)