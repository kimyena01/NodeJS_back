SHOW databases;

USE kdt; -- 있을떄

-- (데이터베이스 생성)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf_general_ci;

-- 데이터베이스 내 테이블 목록
SHOW tables;

-- #####################
--DDL
-- 테이블 생성

CREATE TABLE visitor(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;

SELECT * FROM visitor;
SELECT * FROM visitor WHERE id = 1;


INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES ('김예나', '코딩온');

--테이블 데이터 삭제(delete)
DELETE FROM visitior WHERE id > 2;

--테이블 데이터 수정(update)
UPDATE visitor SET name = '누구' , comment = "아무말" WHERE id = 1;

-- DCL
-- mysql 사용자 추가(user계정)
CREATE USER 'user'@'%' IDENTIFIED BY 'kimyena3264';
-- user 계정에 db 권한 부여(모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MYSQL 캐시 지우고 새로운 설정 적용 
FLUSH PRIVILEGES;


ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'kimyena3264';