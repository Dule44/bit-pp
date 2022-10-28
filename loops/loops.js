


//Exercises Loops
//1.
// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.


for (var i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
      console.log('Even number', i)
  } else {
      console.log('Odd number', i);
  }
}

//2.
// Write a program to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//   if (x % 3 === 0 || x % 5 === 0) {
//     sum += x;
//   }
// }
// console.log(sum);

//3.
// Write a program to compute the sum and product of an array of integers.
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
// Write a program which prints the elements of the following array as a single string.
// var x = ["1", "A", "B", "c,", "r", true, NaN, undefined];
// for (var el of x) {
//   console.log(`"${el}"`);
// }

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var output = '';

for (var i = 0; i < x.length; i++) {
   var element = x[i];
   output += element;
}

console.log(x.length);
console.log(output);




//5.
// Write a program that prints the elements of the following array.
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
//Write a program that outputs the sum of squares of the first 20 numbers.
var sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i * i;
  console.log(sum);
}

// var sum = 0;    

// for (var i = 0; i <= 20; i++) {
//     sum += arr[i] * arr[i];
// }

// console.log(sum);

//7.
// Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.
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
// Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for (var i = 1; i < 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//----------------------------------------------------


