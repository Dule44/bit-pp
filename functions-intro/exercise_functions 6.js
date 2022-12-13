//1.  Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

function counterVowels(input) {
  let vowelsNumber = 0;
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "A" ||
      input[i] === "E" ||
      input[i] === "I" ||
      input[i] === "O"
    ) {
      vowelsNumber++;
    }
  }
  return vowelsNumber;
}

console.log(counterVowels("Darija skace Milanu na glavu"));

//2. Write a function that combines two arrays by alternatingly taking elements.

function alternatingly(input1, input2) {
  let arr = [];
  for (let i = 0; i < input1.length; i++) {
    arr.push(input1[i]);
    arr.push(input2[i]);
  }
  return arr;
}

console.log(alternatingly(["a", "b", "c"], [1, 2, 3]));

//3. Write a function that rotates a list by k elements.

function rotates(input, k) {
  for (let i = 0; i < k; i++) {
    let element = input[0];
    input.shift(0);
    input.push(element);
  }
  return input;
}

console.log(rotates([1, 2, 3, 4, 5, 6], 3));

//4. Write a function that takes a number and returns array of its digits.

function arrayDigits(input) {
  let arr = [];
  let a = "" + input;
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i]);
  }
  return arr;
}

console.log(arrayDigits(123456789));

//5. Write a program that prints a multiplication table for numbers up to 12.
function multiplicationTable(input) {
  for (let i = 1; i <= input; i++) {
    let table = "";
    for (let j = 1; j <= input; j++) {
      table += j * i + " ";
    }
    console.log(table);
  }
}

console.log(multiplicationTable(12));

//6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function celsiusToFahrenheit(input) {
  let result = input * 1.8 + 32;
  return result;
}

console.log(celsiusToFahrenheit(45));

// function celsiusToFahrenheit2(c) {
//     const result = c * 9 / 5 + 32;
//     console.log(`${c} degrees Celsius is ${result} degrees Fahrenheit`);
//     }

// celsiusToFahrenheit2(45);

//7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function maximumEl(input) {
  let maximum = input[0];
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] !== NaN &&
      input[i] !== undefined &&
      input[i] !== Infinity &&
      input[i] > maximum
    ) {
      maximum = input[i];
    }
  }
  return maximum;
}

var arr = [2, 23, NaN, 8, undefined, -15, Infinity];

console.log(maximumEl(arr));

//8. Write a function to find the maximum and minimum elements. Function returns an array.

function maximumMinimum(input) {
  let maximum = input[0];
  let minimum = input[0];

  let arr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > maximum) {
      maximum = input[i];
    } else if (input[i] < minimum) {
      minimum = input[i];
    }
  }
  arr.push(minimum);
  arr.push(maximum);
  return arr;
}

console.log(maximumMinimum([2, -5, 4, 10, 29, 23, -3, -1]));

//9.Write a function to find the median element of array.

function median(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));

//   function median2(input) {
//     let medianElm;
//     if (input.length % 2 == 0) {
//         let x = input.length / 2;
//         medianElm = (input[x-1] + input[x]) / 2;
//         return medianElm;
//     } else {
//         let y = parseInt(input.length / 2);
//         medianElm = input[y];
//         return medianElm;
//     }
// }

// var n = [1, 11, -21, 8, 23, -8, 10];
// console.log(median2(n));

//10. Write a function to find the element that occurs most frequently.

function mostFrequently(input) {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < input.length; i++) {
    for (var j = i; j < input.length; j++) {
      if (input[i] == input[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        item = input[i];
      }
    }
    m = 0;
  }
  console.log(item + " ( " + mf + " times ) ");
}

mostFrequently(["Milan", "Darija", "Darija", "Branislav"]);
mostFrequently([4, 2, 2, 3, 4, 4, 4, 5, 6, 8, 8, 9]);

// Exercise 11 - Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
function firstMiddleLast(input) {
  if (input.length == 0) {
    return console.log(input);
  } else if (input.length % 2 == 0) {
    return console.log(
      "First elemet - " +
        input[0] +
        "\nLast element - " +
        input[input.length - 1]
    );
  } else {
    return console.log(
      "First elemet - " +
        input[0] +
        "\nMiddle element - " +
        input[parseInt(input.length / 2)] +
        "\nLast element - " +
        input[input.length - 1]
    );
  }
}

firstMiddleLast(["pear", "apple", "orange", "apple"]);
firstMiddleLast([1, 2, 2, 3, 4, 5, 3]);
firstMiddleLast([]);

// Exercise 12 - Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
function average() {
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let n = arguments.length;
  return sum / n;
}

console.log(average(1, 2, 3, 4));
console.log(average(3, 5, 8, 14, 20));


// Exercise 13 - Write a function to find all the numbers greater than the average.
function average() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let n = arguments.length;
  console.log('Average : ', sum/n);
  return (sum / n);
}

function greaterThanAverage() {
  let a = average(...arguments);
  for (let j = 0; j < arguments.length; j++) {
      if (arguments[j] > a) {
          console.log(arguments[j]);
      }
    }
  }

greaterThanAverage(1, 2, 3, 4, 7, 10);


// Exercise 14 - The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40
function massIndex(weight, height) {
  let bmi = weight / (height/100)**2;
  console.log('Weight : ' + weight + 'kg - ' + 'Height : ' + height + 'cm - ' + 'BMI :' + bmi);
  if (bmi < 15) {
      console.log('● Starvation: less than 15');
  } else if (bmi >= 15 && bmi < 17.5) {
      console.log('● Anorexic: less than 17.5');
  } else if (bmi >= 17.5 && bmi < 18.5) {
      console.log('● Underweight: less than 18.5');
  } else if (bmi >= 18.5 && bmi < 25) {
      console.log('Ideal: greater than or equal to 18.5 but less than 25');
  } else if (bmi >= 25 && bmi < 30) {
      console.log('● Overweight: greater than or equal to 25 but less than 30');
  } else if (bmi >= 30 && bmi < 40) {
      console.log('● Obese: greater than or equal to 30 but less than 40');
  } else {
      console.log('● Morbidly obese: greater than or equal to 40');
  }
}

