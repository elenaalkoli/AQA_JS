// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo.
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним

console.log("-------------------task_2.1-------------------")
type TGrade = "junior" | "middle" | "senior" | "lead";

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: TGrade; //значение из типа TGrade
    occupation: OCCUPATION;
    address?: IAddress; //необязательное поле, значение из интерфейса 
    projectNames: string[];
}

enum OCCUPATION {
    DEVELOPER = "Developer",
    QA = "QA Engineer",
    DESINGER = "UI/UX Desinger",
}

interface IAddress {
    country: string;
    street: string;
    house: number;
    flat: number;
}
interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    address?: IAddress;
}

function isItEmployee(employee: ItEmployee | IEmployee): employee is ItEmployee {
    return ('occupation' in employee);
}

function getEmployeeInfo(employee: ItEmployee | IEmployee) { //объект будет создан на основе одного из интерфейсов
    if (isItEmployee(employee)) {
        console.log(`IT-Employee ${employee.name} ${employee.surname}, 
            salary - ${employee.salary}$, 
            address - ${employee.address?.country}, ${employee.address?.street}, ${employee.address?.house} ap. ${employee.address?.flat}
            grade - ${employee.grade},  
            occupation - ${employee.occupation},  
            projects - ${employee.projectNames}.`)
    } else
        console.log(`Employee - ${employee.name} ${employee.surname}, 
        salary - ${employee.salary}$, 
        address - ${employee.address?.country}, ${employee.address?.street}, ${employee.address?.house} ap. ${employee.address?.flat}`);

}

const ItEmployee: ItEmployee = {
    name: 'Elena',
    surname: 'Al-Koli',
    salary: 2500,
    grade: 'junior',
    occupation: OCCUPATION.QA,
    projectNames: ['3dGame', 'MerchStore'],
    address: { country: "Russia", street: "Nevskiy prospect", house: 32, flat: 1 },
};

const Imployee: IEmployee = {
    name: 'Elena',
    surname: 'Al-Koli',
    salary: 2500,
    address: { country: "Russia", street: "Nevskiy prospect", house: 32, flat: 1 },
};

getEmployeeInfo(ItEmployee);
getEmployeeInfo(Imployee);

// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.
console.log("-------------------task_2.2-------------------")

type TObjects = { [key: string]: string | number | boolean }; //объект или массив объектов

interface IValueTypes {
  string: number;
  number: number;
  boolean: number;
}

function CountValueTypes(input: TObjects | TObjects[]): IValueTypes {
  const result: IValueTypes = {    //объект куда будем складывать каунты
    string: 0,
    number: 0,
    boolean: 0,
  };

  function countTypes(input: TObjects) {
    for (const key in input) {   //если придет объект - каунтер просто по ключам объекта
      const value = input[key]; //simpleObject[name]
      if (typeof value === "string") { //или через switch (typeof value) - и дальше все кейсы + дефолт
        result.string += 1;
      } else if (typeof value === "number") {
        result.number += 1;
      } else if (typeof value === "boolean") {
        result.boolean += 1;
      }
    }
  }

  if (Array.isArray(input)) {
    //если придет массив объектов, то каунтер по каждому эл-ту []
    for (const el of input) {
      countTypes(el);
    }
  }else {
    countTypes(input); //если это не [], то нужно довыполнить все равно ф-цию, иначе в result будут 0
  }
  return result;
}

const simpleObject: TObjects = {
  // string: 2, number: 1, boolean: 1
  name: "Elena",
  surname: "Al-Koli",
  salary: 2500,
  grade: false,
};

const arrayOfObjects: TObjects[] = [
  //string: 5, number: 2, boolean: 1
  {
    name: "Elena",
    surname: "Al-Koli",
    salary: 2500,
    grade: "junior",
  },
  {
    name: "Marat",
    surname: "Al-Koli",
    salary: 0,
    grade: false,
  },
];
console.log(CountValueTypes(simpleObject));
console.log(CountValueTypes(arrayOfObjects));

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
//     который будет использоваться для проверки каждого числа на соответствие требованиям.
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.
console.log("-------------------task_2.3-------------------")

const numbers = [1, -5, 2, 3, 4, 133];
type TNumberArray = number[];
type TPredicate = (n: number) => boolean;

function filter(numbers: TNumberArray, callback: TPredicate) {
    return numbers.filter(callback);
}

console.log(filter(numbers, (n) => n > 3)); // [4, 133]
console.log(filter(numbers, (n) => n % 2 === 1)); // [2, 4]
