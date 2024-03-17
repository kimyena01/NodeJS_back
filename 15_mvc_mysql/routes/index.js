const express = require('express');
const controller = require('../controller/CVisitor');
const router =  express.Router();

//GET / -> localhost: PORT/
router.get('/', controller.main);

//GET /visitors -> loalhost:PORT/visitors
router.get('/visitors', controller.getVisitors);

router.post('/visitors/write', controller.postVisitor);

router.get('/visitors/get', controller.getVisitor);

router.patch('/visitors/edit', controller.patchVisitor);

router.delete('/visitors/delete', controller.deleteVisitor);

module.exports = router;