var express = require('express');
var router = express.Router();

var contractCtrl = require('../controllers/contact');
var indexCtrl = require('../controllers/index');
/* GET home page. */
router.get('/', indexCtrl.getTopic);

router.get('/abc', function (req, res, next) {
  res.render('abc');
});
router.get('/contact', contractCtrl.getContact);


router.get('/cards', function (req, res) {
  res.render('cards');
})
router.get('/content/:productid', function (req, res) {
  console.log(req.params.id);
  res.end();
})
module.exports = router;
