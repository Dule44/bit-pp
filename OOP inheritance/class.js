"use strict";

/// Employees and Managers

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }

  getSalary() {
    return this.salary;
  }

  increaseSalary() {
    this.salary += this.salary * 0.1;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }

  getSpecialization() {
    return this.specialization;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }

  getDepartment() {
    return this.department;
  }

  changeDepartment(newDep) {
    this.department = newDep;
  }
}

var manager = new Manager("Dusan", "Milovanovic", "programer", 450, "sales");
console.log(manager);
manager.changeDepartment("architects");
console.log(manager.getDepartment());
manager.increaseSalary();
console.log(manager.getSalary());


//---------------------------------------------------------

// Applications

class Web {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  isCClicence() {
    if (this.licence === "CC") {
      return true;
    } else return false;
  }

  like() {
    this.stars += 1;
  }

  showStars() {
    return "The number of stars is: " + this.stars;
  }
}

class WebApp extends Web {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies.split(",");
  }

  getData() {
    return (
      this.name +
      ", " +
      this.technologies +
      ", " +
      this.licence +
      ", " +
      this.stars
    );
  }

  reactBased() {
    if (this.technologies.includes("React")) {
      return true;
    } else return false;
  }
}

class MobileApp extends Web {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms.split(",");
  }

  getData() {
    return this.name + ", " + this.platforms + this.licence + ", " + this.stars;
  }

  forAndroid() {
    if (this.platforms.includes("Android")) {
      return true;
    } else return false;
  }
}

var web = new Web("facebook", "CC", 4);
var webApp = new WebApp(
  "Sportske Net",
  "https://sportske.net/",
  "React,PHP",
  "CC",
  2
);
var mobileApp = new MobileApp("Flashscore", "Android,IOS", "CC", 5);

webApp.like();
mobileApp.like();

console.log(webApp.showStars());
console.log(mobileApp.forAndroid());
