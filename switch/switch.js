//1.
// var a;
// var result = "";
// a = 4;

// switch (a) {
//   case 1:
//     result = "Monday";
//     break;
//   case 2:
//     result = "Tuesday ";
//     break;
//   case 3:
//     result = "Wednesday";
//     break;
//   case 4:
//     result = "Thursday";
//     break;
//   case 5:
//     result = "Friday";
//     break;
//   case 6:
//     result = "The weekend";
//     break;
//   case 7:
//     result = "The weekend";
//     break;
//   default:
//     result = "It must be in the range of 1 to 7";
//     break;
// }

// console.log(result);

//2.
// var a = 10;

// switch (a) {
//   case 1:
//     result = "Monday";
//     break;
//   case 2:
//     result = "Tuesday ";
//     break;
//   case 3:
//     result = "Wednesday";
//     break;
//   case 4:
//     result = "Thursday";
//     break;
//   case 5:
//     result = "Friday";
//     break;
//   case 6:
//     result = "Saturday";
//     break;
//   case 7:
//     result = "Sunday";
//     break;
//   case 8:
//   case 9:
//   case 10:
//     result = "It must be in the range of 1 to 7";
//     break;
//   default:
//     result = "Not that day";
//     break;
// }

// console.log(result);

//3.

// var a = 6;
// var result = "";

// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     result = "It’s weekday";
//     break;
//   case 6:
//   case 7:
//     result = "It’s weekday";
//     break;
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     result = "It must be in the range of 1 to 7";
//   default:
//     result = "Not that day";
//     break;
// }

//4.
// var result = "";
// var mesec = 10;

// switch (a) {
//   case 1:
//     result = "January";
//     break;
//   case 2:
//     result = "February";
//     break;
//   case 3:
//     result = "March";
//     break;
//   case 4:
//     result = "April";
//     break;
//   case 5:
//     result = "May";
//     break;
//   case 6:
//     result = "June";
//     break;
//   case 7:
//     result = "July";
//     break;
//   case 8:
//     result = "August";
//     break;
//   case 9:
//     result = "September";
//     break;
//   case 10:
//     result = "October";
//     break;
//   case 11:
//     result = "November";
//     break;
//   case 12:
//     result = "December";
//     break;
//   default:
//     result = "It must be in the range of 1 to 12";
//     break;
// }

//5.
// var mesec = 10;
// var result = "";

// switch (a) {
//   case 12:
//   case 1:
//   case 2:
//   case 3:
//     result = "Zima";
//     break;
//   case 4:
//   case 5:
//     result = "Prolece";
//   case 6:
//   case 7:
//   case 8:
//     result = "Leto";
//   case 9:
//   case 10:
//   case 11:
//     result = "Jesen";
//   default:
//     result = "It must be in the range of 1 to 12";
//     break;
// }

//6.
var result = ""
 var grade ="A";
switch (grade) {
  case "A":
    result = "Good Job";
    break;
    case "B":
    result = "Pretty Good";
    break;
    case "C":
    result = "Passed";
    break;
    case "D":
    result = "Not so Good";
    break;
    case "F":
    result = "Failed";
    break;
  default:
    result ="Unknow grade";
    break;
}

// console.log(result);

//7.

var a;
var result = "";
a = "London";


switch (a) {
  case "Brussels":
  case "Antwerp":
  case "Bruges":
    result = "Excelnt choice,Belgium.";
    break;
  case "London":
  case "liverpool":
  case "Birmingam":
    result = "A most jolly occasion. The british are no more. The world is brither place today.Literaly.";
    break;
  case "Berlin":
  case "Munich":
  case "Hamburg":
    result = "The g'rmans have been glassed. T";
    break;
  case "Paris":
  case "Marseille":
  case "Strasbourg":
    result = "The french have been cooked.";
    break;
  case "Shanghai":
  case "Beljing":
  case "Shenzhen":
    result = "With this chraacter's feath the tread of prophecy is severed";
    break;
  default:
    result = "You cannot nuke this city";
    break;
}

console.log(result);
