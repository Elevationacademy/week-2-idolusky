// const counter = {
//     count: 0,

//     updateCounter: function () {
//         this.count += 1;
//     }
// };

// counter.updateCounter();
// counter.updateCounter();
// counter.updateCounter();

// alert(counter.count);

// const cat = {
//     makeNoise: function () {
//         alert(this.noise);
//     },
//     noise: "Meow!"
// };

// const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
// };

// cat.makeNoise();
// dog.makeNoise();




////  spot check 1

// const person = {
//     username: "Felicia",
//     introduce: function () {
//         console.log("Hi, I'm " + this.username)
//     }
// }

// person.introduce() 





//// exercise 1

// const person = {
//     hungry: true,

//     feed: function () {
//         if (this.hungry) {
//             hungry = false;
//             alert('Im no longer hungry!')
//         }
//     }
// }

// person.feed() 




//// exercise 2


// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
// };

// const garage = {
//     car1: {
//         name: 'Audi',
//         liters: 3,
//         fillTank: pump
//     },
//     car2: {
//         name: 'Mercedes',
//         liters: 1,
//         fillTank: pump
//     }
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ', garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);    





//// exercise 3

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
// };

// const airplane = {
//     fly: function () {
//         if (this.fuel < 2) {
//             return 'on the ground!';
//         }
//         else {
//             return 'flying!';
//         }
//     },
//     fuel: 0
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());




//// Exercise 4


// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//         this.coinCount += 1;
//     },
//     stealCoins: function (number) {
//         return this.coinCount = this.coinCount - number
//     }
// };



// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);






//// exercise 5

// const revealSecret = function () {
//     return this.secret;
// };

// const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
// };

// const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);



//// exercise 6

const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        if (drinkType === "americano" || "latte" || "doubleShot" || "frenchPress") {
            //  
            this.beans += -1
        } else {
            alert(`sorrt we don't make ${drinktype()}`)
        }
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans" 