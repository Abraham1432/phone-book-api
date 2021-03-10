//express
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

const { getContacts} = require('../controllers/contacts');

router.get('/:id', getContacts );

module.exports = router;