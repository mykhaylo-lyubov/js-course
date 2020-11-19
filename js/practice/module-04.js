/*--    const repeatConsoleLog = function (n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};

repeatConsoleLog(4);  --*/
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeatAction = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeatAction(4, printValue);
// repeatAction(5, prettyPrint);

// const repeatAction = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// let labels = [];

// repeatAction(4, value => labels.push(value));

// console.log(labels);

/*  const filter = function (array, test) {
  const filteredElements = [];
  for (const element of array) {
    console.log(element);
    const passed = test(element);
    console.log(passed);
    if (passed) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, function (fruit) {
  return fruit.isFresh;
});

console.log(freshFruits);  ---*/

// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

// const createCounter = function () {
//   let privateValue = 0;
//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };
//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment();
// counterA.increment();
// counterA.increment();
// counterA.increment();

// console.dir(counterA.increment);

// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('pie');

// console.dir(mango);

// var x = 10;
// function foo(a) {
//   var b = 20;
//   console.log('a = ', a);
//   console.log('b = ', b);
//   function bar(c) {
//     console.log('c = ', c);
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     console.log(e);
//     return e * -1;
//   }

//   return bar;
// }

// var moar = foo(5);
// moar(10);

// var x = 10;

// function foo() {
//   var y = x + 5;
//   return y;
// }

// function bar() {
//   var x = 2;
//   return foo();
// }

// function main() {
//   foo(); // Static scope: 15; Dynamic scope: 15
//   bar(); // Static scope: 15; Dynamic scope: 7
//   return 0;
// }

// const showThis = function () {
//   console.log('this in showThis: ', this);
// };

// // showThis();

// const user = {
//   name: 'Mango',
//   showContext: showThis,
// };

// user.showContext();

// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// fn(hotel.showThis);

// const greet = function (guest, stars) {
//   return `Dear ${guest}, welcome to ${stars}-stars ${this.name} !`;
// };

// const hotel = { name: 'Hilton' };
// const motel = { name: 'Inn' };

// console.log(greet.call(hotel, 'Mike', 5));
// console.log(greet.call(motel, 'Mike', 3));

// console.log(greet.apply(hotel, ['Mike', 4]));
// console.log(greet.apply(motel, ['Jack', 2]));

//===========================
// const greet = function (a) {
//   console.log(`Hello ${a}`);
// };

// const greetWithName = function (callback) {
//   const name = 'Mike';
//   callback(name);
// };
// // greetWithName(greet);

// /*
// Environment - Global
// Record - null
// Parent - null
// */
// const x = 5;
// /*
// Environment - Global
// Record - x=5
// Parent - null
// */
// const y = 1;
// /*
// Environment - Global
// Record - x=5, y = 1
// Parent - null
// */

// const foo = function (z) {
//   /*
// Environment - foo
// Record - z = 20
// Parent - Global
// */

//   const x = 90;
//   /*
// Environment - foo
// Record - z = 20, x = 90
// Parent - Global
// */

//   console.log(x + y + z);
// };

// /*
// Environment - Global
// Record - x = 5, y = 1, foo = f
// Parent - null
// */

// foo(20);

let a = 2;

(function IIFE() {
  let a = 3;
  console.log('IIFE a = ', a);
})();

console.log('Global a = ', a);
