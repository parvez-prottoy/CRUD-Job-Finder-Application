import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editingJob } from "../features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Spinner from "./Spinner";
const EditJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, editJob } = useSelector((state) => state.jobs) || {};
  const [updateValues, setUpdateValues] = useState({ ...editJob });
  const handleChange = (e) => {
    setUpdateValues({ ...updateValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editingJob({
        id: editJob._id,
        data: updateValues,
      })
    );
    toast.success("Successfully Edit Job");
    navigate("/");
  };
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300"
              >
                Job Title
              </label>
              <select
                value={updateValues.title}
                id="lws-JobTitle"
                name="title"
                onChange={handleChange}
                required
              >
                <option value="" hidden>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                onChange={handleChange}
                value={updateValues.type}
                id="lws-JobType"
                name="type"
                required
              >
                <option value="" hidden>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="salary"
                  onChange={handleChange}
                  value={updateValues.salary}
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="deadline"
                onChange={handleChange}
                value={updateValues.deadline}
                id="lws-JobDeadline"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default EditJob;
