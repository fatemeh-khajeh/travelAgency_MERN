const mongoose = require('mongoose');
const clientsSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    birthday: String,
    // telephone: String,
    // email: String,
    dateDepart: String,
    nomCity: String,
    moyen: String,
    class: String,
    nomHotel: String,
    chambre: String,
    jour: String,
});


module.exports = mongoose.model('client',clientsSchema);

