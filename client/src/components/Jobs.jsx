import React, { useEffect } from "react";
import JobsFilter from "./JobsFilter";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import Spinner from "./Spinner";

const Jobs = () => {
  const dispatch = useDispatch();
  const { fetching, jobs, iserror, error } = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  // note: decide what to render
  let content = null;
  if (fetching && !iserror) {
    content = <Spinner />;
  } else if (!fetching && iserror && error) {
    content = <p className="error">{error}</p>;
  } else if (!fetching && !iserror && jobs.length === 0) {
    content = <p className="error">No Jobs Found!!!</p>;
  } else if (!fetching && !iserror && jobs.length > 0) {
    content = jobs.map((job) => <Job key={job._id} job={job} />);
  }
  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <JobsFilter />
      <div className="jobs-list">{content}</div>
    </main>
  );
};

export default Jobs;
