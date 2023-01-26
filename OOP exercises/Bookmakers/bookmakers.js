

"use strict";

(function () {

  console.log("Hi");

  // constructor function for Country

  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continect = continent;
  }

  //constructor function for Person 
  function Person(name, surname, DB) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Date(DB);
    this.getData = function () {
      return this.name + " " + this.surname + " " + this.dateOfBirth;
    };
    this.getYearsOld = function () {
      var year = this.dateOfBirth.getFullYear();
      var today = new Date().getFullYear();
      return today - year;
    };
  }

  // constructor function for Player 
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getData = function () {
      return (
        this.country.slice(0, 2).toUpperCase() +
        ", " +
        this.betAmount.toFixed(2) +
        ", " +
        this.person.name +
        " " +
        this.person.surname +
        ", " +
        this.person.getYearsOld() +
        " years"
      );
    };
  }


  // constructor function for Address 

  function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    this.getData = function () {
      return (
        this.street +
        " " +
        this.number +
        ", " +
        this.postalCode +
        ", " +
        this.country
      );
    };
  }

  // constructor function for BettingPlace 

  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];

    this.getData = function () {
      var sum = 0;
      for (var i = 0; i < this.listOfPlayers.length; i++) {
        sum += this.listOfPlayers[i].betAmount;
      }
      return (
        this.address.street +
        ", " +
        this.address.postalCode +
        ", " +
        this.address.city +
        ", sum of all bets: " +
        sum +
        "eur"
      );
    };

    this.addPlayer = function (p) {
      this.listOfPlayers.push(p);
    };
  }

  // constructor function for BettingHouse 
  function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers;
  }
  // Object Continents

  const continents = Object.freeze({
    EUROPE: "EU",
    ASIA: "AS",
    AFRICA: "AF",
    SOUTHAMERICA: "SA",
    NORTHAMERICA: "NA",
    AUSTRALIA: "AU",
  });

  // Testing

  var pera = new Person("Pera", "Peric", "1994-11-29");
  var milan = new Person("Milan", "Jovanovic", "1980-10-28");
  var darija = new Person("Darija", "Jovanovic", "1993-08-13");
  var jelena = new Person("Jelena", "Stankovic", "1986-10-30");

  var player1 = new Player(pera, 1050, "Srbija");
  var player2 = new Player(milan, 1050, "Srbija");

  var address1 = new Address("Serbia", "Beograd", 11000, "Nemanjina", 4);
  var address2 = new Address(
    "Serbia",
    "Nis",
    18000,
    "Bulevar Nemanjica",
    73
  );

  var serbia = new Country("Serbia", 1.3, continents.EUROPE);

  var maxBet = new BettingPlace(address1);
  var balkanBet = new BettingPlace(address2);

  console.log(milan);
  console.log(address1.getData());
  console.log(player1.getData());
  console.log(serbia);
  
})();