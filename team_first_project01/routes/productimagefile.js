const express = require('express');
const path = require('path');

const router = express.Router();
const multer = require('multer');
const logger = require('../lib/logger');
const productimagefileService = require('../service/productimagefileService');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'upload/'); // 이전이랑 파일 그대로
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}__${file.originalname}`);
  },
});

// 1. 미들웨어 등록
const upload = multer({ storage });

// 뷰 페이지 경로
router.get('/show', (req, res, next) => {
  res.render('board');
});

// 등록 파일 업로드
router.post('/create', upload.single('imgFile'), async (req, res, next) => {
  try {
    const params = {
      filedname: req.body.filedname,
      originalname: req.body.originalname,
      encoding: req.body.encoding,
      mimetype: req.body.mimetype,
      destination: req.body.destination,
      filename: req.body.filename,
      path: req.body.path,
      size: req.body.size,

    };
    logger.info(`(productimagefile.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.filedname) {
      const err = new Error('Not allowed null (filedname)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await productimagefileService.reg(params);
    logger.info(`(productimagefile.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }

  // res.json({ url: `/img/${req.file.filename}` });
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      filedname: req.body.filedname,
      originalname: req.body.originalname,
      encoding: req.body.encoding,
      mimetype: req.body.mimetype,
      destination: req.body.destination,
      filename: req.body.filename,
      path: req.body.path,
      size: req.body.size,
    };
    logger.info(`(productimagefile.list.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.list(params);
    logger.info(`(productimagefile.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(productimagefile.info.params) ${JSON.stringify(params)}`);

    const result = await productimagefileService.info(params);
    logger.info(`(productimagefile.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
