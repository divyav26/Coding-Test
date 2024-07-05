
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms


let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }
  let sayWelcomeJohn = sayWelcome.bind(p1);
  let sayWelcomeAnn = sayWelcome.bind(p2);
  sayWelcomeJohn(); // Welcome John Smith
  sayWelcomeAnn(); // Welcome Ann Brown