let cars = ['Chevelle', 'Datsun 500', 'Pinto', 'Tesla', 'PT Cruiser', 'Duck Boat', 'Corvette Stingray', 'Hotwheels', 'Winnebago', 'Ford Focus', 'Camry', 'Corolla'];

let gimmeACar = function(){
    let rando = Math.floor(Math.random() * cars.length);
    return cars[rando];   
}

module.exports = { 
    randomCar: gimmeACar};