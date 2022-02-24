const express = require('express');
const path = require('path');

const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'upload/');
  },
  filename(req, file, callback) {
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);
    callback(null, `${basename}-${Date.now()}${extension}`);
  },
});

// 1. 미들웨어 등록
const upload = multer({
  storage,
});

// 뷰 페이지 경로
router.get('/show', (req, res, next) => {
  res.render('board');
});

// 2. 파일 업로드 처리
router.post('/create', upload.single('imgFile'), (req, res, next) => {
  // 3. 파일 객체
  const { file } = req;

  // 4. 파일 정보
  const result = {
    originalName: file.originalname,
    size: file.size,
  };

  res.json(result);
});

module.exports = router;
