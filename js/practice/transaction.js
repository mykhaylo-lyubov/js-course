/*
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 * */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  nextId: 400,
  getNextId() {
    this.nextId += 1;
    return this.nextId;
  },

  transactionsList: [],
  transactionsMap: {},

  createTransaction(amount, type) {
    return {
      id: this.getNextId(),
      amount,
      type,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactionsList.push(transaction);
    this.transactionsMap[transaction.id] = transaction;
  },

  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      console.error('Not enough money');
      return;
    }
    this.balance -= amount;
    this.transactionsList.push(transaction);
    this.transactionsMap[transaction.id] = transaction;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactionsMap[id];
  },

  getTransactionTotal(type) {
    if (!Object.values(Transaction).includes(type)) {
      console.error(`Unknown transaction type "${type}"`);
      return;
    }
    let total = 0;
    for (const transaction of this.transactionsList) {
      if (transaction.type !== type) {
        continue;
      }
      total += transaction.amount;
    }
    return total;
  },
};

account.deposit(1200);
account.withdraw(700);
account.withdraw(800);
account.deposit(300);
console.log(account.getTransactionTotal('unknown'));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.transactionsList);
console.log(account.transactionsMap);
console.log(account.getTransactionDetails(402));
