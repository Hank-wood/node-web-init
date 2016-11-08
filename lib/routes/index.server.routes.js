const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index.server.controller');

module.exports = function(app) {
  router.get('/', indexCtrl.index);
  router.get('/about', indexCtrl.about);

  app.use('/', router);
}
