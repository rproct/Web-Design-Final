const express = require('express')

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})

//http://localhost:3000
app.listen(3000, () => {
    console.log("Express is running...")
})