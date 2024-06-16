// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function checkSumOfDigits(number) {
    if (!number || typeof number !== 'number') {
        throw new Error("Please provide a valid number")
    }
    else {
        const numberToArray = number.toString().split(''); //в строку и в массив для перебора
        // console.log(numberToArray)
        let sum = 0;

        for (num of numberToArray) {
            sum += Number(num)
        }
        if (sum < 10) {
            return sum
        }
        else return checkSumOfDigits(sum) // снова выполнит ту же проверку но уже с sum 
    }
}
console.log(checkSumOfDigits(100019))

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d