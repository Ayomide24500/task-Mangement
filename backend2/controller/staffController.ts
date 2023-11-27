import { Request, Response } from "express";
import { Types } from "mongoose";
import userModel from "../model/userModel";
import staffModel from "../model/staffModel";

export const createStaff = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { staffName, email, password, avatar } = req.body;

    const find = await userModel.findById(userId);

    if (find) {
      const staff: any = await staffModel.create({
        staffName,
        email,
        password,
        avatar: avatar || staffName.charAt(0),
      });
      console.error(staff);

      find.staff.push(staff._id);
      find.save();
      return res.status(201).json({
        message: "creating staff",
        data: staff,
      });
    } else {
      res.status(404).json({
        message: "Error creating",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: "Internal server error",
    });
  }
};

export const ViewAllStaff = async (req: Request, res: Response) => {
  try {
    const view = await staffModel.find().populate({
      path: "staffs",
    });
    res.status(200).json({
      message: "Creating User",
      data: view,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const ViewStaffById = async (req: Request, res: Response) => {
  try {
    const { staffID } = req.params;
    const view = await staffModel.findById(staffID);
    res.status(200).json({
      message: "Creating User",
      data: view,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const DeleteOneStaff = async (req: Request, res: Response) => {
  try {
    const { userId, staffID } = req.params;
    const user: any = await userModel.findById(userId);
    if (user) {
      const view = await staffModel.findByIdAndDelete(staffID);

      user.staff.pull(new Types.ObjectId(staffID));
      user.save();
      res.status(200).json({
        message: "deleting User",
        data: view,
      });
    } else {
      return res.status(404).json({
        message: "Error",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
