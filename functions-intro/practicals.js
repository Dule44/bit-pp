 // 1. Write a function that checks if a given string contains 5 digits.
    // Input: “1b895abd”
    // Output: true
    // Input: “1bser9re”
    // Output: false
    // function check5Digits(str) {
    //     var counter = 0;
  
    //     for (var i = 0; i < str.length; i++) {
    //       if (
    //         str[i] === "0" ||
    //         str[i] === "1" ||
    //         str[i] === "2" ||
    //         str[i] === "3" ||
    //         str[i] === "4" ||
    //         str[i] === "5" ||
    //         str[i] === "6" ||
    //         str[i] === "7" ||
    //         str[i] === "8" ||
    //         str[i] === "9"
    //       ) {
    //         counter++;
    //       }
    //     }
    //     if (counter === 5) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    //   console.log(check5Digits("1b8955abd"));


      function check5Digits(input, digit) {
        if (!input || input.length == 0) {
            return false;
        }
    
        var digitStr = '' + digit;
        // console.log(digitStr);
        // console.log(typeof(digitStr));
    
        var contain;
        for (var i = 0; i < input.length; i++) {
            if (input[i] == digitStr) {
                contain = true;
                break;
            } else {
                contain = false;
            }
        }
    
        return (contain ? console.log(`${input} contains ${digitStr}.`) : console.log(`${input} does not contain ${digitStr}.`));
    }
    
    check5Digits('1b895abd', 5)
    check5Digits('1bser9re', 5)
    
  

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
    // Input: “Programming in JS is super interesting!”
    // Output: “Programming in ** is super interesting!”
    

    // function replaceJS(str) {
    //     var newStr = str.replace(/JS/g, "**"); 
    //     return newStr;
    //   }
    //   console.log(replaceJS("Programming in JS is super interesting!"));

    //   function replaceJS(input, str) {
    //     if (!input || input.length == 0) {
    //         return false;
    //     }
    
    //     var rec = '';
    //     for (var i = 0; i < input.length; i++) {
    //         var checkString = input[i-1] + input[i];
    //         if (checkString == str) {
    //             rec += '**';
    //             i++
    //         } else {
    //             rec += input[i-1];
    //         }
    //     }
        
    //     return rec;
    // }
    
    // console.log(replaceJS('Programming in JS is super interesting!', 'JS'));

    //resenje Nikole 
    function replace(sentence, element, replacement) {
      if (!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement.length != 1) {
          return sentence;
      }
  
      var replacementString = '';
      for (var i = 0; i < element.length; i++) {
          replacementString += replacement;
      }
  
      var result = '';
      for (var i = 0; i < sentence.length; i++) {
          var z = i;
          var word = '';
          for (var j = 0; j < element.length; j++) {
              if (sentence[z]) {
                  word += sentence[z]
                  z++;
              }
          }
  
          if (word.toLowerCase() == element.toLowerCase()) {
              result += replacementString;
              i += (element.length - 1);
          } else {
              result += sentence[i];
          }
      }
  
      return result;
  }
  
  console.log(replace('Programming in JS is super interesting!', 'super', '*'))
  
// 3. Write a function that inserts a given character on a given position in the string.
    // Input: “Goo morning”, 4, "d"
    // Output: “Good morning”

    // function insertInString(str, pos, char) {
    //     var newStr = str.slice(0, pos - 1) + char + str.slice(pos - 1);
  
    //     return newStr;
    //   }
    //   console.log(insertInString("Goo morning", 4, "d"));

      function insertInString(input, position,  char) {
        if (!input || input.length == 0) {
            return false;
        }
    
        var rec = '';
        for (var i = 0; i < input.length; i++) {
            if (i == position - 1) {
                rec = rec + char + input[i];
            } else {
                rec += input[i];
            }
        }
    
        return rec;
    }
    
    console.log(insertInString('Goo morning', 4, 'd'));
    


