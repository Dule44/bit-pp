"use strict";

(function () {
  console.log("Hi");

  /* constructor function for Person */

  function Person(name, surname) {
    this.personName = name;
    this.personSurname = surname;
    this.getData = function () {
      this.data = this.personName + " " + this.personSurname;
      return this.data;
    };
  }

  /* constructor function for Seat */
  function Seat(number, category) {
    this.seatNumber = number;
    this.seatCategory = category;
    this.getData = function () {
      this.data = this.seatNumber + ", " + this.seatCategory;
      return this.data;
    };
  }

  /* constructor function for Passenger */

  function Passenger(person, seat) {
    this.passengerNameLastName = person.getData();
    this.passengerSeat = seat.getData();
    this.getData = function () {
      this.data = this.passengerSeat + ", " + this.passengerNameLastName;
      return this.data;
    };
  }

  /* constructor function for Flight */
  function Flight(relation, date) {
    this.flightRelation = relation;
    this.flightDate = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      var string = this.flightDate + ", " + this.flightRelation + "\n";
      this.passengerList.forEach(function (num) {
        string +=
          "\t\t\t\t\t\t " +
          num.passengerSeat +
          ", " +
          num.passengerNameLastName +
          "\n";
      });
      return string;
    };
  }

  /* constructor function for Airport */

  function Airport(name) {
    this.airportName = name;
    this.airportListOfFlights = [];
    this.addFlight = function (flight) {
      this.airportListOfFlights.push(flight);
    };
  }

  /* function for creating flight Object */
   
  function createFlight(relation, date) {

    var vowels = ["a", "e", "i", "o", "u"];
    var removeVowels = relation.split('').filter(element => !vowels.includes(element) && !" ".includes(element)).join('');
    var getingWords = removeVowels.split("-");
    var fromDestination = getingWords[0][0].toUpperCase() + getingWords[0][getingWords[0].length - 1].toUpperCase();
    var arivalDestination = getingWords[1][0].toUpperCase() + getingWords[1][getingWords[1].length - 1].toUpperCase();
    var fullDestination = fromDestination + " - " + arivalDestination;

    var flightDate = new Date(date).toLocaleDateString("en-GB");
    var dateSplit = flightDate.split("/");
    dateSplit = dateSplit[1] + "." + dateSplit[0] + "." + dateSplit[2];

    var flight = new Flight(fullDestination, dateSplit);
    return flight;
  };

   /* function for creating passenger Object */
   function createPassenger(firstName, lastName, seat, cat) {

    var seatNumber = seat == "" ? Math.floor(Math.random() * 100) + 1 : seat;
    var category = cat == "" ? "economy" : "business";

    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    var passenger = new Passenger(person, seat);
    return passenger;
  };


  /* creating airport Object */
  var airport = new Airport("Nikola Tesla");

  /* creating flights */
  var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

  /* creating passengers */
  var person1 = createPassenger("John", "Snow", 1, "b");
  var person2 = createPassenger("Cersei", "Lannister", 2, "");
  var person3 = createPassenger("Daenerys", "Targaryen", 14, "");
  var person4 = createPassenger("Tyrion", "Lannister", "", "b");

  /* adding passengers to flights */
  flight1.addPassenger(person1);
  flight1.addPassenger(person2);
  flight2.addPassenger(person3);
  flight2.addPassenger(person4);

  /* adding flights to airport */
  airport.addFlight(flight1);
  airport.addFlight(flight2);

  /* sum of all passengers at airport */
  var sumOFPassengers = 0;
  airport.airportListOfFlights.forEach(function (num) {
    sumOFPassengers += num.passengerList.length;
  });

  /* print datas on display */
  console.log("Airport: " + airport.airportName + ", total passengers: " + sumOFPassengers);
  airport.airportListOfFlights.forEach(function (num) {
    console.log("\t\t\t " + num.getData());
  });


})();
