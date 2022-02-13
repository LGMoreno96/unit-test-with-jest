// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // this is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One Yen should be 115.31 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')


    
    // this is the comparison for the unit test
    expect(fromDollarToYen(1)).toBe(115.31); //
});

test("One Pound should be 0.0064 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')


    
    // this is the comparison for the unit test
    expect(fromYenToPound(1)).toBe(0.0064); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});