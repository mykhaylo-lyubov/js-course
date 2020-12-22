const accounts = [
  { email: 'adrian@coolmail.com', expenses: 3754 },
  { email: 'artemis@mail.net', expenses: 6459 },
  { email: 'solomon@topmail.ua', expenses: 1278 },
  { email: 'derek@mail.com', expenses: 1691 },
  { email: 'julian@demail.com', expenses: 8903 },
  { email: 'jacob@rumail.de', expenses: 5812 },
];

function composeEmail(discount) {
  return `Уважаемый ${this.email}, теперь у вас постоянная скидка ${
    discount * 100
  } процентов.`;
}

// function makeMessages({ accounts, threshold, discount, onCompose }) {
//   let newArray = [];
//   accounts.filter(function (item) {
//     if (item.expenses > threshold) {
//       newArray.push(onCompose.call(item, discount));
//     }
//   });
//   return newArray;
// }

// function makeMessages({ accounts, threshold, discount, onCompose }) {
//   let newArray = [];
//   accounts.filter(item => {
//     item.expenses > threshold
//       ? newArray.push(onCompose.call(item, discount))
//       : newArray;
//   });
//   return newArray;
// }

// function makeMessages({ accounts, threshold, discount, onCompose }) {
//   return accounts.reduce((acc, item) => {
//     if (item.expenses > threshold) {
//       acc.push(onCompose.call(item, discount));
//       return acc;
//     }
//     return acc;
//   }, []);
// }

function makeMessages({ accounts, threshold, discount, onCompose }) {
  return accounts.reduce((acc, item) => {
    if (item.expenses > threshold) {
      acc.push(onCompose.call(item, discount));
    }
    return acc;
  }, []);
}

console.log(
  makeMessages({
    accounts,
    threshold: 5000,
    discount: 0.1,
    onCompose: composeEmail,
  }),
);

console.log(
  makeMessages({
    accounts,
    threshold: 8000,
    discount: 0.2,
    onCompose: composeEmail,
  }),
);
