const { home, health } = require("../controllers/base.controller");

const router = require("express").Router();

router.get("/", home);
router.get("/health", health);

module.exports = router;
