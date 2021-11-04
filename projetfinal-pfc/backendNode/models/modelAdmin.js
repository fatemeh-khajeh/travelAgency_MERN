const mongoose = require('mongoose');
const adminsSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    username: String,
    password: String,
});

module.exports = mongoose.model('admin',adminsSchema);

