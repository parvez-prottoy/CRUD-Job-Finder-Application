import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://crud-job-finder-application.vercel.app/api/v1",
});
export default axiosInstance;
