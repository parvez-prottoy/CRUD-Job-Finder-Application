const { getJobsService } = require("../services/jobsService");

const getJobs = async (_req, res) => {
  const jobs = await getJobsService(res);
  return jobs;
};
module.exports = { getJobs };
