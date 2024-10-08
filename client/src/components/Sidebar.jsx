import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFilters } from "../features/filters/filtersSlice";
const Sidebar = () => {
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilters({ filter: filterValue }));
  }, [filterValue, dispatch]);
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setFilterValue("")}
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                  onClick={() => setFilterValue("Internship")}
                  className="sub-menu"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFilterValue("Fulltime")}
                  className="sub-menu"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFilterValue("Remote")}
                  className="sub-menu"
                  href="/jobs/remote"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs/add" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
