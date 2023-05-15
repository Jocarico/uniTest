const myFunction = require('./listfunctions');
const Calculator = require('./calculator');

test("This function must return the sum of two numbers", () => {
    // const result = myfunction.sum(5,3);
    expect(myFunction.sum(5,3)).toBe(8);
});
test ("This function must return a text testing", () => {
    const result = myFunction.textAdd();
    expect (result).toBe("Testing testing... ");
});
test ("This function must return 3", () => {
    const list = [1,2];
    const result = myFunction.arrayFunction(list);
    expect (result).toBe(2);
});

test ("This function must sum 2 numbers", () => {
    const calc = new Calculator;
    const result = calc.add(14,5);
    expect (result).toBe(19);
});
// test("ShoppingCart should add items and calculate the total", () => {
//     const cart = new ShoppingCart();
//     cart.addItem('Apple', 2, 0.5);
//     cart.addItem('Orange', 4, 0.3); 
//     const totalPrice = cart.calculateTotalPrice();
//     expect(totalPrice).toBe(2.2,2);
// });
// test("Rectangle should calculate the are correctly", () => {
//     const rectangle = new Rectangle(5,10);
//     const area = rectangle.calculateArea();
//     expect(area).toBe(50);
// })