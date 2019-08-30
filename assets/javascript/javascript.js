// player currency
var chippies = 0;



// this constructor creates a new netpet
var NetPet = function(hunger) {
  this.hunger = hunger;

  this.getFed = function(foodValue) {
    this.hunger -= foodValue;
  };
}