const mongoose = require('mongoose');
const transportationsSchema = new mongoose.Schema({
    moyen: String,
    class: String,
    age: String,
    prix: String,
});


module.exports = mongoose.model('transportation',transportationsSchema);

