const express = require('express');
const mongoose = require('mongoose');

const app = express();

uri = 'mongodb+srv://xume:xume@cluster0.d3msh.mongodb.net/todo_express?retryWrites=true&w=majority';
// conenction to mongodb
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));

// server configurations....
app.listen(3000, () => console.log('Server started listening on port: 3000'));
