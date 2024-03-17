const User = require('../model/User');

exports.main = (req, res) => {
    res.render('user');
};

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.getSignIn = (req, res) => {
    res.render('signin');
};

exports.postSignup = (req, res) => {
    User.postSignup(req.body, (result) => {
        console.log("###여기는 컨트롤러###");
        console.log("result >> ", result); //id 값
        console.log('req.body.userId', req.body.userId);
        console.log('req.body.userPw >> ', req.body.userPw);
        console.log('req.body.name >> ', req.body.name);

        res.send({
            userid: req.body.userId,
            name: req.body.name,
            pw: req.body.userPw,
        });
    })
}

exports.postSignin = (req, res) => {
    console.log("여기는 컨트롤러");
    console.log('req.body.userId >> ', req.body.userId);
    console.log('req.body.userPw >> ', req.body.userPw);

    User.postSignin(req.body, (result) => {
        if(result.length > 0){
            res.send(true);
        }else{
            res.send(false);
        }
    })
}

exports.postProfile = (req, res) => {
    console.log(req.body);

    User.postProfile(req.body, (result) => {
        console.log('여기는 컨트롤러ㅓㅓㅓㅓ result >> ', result);

        if(result.length > 0){
            res.render('profile', {data: result[0]});
        }
    })
}