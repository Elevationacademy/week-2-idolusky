// const createPerson = function (name, age) {
//     const person = {
//         personName: name,
//         personAge: age
//     }

//     return person
// }
// const person = createPerson("Elon", 42)

// console.log(person)

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y
//     }
//     return add
// }
// const add = mathOperations(4, 2)
// console.log(add(4, 2));


// const foo = function () {
//     const x = 1

//     const bar = function () {
//         console.log(x) //notice this inner function using the outer function's variable
//     }

//     return bar
// }

// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!


// const family = function () {
//     const members = [];
//     const birth = function (name) {
//         members.push(name)
//         console.log(members);
//     }
//     return birth
// }
// const giveBirth = family()
// giveBirth("ido")
// giveBirth("ido")
// giveBirth("ido")



// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// let calc = mathOperations()
// // console.log(calc.mult(5, 3)) // prints 15
// console.log(calc.mult(7, calc.div(36, 6)));

// const hobbyfier = function () {
//     const musician = function (inst1, inst2) {
//         return (`i play ${inst1} and also ${inst2}`)
//     }
//     const athlete = function (sport1, sport2) {
//         return (`i play ${sport1} and also ${sport2}`)
//     }
//     const boardMaster = function (game1, game2) {
//         return (`i play ${game1} and also ${game2}`)
//     }
//     return {
//         music: musician,
//         sport: athlete,
//         board: boardMaster
//     }

// }

// const hobby = hobbyfier()

// console.log(hobby.music("piano", "guitar"))




// exercise 1

// const StringFormatter = function () {

//     const capitalizeFirst = function (name) {
//         console.log(name.charAt(0).toUpperCase() + name.slice(1))
//     }

//     const skewerCase = function (string) {
//         console.log(string.split(" ").join("-"))
//     }

//     return {
//         capitalizeFirst: capitalizeFirst,
//         skewerCase: skewerCase
//     }
// }



// const formatter = StringFormatter()

// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box


// exercise 2

const Bank = function () {

    let money = 500
    const depositCash = function (cash) {

        return money += cash
    }

    const checkBalance = function () {
        console.log(money);
    }

    return {

        showBalance: checkBalance,
        deposit: depositCash
    }

}


const bank = Bank()



bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
