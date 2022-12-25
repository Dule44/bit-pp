// External JS Files
// ● Include an external JS script on the page.
// ● The script should contain a function that uses console.log to print something.
// ● Trigger that function.

function sayHello() {
  console.log("Hello World");
}

// fully loaded page
document.addEventListener("load", sayHello());

// BOM (Window object)
// window.navigator
// Create a function that prints out in the console the following information
// ● the platform on which the browser is running
// ● the information about the browser version
// ● the company that created that browser
// Each piece of information should be printed out in a new row.
// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.

function getPlatform() {
  console.log("platform " + window.navigator.platform);
}

getPlatform();

function browser() {
  console.log("browser " + window.navigator.appVersion);
}

browser();

function company() {
  console.log("company " + window.navigator.userAgent);
}

company();

function isOnline() {
  if (window.navigator.onLine === true) {
    console.log("online");
  } else {
    console.log("offline");
  }
}

isOnline();

// window.screen
// Create a function that prints out the following information in the console:
// ● current browser width and height
// ● max possible browser height

function printScreenInfo() {
  console.log(`Current browser width: ${window.innerWidth}`);
  console.log(`Current browser height: ${window.innerHeight}`);
  console.log(`Max possible browser height: ${window.screen.availHeight}`);
}

printScreenInfo();

// window.location
// Write a function that prints out website’s url information in the console:
// ● full url address
// ● domain name
// ● used protocol
// ● parameters which are part of URL.

function printUrl() {
  console.log("Full URL adress " + window.location.href);
  console.log("Domain name " + window.location.hostname);
  console.log("Protocol " + window.location.protocol);
  console.log("Parameter " + window.location.search);
}

printUrl();

function reloadPage() {
  return window.location.reload();
}

// reloadPage();

window.stop();

// function redirect(){
//     return window.location.href("https://www.google.com");
// }

// redirect();

// window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.
// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.
// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.

function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

//  setLocalStorage("name",'Dusan');

function getLocalStorage() {
  if (!window.localStorage.getItem("laptop")) {
    console.log("There is no data");
  } else {
    console.log(window.localStorage.getItem("laptop"));
  }
}

// getLocalStorage();

function deleteData() {
  window.localStorage.removeItem("name");
}

// deleteData()

setLocalStorage("name", "Dusan");
setLocalStorage("pas", "Aleks");
setLocalStorage("laptop", "HP");

getLocalStorage();

// window.history
// Play around with the browser forward/back navigation. Implement a function that navigates two pages back.

function back() {
  return window.history.back(-2);
}

back();

// Window Methods
// ● Create a function that shows the user a greeting message using alert
// ● Then a question is presented to the user using prompt
// ● When the user provides the answer, that answer is used in the confirm dialog
// ● The format of the message in the dialog should be:"We will submit this answer now!" + the answer
// ● If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

function greetMessage() {
  alert("Hello user !");
}

greetMessage();

function question() {
  return prompt("Do you have a dog and what is its name ?");
}

var answer = question();

function confirmDialog(answer) {
  if (confirm("We will submit this answer now " + answer)) {
    alert("success");
  }
}

confirmDialog(answer);

// Global JavaScript Objects (homework)
// Math
// ● Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

function randomNumbers() {
  var arr = [];

  while (arr.length < 10) {
    arr.push(Math.floor(Math.random() * 50) + 1);
  }

  console.log(arr);
}
randomNumbers();

// ● Round
// Create a function that uses the passed array of numbers and rounds all its
// elements to two decimals. Print out the modified array in the console.
// Use the first function for generating the input array.

var arrInput = [1.956984, 44.2245, 11.7884, 4.21434];

function roundedTwoDecimal(input) {
  var rounded = input.map(function (num) {
    return Math.round(num * 100) / 100;
  });

  console.log(rounded);
}

roundedTwoDecimal(arrInput);

// ● Floor
// Create a function that uses the passed array of numbers and rounds all its
// elements to the nearest integer. Print out the modified array in the console.
// Use the first function for generating the input array.

var arr2 = [4.87, 44.12, 18.69, 2.44];

function floorArr(input) {
  var rounded = input.map(function (num) {
    return Math.round(num);
  });

  console.log(rounded);
}

floorArr(arr2);

// ● Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.

var arr3 = [4, 44, 83, 8];

function getMaxNum(input) {
  console.log(Math.max(...input));
}
getMaxNum(arr3);

// Date
// ● Print out the whole date object in the console.
// ● Print out the current time in the console.
// ● Print out the current date in the console.

var dateObject = new Date();
var fullDate = Date();
var currentTime = dateObject.toLocaleTimeString();
var currentDate = dateObject.toLocaleDateString();


console.log("Full date object: " , fullDate);
console.log("Current time with hours and minutes: " , currentTime);
console.log("Current date: " , currentDate);



