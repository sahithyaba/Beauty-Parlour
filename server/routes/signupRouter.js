const { Router } = require("express");
const router = Router();
const {createuser}=require('../controller/SignUp')

router.get("/",createuser);

module.exports = router;
