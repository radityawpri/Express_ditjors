const express = require("express");
const { sayHello } = require("../controller/helloworld");
const controller = require("../controller/helloworld");
const router = express.Router();

router.get("/hallo/", sayHello);

router.get("/test/", controller.sayHello);

module.exports = router;
