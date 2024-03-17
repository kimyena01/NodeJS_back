const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//기본주소: localhost:PORT/user

//localhost:PORT/user
router.get('/', controller.main);
router.get('/signup', controller.getSignup);
router.get('/signin', controller.getSignIn);

//PORT
router.post('/signup', controller.postSignup);
router.post('/signin', controller.postSignin);

router.post('/profile', controller.postProfile);

module.exports = router;