// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).
function getFirstElement<T>(array: T[]) {
    return array[0];

}
console.log(getFirstElement(['elem1', 2, 4]));

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().
//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface Person {
    name: string;
    surname: string;
    experienceYears: string;
    getDetails(): string;
}

abstract class Employee implements Person {
    name: string;
    surname: string;
    experienceYears: string;
    abstract getDetails(): string;

    protected salary: number = 0;
    protected abstract calculateSalary(): void;

    constructor(
        name: string,
        surname: string,
        experienceYears: string) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.calculateSalary();

    }
}

class Manager extends Employee {
    prefered: "scrum" | "canban"; //по дефолту public поле
    constructor(
        name: string,
        surname: string,
        experienceYears: string,
        prefered: "scrum" | "canban"
    ) {
        super(name, surname, experienceYears);
        this.prefered = prefered;
    }
    protected calculateSalary(): number { //скроем реализацию метода
        return this.salary = parseInt(this.experienceYears) * 500; //тк приходит строка
    }
    public getDetails() { //а вот этот уже public метод
        return `'My name is ${this.name} ${this.surname}, I am manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary'`
    }
}

class Developer extends Employee {
    programmingLanguage: 'js' | 'ts' | 'java' | 'python';
    constructor(
        name: string,
        surname: string,
        experienceYears: string,
        programmingLanguage: 'js' | 'ts' | 'java' | 'python',
    ) {
        super(name, surname, experienceYears);
        this.programmingLanguage = programmingLanguage;
    }

    protected calculateSalary(): number {
        return this.salary = parseInt(this.experienceYears) * 1000;
    }
    public getDetails() {
        return `'My name is ${this.name} ${this.surname}, I am developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary'`
    }

}

const manager = new Manager('Elena', 'Al-Koli', '3', 'scrum');
const developer = new Developer('Marat', 'Al-Koli', '1', 'js');
console.log(manager.getDetails());
console.log(developer.getDetails());