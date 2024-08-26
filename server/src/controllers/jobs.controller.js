const { getJobsService, postJobService } = require("../services/jobsService");

const getJobs = async (_req, res) => {
  const jobs = await getJobsService(res);
  return jobs;
};
const postJob = async (req, res) => {
  const job = await postJobService(req, res);
  return job;
};
module.exports = { getJobs, postJob };
