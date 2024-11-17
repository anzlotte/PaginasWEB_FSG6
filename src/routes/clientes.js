const express = require('express');
const router = express.Router();
const clienteCrontroller = require('../controllers/clientesControllers');

router.get('/',clienteCrontroller.list);
router.get('/home',clienteCrontroller.home);
router.post('/add',clienteCrontroller.guardar);
router.get('/delete/:id', clienteCrontroller.eliminar);
router.get('/update/:id', clienteCrontroller.obtenerCliente);
router.post('/update/:id', clienteCrontroller.editar);

//Controller usuarios
router.get('/login', clienteCrontroller.login);
router.get('/admon', clienteCrontroller.admon);
router.post('/guardarU',clienteCrontroller.guardarUsuario);
router.post('/auth',clienteCrontroller.auth);
router.get('/logout',clienteCrontroller.logout);



module.exports = router;