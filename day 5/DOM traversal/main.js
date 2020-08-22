// $(".remove").on("click", function () {
//     alert($(this).closest(".post").data().id)
// })

// $("button").on("click", function () {
//     let relevantInputValue = $(this).closest("div").find("input").val()
//     alert(relevantInputValue)
// })

// $("button").on("click", function () {
//     console.log($(this).closest("div").find("span").text())

// })

// $("button").on("click", function () {
//     console.log($(".container").find("p").text())
// })

const arr = []
$(".generator").on("click", function () {
    const gen = {
        "processor ID": $(this).closest(".processor").attr("id"),
        "Computer Data ID": $(this).closest(".computer").attr("data-id"),
        "Bus number ": $(this).closest(".computer").find(".BUS").text()
    }
    console.log(gen)
    arr.push({ cmp_ID: $(this).closest(".computer").attr("data-id") })
})

$(".validator").on("click", function () {
    const val = {
        "Generator text": $(this).closest(".ram").siblings(".processor").find(".generator").text(),
        "MB": $(this).closest(".ram").siblings(".MB").text(),
        "QR1": $(this).closest(".ram").siblings(".processor").find(".QR").first().text(),
        "QR2": $(this).closest(".ram").siblings(".processor").find(".QR").next(".QR").text()
    }
    console.log(val)
})