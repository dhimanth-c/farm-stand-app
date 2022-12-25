import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

const port = 4000;

app.use(cors());
app.use(express.json());

dotenv.config();

import standsRouter from "./routes/stands.route.js";

app.use("/stands", standsRouter);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
