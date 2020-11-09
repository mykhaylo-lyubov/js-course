const findBestEmployee = function (employees) {
  'use strict';
  let employeeName = '';
  const arrEmployees = Object.keys(employees);
  for (let i = 0; i < arrEmployees.length; i += 1) {
    if (employees[arrEmployees[i]] >= employees[arrEmployees[0]]) {
      employeeName = arrEmployees[i];
    }
  }
  return employeeName;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
