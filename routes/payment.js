const express = require('express');
const https = require('https');
// const request = require('request');
const logger = require('../lib/logger');
const paymentService = require('../service/paymentService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const options = await paymentService.kakaoPayApi();

    const req1 = https.request(options, (res1) => {
      console.log('Status: ', res1.statusCode);
      console.log(`Headers: ${JSON.stringify(res1.headers)}`);
      res1.setEncoding('utf8');
      res1.on('data', (body) => {
        console.log(`Body: ${body}`);
        // result = body;
        res.status(200).json(body);
      });
    });
    req1.on('error', (e) => {
      console.log(`problem with request: ${e.message}`);
    });

    req1.write(
      '{"text": "test string" }',
    );
    req1.end();
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
