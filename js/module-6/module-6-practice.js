// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);

// const filter = numbers.filter(num => num < 6);
// console.log(filter);
// // =======================================================
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const names = users.map(user => user.name);
// console.log('names:', names);

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);
// // ====================================================
// const members = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// const search = members.find(user => user.id === '002');

// console.log('search: ', search);

// const getUserById = (arr, active) =>
//   arr.filter(user => user.isActive === active);
// console.log('getUserById function', getUserById(members, false));

function findLongestWord(string) {
  const array = string.split(' ');
  let maxWord = array[0];
  let maxWordLength = array[0].length;
  for (i = 1; i < array.length; i += 1) {
    if (array[i].length > maxWordLength) {
      maxWordLength = array[i].length;
      maxWord = array[i];
    }
  }
  return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
