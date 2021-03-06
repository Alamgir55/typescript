class Vehicle {
  constructor(public color: string){}

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  starDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.starDrivingProcess();
console.log(car.wheels);
console.log(car.color);
