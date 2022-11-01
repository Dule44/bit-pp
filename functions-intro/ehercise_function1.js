//1. Write a program that calculates the maximum of two given numbers.

function maximum(a, b) {
    if (a > b) {
        return a;
    }else{

    return b;
  }
}

console.log(maximum(11, 8));
//2.Write a program that checks if a given number is odd.

function isOdd(n) {
  return n % 2 !== 0;
}


console.log(isOdd(5));

//3. Write a program that checks if a given number is a three digit long number.

// function givenNumber(num) {
//   if (num > 99 && num < 1000) {
//     console.log("%d is a 3 digit number", num);
//   } else {
//     console.log("%d is not a 3 digit number", num);
//   }
//   return num;
// }

// var result = givenNumber(3555);
// console.log(result);


function checkDigitLength(a) {
  return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
  console.log('The digit length is', digitLength);
}

//4. Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean() {
  var args = arguments;
  var result = 0;

  for (var i = 0; i < args.length; i++) {
      var value = args[i + ''];
      result += value;
  }

  return result / args.length;
}


console.log(arithmeticMean(3, 4, 5, 18, 22))

//5. Write a program that draws a square of a given size. For example, if the size of square
//is 5 the program should draw:

function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);

//6.Write a program that draws a horizontal chart representing three given values. For
//example, if values are 5, 3, and 7, the program should draw:


function draw(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '*'
    }

    console.log(result);
}

function drawLines() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + '']
        draw(value);
    }
}

drawLines(5, 3, 7)

//7. Write a program that calculates a number of digits of a given number.

function countDigit(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}
 

console.log(countDigit(5867));
//8.Write a program that calculates a number of appearances of a given number in a given
//array.
// var a =[2, 4, 7, 8, 7, 7, 1];
// var e = 7;

function givNumber(a, e) {
  var res = 0;
  for (let i = 0; i < a.length; i++) {
    if (e == a[i]) res++;
  }
  return res;
}

console.log(givNumber([2, 4, 7, 8, 7, 7, 1], 7));

//9. Write a program that calculates the sum of odd elements of a given array.



function oddElelements(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      sum += numbers[i];
      
    }
  }
  return sum;
}

console.log(oddElelements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



//10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

function count(s, l)
    {
        var res = 0;
 
        for (let i = 0; i < s.length; i++)
        {
            // checking character in string
            if (s.charAt(i).toLowerCase() == l.toLowerCase())
            res++;
        }
        return res;
    }
     
     
       
        console.log(count("Darija voli da se seta", "d"));


// function sumOfLetterAppearences(inputString, inputLetter) {
//   var counter = 0;
//   for (var i = 0; i < inputString.length; i++) {
//       if (inputString[i].toLowerCase() == inputLetter.toLowerCase()) {
//           counter++;
//       }
//   }

//   return counter;
// }

// console.log(sumOfLetterAppearences('It\'s a beautiful day', 'i'));



//11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.


 function conc(a, b) {
    var result = ""; 
    for(var i =0; i<b; i++){
     result +=a
  }
  return result
    }
console.log(conc('abc',4));

