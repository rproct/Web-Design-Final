const express = require('express')

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.get("/resources", (req, res) => {
    let fed = require("./Dropdown_Links/fed.json")
    let cal = require("./Dropdown_Links/cal.json")
    let monte = require("./Dropdown_Links/monte.json")
    res.render("resources", {"fed": fed, "cal": cal, "monte": monte})
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

//http://localhost:3000
app.listen(3000, () => {
    console.log("Express is running...")
})