// 4. Write a function that deletes a character from the given position in the string.
    // Input: “Goodd morning!”, 3
    // Output: “Good morning!”


    // function deleteInString(str, pos) {
    //     var newStr = str.slice(0, pos) + str.slice(pos + 1);
  
    //     return newStr;
    //   }
    //   console.log(deleteInString("Goodd morning!", 3));

      function deleteInString(input, position) {
        if (!input || input.length == 0) {
            return false;
        }
    
        var rec = '';
        for (var i = 0; i < input.length; i++) {
            if (i == position) {
                continue;
            } else {
                rec += input[i];
            }
        }
    
        return rec;
    }
    
    console.log(deleteInString('Goodd morning', 3));
    
  
// 5. Write a function that deletes every second element of the given array.
    // Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
    // Output: [3, 1, 90, 23, 67]
    function deleteSecond(arr) {
        var result = [];
  
        for (var i = 0; i < arr.length; i += 2) {
          result.push(arr[i]);
        }
        return result;
      }
      console.log(deleteSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

    //   function deleteSecond(input) {
    //     if (!input || input.length == 0) {
    //         return input;
    //     }
    
    //     var niz = [];
    //     for (var i = 0; i < input.length; i++) {
    //         if (i % 2 != 0) {
    //             continue;
    //         } else {
    //             niz.push(input[i]);
    //         }
    //     }
    
    //     return niz;
    // }
    
    // console.log(deleteSecond([3, 5, 1, 8, 90, -4, 23, 1, 67], 2));
    

      

 // 6. Write a function that replaces the elements of the given array between two positions
    // with their doubled values.
    // Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
    // Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
    function replaceWithDouble(arr, pos1, pos2) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
          if (i >= pos1 && i <= pos2) {
            result[i] = arr[i] * 2;
          } else {
            result[i] = arr[i];
          }
        }
        return result;
      }
      console.log(replaceWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

      // 7. Write a function that checks if every element of the first array is contained in the second array.
    // Be careful with repetitions!
    // Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
    // Output: true
    function checkIfContained(arr1, arr2) {
        // sort arr1 and arr2
        var arr1Sorted = arr1.sort(function (a, b) {
          return a - b;
        });
        var arr2Sorted = arr2.sort(function (a, b) {
          return a - b;
        });
  
        // uporedi arr1 i arr2 samo do duzine arr1
        for (var j = 0; j < arr1Sorted.length; j++) {
          if (arr1Sorted[j] !== arr2Sorted[j]) {
            return false;
          }
        }
        return true;
      }
      console.log(checkIfContained([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));


    //   function elementExist(input, elem) {
    //     var exist = false;
    //     for (let i = 0; i < input.length; i++) {
    //         if (input[i] == elem) {
    //             exist = true;
    //             return exist;
    //         }
    //     }
    //      return exist;
    // }
    
    
    // function IfArrayContainsOtherArray(input1, input2) {
    //     if (!input1 || !input2 || input1.length > input2.length) {
    //         return false;
    //     }
    
    //     var element = false;
    //     for (var j = 0; j < input1.length; j++) {
    //         if (!elementExist(input2, input1[j])) {
    //             element = false;
    //             return element;
    //         }
    
    //         element = true;
    //     }
    
    //     return element;
    // }
    
    // console.log(IfArrayContainsOtherArray([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));
    

     // 8. Write a function that sorts an array of strings by the number of appearances of the letter "a" or "A".
    // Input: ["apple", "tea",  "amazing", "morning", "JavaScript"]
    // Output: ["morning", "apple", "tea", "JavaScript", "amazing"]
    // function sortAscByA(arr) {
    //   var result = [];
    //   var arrWithCounter = [];

    //   for (var i = 0; i < arr.length; i++) {
    //     arrWithCounter[i] = [
    //       arr[i].split("a").length - 1 + arr[i].split("A").length - 1,
    //       arr[i],
    //     ];
    //   }
    //   // sort new Arr
    //   var arrWithCounterSorted = arrWithCounter.sort(function (a, b) {
    //     return a[0] - b[0];
    //   });
    //   // delete counter get result
    //   for (var i = 0; i < arr.length; i++) {
    //     result[i] = arrWithCounterSorted[i][1];
    //   }
    //   return result;
    // }

    // console.log(
    //   sortAscByA(["apple", "teaAAAAAAA", "amazing", "morning", "JavaScript"])
    // );

   // Nikolino resenje
function sortArrayByInputLetter(input, letter) {
    if (!input || input.length == 0 || !letter || letter.length != 1) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var counter = 0;
        for (var j = 0; j < input[i].length; j++) {
            var element = input[i][j];
            if (element == letter) {
                counter++;
            }
        }

        if (result.length > 1) {
            var maxCount = 0;
            for (var z = 0; z < result.length; z++) {
                if (result[z][1] > maxCount) {
                    maxCount = result[z][1]
                }
            }

            if (maxCount <= counter) {
                var newElement = [input[i], counter];
                result = [newElement].concat(result);
            } else {
                result.push([input[i], counter])
            }

        } else {
            result.push([input[i], counter])
        }
    }

    var sorted = [];
    for (var i = 0; i < result.length; i++) {
        sorted.push(result[i][0])
    }

    return sorted;
}

console.log(sortArrayByInputLetter(['apple', 'tea', 'amazing', 'morning', 'Nostradamus', 'Avala'], 'a'))

 // 9. Write a function that prints out the date of the next day.
    // Output:  25. 10. 2018.

    function nextDay() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var nextDate = day + 1 + ". " + month + ". " + year + ".";

      return nextDate;
    }

    console.log(nextDay());


  //   function prestupnaGodina(year) {
  //     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
  //         return true;
  //     } else {
  //         return false
  //     }
  // }
  
  // function nextDay(day, month, year) {
  //     if (month == 12 && day == 31) {
  //         return console.log(`01.01.${year+1}.`);
  //     }
  
  //     if (month == 01 && day == 31) {
  //         return console.log(`01.02.${year}.`);
  //     }
  
  //     if (month == 02 && day == 28 && prestupnaGodina(year)) {
  //         return console.log(`29.02.${year}.`);
  //     } else if (month == 02 && day == 28 && !prestupnaGodina(year)) {
  //         return console.log(`01.03.${year}.`);
  //     }
  
  //     if (month == 03 && day == 31) {
  //         return console.log(`01.04.${year}.`);
  //     }
  
  //     if (month == 04 && day == 30) {
  //         return console.log(`01.05.${year}.`);
  //     }
  
  //     if (month == 05 && day == 31) {
  //         return console.log(`01.06.${year}.`);
  //     }
  
  //     if (month == 06 && day == 30) {
  //         return console.log(`01.07.${year}.`);
  //     }
  
  //     if (month == 07 && day == 31) {
  //         return console.log(`01.08.${year}.`);
  //     }
  
  //     if (month == 08 && day == 31) {
  //         return console.log(`01.09.${year}.`);
  //     }
  
  //     if (month == 09 && day == 30) {
  //         return console.log(`01.10.${year}.`);
  //     }
  
  //     if (month == 10 && day == 31) {
  //         return console.log(`01.11.${year}.`);
  //     }
  
  //     if (month == 11 && day == 30) {
  //         return console.log(`01.12.${year}.`);
  //     }
  
  //     return console.log(`${day+1}.${month}.${year}.`)
  // }
  
  // nextDay(31, 12, 2022);
  // nextDay(28, 02, 2022);
  // nextDay(28, 02, 2000);
  
