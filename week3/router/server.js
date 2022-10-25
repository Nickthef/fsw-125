// Server.js.
const express = require('express');
const expressRouter = express.Router();
const app = express();
const {v4: uuidv4} = require('uuid');

// Port of localhost.
const port = 3000;

// Middleware.
app.use(express.json());
app.use(expressRouter);

// Array of objects.
let recycledItems = [
    {name: "pizza-box", description: "cardboard", recyclable: "true", quantity: 5, price: 2.50, _id: uuidv4()}
];

// Get route.
expressRouter.get("/", (req, res) => {
    res.send(recycledItems);
});

app.get("/", (req, res) => {
    res.send(recycledItems);
});

// Post route.
app.post("/", (req, res) => {
    const newRecyclable = req.body;
    newRecyclable._id = uuidv4();
    recycledItems.push(newRecyclable);
    res.send(recycledItems);
});

// Listener.
app.listen(port, () => {
    console.log('server is running on port 3000')
});