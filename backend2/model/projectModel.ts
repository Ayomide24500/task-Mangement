import mongoose, { Document, Schema, Types, model } from "mongoose";

interface iTaskData {
  title: string;
  status: "todo" | "progress" | "done";
  data: any[]; // Adjust the data type according to your needs
}
interface iProject {
  projectName: string;
  deadline: string;
  budget: number;
  budgetGivenOut: number;
  budgetLeft: number;
  task: iTaskData[];
  user: {};
}
interface iProjectData extends iProject, Document {}

const projectModel = new Schema<iProjectData>(
  {
    projectName: {
      type: String,
    },

    deadline: {
      type: String,
    },

    budget: {
      type: Number,
    },

    budgetGivenOut: {
      type: Number,
    },

    budgetLeft: {
      type: Number,
    },
    task: [
      {
        title: { type: String },
        status: { type: String, enum: ["todo", "progress", "done"] },
        data: { type: Schema.Types.Mixed },
      },
    ],

    user: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model<iProjectData>("projects", projectModel);
