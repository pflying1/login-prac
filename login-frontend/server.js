const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
/*
app.get('/api/users', (req, res) => {
  // 사용자 정보 처리
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  res.json(users);
}); */

app.get('/', (req, res) => {
  // index.html 파일을 반환
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'main.js'));
});

// 서버 시작
app.listen(2080, () => {
  console.log('서버가 http://localhost:2080 에서 실행 중입니다.');
});
