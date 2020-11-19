const Account = function (login, email) {
  this.login = login;
  this.email = email;
  Account.prototype.getInfo = function (a, b) {
    return `Login: ${this.login}, email: ${this.email}`;
  };
};

//function
const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
console.log(typeof mango.getInfo);
console.log(mango);
