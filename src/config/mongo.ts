import mongoose from "mongoose";

const databaseUri = process.env.DATABASE || "";

export const mongooseConnect = async () =>
  mongoose.connect(databaseUri).then(
    () => console.log("Mongoose connected"),
    (error) => console.log("Mongoose error", error)
  );
