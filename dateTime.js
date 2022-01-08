// create different formats of date and time 

// create a new Date Object
const myDate = new Date();

// create options for how to display the date
// crazy american format mm-dd-yy 
console.log('American: ', new Intl.DateTimeFormat('en-US').format(myDate));
// American:  1/8/2022

// more sane british format dd-mm-yy
console.log('British: ', new Intl.DateTimeFormat('en-GB').format(myDate));
// British:  08/01/2022

// using options
// "long" for words
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log('British Long:', new Intl.DateTimeFormat('en-GB', options).format(myDate));
// British Long: Saturday, 8 January 2022

// using UTC and disclosing timezone
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log('with time zone:', new Intl.DateTimeFormat('en-GB', options).format(myDate));
// with time zone: Saturday, 8 January 2022, UTC

// 24 hour / military time 
options = { 
  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', 
  minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'America/Vancouver'
};
console.log('24 hour date and time: ', new Intl.DateTimeFormat('en-GB', options).format(myDate));
// 24 hour date and time:  08/01/2022, 10:43:34

// getting and setting in variables
const today = new Date();
// returns week day number based on Sunday = 0
const day = today.getDay();
const hour = today.getHours();
const minute = today.getMinutes();
