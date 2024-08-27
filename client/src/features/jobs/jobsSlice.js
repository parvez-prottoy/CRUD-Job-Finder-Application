import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, postJob, deleteJob, updateJob } from "./jobsAPI";
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
// note: async thunk - removeJob
export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const removeId = await deleteJob(id);
  return removeId;
});
// note: async thunk - removeJob
export const editingJob = createAsyncThunk(
  "jobs/editJob",
  async ({ id, data }) => {
    const updateJobValue = await updateJob({ id, data });
    return updateJobValue;
  }
);
// note: jobs slices
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateJobAction: (state, action) => {
      state.editJob = action.payload;
    },
  },
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
    // note: removeJob
    builder
      .addCase(removeJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
    // note: editingJob
    builder
      .addCase(editingJob.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(editingJob.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.jobs = state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        );
      })
      .addCase(editingJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default jobsSlice.reducer;
export const { updateJobAction } = jobsSlice.actions;
