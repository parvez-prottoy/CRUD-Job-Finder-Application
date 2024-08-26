import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../features/jobs/jobsSlice";
import toast from "react-hot-toast";

const Job = ({ job }) => {
  const dispatch = useDispatch();
  const { _id, title, type, salary, deadline } = job || {};
  const { isLoading, isError, error } = useSelector((state) => state.jobs);
  const handleDelete = (id) => {
    dispatch(removeJob(id));
    toast.success("Successfully Delete Job");
  };
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i
              className={`fa-solid fa-stop ${
                (type === "Internship" && "!text-[#FF5757]") ||
                (type === "Full Time" && "!text-[#FF8A00]") ||
                (type === "Remote" && "!text-[#56E5C4]")
              } text-lg mr-1.5`}
            ></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link to={"/jobs/edit/1"}>
            <button type="button" className="lws-edit btn btn-primary">
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </Link>
        </span>

        <span className="sm:ml-3">
          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="lws-delete btn btn-danger "
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            {isLoading ? "Loading" : "Delete"}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
