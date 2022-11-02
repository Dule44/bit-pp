//1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.

function switchPlac(a) {
  var min = a[0];
  var max = a[0];
  for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    } else if (a[i] > max) {
      max = a[i];
    }
  }
  indexMin = a.indexOf(min);
  indexMax = a.indexOf(max);
  a[indexMax] = min;
  a[indexMin] = max;

  return a;
}

console.log(switchPlac([3, 500, 12, 149, 53, 414, 1, 19]));
//2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.

function calculation(a) {
  for (el in a) {
    if (a[el] / 2 + 5 == 0) {
      a[el] = 20;
    } else {
      a[el] = a[el] / 2 + 5;
    }
  }
  return a;
}

console.log(calculation([3, 500, -10, 149, 53, 414, 1, 19]));

//3.Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:

function studentGrades(names, points) {
  for (nam in names) {
    if (points[nam] <= 50) {
      console.log(
        names[nam] +
          " acquired " +
          points[nam] +
          " points and failed to complete the exam."
      );
    } else if (points[nam] > 50 && points[nam] < 61) {
      console.log(
        names[nam] + " acquired " + points[nam] + " points and earned 6"
      );
    } else if (points[nam] > 60 && points[name] < 71) {
      console.log(
        names[nam] + " acquired " + points[nam] + " points and earned 7"
      );
    } else if (points[name] > 70 && points[name] < 81) {
      console.log(
        names[nam] + " acquired " + points[nam] + " points and earned 8"
      );
    } else if (points[nam] > 80 && points[nam] < 91) {
      console.log(
        names[nam] + " acquired " + points[nam] + " points and earned 9"
      );
    } else if (points[nam] > 90 && points[nam] <= 100) {
      console.log(
        names[nam] + " acquired " + points[nam] + " points and earned 10"
      );
    }
  }
}

studentGrades(
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);

//4. Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.

function definedArray(array) {
  result = [];
  var minElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] < minElement) {
          minElement = array[j];
          position = j;
        }
      }
    }
    result[i] = minElement * 2;
    array[position] = undefined;
    minElement = Infinity;
  }
  return result;
}
console.log(definedArray([13, 11, 15, 5, 6, 1, 8, 12]));

// 5.Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function descendingArray(array) {
  result = [];
  var maxElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] > maxElement) {
          maxElement = array[j];
          position = j;
        }
      }
    }
    result[i] = maxElement;
    array[position] = undefined;
    maxElement = -Infinity;
  }
  return result;
}
console.log(descendingArray([13, 11, 15, 5, 6, 1, 8, 12]));

// 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function loopAdd() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else if (i % 2 !== 0 && i <= 500) sum -= i;
  }
  sum *= 12.5;
  return sum;
}
console.log(loopAdd());

// 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function firstTwoLetters(array) {
  var result = "";
  var string = "";
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length >= 2) {
      string = array[i];
      result += string[0] + string[1];
    }
  }
  return result;
}
console.log(
  firstTwoLetters([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);

//8.Write a program that takes a string and prints its characters out in reversed order in the console.

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("Belgrade Institute of Technology"));

// 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function possibleCombinations() {
  var count = 0;
  var result = "";
  var message;
  for (var i = 1; i <= 7; i++) {
    for (j = 1; j <= 7; j++) {
      if (i !== j) {
        result += "(" + i + "," + j + ")\n";
        count++;
      }
    }
  }
  message = result + count;
  return message;
}
console.log(possibleCombinations());



//10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).

function isPrime(num) {
  let test = 2;
  while (test < num) {
    if (num % test == 0) return false;
    test++;
  }
  return true;
}

console.log(isPrime(15));

//11.Check if a given string is a palindrome (spaces are ignored).

function palindrome(string) {
  var reverse = "";
  var stringMod = "";
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      reverse += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== " ") {
      stringMod += string[j];
    }
  }
  if (stringMod === reverse) {
    return true;
  }
  return false;
}
console.log(palindrome("eye"));
console.log(palindrome("Geek "));
console.log(palindrome("a nut for a jar of tuna"));

//12.Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.

function gcd(x, y) {
  if (!y) return y === 0 ? x : NaN;
  return gcd(y, x % y);
}
console.log(gcd(192, 42));
console.log(gcd(81, 9));
