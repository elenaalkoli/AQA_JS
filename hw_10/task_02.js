// Task 2.

/*
1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
    Функция должна исполнить колбэк строго через переданное количество миллисекунд
    Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
*/

function delay(callback, ms) {
    setTimeout(callback, ms)
}

const greetings = () => console.log('Hello!')
delay(greetings, 2000)

/*
2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
*/

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('After 3 seconds'), 3000); //обернули resolve в setTimeout-метод
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('After 5 seconds'), 5000);
});

/*
// 1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
*/
Promise.all([promise1, promise2]) //промисы резолвятся в [], если хотя бы 1 эл-т придет с reject - не выполнится, т.е. нужен еще catch 
    .then((result) => {
        for (const element of result) {
            console.log(element);
        }
    });


Promise.allSettled([promise1, promise2]) // на каждый резолв отдает {} cо status и value
    .then((result) => {
        for (const element of result) {
            console.log(element);
        }
    });

/*
// 2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке.
// Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
// Вывести в консоль результат обоих промисов по очереди
*/

async function promisesHandlingAll(promise1, promise2) {
    try {
        const [promise1Result, promise2Result] = await Promise.all([promise1, promise2]); // пришедшие резолвы засунуть в [] (значение promise1 в значение ключа promise1Result)
        console.log(promise1Result);
        console.log(promise2Result);
    } catch (error) {
        console.log(`${error}`);
    }
    finally {
        console.log(`Completed in async func with Promise.all`);
    }
}
promisesHandlingAll(promise1, promise2)
// After 3 seconds
// After 5 seconds
// Completed in async func with Promise.all

async function promisesHandlingAllSettled(promise1, promise2) {
    try {
        const [promise1Result, promise2Result] = await Promise.allSettled([promise1, promise2]);
        console.log(promise1Result);
        console.log(promise2Result);
    } catch (error) {
        console.log(`${error}`);
    }
    finally {
        console.log(`Completed in async func with Promise.allSettled`);
    }
}
promisesHandlingAllSettled(promise1, promise2)
// { status: 'fulfilled', value: 'After 3 seconds' }
// { status: 'fulfilled', value: 'After 5 seconds' }
// Completed in async func with Promise.allSettled


/*
3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
*/

async function getSumOfNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (!a || !b || typeof a !== "number" || typeof b !== "number") {
            reject('Please, enter numbers')
        }
        else resolve(a + b);
    })
}
//обработка через - .then.catch
getSumOfNumbers(1, 5)
    .then(value => console.log(`Sum of two numbers - ${value}, handling from .then`))
    .catch(error => console.log(error));

//обработка в блоке try/catch (добиваемся синхронности)
async function getSumOfNumbersHandling(promise) {
    try {
        const data = await promise;
        console.log(`Sum of two numbers - ${data}, handling in try {}`)
    } catch (error) {
        console.log(error);
    }
}
getSumOfNumbersHandling(getSumOfNumbers(1, '5'));
getSumOfNumbersHandling(getSumOfNumbers(1, 9));

/*
4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos".
    Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1.
    Решить с помощью try/cath и then (обоими способами)
*/

//обработка через - .then.catch
const URL = 'https://jsonplaceholder.typicode.com/todos';

const userId = 1;
fetch(URL)
    .then(data => data.json())
    .then(object => console.log(object.filter((object) => object.userId === userId)))
    .catch(error => console.log(error));


//обработка в блоке try/catch
async function getObjectsById(url, userId) {
    let info = [];
    try {
        const data = await fetch(url);
        info = await data.json();
        if (!data.ok) {
            throw new Error(`Response status code: ${response.status}`);
        }
    } catch (error) {
        console.log(error);
    }
    if (info.length === 0) {
        return;
    } else
        console.log(info.filter((object) => object.userId === userId));
}
getObjectsById(URL, 1);