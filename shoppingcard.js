class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(name, quantity, price) {
      this.items.push({ name, quantity, price });
    }
  
    calculateTotalPrice() {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.quantity * item.price;
      }
      return totalPrice;
    }
  }

module.exports = ShoppingCart;