console.log("yojagfruj")
const { search } = require("./Mongo")

console.log(search)
const submit = document.getElementById("submit")
submit.addEventListener("click", () => {
    const data = new search({
        title: "Newsapp",
        thumbnail: "https://img.youtube.com/vi/iCu6Gqz1Yvg/mqdefault.jpg",
        description: "newsapp in 10 mins",
        tags: "newsapp,javascript,react,news project,news website",
        video: "#"
    })
    data.save()
})

