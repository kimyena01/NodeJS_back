const {response} = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//views 설정
app.set('view engine', 'ejs'); //view engine 등록

//Middleware 설정
// request(요청)과 response(응답)의 중간에서 작업
app.use('/views', express.static(__dirname + 'views')); //views 파일 설정
app.use(express.urlencoded({extended:true}));
app.use(express.json()); //josn 형태로 데이터를 전달받음

//routing - 경로 설정
//req : 요청( client -> server)
//res : 응답( server -> client)
app.get('/', function(req, res){
    res.render('index', {message: "폼 전송을 배워보자!", desc: "fetch 사용"});
});


//api
app.get('/getForm', function(req, res){
    //GET 요청은 req.query 객체에 폼 정보가 전달
    console.log(req.query);
    res.render('result', {title: 'GET 요청 성공!', userInfo: req.query});
});

app.post('/postForm', function(req,res){
    //POST 요청은 req.body 객체에 폼 정보가 전달
    console.log(req.body);
    res.render('result', {title: 'POST 요청 성공', userInfo: req.body});
});


app.listen(PORT, function(){
    console.log(`http:localhost:${PORT}`);
});