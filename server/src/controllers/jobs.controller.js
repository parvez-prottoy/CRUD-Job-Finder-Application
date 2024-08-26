const {
  getJobsService,
  postJobService,
  deleteJobService,
} = require("../services/jobsService");

const getJobs = async (_req, res) => {
  const jobs = await getJobsService(res);
  return jobs;
};
const postJob = async (req, res) => {
  const job = await postJobService(req, res);
  return job;
};
const deleteJob = async (req, res) => {
  const deleteJob = await deleteJobService(req, res);
  return deleteJob;
};
module.exports = { getJobs, postJob, deleteJob };
