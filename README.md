# HHPlus Server

NestJS 기반의 서버 애플리케이션입니다.

## 필수 과제

- [API 명세서]()
- [ERD](https://www.erdcloud.com/d/mwJD8tnp8hqC9nM8u)
  ![hhplus-week2-erd](docs/images/Server%20Structural.png 'erd')
- [인프라 구성도](docs/images/InfraStructural.png)
  ![hhplus-week2-infra](docs/images/InfraStructural.png 'infra')

## 심화 과제

- [시퀀스 다이어그렘]()
- [마일 스톤](https://github.com/users/JangKroed/projects/1/views/1)

## 🚀 빠른 시작

### 필수 요구사항

- Docker
- Docker Compose

### 데이터베이스 시작

```bash
# MySQL 데이터베이스 시작
docker-compose up -d

# 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs mysql

# 데이터베이스 중지
docker-compose down
```

### 데이터베이스 연결 정보

- **Host**: localhost
- **Port**: 3306
- **Database**: dbname
- **Username**: root
- **Password**: pw

### 데이터베이스 접속 테스트

```bash
# 컨테이너 내부에서 접속
docker exec -it hhplus-mysql mysql -u root -p

# SQL 명령어 실행
docker exec hhplus-mysql mysql -u root -ppw -e "SHOW DATABASES;"
```

## 📁 프로젝트 구조

```
server/
├── docker-compose.yml          # Docker Compose 설정
├── mysql/                      # MySQL 초기화 스크립트
│   └── init/
│       └── 01-init.sql        # 데이터베이스 초기화
├── src/                        # 소스 코드
│   ├── database/               # 데이터베이스 설정
│   └── app.module.ts          # 메인 모듈
└── README.md                   # 프로젝트 문서
```

## 🔧 환경 변수

프로젝트 루트에 `.env` 파일을 생성하여 환경 변수를 설정할 수 있습니다:

```bash
# .env 파일 예시
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=dbname
DB_USERNAME=root
DB_PASSWORD=pw
DB_LOGGING_ENABLED=true
```

## 📝 개발 가이드

### NestJS 애플리케이션 실행

```bash
# 의존성 설치
npm install

# 개발 모드 실행
npm run start:dev

# 빌드
npm run build

# 프로덕션 실행
npm run start:prod
```

## 🐳 Docker 관련

### 볼륨 관리

```bash
# 볼륨 목록 확인
docker volume ls

# 볼륨 상세 정보
docker volume inspect server_mysql_data

# 볼륨 삭제 (주의: 데이터 손실)
docker volume rm server_mysql_data
```

### 컨테이너 관리

```bash
# 컨테이너 재시작
docker-compose restart mysql

# 컨테이너 로그 실시간 확인
docker-compose logs -f mysql

# 컨테이너 내부 접속
docker exec -it hhplus-mysql bash
```

## ⚠️ 주의사항

- 실제 운영 환경에서는 강력한 비밀번호를 사용하세요
- 데이터베이스 백업을 정기적으로 수행하세요
- 네트워크 보안 설정을 확인하세요
