var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vitor_sans:z94vitor@cluster0-apbbv.mongodb.net/test?retryWrites=true&w=majority');
 
var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    friend: String
}, { collection: 'amigos' }
);
 
module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }