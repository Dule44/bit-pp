//1.  Write a program that checks if a given element e is in the array a.

function givenElemet(a, e) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] == e) {
      return "yes";
    }
  }
  return "no";
}

console.log(givenElemet([5, -4.2, 3, 7], 3));
console.log(givenElemet([5, -4.2, 18, 7], 3));

//2. Write a program that multiplies every positive element of a given array by 2.
function multiplies(array, input) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 0) {
      array[index] = element * input;
      return array;
    }
  }
}

console.log(multiplies([-3, 11, 5, 3.4, -8], 2));

//3 .Write a program that finds the minimum of a given array and prints out its value index.

function minimum(a) {
  var min = 0;
  var index = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      min = a[i];
      index = i;
    }
  }

  return console.log(min, index);
}

minimum([4, 2, 2, -1, 6]);

//4. Write a program that finds the second smallest number and prints out its value.

function secondSmallNumber(arr) {
  var firstMin = arr[0];
  var secondMin = arr[1];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < firstMin) {
      firstMin = arr[i];
    }
    if (arr[i] > firstMin && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }

  return console.log(secondMin);
}

// secondSmallNumber([4, 2, 2 - 1, 6]);


// function smallestNumber(array) {
//   var min = Infinity;
//   var min2 = Infinity;
//   for (var i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//       min2 = min;
//       min = array[i];
//     } else if (min2 > array[i]) {
//       min2 = array[i];
//     }
//   }
//   return min2;
// }
// console.log(smallestNumber([4, 2, 2, -1, 6]));

//5.Write a program that calculates the sum of positive elements in the array.

function positiveSum(a) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      sum += a[i];
    }
  }

  return sum;
}

var result = positiveSum([-3, 11, -5, 3, 2]);
console.log(result);

//6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
function symmetric(a) {
  var list = false;

  for (var i = 0; i < Math.round(a.length / 2); i++) {
    if (a[i] == a[a.length - 1 - i]) {
      list = true;
    } else {
      list = false;

      return console.log("The array is NOT symmetric.");
    }
  }
  if (list) {
    return console.log("The array is symmetric.");
  }
}

symmetric([2, 4, -2, 7, -2, 4, 2]);

//7.Write a program that intertwines two arrays. You can assume the arrays are of the same length.

function intertwines(a, b) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
    newArray.push(a[i], b[i]);
  }
  return newArray;
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

//8.Write a program that concatenates two arrays.

function concatenates(a, b) {
  var newArray = [];
  newArray = a.concat(b);
  return newArray;
}

console.log(concatenates([4, 5, 6, 2], [3, 8, 11, 9]));

//9.Write a program that deletes a given element e from the array a. 

function delGivenEl(a,e) {
    var newArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== e) {
          newArray.push(a[i]);
        }
      }
      return newArray;
}

console.log(delGivenEl([4, 6, 2, 8, 2, 2],2));

//10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.


function insertEl(a, e, p) {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    if (i === p) {
      newArr[newArr.length] = e;
      newArr[newArr.length] = a[i];
    } else {
      newArr[newArr.length] = a[i];
    }
  }
  return newArr;
}

console.log(insertEl([2, -2, 33, 12, 5, 8], 78, 3));





