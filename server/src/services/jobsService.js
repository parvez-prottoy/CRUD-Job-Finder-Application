const JobModel = require("../models/jobs.model");

const getJobsService = async (res) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json({
      status: "success",
      data: {
        jobs,
      },
      total: jobs.length,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
const postJobService = async (req, res) => {
  try {
    const data = req.body || {};
    const job = await JobModel.create(data);
    res.status(200).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
module.exports = { getJobsService, postJobService };
