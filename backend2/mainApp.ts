import { Application, Response, Request } from "express";
import user from "./router/userrouter";
import staff from "./router/staffRouter";
import project from "./router/projetroute";
import task from "./router/taskroute";
export const mainApp = (app: Application) => {
  app.use("/api/v1", user);
  app.use("/api/v1", staff);
  app.use("/api/v1", project);
  app.use("/api/v1", task);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to the our Book API",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
