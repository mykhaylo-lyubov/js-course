// { name: 'apple', price: 50, }
// { name: 'grapes', price: 70,}
// { name: 'lemon', price: 60 }
// {name: 'strawberry', price: 110 }

const cart = {
  items: [
    { name: 'apple', price: 50, quantity: 1 },
    { name: 'lemon', price: 60, quantity: 1 },
  ],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log('found');
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
// cart.increaseQuantity('apple');

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.decreaseQuantity('apple');

console.table(cart.getItems());
