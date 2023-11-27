import { Router } from "express";
import {
  createStaff,
  DeleteOneStaff,
  ViewAllStaff,
  ViewStaffById,
} from "../controller/staffController";

const router: Router = Router();

router.route("/create-staff/:userId").post(createStaff);
router.route("/readAll-staff").get(ViewAllStaff);
router.route("/read-staff/:staffID").get(ViewStaffById);
// router.route("/delete-staff/:staffID").delete(DeleteOneStaff);

export default router;
