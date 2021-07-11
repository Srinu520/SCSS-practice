var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",
    displayDetails: function(ownerName) {
        return(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails = car.displayDetails.bind(car,"srinu");
console.log(myCarDetails());