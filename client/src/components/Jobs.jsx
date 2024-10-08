import React, { useEffect } from "react";
import JobsFilter from "./JobsFilter";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import Spinner from "./Spinner";

const Jobs = () => {
  const dispatch = useDispatch();
  const { fetching, jobs, iserror, error } = useSelector((state) => state.jobs);
  const { filter, search, sort } = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  // note: filter by type
  const filterByType = (job) => {
    switch (filter) {
      case "Internship":
        return job.type.toLowerCase() === "internship";
      case "Fulltime":
        return job.type.toLowerCase() === "full time";
      case "Remote":
        return job.type.toLowerCase() === "remote";
      default:
        return true;
    }
  };
  // note: filter by search
  const filterBySearch = (job) => {
    if (search) {
      return job.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  };
  // note: sort
  const sortJobs = (jobs) => {
    if (sort === "lowTo") {
      // ascending
      return jobs.sort((a, b) => Number(a.salary) - Number(b.salary));
    } else if (sort === "highTo") {
      // descending
      return jobs.sort((a, b) => Number(b.salary) - Number(a.salary));
    } else {
      return jobs;
    }
  };
  // note: decide what to render
  let content = null;
  if (fetching && !iserror) {
    content = <Spinner />;
  } else if (!fetching && iserror && error) {
    content = <p className="error">{error}</p>;
  } else if (!fetching && !iserror && jobs.length === 0) {
    content = <p className="error">No Jobs Found!!!</p>;
  } else if (!fetching && !iserror && jobs.length > 0) {
    const jobsToShow = sortJobs(
      jobs.filter(filterByType).filter(filterBySearch)
    );
    content =
      jobsToShow.length > 0 ? (
        jobsToShow.map((job) => <Job key={job._id} job={job} />)
      ) : (
        <p>No jobs found!!!</p>
      );
  }
  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <JobsFilter />
      <div className="jobs-list">{content}</div>
    </main>
  );
};

export default Jobs;
