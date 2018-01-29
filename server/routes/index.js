var express = require('express');
var app = express();
var router = express.Router();
var swiper = require('../database/swiper.json');
var city = require('../database/city.json');
var sh_hot = require('../database/sh_hot.json');
var gz_hot = require('../database/gz_hot.json');
var bj_hot = require('../database/bj_hot.json');
var evaluationg = require('../database/cc_evaluation.json');
app.use('/api',router);
/* GET home page. */
// 跑马灯数据
router.get('/swiperlist', function(req, res, next) {
  res.json({
  	data:swiper
  });
});

// 获取城市列表
router.get('/citylist', function(req, res, next) {
  res.json({
  	data:city
  });
});

// hotlist
router.get('/hostlist', function(req, res, next) {
  let cityname = req.param('cityname'); // 获取前台传过来的城市
  var hot_city = '';
  if(cityname == '深圳') {
  	hot_city = sh_hot;
  } else if(cityname == '北京') {
  	hot_city = bj_hot;
  } else if(cityname == '广州') {
  	hot_city = gz_hot;
  } else{
  	hot_city = sh_hot;
  }
  res.json({
  	data:hot_city
  });
});

// 获取评论信息
router.get('/evaluationg', function(req, res, next) {
  res.json({
    data:evaluationg
  });
});
module.exports = router;
