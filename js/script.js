// 'use strict';

const getItemsString = function (array) {
  'use strict';
  let result;
  for (let i = 0; i < array.length; i += 1) {
    result = `${i + 1} - ${array[i]}`;
  }
  return result;
};

getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// console.log(result);

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
