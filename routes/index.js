var express = require('express');
var router = express.Router();
const {signUp} = require("../controllers/auth.controller");
const {getAllDevice} = require("../controllers/device.controller");
const { index, infiniteComment, multiSelect } = require("../controllers/tabEditController/indexController");
const {dashboard, editTable, box, accordian, swapDivColor, product} = require("../controllers/dashboard.controller")






/* GET home page. */
// router.post('/', signUp);
// router.get('/getAllDevice', getAllDevice);

router.get('/', dashboard);
router.get('/index', index);
router.get('/infiniteComment', infiniteComment);
router.get('/multiSelect', multiSelect);
router.get('/editTable', editTable);
router.get('/box', box);
router.get('/accordian', accordian);
router.get('/swapDivColor', swapDivColor);
router.get('/product', product);

module.exports = router;
