//1. Create an object that represents your favourite coffee. Please include coffee name,
//strength, flavour, milk, sugar, … everything you like!

var coffee = {
  name: "Nes",
  strength: "medium",
  flavour: "vanilla",
  milk: "yes",
  sugar: "no",
};

console.log(coffee);

//2. Create an object that represents your favourite movie. Please include title, actors,
//director, genre, popularity.
var favMovie = {
  title: "Indiana Jones and the Last Crusade",
  actors: ["Harrison Ford", "Sean Connery", "Denholm Elliott"],
  director: "Steven Spielberg",
  genre: ["Adventure", "Action"],
  popularity: {
    imdb: 8.2,
    rotten: "90%",
  },
};

console.log(favMovie);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function project(des, lan, repository, stat, ) {
  var obj = {
    description: des,
    language: lan,
    git: repository,
    status: stat,
    printStatus: function () {
      if (stat) {
        return "In develop";
      }
      return "Finished";
    },
    printRep: function () {
      console.log(repository);
    },
    printWritten: function () {
      if (lan == "JavaScript") {
        return "Using JavaScript";
      }
      return "Do not using JavaScript";
    }

  }
  return obj;
}
var func = project("E-commerce", "JavaScript", "SomeGitHubProfile", true);
console.log(func.printStatus());

// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
// Add a method that prints out all the ingredients necessary for the meal preparation.
// Add a method that checks if a meal can be prepared in under 15 minutes.
// Add a method that changes the type of cuisine to the given value.
// Add a method that delete a given ingredient from the list of ingredients.

function Recipes(name, kitch, complexity, ingr, time, instructions) {

  this.name = name;
  this.kitchen = kitch;
  this.complexity = complexity;
  this.ingredients = ingr;
  this.time = time;
  this.instructions = instructions,
  this.ingred = function () {
    return ingr.toString();
  };
  this.preparation = function () {
    if (this.time < 15) {
      return "Less than 15 minutes";
    }
    return "More than 15 minutes";
  };
  this.typeCuisine = function (kitch) {
    this.kitchen = kitch;
  };
  this.deleteIngredient = function (value) {
    this.ingredients = this.ingredients.filter(function (ingr) {
      return ingr !== value;
    });
  }
}

var pizza = new Recipes("Pizza", "Italy", 2, ["Olives", "Cheese", "Ham", "Mushrooms"], 10, "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes");


console.log(pizza);
pizza.deleteIngredient("Ham");
console.log(pizza);
