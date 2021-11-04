const mongoose = require('mongoose');
const hotelsSchema = new mongoose.Schema({
    nomHotel: String,
    etoile: String,
    adresse: String,
    telephone: String,
    chambre: String,
    prix: String
});


module.exports = mongoose.model('hotel',hotelsSchema);

