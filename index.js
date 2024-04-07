import cors from "cors";
import express from "express";
import router from "./src/routes/index.js";
import { errorHandler, errorHandlerNotFound } from "./src/utils/errorHandler.js";

import { PORT } from "./src/utils/env.js";
import connect from "./src/utils/connect.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

connect();
app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});