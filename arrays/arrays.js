//1.
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

console.log(month[5]);
console.log(month[9]);
console.log(month[0]);

// for(var element of month){
//      console.log(element);
     
// }

// month.forEach(item => console.log(item));

//2.

var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

console.log(days[6]);

//3.

var elements = [2, -4, 5, -2, -11];
// elements.forEach(element => {
//      if(element < 0) {
//         console.log(element);
//     }
// });
      
  

// console.log(elements[1]);
// console.log(elements[3]);
// console.log(elements[4]);

//4.

var arr = [5, 15, -5, 20, 12, 18,72, 14, 9]
var three = [];

for (i = 0, len = arr.length; i < len; i++) {
    if(arr[i] % 3 == 0){
      three.push(arr[i]);
   }
}
console.log(three);


// console.log(arr[1]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[8]);


//5.

var arr2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,10, 26, 7]];

arr2.forEach(item => console.log(item));


// console.log(arr2[0][3]);
// console.log(arr2[3]);
// console.log(arr2[3][2]);
