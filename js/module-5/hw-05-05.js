class Car {
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed},
     speed: ${car.speed}, isOn: ${car.isOn}, 
     distance: ${car.distance}, price: ${car._price}`;
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Добавь геттер и сеттер
   * для свойства `price`, который будет
   * работать с свойством цены автомобиля.
   *
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с
   * подчеркиванием. См. ниже пример 1.
   */

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
  turnOn() {
    return (this.isOn = true);
  }

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  turnOff() {
    return (this.isOn = false);
  }

  /*
   * Этот метод должен добавлять
   * к свойству `speed` полученное
   * значение, при условии,
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      return (this.speed += value);
    } else {
      return (this.speed = this.maxSpeed);
    }
  }

  /*
   * Этот метод должен отнимать
   * от свойства `speed`
   * полученное значение, при условии,
   * что результирующая скорость не меньше 0
   */

  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed -= value);
    } else {
      return (this.speed = 0);
    }
  }

  /*
   * Этот метод должен добавлять к свойству
   * `distance` пробег в километрах,
   * т.е. hours * speed,
   * но только в том случае,
   * если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(Car.getSpecs(mustang));

mustang.turnOn();
console.log(Car.getSpecs(mustang));

mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
