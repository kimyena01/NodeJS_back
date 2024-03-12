const express = require('express');
const cookieParser = require('cookie-parser');
//cookie-parser
//요청의 쿠키를 해석해서 req.cookie 객체로 만들어준다.
//ex) name = hello라는 쿠키를 보내면 req.cookies에는 -> { name : "hello"}가 들어있다.
//유효기간이 지난 쿠키는 알아서 제거

const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({extended:true})); //body-parser
app.use(express.json());

//cookie-parser를 사용하겠다.
app.use(cookieParser()); //req.cookies 가능해짐

//res.cookie(키, 값, 옵션)
// : 쿠키를 "설정"

//res.clearCookie(키, 값, 옵션)
// : 쿠키를 "삭제"
const cookieConfig = {
    //옵션 속성들..
    httpOnly: true,
    maxAge: 60 * 1000, //1 min : 유효 시간 설정(단위 : 밀리초ms)
    //expires : 만료날짜 설정
    //secure: https에서만 쿠키 접근 가능
    //signed : 쿠키 암호화 설정
}

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/setCookie', (req, res) => {
    //res.cookie(키, 값, 옵션) //쿠키를 설정하는 메소드
    res.cookie('myKey1', 'myValue1', cookieConfig); //쿠키 설정. cookieConfig 객체. 위에 설정함
    res.send('set cookie');
});

app.get('/getCookie', (req, res) => {
    res.send(req.cookies); //쿠키 해석(쿠키 읽기)
});

app.get('/clearCookie', (req, res) => {
    res.clearCookie('myKey1', 'myValue1', cookieConfig); // 쿠키 삭제
    res.send('clear cookie!');
});

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})


