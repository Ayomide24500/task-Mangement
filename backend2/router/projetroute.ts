import { Router } from "express";
import {
  createProject,
  deleteProject,
  viewProjectOne,
  viewUserProject,
} from "../controller/Projectcontroller";

const router: Router = Router();

router.route("/create-project/:userID").post(createProject);
router.route("/view-user-project").get(viewUserProject);
router.route("/view-project/:projectID").get(viewProjectOne);

router.route("/delete-project-staff/:userID/:projectID").delete(deleteProject);

export default router;
