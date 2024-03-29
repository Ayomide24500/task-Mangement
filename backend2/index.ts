import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { mainConnection } from "./util/dbConfig";

const port: number = 3100;

const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);
mainConnection();
const server = app.listen(port, () => {
  console.log("connected 👌👍");
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
