// class Pizza {
//   constructor(pizzaChef, pizzaSize, pizzaType) {
//     this.chef=pizzaChef;
//     this.size= pizzaSize;
//     this.crust='original';
//     this.type=pizzaType;
//   }
//   getSize() {
//     return this.size;
//   }
//   setSize(pizzaSize){
//     this.size=pizzaSize;
//   }
//   bake() {
//     console.log(`${this.chef} is baking ${this.size} ${this.crust} ${this.type} pizza.`)
//   }
// }

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaChef,pizzaSize,pizzaType,pizzaOrigin){
//     super(pizzaChef,pizzaSize,pizzaType);
//     this.origin=pizzaOrigin;
//     this.year=2023;
//   }
//   result() {
//     console.log(`${this.year}, from ${this.origin}. ${this.chef}`)
//   }
// }

// const myPizza= new SpecialtyPizza('Lindter','medium', 'pepperoni', 'Italy');
// myPizza.result();

function pizzaFactory(pizzaSize) {
  const crust = 'original';
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} pizza.`),
    make: () => console.log('Eating')
  }
}

function NopecialtyPizza(pizzaSize, pizzaOrigin) {
  const pizza = pizzaFactory(pizzaSize);

  return {
    ...pizza,
    origin: pizzaOrigin,
    year: 2023,

    result() {
      console.log(`${this.year}, from ${this.origin}. ${pizzaSize}`);
    }
  };
}

const pizza2 = NopecialtyPizza("medium", 'Italy');
pizza2.result();
pizza2.make();

class Pizza {
  crust = 'original';
  #sauce = 'traditional';
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getSize() {
    return this.#size;
  }
  hereYouGo() {
    console.log(`${this.crust} - ${this.#sauce} - ${this.#size}`);
  }
}

class SpecialPizza extends Pizza {
  year = 2023;
  #origin;

  constructor(pizzaSize, pizzaOrigin) {
    super(pizzaSize);
    this.#origin = pizzaOrigin;
  }
  result() {
    console.log(`${this.crust}, from ${this.#origin}. ${this.getSize()}`)
  }
}

const pizza = new SpecialPizza('large', 'Germany');
pizza.hereYouGo();
pizza.crust = 'non-original'
pizza.hereYouGo();
pizza.result();

try {
  const name = 'Alex';
  name = 'Mano';
}
catch (err) {
  console.error(err)
}

console.log(1);

let i = 1;
while (i <= 3) {
  try {

    if (i % 2 !== 0) {
      throw new Error('Odd number');
    }
    console.log('Even number');
  }

  catch (err) {
    console.log(err);
  }
  finally{
    console.log('F');
    i++;
  }

}

try{
  throw new Error('i');
}
catch{
  console.log(2);
}
console.log(2);