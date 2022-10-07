const express = require("express")
const app = express()
const port = 4000
app.use(express.json())

const arr1 = [
    {name: "mike"}, {name: "Nick"}, {name: "chris"}
]

const arr2 = [
    {food: "pizza"}, {food: "donut"}, {food: "chicken"}
]

const arr3 = [
    {color: "blue"}, {color: "yellow"}, {color: "red"}
]

app.get("/name", (req, res) => {
    res.send(arr1)
})

app.get("/food", (req, res) => {
    res.send(arr2)
})

app.get("/color", (req, res) => {
    res.send(arr3)
})



app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})