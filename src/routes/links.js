const express = require("express");
const router = express.Router();
const path = require("path");



router.get('/servicio-tecnico', (req, res ) => {
  res.render('links/servicio-tecnico');
});


router.get('/quienes-somos', (req, res ) => {
  res.render('links/quienes-somos');
});


router.get('/contacto', (req, res ) => {
  res.render('links/contacto');
});





module.exports = router;
