// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// If you are trying to use data from a asynchronous function callbacks can help with that 
// though this is considered a dated way of handling async fns now. 

// - - - in this example we will try reading files from a server - a process which is asynchronous
const fs = require('fs');

// - - - The Wrong Way - Without a Callback - - -
const returnDataFromFile = (file) => {
  fs.readFile(file, (error, data) => {
    if(error) { 
      console.log('💩 oops:', error);
    }
    return data
  })
}
// console.log gets run before file is read and therefore is undefined when program executes.
// const consoleLogReturnedData = (data) => {
//   console.log('Expecting to see our data here: >>>', returnDataFromFile(data));
// }

console.log('We expect to see out data here but instead we get:');

// we run our original function without a callback...
console.log(returnDataFromFile('test.txt'))





// - - - THE CORRECT CALLBACK WAY - - -

const getDataFromFile = (file, callbackFn) => {
  // use fs.readFile which is a asynchronous task 
  fs.readFile(file, 'utf8', (error, data) => {
    if(error) { 
      console.log('💩 oops:', error);
    }
    callbackFn(data);
  })

}

// Now we create the callback function
const consoleLogData = (data) => {
  console.log(data);
}

getDataFromFile('test.txt', consoleLogData);
// if we were to try to return the data read from getDataFromFile function we would
// get 'undefined' because js would run the console.log before we were able to read the file
