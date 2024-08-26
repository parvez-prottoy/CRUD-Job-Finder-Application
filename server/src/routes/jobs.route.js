const { getJobs, postJob } = require("../controllers/jobs.controller");

const router = require("express").Router();

router.get("/jobs", getJobs);
router.post("/jobs", postJob);

module.exports = router;
