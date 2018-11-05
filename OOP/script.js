// 1. Konwencja
class Cat {
  constructor(color) {
    this._color = color;
  }
  getColor() {
    return this._color;
  }

  setColor(color) {
    if (typeof color === "string") {
      return (this._color = color);
    } else {
      console.log("wartosc nieprawdlowa");
    }
  }
}

// const catty = new Cat("czarny")
// console.log(catty.color)
// catty.setColor("white")
// console.log(catty.color)

// 2. Closure

class Dog {
  constructor(name, dogColor) {
    this.name = name;
    let color = dogColor;
    this.getColor = () => color;
    this.setColor = value => (color = value);
  }
}

const fafik = new Dog("fafik", "brown");

// console.log(fafik.color); // undefined
// console.log(fafik.getColor()); // brown
// console.log(fafik.setColor("black"));

// Drugi przykład

class Car {
  constructor(name, _counter = 100000, _year = 2000) {
    this.name = name;
    let _counter = counter;
    let _year = year;
    let _changeNumber = 0;

    this.getYear = () => _year;
    this.setCounter = function (value) {
      _changeNumber++;
      return _counter = value;
    };

    this.getCounter = function () {
      if (_changeNumber) alert(`be aware${_changeNumber}`);
      return _counter;
    };
    this.showCarAge = function (year) {
      return year - _year;
    };
  }
}

const polonez = new Car('polonez caro', 20000, 2008);
console.log(polonez.getYear());
console.log(polonez.setCounter(10000));
console.log(polonez.getCounter());