// const header = $("h1")
// console.log(header);

// console.log(jQuery);
// console.log($);

// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//         return document.getElementById(elementId)
//     }
// }
// console.log(myQuery("#yourElementID"))

// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("ul li:first").css("color", "green")
// $("ul li:last").css("color", "pink")
// $("#brown-div").css("color", "brown")

// $("#b1").addClass("box")
// $("#b2").addClass("box")


// $('#my-input').val("Terabyte")
// const color = $("div").data().color
// console.log(color) //prints #2980b9

// const barcode = $("div").data().barcode
// const expiry = $("div").data().expirationdate
// console.log(`The item with barcode ${barcode} will expire on ${expiry}`);
// console.log();



// spot check 6

// const hover = $("div").hover(function () {
//     $("div").css("background-color", "blue")
// }, function () {
//     $(this).css("background-color", "white")
// })


// spot check 7

// $("button").click(function () {
//     const input = $("#my-input").val()
//     alert(input)
// })

///////

// $("#b1").hover(function () {
//     console.log($(this))
// })

////

// $("div").hover(function () {
//     $(this).css("background-color", "blue")
// }, function () { $(this).css("background-color", "purple") })

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)

// $("body").append(elem)

// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')

// $("p").remove(".brown")

// $(".feedme").on("click", function () {
//     let divCopy = `<div class='feedme'>${$(this).text()}</div>`

//     $("body").append(divCopy)
// })



// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for (let name of names) {
//     $("body").append(`<div>${name}</div>`)
// }


// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for (let name of names) {
//     $("body").append(`<div class=human>${name.first} - ${name.last}</div>`)

// }


// const bye = $("div").hover(function () {
//     $(this).remove()
// })





// $("button").click(function () {
//     const post = "<div class='blog'> same ol' text</div>"
//     const posti = $(post)
//     $("#blogs").append(posti)
// })


// $("#blogs").on("click", ".blog", function () {
//     $(this).text("blargh")
// })





// const addDiv = function () {
//     $("#shalom").append("<div class=box></div>");
// };

// $("button").on("click", function () {
//     addDiv();
// });

// $("#shalom").on("click", ".box", function () {
//     alert("hi");
// });





/////////////////////// exercise 1

// const addName = $("button").click(function () {
//     const input = $("#input").val()
//     $("#list").append(`<li class="hello">${input}</li>`)
// })



///////////////////////// exercise 2

// $("#list").on("click", "li", function () {
//     $(this).remove("li")
// })



///////////////////////// exercise 3

$("body").append("<div class='box' id='1'></div>")
$("body").append("<div class='box' id='2'></div>")

$(".box").hover(function () {
    $(this).css("background-color", "red")
}, function () {
    $(this).css("background-color", "#8e44ad")
})


