import axios from "../../utils/axios";

export const getJobs = async () => {
  const res = await axios.get("/jobs");
  console.log();
  return res.data.data.jobs;
};
export const postJob = async (data) => {
  const res = await axios.post("/jobs", data);
  return res.data.data.job;
};
export const deleteJob = async (id) => {
  const res = await axios.delete(`/jobs/${id}`);
  return res.data.deleteId;
};
