import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/auth", userRoute);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
