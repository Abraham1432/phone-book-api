//express
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { login } = require('../controllers/users');

router.post('/login',login);


module.exports = router;