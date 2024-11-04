const express = require('express');
const router = express.Router();
const clienteCrontroller = require('../controllers/clientesControllers');

router.get('/',clienteCrontroller.list);
router.get('/home',clienteCrontroller.home);
router.post('/add',clienteCrontroller.guardar);
router.get('/delete/:id', clienteCrontroller.eliminar);
router.get('/update/:id', clienteCrontroller.obtenerCliente);
router.post('/update/:id', clienteCrontroller.editar);



module.exports = router;