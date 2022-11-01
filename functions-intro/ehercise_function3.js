//1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

function insert(string, inString, pos) {
  if (typeof pos == "undefined") {
    pos = 0;
  }
  if (typeof inString == "undefined") {
    inString = "";
  }
  return string.slice(0, pos) + inString + string.slice(pos);
}
console.log(insert("My random string", "JS "));
console.log(insert("My random string", "JS ", 10));

//2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

function skippingElements(arr) {
  var array = arr.filter(function (val) {
    return val;
  });
  return array;
}

console.log(
  skippingElements([NaN, 0, 15, false, -22, "", undefined, 47, null])
);

//   function clearEl (arr){
//     var array2 = [];
//     for (var i = 0; i < arr.length; i++){
//        if (arr[i])
//           array2.push(arr[i]);
//     }
//     return array2;
//  }

// console.log(clearEl([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//3.Write a program to filter out falsy values from the array.

function outFalsy(arr) {
  return arr.filter(function (value) {
    return value;
  });
}

console.log(outFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//4. Write a function that reverses a number. The result must be a number.
function reverseNumber(num) {
  num = num + "";
  var output = "";
  var lastIndex = num.length - 1;

  for (var index = 0; index < num.length; index++) {
    var element = num[lastIndex - index];
    output += element;
  }

  var reversedNum = parseFloat(output);
  return reversedNum;
}

var result = reverseNumber(98765);

console.log(typeof result);
console.log(result);

// 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function lastEl(array, n) {
  if (array == null) return void 0; //Operator void procenjuje dati izraz i zatim vraca nedefinisan
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}

console.log(lastEl([7, 9, 0, -2]));
console.log(lastEl([7, 9, 0, -2], 2));

// function last(arr, n) {
//   if (n == null) {
//     return arr[arr.length - 1];
//   }
//   if (n > 0 && n < arr.length) {
//     return arr.slice(arr.length - n, arr.length);
//   }
//   if (n > arr.length) {
//     return arr;
//   }
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 2));

//6. Write a function to create a specified number of elements with pre-filled numeric value array.

function arrFilled(n, val) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = val;
  }
  return arr;
}
console.log(arrFilled(6, 0));
console.log(arrFilled(2, "none"));
console.log(arrFilled(2));

// function arrayFilled(fillNumber, item) {
//   var array = [];
//   for (var index = 0; index < fillNumber; index++) {
//     array.push(item);
//   }

//   return array;
// }

// console.log(arrayFilled(6, 0));
// console.log(arrayFilled(2, "none"));
// console.log(arrayFilled(2));

//7.  Write a function that says whether a number is perfect.
function isPerfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log(number + " is a perfect number.");
  } else {
    console.log(num + " is not a perfect number.");
  }
}

isPerfect(28);

//8. Write a function to find a word within a string.
function searchWordCount(text, word) {
  var x = 0;
  var y = 0;

  for (i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      for (j = i; j < i + word.length; j++) {
        if (text[j] == word[j - i]) {
          y++;
        }
        if (y == word.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount("The quick brown fox", "fox"));
console.log(searchWordCount("aa, bb, cc, dd, aa", "aa"));

//9.Write a function to hide email address.

function hide_email(email) {
  return (
    email.substring(0, 3) + //metoda koja izdvaja znakove izmedju dva indeksa (pozicije) iz stringa i vraca podniz.
    "..." +
    email.substring(email.indexOf("@"), email.length)
  );
}

console.log(hide_email("myemailaddress@bgit.rs"));

// protect_email = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("myemailaddress@bgit.rs"));

// 10. Write a program to find the most frequent item of an array.
function findFrequentItem(inputArr) {
  var mostFrequent = 1;
  var m = 0;
  var item;
  for (var i = 0; i < inputArr.length; i++) {
    for (var j = i; j < inputArr.length; j++) {
      if (inputArr[i] == inputArr[j]) {
        m++;
      }
      if (mostFrequent < m) {
        mostFrequent = m;
        item = inputArr[i];
      }
    }
    m = 0;
  }

  // output: item (number of times)
  return item + " ( " + mostFrequent + " times ) ";
}

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(findFrequentItem(arr1));
