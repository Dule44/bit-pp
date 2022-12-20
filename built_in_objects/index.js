//1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1];

function duplicates(arr) {
  var newArr = [];
  arr.forEach(function (el) {
    newArr.push(el, el);
  });
  return newArr;
}

console.log(duplicates(arr));

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

var arr2 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArr = arr.filter(function (item, pos) {
  return arr.indexOf(item) === pos;
});

function compNumb(a, b) {
  return a - b;
}

console.log(newArr.sort(compNumb));

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

//a.
var arr3 = [1, 2, 9, 2, 1];

function oddElements(input) {
  if (input.length % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(oddElements(arr3));

//b.

var arr4 = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function middleElements(input) {
  var output;
  if (input.length % 2 === 0) {
    return "Array has even number od elements!!";
  } else {
    output = input.length / 2 + 0.5;
    return output;
  }
}

console.log(middleElements(arr4));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

var arr5 = [1, 4, -2, 11, 8, 1, -2, 3];

function smallestElement(input) {
  var minValue = Math.min(...input);
  var minLastIndex = input.lastIndexOf(minValue);
  return { minValue, minLastIndex };
}

console.log(smallestElement(arr5));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

//a.

var arr6 = [2, 3, 8, -2, 11, 4];
var value = 6;

function given(inputOne, inputTwo) {
  var output = inputOne.filter(function (number) {
    return number < inputTwo;
  });

  return output;
}

console.log(given(arr6, value));

//b.

var arr7 = ["JavaScript", "Programming", "fun", "product"];
var str = "pro";

function findElement(array, string) {
  return array.filter(function (el) {
    return el.slice(0, string.length).toLowerCase() === string.toLowerCase();
  });
}

console.log(findElement(arr7, str));

//c.

var arr8 = [1, 2, 4, 8, 6, 7, 9, 11];

function filterEl(arr, val, fun) {
  return fun(arr, val);
}

var a = filterEl(arr7, "java", findElement);
var b = filterEl(arr8, 8, given);

console.log(a);
console.log(b);

//6.
// a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b.	Write a function that calculates the total price of your shopping list.
// c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
// d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

//a.
var productLists = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

//b.
function totalPrice(list) {
  var sum = 0;

  for (var i in list) {
    sum += list[i].price;
  }

  return sum;
}

console.log(totalPrice(productLists));

//c.

function averagePrice(sum) {
  return Math.round(sum / productLists.length);
}

console.log(averagePrice(totalPrice(productLists)));

//d.

function mostExpensive(product) {
  var expensive = product[0].price;

  for (var i in product) {
    if (product[i].price > expensive) {
      expensive = product[i].price;
    }
  }

  return expensive;
}

console.log(mostExpensive(productLists));

//7.
// a.	Write a function that checks if a given string is written in all capitals.
// b.	Write a function that checks if a given string contains any digits.
// c.	Write a function that checks if a given string is a valid hexadecimal color.
// d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018.
// e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

//a.

var string = "DARIJA";

function allCapitals(input) {
  var output;
  var stringUpperCase = input.toUpperCase();
  if (stringUpperCase === input) {
    output = "String is written in all capitals";
  } else {
    output = "String isn't written in all capitals";
  }

  return output;
}

console.log(allCapitals(string));

//b.

function anyDigits(input) {
  for (var i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(input[i]))) {
      return true;
    }
  }
  return false;
}

console.log(anyDigits(string));

//c.
function isHexadecimal(input) {
  if (input.charAt(0) === "#" && input.length === 7) {
    return "it is valid color";
  } else return " it is not valid color";
}
console.log(isHexadecimal("ff5733"));
//d.

function isNumbOfInterval(numb, start, end) {
  if (numb >= start && numb <= end) {
    return true;
  } else return false;
}

console.log(isNumbOfInterval(1998, 1900, 2018));

//e.
function Validator(strOne, strTwo, strThree, numb, start, end) {
  this.stringValidator = allCapitals(strOne);
  this.passwordValidator = anyDigits(strTwo);
  this.colorValidator = isHexadecimal(strThree);
  this.yearValidator = isNumbOfInterval(numb, start, end);
}

var submit = new Validator("Milan", "audia6", "#0080ff", 1988, 1900, 2022);

console.log(submit);

// 8. Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

function daysToBirthday(birthday) {
  let today = new Date();
  let birthdate = new Date(birthday);
  let diffInTime = birthdate.getTime() - today.getTime();
  let diffInDays = diffInTime / (1000 * 3600 * 24);
  return Math.ceil(diffInDays);
}

console.log(daysToBirthday("25 February"));

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function calculateTripDuration(startT, endT) {
  var ar = startT.split(":");
  var ar2 = endT.split(":");

  console.log(ar, ar2);

  var start = new Date(0, 0, 0, ar[0], ar[1], ar[2]);
  var end = new Date(0, 0, 0, ar2[0], ar2[1], ar2[2]);

  console.log(start, end);

  var diff = end.getTime() - start.getTime();

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((diff % (1000 * 60)) / 1000);

  return hours + " hours " + min + " minutes " + sec + " seconds ";
}

console.log(calculateTripDuration("8:22:13", "11:43:22"));

// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

//a.
function Point(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

const point1 = new Point(3, 5, 1);
const point2 = new Point(1, 2, 3);

//b.
function calculateDistance(point1, point2) {
  const xDiff = point1.x - point2.x;
  const yDiff = point1.y - point2.y;
  const zDiff = point1.z - point2.z;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff);
}

const distance = calculateDistance(point1, point2);
console.log(distance);

// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

//a.
//b.
function generator(input1, input2) {
  return Math.floor(Math.random() * (input2 - input1 + 1) + input1);
}

console.log(generator(5, 20));
console.log(generator(50, 100));

//c.
function arrayNumb(numb, callback) {
  var array = [];
  for (var i = 0; i < 5; i++) {
    array[i] = Math.floor(callback() * numb);
  }
  return array;
}

console.log(
  arrayNumb(50, function () {
    return Math.random();
  })
);

// 12. Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shufflesEl(arr) {
  var newArr = [];
  newArr = arr.sort(function(el) {
    el = Math.floor(Math.random() * arr.length);
    return (newArr[newArr.length] = arr[el]);
  });

  return newArr;
}

console.log(shufflesEl([3, 6, 11, 2, 9, 1]));
