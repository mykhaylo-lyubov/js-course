// function rot13(str) {
//   let newString;
//   let indexEncoded = 0;
//   let indexDecoded = 0;
//   let elementDecoded = '';
//   const alphabet = [
//     'a', //1
//     'b', //2
//     'c', //3
//     'd', //4
//     'e', //5
//     'f', //6
//     'g', //7
//     'h', //8
//     'i', //9
//     'j', //10
//     'k', //11
//     'l', //12
//     'm', //13
//     'n', //14
//     'o', //15
//     'p', //16
//     'q', //17
//     'r', //18
//     's', //19
//     't', //20
//     'u', //21
//     'v', //22
//     'w', //23
//     'x', //24
//     'y', //25
//     'z', //26
//   ];

//   for (const element of str) {
//     if (alphabet.includes(element.toLowerCase())) {
//       for (let i = 0; i < alphabet.length; i += 1) {
//         indexEncoded = alphabet.indexOf(element.toLowerCase());
//         indexDecoded = indexEncoded - 13;
//         if (indexDecoded < 0) {
//           indexDecoded += 26;
//         }
//         elementDecoded += alphabet[indexDecoded];
//         break;
//       }
//     }
//   }
//   return elementDecoded;
// }

// console.log(rot13('SERR PBQR PNZC'));
// FREE CODE CAMP

const task = {
  indexEncoded: 0,
  indexDecoded: 0,
  elementDecoded: '',
  alphabet: [
    'a', //1
    'b', //2
    'c', //3
    'd', //4
    'e', //5
    'f', //6
    'g', //7
    'h', //8
    'i', //9
    'j', //10
    'k', //11
    'l', //12
    'm', //13
    'n', //14
    'o', //15
    'p', //16
    'q', //17
    'r', //18
    's', //19
    't', //20
    'u', //21
    'v', //22
    'w', //23
    'x', //24
    'y', //25
    'z', //26
  ],
  rot13(str) {
    console.log(this.isCharInString(str));
  },
  isCharInString(str) {
    for (const char of str) {
      return char;
    }
  },
};

task.rot13('SERR PBQR PNZC');
