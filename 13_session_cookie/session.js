const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

//render X => view 처리 X
//session9{세션 모듈 _옵션}
// - secret : 세션 발급시 사용되는 키 => 반드시 필요한 옵션
// - resave : 매 요청마다 세션을 다시 저장할 것인지
// - saveUninitialized : 초기값이 지정되지 않은 상태에서도 처음ㅁ부터 새션 생성할 지
app.use(session({
    secret: 'secreKey',
    resave: false,
    saveUninitialized: true,
    name: 'my-session',
}));

//req.session: 사용자별로 해당 객체 안에 새션 정보가 들어있다.

//세션 쿠키 설정
//req.session.키 = 값

//세션 쿠키 사용
//req.session.키

//세션 삭제
//req.session.destroy(콜백함수)
// - 콜백함수: 세션 삭제시 호출할 콜백함수

app.get('/', (req, res) => {
    //세션 설정
    req.session.name = '홍길동'; //session 이름 설정

    //응답 보냄
    res.send('새션 설정 완료!');
});

//localhost:PORT/name => 홍길동
app.get('/name', (req, res) => {
    res.send(req.session.name);
});

//localhost:PORT/sid => y3BhYEeRUqttrV78KivBtz90yWLQpfWR
app.get('/sid', (req, res) => {
    res.send(req.sessionID);
});

app.get('/destroy', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            throw err;
        }

        //1. GET/: name 세션 설정
        //2. GET/: name : name 값 확인
        //3. GET/ destroy: 세션 삭제
        //4. GET/ name: name 확인 불가능
        res.send('새션 삭제 완료');
    })
});

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
});