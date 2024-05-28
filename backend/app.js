import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import {CustomerModel} from "./models/customer.js";
import bcrypt from "bcrypt";


const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD"
})})




app.post('/Login', async (req, res) => {
  const { username, password } = req.body;

  try {
      const user = await CustomerModel.findOne({ username });

      if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
              res.json("success");
          } else {
              res.json("Your password is incorrect!");
          }
      } else {
          res.json("Please sign up first!");
      }
  } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json("Internal Server Error");
  }
});

app.post('/signUp', async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the salt rounds as needed
      await CustomerModel.create({ username, email, password: hashedPassword });
      res.json("success");
  } catch (err) {
      console.error("Error during sign up:", err);
      res.status(500).json("Internal Server Error");
  }
});



dbConnection();

app.use(errorMiddleware);

export default app;
