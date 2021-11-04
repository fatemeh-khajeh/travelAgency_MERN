const mongoose = require('mongoose');
const citiesSchema = new mongoose.Schema({
    nomCity: String,
    description: String,
});


module.exports = mongoose.model('city',citiesSchema);

