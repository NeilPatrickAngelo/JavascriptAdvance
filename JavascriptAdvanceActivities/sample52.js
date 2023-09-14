class Circle {
  constructor(radius) {
    this._radius = radius; // Private property convention
  }

 

  get radius() {
    return this._radius;
  }

 

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative");
    }
    this._radius = value;
  }
}

 

const circle = new Circle(5);
console.log(circle.radius); // 5
circle.radius = 10;
console.log(circle.radius); // 10