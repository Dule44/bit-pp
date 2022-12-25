// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 -&gt; 54321

function reverseNumbers(numb) {
  var n = numb + "";
  return Number(n.split("").reverse().join(""));
}
var reverse = reverseNumbers(12345);
console.log(reverseNumbers(12345));
console.log(typeof reverse);

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -&gt; “abeemrstw”

function alphabetical(str) {
  var small = str.toLowerCase();
  var ar = small.split("");
  var sorted = ar.sort();
  return sorted.join("");
}

console.log(alphabetical("Webmaster"));

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
//Republic Of Serbia  --- Rbceilpu Of Sabeir;

function alphabetize(str) {
  var newString = "";
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var sor = arr[i].split("").sort().join("");
    newString += sor + " ";
  }
  return newString;
}

console.log(alphabetize("Republic Of Serbia"));

// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" --- [ John","Snow" ]

function arrWords(str) {
  return str.split(" ");
}

console.log(arrWords("John Snow"));

// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" --- "John S."

function abbreviatedForm(str) {
  var arr = str.split(" ");
  var surname = arr[1].slice(0, 1).concat(".");
  return arr[0] + " " + surname;
}

console.log(abbreviatedForm("John Snow"));

//6.Write a function that adds string to the left or right of string, by replacing it’s characters.

function addStrings(change, add, el) {
  var cutLength = add.length;

  if (el === "l") {
    return (editText = change.slice(0, -cutLength) + add);
  } else if (el === "r") {
    return (editText = add + change.slice(cutLength));
  }
}
console.log(addStrings("0000", "123", "l"));
console.log(addStrings("00000000", "123", "r"));

// 7. Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" --->  "Js string exercises"

function capitalize(str) {
  var firstLetter = str.slice(0, 1);
  var restLetters = str.slice(1, str.length);

  return firstLetter.toUpperCase() + restLetters;
}

console.log(capitalize("js string exercises"));

// 8. Write a function to hide email addresses to protect them from unauthorized users.
//somerandomaddress@example.com --> somerand...@example.com;

function hideEmail(str) {
  var length = str.length;
  console.log(length);
  var sign = str.indexOf("@");
  var dots = "...";
  var lastPart = str.slice(sign, length);
  var firstPart = str.slice(0, sign).slice(-sign, sign - 3);

  return firstPart + dots + lastPart;
}

console.log(hideEmail("aleks292010@hotmail.com"));

// 9. Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
// var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var LOWER = "abcdefghijklmnopqrstuvwxyz";
// The Quick Brown Fox" --> "tHE qUICK bROWN fOX";

function swapCase(str){
  var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LOWER = "abcdefghijklmnopqrstuvwxyz";
  var result = "";
  
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (UPPER.indexOf(ch) >= 0) {
      result += ch.toLowerCase();
    } else if (LOWER.indexOf(ch) >= 0) {
      result += ch.toUpperCase();
    } else {
      result += ch;
    }
  }
  return result;
}


console.log(swapCase("The Quick Brown Fox")); 