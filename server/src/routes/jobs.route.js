const {
  getJobs,
  postJob,
  deleteJob,
  patchJob,
} = require("../controllers/jobs.controller");

const router = require("express").Router();

router.delete("/jobs/delete/:id", deleteJob);
router.patch("/jobs/update/:id", patchJob);
router.get("/jobs", getJobs);
router.post("/jobs", postJob);

module.exports = router;
