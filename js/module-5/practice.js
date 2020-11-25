// const employee = {
//   salary: 1000,
//   overtimeRate: 0,
//   overtimesHours: 0,
//   getFinalWage() {
//     return this.salary + this.overtimeRate * this.overtimesHours;
//   },
// };
// console.log(employee.getFinalWage());

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;

//   this.greet = function (guestName) {
//     console.log(` Hotel ${this.name} greets ${guestName}`);
//   };
//   this.addGuest = function (guestCount) {
//     console.log((this.capacity += guestCount));
//   };

//   this.removeGuest = function (guestCount) {
//     console.log((this.capacity -= guestCount));
//   };
// };

// const motel = new Hotel('Hilton', 5, 100);
// console.log(motel);
// motel.addGuest(54);
// console.log(motel);
// motel.greet('John');
// const inn = new Hotel('Holiday Inn', 4, 200);
// console.log(inn, motel);

// const Manager = function (name = '', sales = 0) {
//   this.name = name;
//   this.sales = sales;
//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} has been sold ${product} !`;
//   };
// };

// const mango = new Manager('Mango', 4);
// console.log(mango.sales);
// console.log(mango.sell('TV'));
// console.log(mango.sales);
// console.log(mango.sell('DVD'));
// console.log(mango.sales);

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };
// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('mango', 10);

// const poly = new Guest('poly', 20);
// mango.showGuestInfo();
// poly.showGuestInfo();

// const animal = { eats: true, barks: true };
// // const dog = { barks: true };
// const dog = Object.create(animal);

// console.log(dog.barks);
// console.log(dog.eats);

//  prototypes
// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 330, 'sword');
// poly.gainXp(889);
// console.log(poly);

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// const mango = new Manager('Mango', 10);
// console.log(mango);
