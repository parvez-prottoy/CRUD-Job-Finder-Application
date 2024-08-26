const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    deadline: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const JobModel = mongoose.model("jobs", schema);
module.exports = JobModel;
