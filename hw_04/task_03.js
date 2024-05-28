//Преобразовать Task2* таким образом, чтобы age принимался через prompt в привязанной верстке, а результат выводился в alert
// const prompt = require('prompt-sync')();

const age = prompt('Enter your age')
const MinAge = 18;
const MaxAge = 60;

if (isNaN(age)) {
    alert('Please enter a number')
}
else
    if (age < MinAge) {
        alert(`You don't have access cause your age is ${age}, it is less then ${MinAge}`)
    }
    else {
        if
            (age >= MinAge && age <= MaxAge) {
            alert(`Welcome!`)
        }
        if (age > MaxAge) {
            alert(`Keep calm and watch Culture channel!`)
        }
    }