const models = require('../models');

exports.getSignup = (req, res) => {
    res.render('signup');
}


//INSERT INTO user (userid, name, password) VALUES (`${data.userid}`, `${data.name}`, `${data.password}`)
exports.postSignup = (req, res) => {

    console.log("#################");
    console.log("req >>>> ", req);


    models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        password: req.body.password,
    }).then((result) => {
        console.log('create >> ', result);

        res.send(result);
    })
}

exports.getSignin = (req, res) => {
    res.render('signin');
}


exports.postSignin = (req, res) => {
    console.log(req.body);
    console.log(req.body.userid);
    console.log(req.body.password);

    models.User.findOne({
        where: {
            userid: req.body.userid,
            password: req.body.password,
        }
    }).then((result) => {
        console.log('findone 로그인 성공 실패 >> ', result);

        if(result == null){
            res.send(false);
        }else{
            res.send(true);
        }
    })
}

exports.postProfile = (req, res) => {
    models.User.findOne({
        where: {userid: req.body.userid}
    }).then((result) => {
        co
        console.log('finddeOne >> ', result);
        conso

        if(result != null){
            console.log(result.userid);
            res.render('profile', {data: result});
        }
    })
}

exports.postDynamic_file = (req, res) => {
    console.log('req.body >> ' , req.body);
    console.log('req.file >> ', req.file);
    console.log('req.file.path >> ', req.file.path);
    console.log('req.file.originalname >> ', req.file.originalname);
    console.log('req-user_index >> ', req.body.id);

    res.send(req.file);

    models.User.update(
        {
            prof_img_url: req.file.filename,
        },
        {
            where: {
                id: req.body.id
            },
        }
    ).then((result) => {
        console.log('img update >> ', result);
    })

}