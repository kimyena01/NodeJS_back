const mysql = require('mysql');

//DB연결정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kimyena1123',
    database: 'kdt',
});

exports.postSignup = (data, callback) => {
    //INSERT INTO (userid, name, pw) VALUES ('아이디', '이름', '비번');

    console.log('##################');
    console.log("userId >> ", data.userId);
    console.log("usrPw >> ", data.userPw);
    console.log('name >> ', data.name);
    conn.query(
        `INSERT INTO user (userid, name, pw) VALUES ('${data.userId}', '${data.name}', '${data.userPw}')`,

        (err, rows) => {
            if(err){
                throw err;
            }

            callback(rows.insertId);
        }
    )
}

exports.postSignin = (data, callback) => {
    console.log('여기는 모델>>>> data.userId>>', data.userId);
    console.log('data.userPw > ', data.userPw);
    conn.query(
        `SELECT * FROM user WHERE userid = '${data.userId}' AND pw = '${data.userPw}' LIMIT 1`,

        (err, rows) => {
            if(err){
                throw err;
            }
            callback(rows);
        }
    )
}

exports.postProfile = (data, callback) => {
    console.log('>>>', data); //{ userid: 'id1' }
    conn.query(`SELECT * FROM user WHERE userid = '${data.userid}'`,
    (err, rows) => {
        if(err){
            throw err;
        }
        callback(rows);
    })
}