import { model, Schema, Types, Document } from "mongoose";

interface iUser {
  companyName: string;
  email: string;
  uniqueCode: string;
  password: string;
  plan: string;
  staff: Array<{}>;
  project: Array<{}>;
}

interface iUserData extends iUser, Document {}

const UserModel = new Schema<iUserData>(
  {
    companyName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    uniqueCode: {
      type: String,
    },

    plan: {
      type: String,
    },
    password: {
      type: String,
    },
    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],
    project: [
      {
        type: Types.ObjectId,
        ref: "projects",
      },
    ],
  },
  { timestamps: true }
);

export default model<iUserData>("user", UserModel);
