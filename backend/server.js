import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json()); //to use req.body

const port = process.env.PORT || 5000;
// console.log(process.env.MONGO_URI);

app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server started at port http://localhost:${port}`);
});
