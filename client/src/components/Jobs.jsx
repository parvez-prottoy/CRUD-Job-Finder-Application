import React from "react";
import JobsFilter from "./JobsFilter";
import Job from "./Job";

const Jobs = () => {
  return (
    <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <JobsFilter />
      <div class="jobs-list">
        <Job />
      </div>
    </main>
  );
};

export default Jobs;
