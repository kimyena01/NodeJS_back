// const { response } = require('express');
const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;

//db에서 가져왔다고 가정
const realId = 'banana';
const realPw = '4321';

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.render('dynamic', { title: '동적 폼을 배워보자!!' });
});

app.get('/fetch', function(req, res){
    console.log(req.query);

    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


app.listen(PORT, function () {
console.log(`http://localhost:${PORT}`);
});