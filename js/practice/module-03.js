// const arrayOfNumbers = [1, 34, 2, -5, 33, 22, 12, 5];

// console.log(Math.min(...arrayOfNumbers));

// const newArrayOfNumbers = [...arrayOfNumbers, 7, 7, 7];
// console.log(newArrayOfNumbers);

// console.log([...arrayOfNumbers, ...newArrayOfNumbers]);

// const a = { x: 1, y: 5 };
// const b = { x: 0, z: 9 };

// const c = Object.assign({}, a, b, { x: 4, y: 7 });

// console.log(c);
// console.log({ ...a, ...b });

// слева всегда - rest = справа всегда spread

// const hotel = {
//   name: 'Hilton',
//   stars: 3,
//   capacity: 50,
// };

// const showHotelStats = function ({ name, stars, capacity }) {
//   console.log(stars, name);
// };

// showHotelStats(hotel);

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([2, 3, 4, 5], 3));

// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i += 1) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return 'No such property';
//       }
//     }
//   }
//   return 'No such contact';
// }

// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'potato'));
// console.log(lookUpProfile('Bob', 'number'));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);
//     console.log(arr);
//     return arr;
//   }
// }

// console.log(countdown(5));

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//     return [];
//   } else {
//     const newArr = rangeOfNumbers(startNum + 1, endNum);
//     newArr.unshift(startNum);
//     return newArr;
//   }
// }

// console.log(rangeOfNumbers(3, 7));

// function songDecoder(song) {
//   let resultStr = '';
//   let songArray = song.split('WUB');
//   for (const key of songArray) {
//     if (key !== '') {
//       resultStr += key + ' ';
//     }
//   }
//   return resultStr.slice(0, -1);
// }
// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
// console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
// console.log(songDecoder('WUBAWUBBWUBCWUB'));

// function reverseWords(str) {
//   let newArr = str.split(' ');
//   const reversedArr = newArr.reverse();
//   const finalString = reversedArr.join(' ');
//   return finalString;
// }

// console.log(reverseWords('reverse those words'));

// function getAverage(marks) {
//   let average = 0;
//   let marksSum = 0;
//   for (const key of marks) {
//     marksSum += key;
//   }

//   average = marksSum / marks.length;
//   average = Math.floor(average);
//   return average;
// }

// console.log(getAverage([1, 2, 4, 5, 7, 8]));
