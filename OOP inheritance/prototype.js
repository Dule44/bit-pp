/// Employees and Managers

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
// employee
function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return this.name + " " + this.surname + " " + this.salary;
};
Employee.prototype.getsalary = function () {
  return this.salary;
};

Employee.prototype.incresesalary = function () {
  this.salary = this.salary + this.salary * 0.1;
};

// developer
function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getspecialization = function () {
  return this.specialization;
};

//manager
function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  return this.department;
};
Manager.prototype.changeDep = function (newDep) {
  this.department = newDep;
};

var dev = new Developer("Milan", "Jovanovic", "programer", 400, "frontEnd");
console.log(dev.getspecialization());

var employee = new Employee("Darija", "Stankovic", "programer", 350);

employee.incresesalary();

console.log(employee.getsalary());

//-----------------------------------------

// Applications

function Web(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}
Web.prototype.isCCLicence = function () {
  if (this.licence === "CC") {
    return true;
  } else return false;
};

Web.prototype.like = function () {
  this.stars += 1;
};

Web.prototype.showStars = function () {
  return "The number of stars is: " + this.stars;
};

function WebApp(name, url, technologies, licence, stars) {
  Web.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies.split(",");
}

WebApp.prototype = Object.create(Web.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
  return (
    this.name +
    ", " +
    this.technologies +
    ", " +
    this.licence +
    ", " +
    this.stars
  );
};

WebApp.prototype.reactBased = function () {
  if (this.technologies.includes("React")) {
    return true;
  } else return false;
};

function MobileApp(name, platforms, licence, stars) {
  Web.call(this, name, licence, stars);
  this.platforms = platforms;
}

MobileApp.prototype = Object.create(Web.prototype);
MobileApp.prototype.constructor = WebApp;

MobileApp.prototype.getData = function () {
  return (
    this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars
  );
};

MobileApp.prototype.forAndroid = function () {
  if (this.technologies.includes("Android")) {
    return true;
  } else return false;
};

var web = new Web("facebook", "CC", 4);
var webApp = new WebApp(
  "Sportske Net",
  "https://sportske.net/",
  "React,PHP",
  "CC",
  2
);
var mobApp = new MobileApp("Flashscore", "Android,IOS", "CC", 5);

webApp.like();
console.log(webApp.showStars());
