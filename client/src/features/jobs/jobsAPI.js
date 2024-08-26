import axios from "../../utils/axios";

export const getJobs = async () => {
  const res = await axios.get("/jobs");
  console.log();
  return res.data.data.jobs;
};
