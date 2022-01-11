// handling money values in js can be tricky at first, floating point numbers
// would have you splitting pennies 

// Money should always be composed of an amount and a currency

// handle cents by multiplying floats into integers and then divide them back again
// ex (0.3 * 100 + 0.15 *100) / 100    
console.log((0.3 * 100 + 0.15 *100) / 100) // returns 0.45 instead of 0.44999999999999996

// another solution is to store cents as directly in relation to the unit and not as a decimal
// so 10 cents would be represented as 10 not as 0.1

// You could also use Library such as Dinero.js (https://dinerojs.com)
