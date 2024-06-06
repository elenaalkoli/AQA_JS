/* 
Task 2.
1. Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

2. Сделать из "*" в консоли равнобедренный треугольник и ромб

3.  Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer
*/


//2.1 
// let enteredBites = '10862';
// let enteredBitesNum = Number(enteredBites);
// let counter = 0;
// if (!enteredBitesNum || typeof enteredBitesNum !== "number" || isNaN(enteredBitesNum)) {
//     console.log(`Please provide a valid number`)
// }
// else {
//     while (enteredBitesNum > 1024) {
//         enteredBitesNum = enteredBitesNum / 1024;
//         counter++;
//     }
//     switch (counter) {
//         case (0): {
//             console.log(`${enteredBitesNum} bytes`);
//             break;
//         }
//         case (1): {
//             console.log(`${enteredBitesNum.toFixed(1)} Kb`);
//             break; x
//         }
//         case (2): {
//             console.log(`${enteredBitesNum.toFixed(1)} Mb`);
//             break;
//         }
//         case (3): {
//             console.log(`${enteredBitesNum.toFixed(1)} Gb`);
//             break;
//         }
//         case (4): {
//             console.log(`${enteredBitesNum.toFixed(1)} Tb`);
//             break;
//         }
//     }
// }

// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб
//треугольник

// let symbol = "";
// const rows = 5;
// let space = "";;
// for (let i = 0; i < rows; i++) {
//   symbol = "*".repeat(i * 2 + 1);  //1-3-5 и тд звезд в след строке по i++
//   space = "-".repeat(rows - i) // 5-4-3 
//   console.log(space + symbol + space)
// }

//ромб
// let symbol = "";
// const rows = 5;
// let space = "";;
// for (let i = 0; i < rows; i++) {
//   symbol = "*".repeat(i * 2 + 1);
//   space = "-".repeat(rows - i)
//   console.log(space + symbol + space)
// }
// for (let i = rows - 1; i >= 0; i--) { //
//   symbol = "*".repeat(i * 2 + 1);
//   space = "-".repeat(rows - i)
//   console.log(space + symbol + space)
// }

// 3. 
// for (let i = 1; i <= 100; i++) {
//   if (!(i % 3) && !(i % 5)) { // if true && true (или можно !(i % 15) сразу)
//     console.log(`${i} is devided on 3 and 5 without a remainder`)
//   } else console.log(i)
// }

// 4. --> to camelCase I am super engineer => iAmSuperEngineer
// let input = "I am super QA engineer"
// let inputInCamelCase = input.split("")
// // console.log(inputInCamelCase)
// inputInCamelCase.forEach(letter) => {
//   if (inputInCamelCase(letter) == " ") {
//     inputInCamelCase[letter].replace(" ", "")
//   }
//   else console.log(inputInCamelCase = input[0].toLowerCase() + input.slice(1, input.length).toLowerCase().replace(" ", ""))

//   inputInCamelCase(letter) = "";
// }

// 4. --> to camelCase I am super engineer => iAmSuperEngineer
const input = "I am super QA engineer" // 1- пройти циклом по всем эл-там массива, отсекаем 0 элемент и пробел, остальное все к нижнему
let inputInCamelCase = '';
if (!input || typeof input !== "string") {
  console.log('Please provide a valid string')
} else {
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      inputInCamelCase += input[i].toLowerCase();
    }
    else if (input[i] === ' ') {
      inputInCamelCase += input[i + 1].toUpperCase();
      i++;//переходим к след элементу
    }
    else
      inputInCamelCase += input[i].toLowerCase()
  }
}
console.log(inputInCamelCase);
