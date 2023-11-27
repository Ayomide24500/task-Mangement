import { Request, Response } from "express";
import { Types } from "mongoose";
import projectModel from "../model/projectModel";
import userModel from "../model/userModel";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { projectName, budget, deadline } = req.body;

    const user: any = await userModel.findById(userID);

    if (user.plan === "freemo") {
      if (user?.project.length <= 5) {
        if (user) {
          const project = await projectModel.create({
            projectName,
            budget,
            deadline,
            budgetGivenOut: 0,
            budgetLeft: budget,
            task: {
              todo: { title: "todo", data: [] },
              progress: { title: "progress", data: [] },
              Done: { title: "done", data: [] },
            },
          });

          user.project.push(new Types.ObjectId(project._id));
          user.save();

          return res.status(201).json({
            message: "creating project",
            data: project,
          });
        } else {
          return res.status(404).json({
            message: "Error matching user",
          });
        }
      }
    } else if (user.plan === "bromo") {
      if (user?.project.length <= 15) {
        if (user) {
          const project = await projectModel.create({
            projectName,
            budget,
            deadline,
            budgetGivenOut: 0,
            budgetLeft: budget,
            task: {
              todo: { title: "todo", data: [] },
              progress: { title: "progress", data: [] },
              Done: { title: "done", data: [] },
            },
          });

          user.project.push(new Types.ObjectId(project._id));
          user.save();

          return res.status(201).json({
            message: "creating project",
            data: project,
          });
        } else {
          return res.status(404).json({
            message: "Error matching user",
          });
        }
      }
    } else if (user.plan === "premo") {
      if (user) {
        const project = await projectModel.create({
          projectName,
          budget,
          deadline,
          budgetGivenOut: 0,
          budgetLeft: budget,
          task: {
            todo: { title: "todo", data: [] },
            progress: { title: "progress", data: [] },
            Done: { title: "done", data: [] },
          },
        });

        user.project.push(new Types.ObjectId(project._id));
        user.save();

        return res.status(201).json({
          message: "creating project",
          data: project,
        });
      } else {
        return res.status(404).json({
          message: "Error matching user",
        });
      }
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error creating user",
    });
  }
};

export const viewProjectOne = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params;
    const project = await projectModel.findById(projectID);

    return res.status(200).json({
      message: "one project found",
      data: project,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { userID, projectID } = req.params;

    const user: any = await userModel.findById(userID);

    if (user) {
      const project = await projectModel.findByIdAndDelete(projectID);

      user.project.pull(new Types.ObjectId(projectID));
      user.save();

      return res.status(201).json({
        message: "project deleted",
        data: project,
      });
    } else {
      return res.status(404).json({
        message: "Error matching user",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error deleting user",
    });
  }
};

export const viewUserProject = async (req: Request, res: Response) => {
  try {
    const project = await userModel.find().populate({
      path: "project",
      populate: {
        path: "task",
      },
    });
    return res.status(200).json({
      message: "viewing project",
      data: project,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing project",
    });
  }
};
