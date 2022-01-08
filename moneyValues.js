// handling money values in js can be tricky at first, floating point numbers
// would have you splitting pennies 

// Money should always be composed of an amount and a currency

// handle cents by multiplying floats into integers and then divide them back again
// ex (0.3 * 100 + 0.05 *100) / 100    returns 0.35 
console.log((0.3 * 100 + 0.15 *100) / 100)
console.log(0.3 + 0.15);