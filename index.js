import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./src/routes/index.js";
// import { errorHandler, errorHandlerNotFound } from "./utils/errorHandler.js";
import { errorHandler, errorHandlerNotFound } from "./src/utils/errorHandler.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
const { PORT, DB_URI } = process.env;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI).then(() => {
  console.log("Connected to MongoDB!");
});

app.use("/api", router);


app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});