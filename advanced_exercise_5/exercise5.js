// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames (menambahkan tanda ! kedalam masing masing username)

// const newArray = [];
// array.forEach((item) => {
//   newArray.push(item.username + "!");
// });
// console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
// cara2
// const newArray = array.map((user) => user.username + "?");

// cara 1
const newArray = array.map((user) => user.username + "?");
console.log(newArray);

// cara 2
// const mapArray = array.map((user) => {
//   let { username } = user;
//   return username + "?";
// });

//Filter the array to only include users who are on team: red
// const redColor = array.filter((user) => {
//   return user.team === "red";
// });
// console.log(redColor);

//Find out the total score of all users using reduce
const counterScore = array.reduce((acc, user) => {
  return acc + user.score;
}, 0);
console.log(counterScore);

// if find only the red team score
const redTeamScore = array.reduce((acc, user) => {
  if (user.team === "red") {
    return acc + user.score;
  }
  return acc;
}, 0);
console.log(redTeamScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray3 = arrayNum.map((num, i) => {
  console.log(num, i);
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
