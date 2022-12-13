
// 1. Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:

function getTotalPrice(groceries) {
    let total = 0;
    for (let i = 0; i < groceries.length; i++){
        total += groceries[i].price;
    }
    return total;
  }
  
  console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 2.25 },
    { product: "Cheese", quantity: 1, price: 4.75 }
  ]));
  
  // 2. You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
  // down the name of each piece of jewelry and its price. Create a function that gets the
  // name of the piece of jewelry with the highest price and returns &quot;The most expensive
  // one is the.
  
  var jewelry = [
    {
      name: "Diamond Earings",
      price: 980
      
    },
    {
      name: "Gold watch",
      price: 250
      
    },
    {
      name: "Diamond Ring",
      price: 1300
    }
  ];
  
  function mostExpensive(input) {
    let expensive = 0;
    var result;
    
    for(let i = 0; i < input.length; i++) {
    
      if(input[i].price > expensive) {
      
        expensive = input[i].price;
        result = input[i].name;
      }
    }
      return result;
  }
  
  console.log(mostExpensive(jewelry));
  
  //3. Given a word, create an object that stores the indexes of each letter in an array. Make
  // sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
  // are stored in an array and those arrays are values.
  // Examples:
  
  function  mapLetters(str){
    var map = {};
    for(let i = 0; i < str.length; i++){
       if(map.hasOwnProperty(str[i])){
          map[str[i]] = map[str[i]].concat(i);
       }else{
          map[str[i]] = [i];
       };
    };
    return map;
  };
  console.log(mapLetters("dodo"));
  console.log(mapLetters("froggy"));
  console.log(mapLetters("grapes"));
  
  // 4. And who cursed the most in the fight between you and your spouse?
  // Given an object with three rounds, with nested objects as your scores
  // per round, return a string of who cursed the most: If you, return "ME!"
  // If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
  // Examples:
  // determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,
  // spouse: 10  },
  // {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
  // determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse:
  // 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
  // determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse:
  // 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"
  
  
  function determineWhoCursedTheMost(curses) {
    let scoreMe = 0;
    let scoreSpouse = 0;
  
    for (let i = 0; i < curses.length; i++) {
      scoreMe += curses[i].me;
      scoreSpouse += curses[i].spouse;
    }
  
    if (scoreMe > scoreSpouse) return "ME!";
    else if (scoreMe < scoreSpouse) return "SPOUSE!";
    else return "DRAW!";
  }
  
  console.log(
    determineWhoCursedTheMost([
      { me: 10, spouse: 5 },
      { me: 5, spouse: 0 },
      { me: 0, spouse: 10 },
    ])
  );

  console.log(
    determineWhoCursedTheMost([
      { me: 40, spouse: 5 },
      { me: 9, spouse: 10 },
      { me: 9, spouse: 10 },
    ])
  );

  console.log(
    determineWhoCursedTheMost([
      { me: 10, spouse: 5 },
      { me: 9, spouse: 44 },
      { me: 10, spouse: 55 },
    ])
  );
  
  // Exercise 5 - Create a function that converts color in RGB format to Hex format.
  // Examples:
  // rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0"
  const rgbToHex = function (rgb) {
  const { red, green, blue } = rgb;

  const hex = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
  return hex;
};
console.log(rgbToHex({ red: 0, green: 128, blue: 192 }));


// Exercise 6 - Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
// COIN     VALUE
// Penny    0.01
// Nickel   0.05
// Dime     0.10
// Quarter  0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
const makeChange = function (change) {
  const result = { q: 0, d: 0, n: 0, p: 0 };

  while (change > 0) {
    if (change >= 25) {
      change -= 25;
      result.q++;
    } else if (change >= 10) {
      change -= 10;
      result.d++;
    } else if (change >= 5) {
      change -= 5;
      result.n++;
    } else if (change >= 1) {
      change -= 1;
      result.p++;
    }
  }
  return result;
};
console.log(makeChange(47));

// Exercise 7 - Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
//    Examples:
//    [ { name: "John", notes: [3, 5, 4]} ] ➞ [ { name: "John", avgNote: 4 } ]
function avgNotes(students) {
    var studentsWithAvg = [];
    var sum = [];
    var avg = [];
  
    for (let i = 0; i < students.length; i++) {

      // predefine sum at index with 0
      sum[i] = 0;
  
      for (let j = 0; j < students[i].notes.length; j++) {
        sum[i] += students[i].notes[j];
      }
  
      avg[i] = sum[i] / students[i].notes.length;
  
      studentsWithAvg[i] = {
        name: students[i].name,
        avgNote: Math.round(avg[i] * 10) / 10,
      };
    }
  
    return studentsWithAvg;
  };
  console.log(
    avgNotes([
      { name: "John", notes: [3, 5, 4] },
      { name: "Jelena", notes: [1, 2, 3] },
      { name: "Milan", notes: [3, 2, 3] },
    ])
  );
  

// Exercise 8 - Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
// getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg = 90 // Bob's avg = 83.33
function average(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
}

function theBestStudent(student) {
    var averageGrade = 0;
    var bestStudent = student[0].name;
    for (let i = 0; i < student.length; i++) {
        var x = average(student[i].grades);
        if (x > averageGrade) {
            averageGrade = x;
            bestStudent = student[i].name;
        }
    }
    return bestStudent;
}

var students = [{ name: "John", grades: [100, 90, 80] }, { name: "Bob", grades: [100, 70, 80] }];

console.log("The best student is:", theBestStudent(students));
  
  
  
  
  
  
  
  
