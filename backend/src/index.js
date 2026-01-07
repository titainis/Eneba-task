import express from "express";
import cors from "cors";
import listRoutes from "./routes/list.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/list", listRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