// 10. Write a function that prints out the date of the previous day.
    // Output:  23. 10. 2018.
    function prevDay() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var prevDate = day - 1 + ". " + month + ". " + year + ".";

      return prevDate;
    }

    console.log(prevDay());

  //   function prestupnaGodina(year) {
  //     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
  //         return true;
  //     } else {
  //         return false
  //     }
  // }
  
  // function previousDay(day, month, year) {
  //     if (month == 01 && day == 01) {
  //         return console.log(`31.12.${year-1}.`);
  //     }
  
  //     if (month == 02 && day == 01) {
  //         return console.log(`31.01.${year}.`);
  //     }
  
  //     if (month == 03 && day == 01 && prestupnaGodina(year)) {
  //         return console.log(`29.02.${year}.`);
  //     } else if (month == 03 && day == 01 && !prestupnaGodina(year)) {
  //         return console.log(`28.02.${year}.`);
  //     }
  
  //     if (month == 04 && day == 01) {
  //         return console.log(`31.03.${year}.`);
  //     }
  
  //     if (month == 05 && day == 01) {
  //         return console.log(`30.04.${year}.`);
  //     }
  
  //     if (month == 06 && day == 01) {
  //         return console.log(`31.05.${year}.`);
  //     }
  
  //     if (month == 07 && day == 01) {
  //         return console.log(`30.06.${year}.`);
  //     }
  
  //     if (month == 08 && day == 01) {
  //         return console.log(`31.07.${year}.`);
  //     }
  
  //     if (month == 09 && day == 01) {
  //         return console.log(`31.08.${year}.`);
  //     }
  
  //     if (month == 10 && day == 01) {
  //         return console.log(`30.09.${year}.`);
  //     }
  
  //     if (month == 11 && day == 01) {
  //         return console.log(`31.10.${year}.`);
  //     }
  
  //     if (month == 12 && day == 01) {
  //         return console.log(`30.11.${year}.`);
  //     }
  
  //     return console.log(`${day-1}.${month}.${year}.`)
  // }
  
  // previousDay(01, 01, 2022);
  // previousDay(01, 03, 2022);
  // previousDay(01, 03, 2000);
  // previousDay(26, 11, 2022);
  
  // 11. Write a function that prints out an array of the numbers aligned from the right side.
    // Input: [78, 111, 4, 4321]
    // Output:
    //   78
    //  111
    //    4
    // 4321

    function printNumbersAlignedToRight(arr) {
      var strArr = [];
      var result = "";
      var longestInd = 0;
      var diference = 0;

      for (var i = 0; i < arr.length; i++) {
        // convert to string
        strArr[i] = String(arr[i]);

        if (strArr[i].length > longestInd) {
          longestInd = strArr[i].length;
        }
      }

      for (var i = 0; i < strArr.length; i++) {
        diference = longestInd - strArr[i].length;
        // repeat method 
        result += " ".repeat(diference) + strArr[i] + "\n";
      }
      return result;
    }

    console.log(printNumbersAlignedToRight([78, 111, 4, 4321]));


  //   function maxElementLength(input) {
  //     var maxLength = 0;
  //     for (let i = 0; i < input.length; i++) {
  //         var x = '' + input[i];
  //         if (x.length > maxLength) {
  //             maxLength = x.length;
  //         }
  //     }
  //     return maxLength;
  // }
  
  
  // function printsEmptySpaces(num) {
  //     var strEmptySpaces = '';
  //     for (let i = 0; i < num; i++) {
  //         strEmptySpaces += ' ';
  //     }
  //     return strEmptySpaces;
  // }
  
  // function printAlignedRight(input) {
  //     console.log(input);
  //     var maxDuzina = maxElementLength(input);
  //     for (let i = 0; i < input.length; i++) {
  //         var y = '' + input[i];
  //         var emptySpaces = printsEmptySpaces(maxDuzina - y.length);
  //         var aligned = '' + emptySpaces + y;
  //         console.log('    ' + aligned);
  //     }
  // }
  
  // printAlignedRight([78, 111, 4, 4321]);