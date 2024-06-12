const mongoose = require("mongoose");

const busquedaSchema = new mongoose.Schema({
  city: String,

});

module.exports = mongoose.model("Busqueda", busquedaSchema);