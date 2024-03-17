const mysql = require('mysql');

//DB연결 정보
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'kimyena1123',
    database: 'kdt',
});

//모든 게시물 보기
exports.getVisitors = (callback) => {
    //after - mysql 연결
    //query(SQL, callback)
    conn.query('SELECT * FROM visitor', (err, rows) => {
        if(err){
            throw err;
        }
        console.log("visitor.js", rows);
        callback(rows);
    })
};


//게시물 작성
exports.postVisitor = (data, callback) => {
    console.log("######################");
    console.log("data.name >> ", data.name);
    console.log("data.comment >> ", data.comment);

    conn.query(
        //insert into visitor (name, comment) values ('홍길동', '내가왔다');
        `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}');`,

        (err, rows) => {
            if(err){
                throw err;
            }
            console.log("Visitor.js>> ", rows);
            console.log("rows.insertId >> ", rows.insertId);

            callback(rows.insertId);
        }
    )
}

exports.getVisitor = (id, callback) => {
    //select * from visitor where id = id
    conn.query(`SELECT * FROM visitor where id = ${id}`,
    
    (err, rows) => {
        if(err){
            throw err;
        }
        callback(rows[0]);
    })
}

exports.patchVisitor = (data, callback) => {
    console.log('model data >> ', data);
    //update visitor set name = name, comment = comment where id = id
    conn.query(`UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`,
    
    (err, rows) => {
        if(err){
            throw err;
        }

        console.log('visitor.js >> ', rows);
        callback(true);
    })
}

exports.deleteVisitor = (id, callback) => {
    //delete from visitor where id = id
    conn.query(`DELETE FROM visitor WHERE id = ${id}`, 
    
    (err, rows) => {
        if(err){
            throw err;
        }

        callback(true);
    })
}