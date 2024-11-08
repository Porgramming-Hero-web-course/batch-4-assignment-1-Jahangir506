{
  //

  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      const currentYear = new Date().getFullYear();
      return (this.year = currentYear - this.year);
    }
  }

  const car = new Car("Honda", "Civic", 2018);

  // const carAge = car.getCarAge();
  // console.log(carAge, `(assuming current year is 2024)`);

  //
}
