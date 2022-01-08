// create different formats of date and time 

// create a new Date Object
const myDate = new Date();

// create options for how to display the date
// crazy american format mm-dd-yy 
console.log('American: ', new Intl.DateTimeFormat('en-US').format(myDate));

// more sane british format dd-mm-yy
console.log('British: ', new Intl.DateTimeFormat('en-GB').format(myDate));

// using options
// "long" for words
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log('British Long:', new Intl.DateTimeFormat('en-GB', options).format(myDate));