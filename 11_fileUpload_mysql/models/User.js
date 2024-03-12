// CREATE TABLE User(
//     id INT AUTO_INCREMENT NOT NULL PRIMARY KeyboardEvent,
//     userid VARCHAR(20) NOT NULL,
//     name VARCHAR(10) NOT NULL,
//     password VARCHAR(20) NOT NULL,
//     prof_img_url TEXT NULL,
// );

const { STRING } = require('sequelize'); //어차피 비활성화 -> 없어도 된다.

//TODO : user 모델(-> 테이블 구조) 정의
//시퀄라이즈 모델이랑 mysql table 연결
const User = function(Sequelize, DataTypes){ //('./User)(sequelize, Sequelize);
    //Sequelize: models/index.js의 sequelize.
    //DataTypes: models/index.js의 Sequelize.

    //const model 변수를 만들어서 그 변수에 mysql
    const model = Sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            password:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            prof_img_url:{
                type:DataTypes.TEXT,
                allowNull: true,
            },
        },{
            tableName:"user",
            freezeTableName: true,
            timestamps:false,
        }
    );

    return model;
};

module.exports = User;