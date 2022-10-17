//1.

var side1, side2, side3;

side1 = 3;
side2 = 4;
side3 = 5;

if(side1 == side2 && side2 == side3) {
    console.log("triangle is equilateral");

}else if(side1==side2 || side1==side3 || side2==side3){
    console.log("Isosceles triangle.");
} else{
    console.log("Scalene triangle.");
}


//2.

var num1, num2;  
var sum, sub, mult, mod, shar; 
num1 = 20;
num2 = 10; 

    sum = num1 + num2;  
    sub = num1 - num2;  
    mult = num1 * num2;
    mod = num1 % num2;
    shar = num1 / num2;

    

    console.log(sum);
    console.log(sub);
    console.log(mult);
    console.log(mod);
    console.log(shar);
//3.

var a = 58;
if (a > 51 && a < 61) {
     console.log("E");
} else if( a > 60 && a < 71) {
    console.log("D");
} else if (a > 70 && a < 80){
    console.log("C");
} else if (a > 80 && a < 90){
    console.log("B");
} else if (a > 90 && a < 100) {
    console.log("A");
}

var marks = 80;
var name1 = "Dusan";

if(marks >= 90 && marks <= 100){
    console.log(`${name1} you have received S grade`)
  }
  else if(marks >= 80 && marks < 90){
    console.log(`${name1} you have received A grade`)
  }
  else if(marks >= 70 && marks < 80){
    console.log(`${name1} you have received B grade`)
  }
  else if(marks >= 60 && marks < 70){
    console.log(`${name1} you have received C grade`)
  }
  else if(marks >= 50 && marks < 60){
    console.log(`${name1} you have received D grade`)
  }
  else if(marks >= 40 && marks < 50){
    console.log(`${name1} you have received E grade`)
  }
  else if(marks >= 0 && marks <40){
    console.log(`${name1} you have Failed`)
  }
  else{
    console.log(`Invalid marks of ${marks}`)
  }

//4. 

var noun, number;

noun = "cat";
number = 4;

if (number != 1 && noun != 'sheep' && noun != 'geese') {
    console.log(number + ' ' + noun + 's');
} else {
    console.log(number + ' ' + noun);
}





//5.

// var a;
// var b;
// var c;
// var a = 32;
// var b = 32;


// if(a > 17) {
//     console.log("You are old enough to drive");
   
// } else{
//    console.log("You ned to still wait a while");
// }




// var bornIn = prompt("Enter Your Birth Year")
// var now = new Date()
// var yourAge = now.getFullYear() - bornIn

// yourAge >= 18
//     ? console.log(`You are ${yourAge}. You are old enough to drive`)
//     : console.log(`You are ${yourAge}. You will be allowed to drive after ${18-yourAge} years.`)



//6.

var milena = 29;
var andrija = 22;

if (andrija > milena) {
    var age = andrija - milena;
    console.log("Andrija is " + age + " years older!")
}
else if (milena > andrija){
      var age =  milena - andrija;
      console.log("Milena is " + age + " years older!")
}else{
    console.log("Andrija and Milena are the  same age!")
}
   



//7.

var a;
var b;
var c;
var d;


a = "bretonac";
b = "sarplaninac";
c = "dalmatinac";
d = "vucijak";

var f = "bretonac";

if (f == a){
    console.log("Imamo istog psa");

} else if (f == b) {
    console.log("Ovo je sarplaninac");
} else if (f == c){
    console.log("Ovo je dalmatinac");
}else if (f == d) {
    console.log("Ovo je vucijak");
} else {
    console.log("Nismo nasli istog psa");
}




























//4.
