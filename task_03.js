// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), 
// и выводит сумму равную n + nn + nnn, где n не перемножаются, а конкатенируются


let n = 3;
if (Number.isInteger(n) && n >= 1 && n <= 9) {
    sum = n + (Number(String(n) * n)) + Number(String(n) * n * n)
    console.log(sum)
}
else {
    console.log('Enter an integer from 1 to 9')
}