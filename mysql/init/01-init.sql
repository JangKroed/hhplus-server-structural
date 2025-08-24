-- MySQL 초기화 스크립트

-- 데이터베이스 생성 및 사용자 권한 설정
CREATE DATABASE IF NOT EXISTS dbname;

-- root 사용자 권한 설정 (모든 호스트에서 접근 가능)
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON dbname.* TO 'root'@'%';

-- 권한 변경사항 적용
FLUSH PRIVILEGES;

-- 기본 테이블 생성 예시 (필요에 따라 수정)
USE dbname;

-- 예시 테이블 (필요시 주석 해제)
-- CREATE TABLE IF NOT EXISTS users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(255) NOT NULL UNIQUE,
--   email VARCHAR(255) NOT NULL UNIQUE,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- 초기 데이터 삽입 예시 (필요시 주석 해제)
-- INSERT INTO users (username, email) VALUES 
--   ('admin', 'admin@example.com'),
--   ('user1', 'user1@example.com');
