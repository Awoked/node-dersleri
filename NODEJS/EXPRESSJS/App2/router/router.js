const router = require('express').Router();
const indexController = require('../controller/indexController');

const userController = require('../controller/userController');

router.get('/', indexController.Index)

router.get('/:markaAdi/arac/:sehirAdi', indexController.GetParameters)

router.post('/', indexController.Post)

router.delete('/', indexController.Delete)

router.get('/users', userController.Index);

router.use(indexController.Error)

module.exports = router