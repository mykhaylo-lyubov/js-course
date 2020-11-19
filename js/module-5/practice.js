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

const Manager = function (name = '', sales = 0) {
  this.name = name;
  this.sales = sales;
  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} has been sold ${product} !`;
  };
};

const mango = new Manager('Mango', 4);
console.log(mango.sales);
console.log(mango.sell('TV'));
console.log(mango.sales);
console.log(mango.sell('DVD'));
console.log(mango.sales);
