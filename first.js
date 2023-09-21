// let arr = [1,2,3,5]
// for(let x of arr){
//     console.log(x)
// }
// let obj = {
//     "a": 1,
//     "b": 2,
//     "c": 3,
// }
// for(let key in obj){
//     console.log(key)
// }
// a()

// function a(){
//     console.log("a")
// }

// let a = 12
// if(a%2==0){
//     console.log("factor of 2")
// }else if(a%3==0){
//     console.log("factor of 3")
// }
// else{
//     console.log("factor of unknown")
// }

// let a = "hai koi?"

// switch(a){
//     case "no call":
//         console.log("naahi bulawat hai")
//         break

//     case "call":
//         console.log("bulawat hai")
//         break

//     default: 
//         console.log("koi hai hi nhi bulane wala")
// }
// function myDisplayer(some) {
//     console.log(some)
// }
// function myCalculator(num1, num2, myCallback) {
// myCallback(num1);
// myCallback(num2);
// let sum = num1 + num2;
// myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);

// Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let x = true;
// let y = false;

// // Object:
// const person = {firstName:"John", lastName:"Doe"};

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");
// console.log(person['firstName'])

// let num = 6;
// console.log(num.MAX_VALUE)
// let x = 0.2 + + 0.1
// console.log(x)
// let a = typeof() new
// let a = {}
// let date = Date()
// console.log(date)
// console.log(new Date())
// new Date(date, string)

// console.log(new Date(year,month))
// console.log(new Date(year,month,day))
// console.log(new Date(year,month,day,hours))
// console.log(new Date(year,month,day,hours,minutes))
// console.log(new Date(year,month,day,hours,minutes,seconds))
// console.log(new Date(year,month,day,hours,minutes,seconds,ms))
// console.log(new Date(milliseconds))
// const d = new Date("October 13, 2014 11:13:00");
// console.log(d)
// const d25 = new Date("2022-03-25");
// console.log(d25)
// const numbers1 = [45, 4, 9];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//     console.log(value)
//   return value * 2;
// }

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(myFunction);

// const d = new Date();
// console.log(d.setMonth(12))
// if (3>5) {
//     console.log("Yes")
// }else{
//     console.log("No")
// }
// const person = [1,2,3,4,5]
// for (let x in person) {
//   console.log(x)
// }
// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//   console.log(x)
// }
// let x=10
// do{
//     console.log(x)
//     x--
// }while(x>1)
// Create a Map
// const fruits = new Map();
// console.log(fruits)
// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// fruits.delete("apples");
// console.log(fruits)
// myObj = {
//     name:"John",
//     age:30,
//     cars: [{
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }]
//   }
// console.log(myObj.cars[0].car1)

// function scope1 () {
//     foo ="sample"
//     // function function1(){
//         return ()=>{
//             console.log(foo)
//         }
//     // }
// }

// let scope2 = scope1()
// scope2()
// class Car {
//     constructor(name1 = "random", brand = "ghatiya", year = "bahut purana") {
//         this.name1 = name1;
//         this.year = year;
//         this.brand = brand;
//     }
//     jod_do() {
//         console.log(this)
//     }
// }
// const newCar = new Car();
// const jodna = newCar.jod_do
// jodna.name1 = "raj"
// jodna.brand = "tagda"
// jodna()
// var http = require('http');
// const express = require('express')

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);
// console.log("hello")
// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); 
//   res.end();
// }).listen(8080); 
// const jawab = {
//     "Tera_naam":"Marry",
//     "sautakka":"Meri hai"
// }
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200,{ 'Custom-Header': 'Header' }, {'Content-Type': 'application/json'});
//   res.write(JSON.stringify(jawab))
//   res.end();
// }).listen(8080);

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'},{ 'Custom-Header': 'Header' });
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// const jawab = {
//     "Tera_naam":"Marry",
//     "sautakka":"Meri hai"
// }

// const http = require('http');
// const qs = require('querystring');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';

//     req.on('data', (data) => {
//       body += data;

//       // Too much POST data, kill the connection!
//       if (body.length > 1e6) {
//         req.connection.destroy();
//       }
//     });

//     req.on('end', () => {
//       const post_data = qs.parse(body);

//       // Access POST data here
//       console.log('Received POST data:', post_data);

//       // Respond with the jawab object
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(jawab));
//     });
//   } else {
//     res.writeHead(405, { 'Content-Type': 'text/plain' });
//     res.end('Method not allowed');
//   }
// });

// const port = 8080;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
// const http = require('http');

// const jawab = {
//     "Tera_naam": "Marry",
//     "sautakka": "Meri hai"
// }

// http.createServer(async function (req, res) {
//     await simulateAsyncOperation();
//     res.writeHead(200, { 'Custom-Header': 'Header' }, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(jawab));
//     res.end();
// }).listen(8080);

// async function simulateAsyncOperation() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (jawab.hasOwnProperty("deva")){
//                 delete jawab.deva
//             }else{
//             jawab.deva = "deva"
//             }
//             resolve();
//         }, 8000);
//     });
// }

// const http = require('http');
// const jawab = {
//     "Tera_naam": "Marry",
//     "sautakka": "Meri hai"
// };

// http.createServer(function (req, res) {
//     simulateAsyncOperation();
//     res.writeHead(200, { 'Custom-Header': 'Header' }, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(jawab));
//     res.end();
// }).listen(8080);

// function simulateAsyncOperation() {
//     setTimeout(() => {
//         if (jawab.hasOwnProperty("deva")){
//             delete jawab.deva
//         }else{
//         jawab.deva = "deva"
//         }
//         console.log("Async operation completed.");
//     }, 9000);
// }

var express = require('express');  
var app = express();
app.get('/', function (req, res) {  
    res.writeHead(200, { 'Custom-Header': 'Header' }, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({name:"Raj",domain:"ML"}));
});  
var server = app.listen(8080, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  