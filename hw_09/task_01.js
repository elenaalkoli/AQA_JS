// Task 1
/*
1. Создайте класс Animal
2. В конструкторе класс должен принимать следующие параметры:     
  - type
  - color
  - weight
  - height
  - place of origin
3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
  - Красный
  - Черный
  - Белый
  - Синий
Если не является - кидаем ошибку через throw new Error('текст ошибки')
*/
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

// const mavrikTheCat = new Animal('cat', 'black', 8, 0.4, 'SaintP');
// const mavrikTheCat = new Animal('cat', 'purple', 8, 0.4, 'SaintP');
// console.log(mavrikTheCat.getInfo())
// console.log(mavrikTheCat)

/*
6. Создайте класс Snake, который будет наследовать класс Animal
7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
9. В классе Snake создать метод checkPoisonous(), который возвращает true / false
10. Сделайте поле isPoisonous приватным в классе Snake
*/

class Snake extends Animal {
    #isPoisonous; //10. Сделайте поле isPoisonous приватным в классе Snake

    constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
        super(type, color, weight, height, placeOfOrigin); // унаследуем от родителя
        this.#isPoisonous = isPoisonous; //будем брать из текущего объекта, но не покажем в {} тк поле приватное 
    }
    checkPoisonous() {
        if (!this.isPoisonous) return false;
        else return true;
    }
}

const blackMamba = new Snake('viper', 'black', 0.8, 0.02, 'sahara', 'yes');
console.log(blackMamba.checkPoisonous());
console.log(blackMamba.getInfo());
