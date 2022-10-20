const { Router } = require("express");
const router = Router();
const{login}=require('../controller/Login');

router.get("/", login);

module.exports = router;
