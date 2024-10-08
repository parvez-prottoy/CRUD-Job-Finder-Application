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
const deleteJobService = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteJob = await JobModel.deleteOne({ _id: id });
    res.status(200).json({
      status: "success",
      deleteId: id,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
const patchJobService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, type, salary, deadline } = req.body;
    const updateJob = await JobModel.findOne({ _id: id });
    updateJob.title = title;
    updateJob.type = type;
    updateJob.salary = salary;
    updateJob.deadline = deadline;
    await updateJob.save();
    res.status(200).json({
      status: "success",
      data: updateJob,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error?.message,
    });
  }
};
module.exports = {
  getJobsService,
  postJobService,
  deleteJobService,
  patchJobService,
};
