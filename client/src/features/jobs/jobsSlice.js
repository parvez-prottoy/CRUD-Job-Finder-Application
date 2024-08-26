import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, postJob } from "./jobsAPI";
const initialState = {
  jobs: [],
  editJob: {},
  fetching: false,
  isLoading: false,
  isError: true,
  error: null,
};
// note: async thunk - fetchJobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
// note: async thunk - createJob
export const createJob = createAsyncThunk("jobs/createJob", async (data) => {
  const job = await postJob(data);
  return job;
});
// note: jobs slices
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    // note: fetchJobs
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.error = null;
        state.fetching = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.error = null;
        state.fetching = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.fetching = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
    // note: createJob
    builder
      .addCase(createJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        [action.payload].concat(state.jobs);
        state.jobs = [action.payload, ...state.jobs];
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default jobsSlice.reducer;
