const express = require('express');
const router = express.Router();
const busquedaModel = require('../modelos/Busqueda')

router.post("/", async (req, res) => {
  const {city} = req.body;
  const nuevaBusqueda = new busquedaModel({
    city: city
  })
  await nuevaBusqueda.save();
})

module.exports = router;