const express = require('express');
const app = express();
const PORT = 9000;

//cookie-parser
//요청의 쿠키를 해석해서 req.cookie 객체로 만들어준다.
//ex) name = hello라는 쿠키를 보내면 req.cookies에는 => { name : "hello"}가 들어있다. 
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true})); //body parser
app.use(express.json());

//cookie-parser를 사용하겠다.
app.use(cookieParser); // req.cookies 사용 가능해짐

//res.cookie(키, 값, 옵션);
// : 쿠키를 "설정"

//res.clearCookie(키, 값, 옵션);
// : 쿠키를 "삭제"

const popup = {
    httpOnly: true,
    maxAge: 60 * 1000, //10 * 1000 -> 10초
}

//res.cookie()
app.get('/', (req, res) => {
    //req.cookies.popup
    //쿠키 설정시 : 'hide',
    //쿠키 미설정시 : '',
    res.render('index', {popup: req.cookies.popup}); //myModal.show(); //아래코드. 쿠키 설정을 clisemeModal을 눌렀을 때 해서 아직 쿠키 설정이 안된 것
    // 그래서 req.cookies.popup을 출력했을 때 공백으로 나오는 것
});

app.post('/setCookie', (req, res) => {
    //쿠키 설정
    //res.cookie(키, 값, 옵션);
    res.cookie('popup', 'hide', popup); //응답을 보내는 게 아니라 쿠키를 설정하는 기능이다.  {popup: 'hide'}
    
    //응답 보내기
    //res가 두 개 있어서 응답을 두 번 보내는 것처럼 보일 수 있지만 아니다.
    res.send('쿠키 설정 성공');
})

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})