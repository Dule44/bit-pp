// 1.Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']

const capitalize = (...arr) => {
  return arr
    .filter((item) => typeof item === "string")
    .map((item) => item[0].toUpperCase() + item.slice(1));
};

console.log(capitalize("hello", "there", "ES", 6));

// 2. Write a function that calculates sale tax that should be paid for the product of the given price.
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
// Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
// Output2: [ 24, 20 ] // tax only

const tax = 0.2;

const calculatesTax = (...arr) => {
  let taxes = [];
  arr.map((item) => item.forEach((el) => taxes.push(el.price * tax)));
  arr.map((item) =>
    item.forEach((el) => (el.price = el.price + el.price * tax))
  );
  console.log(taxes);
  console.log(...arr);
};

console.log(
  calculatesTax([
    { name: "Banana", price: 120 },
    { name: "Orange", price: 100 },
  ])
);

// 3. Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

const increase = (array, number = 2) => {
  return array.map((n) => n + number);
};

console.log(increase([4, 6, 11, -9, 2.1]));

// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

const filtersEl = (arr) => {
  return arr.filter((item) => {
    return item % 2 === 0;
  });
};

console.log(filtersEl([6, 11, 9, 0, 3]));

// 5. Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js', 'JS standard']

const filterString = (str, ...arr) => {
  return arr.filter((item) => {
    return item.includes(str.toLowerCase()) || item.includes(str.toUpperCase());
  });
};

console.log(
  filterString(
    "JS",
    "compiler",
    "transpiler",
    "babel.js",
    "JS standard",
    "linter"
  )
);

// 6. Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]

// Output: [7, 8]

const filterIntegers = (...arr) => {
  return arr.filter((item) => {
    return Number.isInteger(item);
  });
};

console.log(filterIntegers(1.6, 11.34, 9.23, 7, 3.11, 8));

// 7. Write a function that filters all integer arguments that contain digit 5.
//	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
//	Output: [45, 553];

const includNumber = (num, ...arg) => {
  return arg
    .map((el) => parseInt(el))
    .filter((el) => el.toString().includes(num));
};

console.log(includNumber(5, 23, 11.5, 9, "abc", 45, 28, 553));

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: 1, 2, 5

const getIndex = (...arr) => {
  let newArr = [];
  arr.map((item, index) => {
    if (item > 10) {
      newArr.push(index);
    }
  });
  return newArr;
};

console.log(getIndex(1.6, 11.34, 29.23, 7, 3.11, 18));

// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a personperson older than 40.
// d. Write a function that checks if all persons are older than 20.

//a.
const persons = [
  { name: "Milan", age: 38 },
  { name: "Jelena", age: 30 },
  { name: "Darija", age: 4 },
];

// b.
const personOlder25 = (arr) => {
  arr.forEach((el) => {
    if (el.age > 25) {
      console.log(el.name);
    }
  });
};

console.log(personOlder25(persons));

// c.
const isOlderThan40 = (arr) => {
  return arr.some((el) => el.age > 40);
};

const old40 = isOlderThan40(persons);

console.log(`Is there person older than 40 : ${old40}`);

// d.

const isAllOlder20 = (arr) => {
  return arr.every((el) => el.age > 20);
};

let older20 = isAllOlder20(persons);
console.log(`All persons older than 20: ${older20}`);

// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no

const arrPositiveIntegers = (...arr) => {
  if (arr.every(el => el > 0)) {
    return "yes";
  } else {
    return "no";
  }
};

console.log(arrPositiveIntegers(3, 11, 9, 5, 6));
console.log(arrPositiveIntegers(3, -12, 4, 11));

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

const calculateProduct = (...arr) => {
  let res = 1;
  arr.forEach((el) => {
    res *= el;
  });

  return res;
};

console.log(calculateProduct(2, 8, 3));

// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

const maxGivenArr = (...arr) => {
    return arr.reduce((accum, curent) => {
        return Math.max(accum, curent)
     })
  }
  
  console.log(maxGivenArr(2, 7, 3, 8, 5.4));
