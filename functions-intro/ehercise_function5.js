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

//8.Write a program that takes a string and prints its characters out in reversed order in the console.

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("Belgrade Institute of Technology"));


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

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
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
