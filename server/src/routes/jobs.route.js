const { getJobs } = require("../controllers/jobs.controller");

const router = require("express").Router();

router.get("/jobs", getJobs);

module.exports = router;
