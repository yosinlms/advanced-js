// advanced array
const array = [1, 2, 3, 4, 5];
const double = [];
const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// penulisan jika menggunakan 2 parameter saja
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log(double);

//map jika menggunakan 2 parameter
// const mapArray = array.map((num) => {
//   return num * 2;
// });

// map
const mapArray = array.map((num) => num * 2);
console.log(" ini contoh map", mapArray);

// filter
const filterArray = array.filter((num) => num > 3);
console.log("ini contoh filter", filterArray);

// reduce
const reduceArray = array.reduce((acc, num) => {
  return acc + num;
});
console.log("ini contoh reduce", reduceArray);
