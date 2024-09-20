const car ={
    make: "Tesla",
    model: "Tesla",
    year: 2022,
    start: function() {
        console.log("Car started.");
    }
   
}
console.log(`make: ${car.make}, year: ${car.year}`);

car.start();