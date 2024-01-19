// // Menampilkan hasil di console
// console.log(result);

// // Menampilkan hasil pada elemen HTML
// document.getElementById("result").innerText = "Hasil: " + result;

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const result = curriedMultiply(3)(5);

// currying 2
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = curryAdd(1)(2)(3);

// compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose = (sum, sum)(5);
