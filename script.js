// // "use strict";
// /* const arr = ['one', 'two', 'three', 'four'];
// newArr = arr.map((item) => (item =='one') ? 'yes' : '');

// // console.log(newArr); */

// // /* const arr = ['1','2','3'];

// // const newarr = arr.filter(i => i>2).map((i)=>+i+3);

// // newarr.forEach((i) => console.log(i));

// //  */
// // /*
// // let age1 = getAge1(1987);

// // console.log(age1);

// // function getAge1(birthYear) {
// //     return 2025-birthYear;
// // }
// //  */

// // let arr = [
// //   34,
// //   65,
// //   43,
// //   function () {
// //     console.log("blya");
// //   },
// // ];
// // arr.push("kfof");
// // arr.unshift("zal");
// // console.log(arr.pop());
// // console.log(arr.shift());
// // console.log(arr[3]());
// // console.log(arr);

// // let alex = {
// //   firstName: "Alex",
// //   lastName: "Sk",
// //   birthDay: 1987,
// //   getAge: function () {
// //     console.log(this);
// //   },
// // };

// // alex.getAge();

// // const avrgScore = (a, b, c) => console.log((a + b + c) / 3);

// // avrgScore(...arr);

// // console.log(typeof (() => console.log("")));

// // function twoStepMultiply(a) {
// //   return (b) => {
// //     return a * b;
// //   };
// // }

// // console.log(twoStepMultiply(52)(5));

// // console.log((5 === 5 && 3 > 1) || 5);

// // let x = { b: 1, c: 2 };
// // let y = Object.keys(x);
// // console.log(...Object.keys(x));

// // const arr2 = ["abc", "def", 12323];
// // arr2.splice(1, 0, "her");
// // console.log(arr2);

// // const months = ["Jan", "March", "April", "June"];
// // months.splice(1, 0, "Feb");
// // // Inserts at index 1
// // console.log(months);
// // // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// // months.splice(3, 1, "May");
// // // Replaces 1 element at index 4
// // months.length = 2;
// // console.log(months);
// // // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// // // for (let i=1; i<10; i++){console.log(i);}

// // let dice = Math.ceil(Math.random() * 5.99 + 0.01);
// // console.log(dice);
// // let i = 0;
// // while (dice != 4) {
// //   dice = Math.ceil(Math.random() * 5.99 + 0.01);
// //   i++;
// //   console.log(dice, i);
// // }

// //   -----  RANDOM
// // console.log(1);
// // const numbers = [-3, 20, -15, "Error", -45, 29, 10, 5, 8, 2, 15];

// // console.log(numbers.filter((item) => typeof item == "number"));
// // console.log(
// //   Math.max(...numbers.filter((item) => typeof item === "number")) -
// //     Math.min(...numbers.filter((item) => typeof item == "number"))
// // );
// // let arr = getRandomValues(Int8Array);
// // // console.log(arr);
// // const random = function getRandomInt(min, max) {
// //   const minCeiled = Math.ceil(min);
// //   const maxFloored = Math.floor(max);
// //   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// // };

// // const numx = [0, 0, 0, 0, 0, 0];
// // console.log(numx);

// // for (let i = 0; i < 100; i++) {
// //   let a = random(1, 7);
// //   numx[a - 1]++;
// // //   console.log(a);
// // // }
// // // console.log(numx);

// // const alex = {
// //   firstName: "Alex",
// //   lastName: "Sk",
// //   birthDay: 1987,
// //   getAge: function () {
// //     console.log(this);
// //   },
// // };

// // const numbers = [-3, 20, -15, -45, 29, 10, 5, 8, 2, 15];
// // console.log(window.localStorage.getItem("test"));
// // numbers.forEach((element) => console.log(element, this.localStorage), alex);
// // const names = ["Alex", "Jacob", "Mark", "Max", "fdsfd"];
// // // const names = ["Alex"];
// // console.log(names.length);

// // function likes(names) {
// //   // TODO
// //   if (names.length < 2) {
// //     console.log(1);
// //     return names[0] ? names[0] + " likes this" : "no one likes this";
// //   } else if (names.length < 4) {
// //     return names[2]
// //       ? names[0] + ", " + names[1] + " and " + names[2] + " like this"
// //       : names[0] + " and " + names[1] + " like this";
// //   } else {
// //     return (
// //       names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
// //     );
// //   }
// // }

// // const value = 1533

// // function narcissistic(value) {
// //   let sum=0;
// //   for (let i=0; i<value.toString().length; i++)
// //   {
// //     sum+=Math.pow(+value.toString()[i],+value.toString().length)
// //   }
// //   // Code me to return true or false
// //   return (sum===value);
// // }


// // console.log(value,narcissistic(value));

// // for (let i=0;i<10;i++){
// //   setTimeout(function() {alert(i);}, 100)
// // }


// // let y=1;
// // let x=y=2;

// // console.log(y);

// // console.log(typeof(typeof null));

// // const indices = [];
// // const array = ["a", "b", "a", "c", "a", "d"];
// // const element = "e";
// // let idx = array.indexOf(element);
// // while (idx !== -1) {
// //   indices.push(idx);
// //   idx = array.indexOf(element, idx + 1);
// // // }
// // console.log(["1", "2", "3"].map(str=>parseInt(str,10)));

// // const products = [
// //   { name: "sports car" },
// //   { name: "laptop" },
// //   { name: "phone" },
// // ];

// // console.log(products.map((product) => {
// //   product.price = 100;
// // }));


// // const numbers = [-5, 2, 8, 1, 9, 4];

// // // Sort the array in ascending order (min to max)
// // numbers.sort((a, b) => a - b);

// // // console.log(numbers); // Output: [1, 2, 4, 5, 8, 9]

// // const array = [15, 16, 17, 18, 19];

// // function reducer(accumulator, currentValue, index) {
// //   const returns = accumulator + currentValue;
// //   console.log(
// //     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
// //   );
// //   return returns;
// // }

// // array.reduce(reducer);

// // const array1 = [15, 16, 17, 18, 19];

// // // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );

// // console.log([15, 16, 17, 18, 19].reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   0,
// // ));

// const array1 = [-100, 100, -3, 45, -56, 49, 89, 'error', 15, 16, 17, 18];

// // console.log(array1.sort((a,b)=>a-b));

// console.log(Math.abs(Math.max(...array1.filter((a)=>a === +a)) - Math.min(...array1.filter((a)=>a === +a))));

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
// let str = "...";
// arr.forEach((item,idx)=>str+=` ${item}\u00B0C in ${idx+1} days ...`);
// return str;
// }

// // console.log(printForecast(data2));

// // const aloneDiv = document.querySelector(".alone");
// // setTimeout(()=>{aloneDiv.innerHTML = "her";},2000);
// // setTimeout(()=>{aloneDiv.innerHTML = "tam";},4000);
// // setTimeout(()=>{aloneDiv.innerHTML = "nocheval";},6000);
// // console.log(aloneDiv);