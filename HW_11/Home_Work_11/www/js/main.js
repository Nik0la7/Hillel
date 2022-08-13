const HAMBURGER = {
    type: {
        big: {
            name: "big",
            price:  10,
            ccal: 40
        },
        small: {
            name: "small",
            price:  5,
            ccal: 20
        }
    },
    toppings: {
        cheese: {
            name: "chesse",
            price:  1,
            ccal: 20
        },
        salad: {
            name: "salad",
            price:  2,
            ccal: 5
        },
        potato: {
            name: "potato",
            price:  1.5,
            ccal: 10
        }
    },
    supplements: {
        mayonnaise: {
            name: "mayonnaise",
            price:  2,
            ccal: 5
        },
        spices: {
            name: "spices",
            price:  1.5,
            ccal: 0
        }
    }
}

class Hamburger {
    constructor (type) {
        this.name = type.name
        this.price = type.price;
        this.ccal = type.ccal;
    };
    addToppings(arr) {
        arr.forEach(element => {
            this.price += element.price;
            this.ccal += element.ccal;
        });
    };
    addSupplement(arr) {
        arr.forEach(element => {
            this.price += element.price;
            this.ccal += element.ccal;
        });
    };
    getPrice() {
        return this.price + '$';
    };
    getCalories() {
        return this.ccal +  ' ' + 'Calories';
    };
};


const bigBurger = new Hamburger(HAMBURGER.type.big);

bigBurger.addToppings([HAMBURGER.toppings.salad, HAMBURGER.toppings.potato]);
bigBurger.addSupplement([HAMBURGER.supplements.mayonnaise]);
console.log(bigBurger.getPrice());
console.log(bigBurger.getCalories());


const smallBurger = new Hamburger(HAMBURGER.type.small);

smallBurger.addToppings([HAMBURGER.toppings.salad, HAMBURGER.toppings.potato]);
smallBurger.addSupplement([HAMBURGER.supplements.mayonnaise]);
console.log(smallBurger.getPrice());
console.log(smallBurger.getCalories());