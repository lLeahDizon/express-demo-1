import {RequestHandler} from 'express';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users 发送一句话');
} as RequestHandler);

router.get('/xxx', function (req, res, next) {
  res.send('xxx 发送一句话');
} as RequestHandler);

module.exports = router;
