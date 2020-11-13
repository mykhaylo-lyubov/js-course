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

const filter = function (array, test) {
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

console.log(freshFruits);

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
