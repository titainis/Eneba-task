import express from "express";
import cors from "cors";
import listRoutes from "./routes/list.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/list", listRoutes);

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
