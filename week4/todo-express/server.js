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
let todoItems = [
    {name: "shopping", description: "produce", recyclable: true, quantity: 5, price: 2.50, _id: uuidv4()}
];

// Get route. http://localhost:3000/_id
app.get("/:todoId", (req, res) => {
    const singleItem = todoItems.find(todo => todo._id === req.params.todoId);
    res.send(singleItem);
});

//http://localhost:3000/
app.get("/", (req, res) => {
    res.send(todoItems);
});

// Post route. http://localhost:3000/
app.post("/", (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todoItems.push(newTodo);
    res.send(todoItems);
});

//http://localhost:3000/_id
app.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId);
    const updatedResource = Object.assign(todoItems[todoIndex], req.body);

    res.send(`Resource successfully updated to ${updatedResource}`)
});

//http://localhost:3000/_id
app.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId);
    todoItems.splice(todoIndex, 1);

    res.send("Resource successfully deleted!");
});

// Listener.
app.listen(port, () => {
    console.log('server is running on port 3000');
});