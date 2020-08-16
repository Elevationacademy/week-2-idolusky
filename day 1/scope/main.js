// const names = ["Allison", "Beatrice", "Charles"]

// for (let n of names) {
//     let coolName = "cool " + n
//     console.log(coolName)
// }

// console.log(coolName) // throws an error

// const getBaseHeight = function () {
//     const height = 1.73
//     return height
// }

// const grow = function () {
//     height += 0.1
// }

// grow()


//===================================================================================
//Section 1
//===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")

//// running
//// finished running 8 miles
//// error distance undefined

//===================================================================================
//Section 2
//===================================================================================

// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }

//// error cowSound undefined


//===================================================================================
//Section 3
//===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)


//// order is in the scope of the loop
//// seved a fish , served a lettuce plate, served a curios cheese
//// finished serving all the orders : fish,lettuce plate , curious cheese


//===================================================================================
//Section 4
//===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

//// pot is in the global scope
//// seed is in the local scope of the getSeed function
//// planting the UNDEFINED inside a red pot with earth in it


//Section 5 - Optional(if you have time)
//===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

//// users is defined in local scope of the doesUserExist function
//// name is defined in a an object inside the doesUserExist function
//// found is defined in local scope of the if loop inside the doesUserExist function
//// error found is undefined (line 107)

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

//// isEnough is defined in global scope
////  prints "Finally, sheesh"