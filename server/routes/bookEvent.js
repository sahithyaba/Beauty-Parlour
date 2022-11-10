const { Router } = require("express");
const router = Router();
const{sendAdmin}=require('../controller/SendMail');

router.get("/", sendAdmin);

module.exports = router;
