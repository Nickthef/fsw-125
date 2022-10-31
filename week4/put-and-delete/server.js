// Server.js.
const express = require('express');
// const expressRouter = express.Router();
const app = express();
const {v4: uuidv4} = require('uuid');

// Port of localhost.
const port = 3000;

// Middleware.
app.use(express.json());
// app.use(expressRouter);

// Array of objects.
let recycledItems = [
    {name: "pizza-box", description: "cardboard", recyclable: "true", quantity: 5, price: 2.50, _id: uuidv4()}
];

// Get route. http://localhost:3000/_id
app.get("/:recycledId", (req, res) => {
    const singleItem = recycledItems.find(recycled => recycled._id === req.params.recycledId);
    res.send(singleItem);
});

//http://localhost:3000/
app.get("/", (req, res) => {
    res.send(recycledItems);
});

// Post route. http://localhost:3000/
app.post("/", (req, res) => {
    const newRecyclable = req.body;
    newRecyclable._id = uuidv4();
    recycledItems.push(newRecyclable);
    res.send(recycledItems);
});

//http://localhost:3000/_id
app.put("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycledItems.findIndex(recycled => recycled._id === recycledId);
    const updatedResource = Object.assign(recycledItems[recycledIndex], req.body);

    res.send(`Resource successfully updated to ${updatedResource}`)
});

//http://localhost:3000/_id
app.delete("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycledItems.findIndex(recycled => recycled._id === recycledId);
    recycledItems.splice(recycledIndex, 1);

    res.send("Resource successfully deleted!");
});

// Listener.
app.listen(port, () => {
    console.log('server is running on port 3000');
});