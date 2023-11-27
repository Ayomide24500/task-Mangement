import { Router } from "express";
import {
  createUserBromo,
  createUserFreemo,
  createUserPremo,
  deleteOneUser,
  getCompanyByCode,
  signinUser,
  viewOneUser,
  viewUsers,
} from "../controller/usercontroller";

const router: Router = Router();

router.route("/create-user-Freemo").post(createUserFreemo);
router.route("/sign-in").post(signinUser);
router.route("/view-users").get(viewUsers);
router.route("/api/company/:uniqueCode").get(getCompanyByCode);
router.route("/view-one-by/:userID").post(viewOneUser);
router.route("/create-User-Bromo").get(createUserBromo);
router.route("/create-User-Premo/:userID").get(createUserPremo);
router.route("/delete-User-by/:userID").delete(deleteOneUser);

export default router;
