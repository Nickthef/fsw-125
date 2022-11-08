const express = require('express');
const morgan = require('morgan');

const thingFinder = require('./thingFinder');

const app = express();

const PORT = 8000;

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/things', thingFinder);

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
});

// Server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
})