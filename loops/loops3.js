//Exercises

//.1
// Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);




//2.
// Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
// var n = 2;

// var cube;

// var cube = n * n * n;

// console.log("Cube of a Number = " + cube);

for (var n = 2; n <= 2; n++) {
  var multi = 1;
  multi *=  n * n * n;
  console.log(multi);
}

// var num = 3;
// var result = 1;
// for (var i = 0; i < 3; i++) {
//     result *= num;
// }

// console.log(result);

//   var sumn = 0;

//   for (var i = 2; i <= 2; i++) {
//     sumn += Math.pow(i, 3);
//     console.log(sumn);
//   }

//3.
// Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var input = 4;
var sum = 1;
for (var i = input; i > 0; i--) {
    sum *= i;
}

console.log(sum);

//4.
// Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

var input = 5;
var resultString = '';
for (var i = 1; i <= input * 2; i++) {
    if (i % 2 === 0) {
        if (i < input * 2) {
            resultString += i + ','
        } else if (i == input * 2) {
            resultString += i + '.'
        }
    }
}

console.log('The even numbers are', resultString)

//5.
// Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var s = 232;
var result4 = 0;

while (s > 1) {
    result4 += s % 10;       // uvecavanje rezultata za narednu cifru
    s = s / 10 - (s % 10) / 10; //umanjenje dobijenog broja za vrednost iza nule, dobijamo int
}
console.log("Their sum is:  " + result4);

var sum = 0;
s = 232;
var stringArray = s.toString();
for (var i = 0; i < stringArray.length; i++) {
    var num = Number(stringArray[i]);
    sum += num;
}

console.log(sum);

//6.
//Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

// var word = 'Eclip542se'
// var counter = 0;
// for(var i=0; i<word.length;i++) {
//     if(word[i].toLowerCase().match(/[a-z]/i)) {
//         counter++;
//     }
// }

// console.log(counter);

var word = "Eclip542se";
var numb = "542";
var letter_count = 0;

for (var i = 0; i < word.length; i++) {
  
   if (word[i] == 1 ||
    word[i] == 2 ||
    word[i] == 3 ||
    word[i] == 4 ||
    word[i] == 5 ||
    word[i] == 6 ||
    word[i] == 7 ||
    word[i] == 8 ||
    word[i] == 9 ||
    word[i] == 0 ) {
    continue;
    } else {
    letter_count += 1;
    }
}
console.log(`There is ${letter_count}  letters in this word`);


//7.
//Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].
// var array = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
// for( var i = 0; i <= array.length; i++){
//   if (array[i] === "c"){
//     console.log(i);
//   }
// }

var inputArray = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
var a = 'c';
var index = 0;
for (index =0; index<inputArray.length;index++) {
    if (inputArray[index] === a) {
        break;
    }
}

console.log(index);

//-------------------------------------------------------------
