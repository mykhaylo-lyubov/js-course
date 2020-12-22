const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

//============== number 18 ================

// const getProductPrice = productName => {
//   let result = null;
//   products.find(
//     product => (result = product.name === productName ? product.price : result),
//   );
//   return result;
// };

// function getProductPrice(productName) {
//   let result = null;
//   products.find(
//     product => (result = product.name === productName ? product.price : result),
//   );
//   return result;
// }

// console.log('Price for Радар', getProductPrice('Радар'));
// console.log('Price for Сканер', getProductPrice('Сканер'));
// console.log('Price for Дроид', getProductPrice('Дроид'));
// console.log('Price for Захват', getProductPrice('Захват'));
// console.log('Price for qwerty', getProductPrice('qwerty'));

// =============== number 19  =================

// function getAllPropValues(propName) {
//   let result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('category'));

// ============== number 20 =================

function calculateTotalPrice(productName) {
  let result = 0;
  products.find(product => {
    result =
      product.name === productName ? product.price * product.quantity : result;
  });
  return result;
}

// console.log(calculateTotalPrice('Радар'));

// const add = (...args) => {
//   return [...args].reduce((acc, num) => acc + num, 0);
// };

// console.log(add(12, 4, 11, 48));

// function addOverNum(num, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (num < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(50, 15, 43, 2));

// function findMatches([...a], ...args) {
//   const matches = [];
//   for (const item of [...args]) {
//     if ([...a].includes(item)) {
//       matches.push(item);
//     }
//   }
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (const item of this.potions) {
//       if (item.name === potionName) {
//         const potionIndex = this.potions.indexOf(item);
//         return this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Зелья ${potionName} нет в инвентаре!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//       if (item.name === oldName) {
//         item.name = newName;
//         return item.name;
//       }
//     }
//     return `Зелья ${oldName} нет в инвентаре!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.getPotions());

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = `${str}${this.value}`;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value = `${this.value}${str}`;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padEnd(str);
//   this.padStart(str);
// };

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ================= number 16 ====================

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// ============== number 19 =================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails;
//   accessLevel;

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