massIndex(85, 188);


// Exercise 15 - Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets
// printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function listOfStrings (input) {
  // Trazi najduzi string
  let maxLengthElem = 0;
  for (let i = 0; i < input.length; i++) {
      if (input[i].length > maxLengthElem) {
          maxLengthElem = input[i].length;
      }
  }
  console.log('Najduzi string u nizu: ' + maxLengthElem);

  // Stampa prve zvezdice
  let zvezdice = ''
  for (let j = 0; j < maxLengthElem + 4; j++) {
      zvezdice += '*';
  }
  console.log(zvezdice);

  // Stampa elemente niza
  for (let m = 0; m < input.length; m++) {
      let brojPraznihMesta = maxLengthElem - input[m].length;
      let praznaMesta = '';
      for (let p = 0; p < brojPraznihMesta; p++) {
          praznaMesta += ' ';
      }
      console.log('* ' + input[m] + praznaMesta + ' *');
  }

  // Stampa zadnji red
  console.log(zvezdice);
}

var arr = ["Hello", "World", "in", "a", "frames"];
listOfStrings(arr);

//Exercises 7


//  1. - Write a function named tellFortune that:
// ● takes 4 arguments: number of children, partner's name, geographic location, job title.
// ● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.";
// Call that function 3 times with 3 different values for the arguments.
function tellFortune (children, partner, location, job) {
  console.log("You will be in " + location + ", and married to " + partner + " with " + children + " kids.");
  console.log("Your job title would be: ", job);
}

tellFortune(2, 'Jelena', 'Nis', 'doctor');


// 2. - Write a function named calculateDogAge that:
// ● takes 1 argument: your puppy's age.
// ● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// ● outputs the result to the screen like so: "Your doggie is NN years old in dog years"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyAge, conversion = 7) {
  let x = puppyAge * conversion;
  console.log("Your doggie is " + x + " years old in dog years");
}

calculateDogAge(5);
calculateDogAge(5, 6);


// 3. - Write a function named calculateSupply that:
// ● takes 2 arguments: age, amount per day.
// ● calculates the amount consumed for rest of the life (based on a constant max age).
// ● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, amount) {
  let circleNum = Math.floor(amount);
  const maxAge = 75;
  let restLife = maxAge - age;
  let groceries = restLife * 365 * circleNum;
  console.log("You will need " + groceries + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(37, 100);
calculateSupply(37, 50.45);


// 4. - Create a function called celsiusToFahrenheit:
// ● Store a celsius temperature into a variable.
// ● Convert it to fahrenheit and output "NN°C is NN°F."
//
// Create a function called fahrenheitToCelsius:
// ● Now store a fahrenheit temperature into a variable.
// ● Convert it to celsius and output "NN°F is NN°C.";
// *NN is actual temperature you need to convert

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32
function celsiusToFahrenheit(input) {
  let a = input;
  let far = a * 1.8 + 32;
  console.log(a + "°C is " + far + "°F.")
}

celsiusToFahrenheit(35);

function fahrenheitToCelsius(input) {
  let a = input;
  let cel = ((a - 32) / 1.8).toFixed(2); 
  console.log(a + "°F is " + cel + "°C.")
}

fahrenheitToCelsius(83);


// 5. Create a function that validates a password to conform to the following rules:
// ● Length between 6 and 24 characters,
// ● At least one uppercase letter (A-Z).
// ● At least one lowercase letter (a-z).
// ● At least one digit (0-9).
// ● Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// ● Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
// ● Examples: validatePassword("P1zz@") ➞ false // Too short.
// ● validatePassword("iLoveYou") ➞ false // Missing a number.
// ● validatePassword("Fhg93@") ➞ true // OK!
function validatePassword(input) {

  if (input.length < 6) {
      console.log("Too short");
      return false;
  } 
  
  if (input.length > 24) {
      console.log("Too long");
      return false;
  }

  if (!/[A-Z]/.test(input)) {
      console.log("Should contain at least one uppercase letter");
      return false;
  }

  if (!/[a-z]/.test(input)) {
      console.log("Should contain at least one lowercase letter");
      return false;
  }

  if (!/[0-9]/.test(input)) {
      console.log("Should contain at least one digit");
      return false;
  }

  for (let i = 2; i < input.length; i++) {
      if (input[i] == input[i-1] && input[i] == input[i-2]){
          console.log("Maximum of 2 repeated characters");
          return false;
      }
  }


  return console.log("The password is correct");
}

validatePassword("MRHV0CDsfeegNCDMT");


// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

function isPrime(a) {
  for (i = 2; i < a; i++) {
      if (a % i == 0) {
          return false; 
      }
  }   
  return true;
}

function primeNumbers(input) {
  let num = 0;
  let arr = [];
  for (j = 2; j <= input; j++) {
      if (isPrime(j)) {
          num++;
          arr.push(j);
      }
  }
  return console.log(num + ' // ' + arr);
}

primeNumbers(10);
primeNumbers(20);
primeNumbers(30);


// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
function diamondArrays(input) {
  let arr = [];

  for (let i = 1; i <= input; i++) {
      arr.push(input);
  }

  for (let j = input-1; j >= 1; j--) {
      for (let x = 1; x <= j; x++) {
          arr.push(j);
          arr.unshift(j);
      }
  }

  return arr;
}

console.log(diamondArrays(1));
console.log(diamondArrays(2));
console.log(diamondArrays(5));
