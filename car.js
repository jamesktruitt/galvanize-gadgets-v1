class Car {
  constructor() {
    this.gallons = 0;
    this.mileage = 0;
    this.tripHistory = [];
  }
  fill(gallons) {
   (this.gallons += gallons)
  }
  drive(miles) {
   this.gallons = miles / 10;
    this.mileage += miles;
    this.tripHistory.push(`${miles} miles`);
  }
  odometer() {
    return this.mileage;
  }
  trips() {
    return this.tripHistory;
  }

};

module.exports = Car;
