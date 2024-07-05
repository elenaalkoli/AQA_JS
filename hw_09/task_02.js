
class Animal {
    constructor(type, color, weight, height, placeOfOrigin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }
    getInfo() {
        return `Our animal has ${this.type} type, ${this.color} in color, weight ${this.weight} kg and it's height ${this.height} m , place of origin is - ${this.placeOfOrigin}`
    }

    get color() {
        return this._color
    }
    set color(newColor) {
        if (newColor !== 'red' && newColor !== 'black' && newColor !== 'white' && newColor !== 'blue') {
            throw new Error("Invalid color")
        }
        this._color = newColor;
    }
}

/*
// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
*/

class Bird extends Animal {
    #isFlying;

    constructor(type, color, weight, height, placeOfOrigin, isFlying) {
        super(type, color, weight, height, placeOfOrigin);
        this.#isFlying = isFlying;
    }
    isFlying() {
        if (!this.#isFlying) return "The creature doesn't fly"
        else return "The creature flies"
    }
}
const soroka = new Bird('soroka', 'black', 0.1, 0.1, 'SaintP', 'yes');
console.log(soroka.isFlying()) //не выведет результат метода, тк обращение к приватному полю!

/*
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
*/

class CatLike extends Animal {
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet; //публичное поле, берем из тек. объекта и выведется в созданном {}
    }
}

const mavrik = new CatLike('Mavrik', 'black', 0.1, 0.1, 'SaintP', 'yes');
console.log(mavrik)

/*
3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
    class Worker
      firstName
      lastName
      phone
      getFullName()
*/

class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    getFullName() {
        return `Worker's fullname ${this.firstName} ${this.lastName}`
    }
}

/*
4. Создайте класс Zoo, реализующий следующий интерфейс:
    class Zoo
      address
      title
      ticket price
      workers: []
      animals: [],

5. Добавьте геттеры и сеттеры к полям address, title, ticket price

 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
На вход метод должен принимать объект класса Worker. 
Если объект не является инстансом класса Worker - выкинуть ошибку

 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
  На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
  Если объект не является инстансом класса Animal - выкинуть ошибку
  ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!" 

 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
 */

class Zoo {
    workers = [];
    animals = [];

    constructor(address, title, ticketPrice) {
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
    }
    get address() {   //это не метод!
        return this._address;
    }

    get title() {
        return this._title;
    }

    get ticketPrice() {
        return this._ticketPrice;
    }

    set address(newAddress) { // и это не метод!
        this._address = newAddress;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    set ticketPrice(newTicketPrice) {
        this._ticketPrice = newTicketPrice;
    }

    addWorker(worker) {
        if (!(worker instanceof Worker)) throw new Error("The object must be an instanse of the Worker class") //если созданный объет не из класса Worker
        this.workers.push(worker);
        console.log(`${JSON.stringify(worker.firstName)} ${JSON.stringify(worker.lastName)} was added`); // надо распарсить в json-строку приходящий объект, чтобы добраться до ключа
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) throw new Error("The object must be an instanse of the Animal class")
        if ((animal instanceof Bird)) throw new Error("There will be no bird, mister Potter");
        this.animals.push(animal);
        console.log(`${JSON.stringify(animal.type)} was added`);
    }

    removeWorker(phoneNumber) {
        const foundedIndexOfWorker = this.workers.findIndex(object => object.phone === phoneNumber)
        if (foundedIndexOfWorker === -1) {
            console.log(`Workers with phone number - ${phoneNumber} was not found`)
        }
        else {
            this.workers.splice(foundedIndexOfWorker, 1);
            console.log(`Workers with phone number - ${phoneNumber} was removed`)
        }
    }

    removeAnimal(type, color, weight) { //найдем по 3 параметрам, чтобы наверняка
        const foundedIndexOfAnimal = this.animals.findIndex(object => object.type === type && object.color === color && object.weight === weight)
        if (foundedIndexOfAnimal === -1) { //можно так же через .find найти {} и удалить его по 2 параметру колбека - index
            console.log(`An animal with the specified parameters was not found`)
        }
        else {
            this.animals.splice(foundedIndexOfAnimal, 1);
            console.log(`Animal ${type} as removed`)
        }
    }
}

// проверка addWorker(worker)
const worker1 = new Worker('Jack', "Moris", "12345"); //создали объект worker1
const worker2 = new Worker('Maggy', "Jonson", "00091"); //создали объект worker2
const newZoo = new Zoo('SaintP, Aleksandrovkiy park, 1', "Leningradskyi zoopark", "650 rub.") //создали объект newZoo
console.log(worker1.getFullName());
newZoo.addWorker(worker1); //добавили worker1 в newZoo
console.log(newZoo.workers); //добавился {} в массив

//проверка addAnimal(animal)
const cat1 = new Animal('cat', 'black', 7, 0.3, 'Scotland'); //создали объект кота
const bird1 = new Animal('bird1', 'white', 8, 0.4, 'Russia'); //создали объект птицы
newZoo.addAnimal(cat1);
newZoo.addAnimal(bird1);
// console.log(newZoo.animals);

//проверка removeWorker ()
newZoo.removeWorker("12345");

//проверка removeAnimal ()
newZoo.removeAnimal('bird1', 'white', 8)