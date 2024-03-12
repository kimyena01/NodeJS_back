const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

const path = require('path');
const multer = require('multer');

//localhost:PORT/user/signup
router.get('/signup', controller.getSignup);
router.post('/signup', controller.postSignup);

router.get('/signin', controller.getSignin);
router.post('/signin', controller.postSignin);

//multer 설정
const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, "profileImgs/"); //경로 설정
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);

            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
});

router.post('/profile', controller.postProfile);
router.post('/profile/dynamicFile', uploadDetail.single("dynamic_file"), controller.postDynamic_file);



module.exports = router;