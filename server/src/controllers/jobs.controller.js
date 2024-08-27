const {
  getJobsService,
  postJobService,
  deleteJobService,
  patchJobService,
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
const patchJob = async (req, res) => {
  const editJob = await patchJobService(req, res);
  console.log(editJob);
  return editJob;
};
module.exports = { getJobs, postJob, deleteJob, patchJob };
