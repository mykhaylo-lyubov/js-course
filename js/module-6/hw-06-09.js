import users from './users.js';

// const fr = array => array.map(user => user.friends.length);
// console.log(fr(users));

const getNamesSortedByFriendsCount = array =>
  [...array]
    .sort(function (a, b) {
      return a.friends.length - b.friends.length;
    })
    .map(({ name }) => name);

console.log('sorted: ', getNamesSortedByFriendsCount(users));

const originalArr = array => array.map(user => user.name);
console.log('original: ', originalArr(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
