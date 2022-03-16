// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
// 
// a promise is in one of three states
//   1) pending
//   2) fulfilled
//   3) rejected
//
// Promise basics: 

let myNewPromise = new Promise((resolve, reject) => {
  let one = 1
  if (one == 1) {
    resolve('promise resoved!')
  }
  reject('promise rejected')
})

myNewPromise.then((message) => {
  console.log('then we get a message:', message)
}).catch(()=>{
  console.log('catch the failure: ', message)
})



// Promise example with reading files
const fs = require('fs')

let myPromise = new Promise((resolve, reject) => {
  fs.readFile('./test.txt', 'utf8', (error, data) => {
    if (error) {
      reject(error)
    }
    if (data) {
      resolve(data)
    }
  })
})

myPromise.then((message) => {
  console.log('all went well:', message)
}).catch((message) => {
  console.log(message)
})