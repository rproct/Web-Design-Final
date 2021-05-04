const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080

const app = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname))
app.use(express.static(__dirname + "public"))
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render(path.resolve(__dirname, "views/index"))
})

app.get("/about", (req, res) => {
    res.render(path.resolve(__dirname, "views/about"))
})

app.get("/outreach", (req, res) => {
    res.render(path.resolve(__dirname, "views/outreach"))
})

app.get("/services", (req, res) => {
    res.render(path.resolve(__dirname, "views/services"))
})

app.get("/resources", (req, res) => {
    let fed = require(__dirname + "/Dropdown_Links/fed.json")
    let cal = require(__dirname + "/Dropdown_Links/cal.json")
    let monte = require(__dirname + "/Dropdown_Links/monte.json")
    res.render(path.resolve(__dirname, "views/resources"), {"fed": fed, "cal": cal, "monte": monte})
})

app.get("/events", (req, res) => {
    res.render(path.resolve(__dirname, "views/events"))
})

app.get("/contact", (req, res) => {
    res.render(path.resolve(__dirname, "views/contact"))
})

//http://localhost:3000
app.listen(port, () => {
    console.log(`Express is running on Port: ${port}...`)
})