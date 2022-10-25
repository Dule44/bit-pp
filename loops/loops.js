

//Exercises

//.1

// for (var num = 1; num <= 10; num++) {
//   var sumn = 0;
//   sumn += num;
//   console.log(sumn);
// }

var sumn = 0;
for (var num = 1; num <= 10; num++){
  sumn += num;
console.log(sumn);
}



//2.

// var n = 2;

// var cube;

// var cube = n * n * n;

// console.log("Cube of a Number = " + cube);

for (var n = 2; n <= 2; n++) {
  var multi = 1;
  multi *=  n * n * n;
  console.log(multi);
}

//   var sumn = 0;

//   for (var i = 2; i <= 2; i++) {
//     sumn += Math.pow(i, 3);
//     console.log(sumn);
//   }

//3.

const number = 5;

if (number < 0) {
  console.log("Error! Factorial for negative number does not exist.");
} else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
} else {
  var fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}

//4.

for (var i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("The even numbers are " + i);
  }
}

//5.

var value = 232;
var sumn = 0;
while (value) {
  sumn += value % 10;
  // console.log(sumn);
  value = Math.floor(value / 10);
  // console.log(value);
}

// console.log(sumn);
console.log("Sum of digits in number 232 is " + sumn);


//6.
// var word = "Eclip542se";
// var numb = "542";
// var letter_count = 0;

// for (var i = 0; i < word.length; i++) {
  
//    if (word[i] == 1 ||
//     word[i] == 2 ||
//     word[i] == 3 ||
//     word[i] == 4 ||
//     word[i] == 5 ||
//     word[i] == 6 ||
//     word[i] == 7 ||
//     word[i] == 8 ||
//     word[i] == 9 ||
//     word[i] == 0 ) {
//     continue;
//     } else {
//     letter_count += 1;
//     }
// }
// console.log(`There is ${letter_count}  letters in this word`);

// for (var i = 0; i < word.length; i++) {
//   if (word[i] == 4) {
//     continue;
//   } else {
//     letter_count += 1;
//   }
// }
// console.log(`There is ${letter_count}  letters in this word`);

//7.

var array = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
for( var i = 0; i <= array.length; i++){
  if (array[i] === "c"){
    console.log(i);
  }
}

//-------------------------------------------------------------
for (var x = 0; x <= 10; x++) {
  console.log(x * x);
}

//Exercises Loops
//1.

for (var x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

//2.

// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//   if (x % 3 === 0 || x % 5 === 0) {
//     sum += x;
//   }
// }
// console.log(sum);

//3.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var s = 0;
var p = 1;
var i;
for (i = 0; i < array.length; i += 1) {
  s += array[i];
  p *= array[i];
}
console.log("Sum : " + s + " Product :  " + p);

//4.

var x = ["1", "A", "B", "c,", "r", true, NaN, undefined];
for (var el of x) {
  console.log(`"${el}"`);
}

//5.

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];

for (var i in a) {
  console.log(`elem ${i}`);
  for (var c in a[i]) {
    console.log(` ${a[i][c]}`);
  }
}

//6.
var sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i * i;
  console.log(sum);
}

//7.

var students = [
  ["David", 80],
  ["Marko", 77],
  ["Dany", 88],
  ["John", 95],
  ["Thomas", 68],
];

var avgmarks = 0;

for (var i = 0; i < students.length; i++) {
  avgmarks += students[i][1];
  var avg = avgmarks / students.length;

  if (avg < 60) {
    console.log("Grade : F");
  } else if (avg < 70) {
    console.log("Grade : D");
  } else if (avg < 80) {
    console.log("Grade : C");
  } else if (avg < 90) {
    console.log("Grade : B");
  } else if (avg < 100) {
    console.log("Grade : A");
  }
}

console.log("Average grade: " + avgmarks / students.length);

//8.

for (var i = 1; i < 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//----------------------------------------------------

//Exercises Loops2
//1.
var e = 3;
var a3 = [5, -4.2, 3, 7];

for (var i = 0; i < a3.length; i++) {
  var num = a3[i];
  if (num == e) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

//2.

var arr3 = [-3, 11, 5, 3.4, -8];

// arr3.forEach(function (item) {
//   if (item > -1) {
//     console.log(item * 2);
//   }
// });

for (var i = 0; i <= arr3.length; i++) {
  if (arr3[i] > 0) {
    arr3[i] *= 2;
    console.log(arr3);
  }
}

//3.

var arr4 = [4, 2, 2, -1, 6];

for (var i = 0; i <= arr4.length; i++) {
  if (arr4[i] < arr4[i + 1]) {
    console.log(arr4[i], i);
  }
}





//5.
var arr5 = [3, 11, -5, -3, 2];

var positive_sum = 0;

for (var i = 0; i < 5; i++) {
  if (arr5[i] > 0) {
    positive_sum += arr5[i];
  }
}

console.log(positive_sum);

//6.

var arr6 = [2, 4, -2, 7, -2, 4, 2];

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] != arr6[i]) {
    console.log("The array is no symmetric.");
  } else {
    console.log("The array is symmetric.");
  }
}

//7.

var arrOne = [4, 5, 6, 2];
var arrTwo = [3, 8, 11, 9];

// var combined = [];

// for (var i = 0; i < arrOne.length; i++) {
//   for (var j = 0; j < arrTwo.length; i++) {
//     combined.push(arrOne[i] + arrTwo[i]);
//   }
// }
for (var i = 0; i < arrTwo.length; i++) {
  arrOne.push(arrTwo[i]);
}
console.log(arrOne);


//8.
var arr = [
  [4, 5, 6, 2],
  [3, 8, 11, 9],
];
var arrConc = [];

for (var i = 0; i < arr.length; i++) {
  arrConc = arrConc.concat(arr[i]);
}
console.log(arrConc);

//9.

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var newArray = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] !== e) {
    newArray.push(a[i]);
  }
}
console.log(newArray);

//10.
var e = 78;
var newArr = [];
var pos = 4;
var a = [2, -2, 33, 12, 5, 8];

for (i = 0; i < a.length; i++) {
  if (i < pos - 1) newArr[i] = a[i];
  else if (i == pos - 1) newArr[i] = e;
  else newArr[i] = a[i];
}

console.log(newArr);
