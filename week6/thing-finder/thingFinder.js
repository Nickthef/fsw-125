
const express = require('express');
const thingFinder = express.Router();

// data
const inventoryItems = [
    { name: 'pizza', type: 'food', price: 2.20,  },
    { name: 'soccer ball', type: 'sports', price: 200, },
    { name: 'hat', type: 'clothing', price: 50, },
    { name: 'acoustic', type: 'guitar', price: 1500, },
    { name: 'apples', type: 'fruits', price: 5, },
    { name: 'moanna', type: 'movie', price: 30, },
    { name: 'budlight', type: 'beer', price: 30, }
];

// Routes
thingFinder
.get('/', (req, res) => { // GET all items
    res.status(200).send(inventoryItems);
})

.get('/search/type', (req, res) => { // GET some
    const thingType = req.query.type;
    const filteredThings = inventoryItems.filter(item => item.type === thingType);

    res.status(200).send(filteredThings);
})

module.exports = thingFinder;