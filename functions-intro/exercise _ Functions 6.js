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

console.log(maximumMinimum([2,-5,4,10,29,23,-3,-1]));

//9.Write a function to find the median element of array.

function median(arr){
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
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
    console.log(item + " ( " + mf + " times ) ") ;
}
  
mostFrequently(['Milan', 'Darija', 'Darija', 'Branislav']); 
mostFrequently([4, 2, 2, 3, 4, 4, 4, 5, 6, 8, 8, 9]); 




// Exercise 11 - Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
function firstMiddleLast(input) {
  if (input.length == 0) {
      return console.log(input);
  } else if (input.length % 2 == 0) {
      return (
          console.log('First elemet - ' + input[0] + '\nLast element - ' + input[input.length-1])
      )
  } else {
      return (
          console.log('First elemet - ' + input[0] + '\nMiddle element - ' + input[parseInt(input.length/2)] + '\nLast element - ' + input[input.length-1])
      )
  }
}

firstMiddleLast(['pear', 'apple', 'orange', 'apple'])
firstMiddleLast([1, 2, 2, 3, 4, 5, 3])
firstMiddleLast([])



// Exercise 12 - Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
function foo() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}