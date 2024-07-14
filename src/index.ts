import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import { mongooseConnect } from "./config/mongo";

const port = process.env.PORT;

export const createServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

if (process.env.NODE_ENV !== "test") {
  createServer();
  mongooseConnect();
}
