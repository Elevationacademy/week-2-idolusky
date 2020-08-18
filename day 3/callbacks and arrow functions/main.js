// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// getData()

// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         func()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)



// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument


// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         func()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

// const timer = function () {
//     console.log(new Date())
// }

// setInterval(timer, 1000)


// setInterval(function () {
//     console.log(new Date())
// }, 1000)



// const square = num => console.log(num * num)

// square(4)

// const getFormalTitle = (title, name) => title + " " + name

// const formalTitle = getFormalTitle("senior", "Lusky")
// console.log(formalTitle);



// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function\\
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName() // doesn't print the name

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()



// exercise 1

// const push = function () {
//     console.log("pushing it!")
// }

// const pull = function () {
//     console.log("pulling it!")
// }

// const pushPull = function (func) {
//     func()
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"




// exercise 2


// const returnTime = function (time) {
//     alert('The current time is: ' + time)
// }

// const getTime = (func) => (new Date())

// getTime(returnTime(new Date))

//////////////////////////////////////////// ask about this exercise 2 !!




// exercise 3 

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
// };
// const logData = (data) =>
//     console.log(data)
// displayData(alert, logData, "I like to party")

//////////////////////////////////////////// ask about this exercise 3 !!



// exercise 4

// const add = (x, y, z) => x + y + z
// const sum = add(2, 4, 6)
// console.log(sum)



// exercise 5

// const capitalize = name => {
//     const lowerCase = name.toLowerCase()
//     console.log(lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1))
// }
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia



// exercise 6

// const determineWeather = temp => {
//     if (temp > 25) {
//         return "hot"
//     }
//     return "cold"
// }

// const commentOnWeather = temp => console.log("its " + determineWeather(temp))

// commentOnWeather(26) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"



// exercise 7

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
// }

// const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

// const makeSound = sound => alert(sound)

// explode(shineLight, makeSound, "BOOM")



let x = {
    count: 12,
    go: () => {
        setTimeout(function () {
            console.log(this.count)
        }, 1500)
    }
}
x.go()
