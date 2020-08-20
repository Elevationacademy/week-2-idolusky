const posts = [{ name: "Ido", text: "wow, first post" },
{ name: "shoobert", text: "is my name really shoobert?" },
{ name: "Omer", text: "what is life" }]

const render = function () {
    for (let post of posts) {
        const createDiv = `<div class='posts'><strong>${post.name}</strong> : ${post.text}</div>`
        const newDiv = $(createDiv)
        $("body").append(newDiv)
    }
}
render()
$("button").on("click", function () {
    const grabName = $("#name").val()
    const grabText = $("#text").val()
    posts.push({ name: grabName, text: grabText })
    $(".posts").empty()
    render()
})

$("body").on("click", "div", function () {
    $(this).empty()
})
