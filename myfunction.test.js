const myFunction = require('./listfunctions');
const Calculator = require('./calculator');
const Rectangle = require('./rectanglearea');  
const ShoppingCart = require('./shoppingcard');

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
test ("This function must sum 2 numbers", () => {
    const calc = new Calculator;
    const result = calc.substract(14,5);
    expect (result).toBe(9);
});
test ("This function must multiply 2 numbers", () => {
    const calc = new Calculator;
    const result = calc.multiplication(25,5);
    expect (result).toBe(125);
});
test ("This function must divide 2 numbers", () => {
    const calc = new Calculator;
    const result = calc.division(15,5);
    expect (result).toBe(3);
});
test("ShoppingCart should add items and calculate the total", () => {
    const cart = new ShoppingCart();
    cart.addItem('Apple', 2, 0.5);
    cart.addItem('Orange', 4, 0.3); 
    const totalPrice = cart.calculateTotalPrice();
    expect(totalPrice).toBe(2.2,2);
});
test("Rectangle should calculate the are correctly", () => {
    const rectangle = new Rectangle;
    const area = rectangle.calculateArea(5, 10);
    expect(area).toBe(50);
})