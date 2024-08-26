const {
  getJobs,
  postJob,
  deleteJob,
} = require("../controllers/jobs.controller");

const router = require("express").Router();

router.get("/jobs", getJobs);
router.post("/jobs", postJob);
router.delete("/jobs/:id", deleteJob);

module.exports = router;
