const express = require('express');
const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//라우터 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})