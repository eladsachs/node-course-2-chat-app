let moment = require('moment');

// let date = moment();
// console.log(date.format('MMM Do, YYYY'));
//
// // 10:35 am

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));