const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./connectDB/connect");
connectDB();
const reservation = require("./routers/reserVationRouter");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

// Reservation routes
app.use("/api/v1", reservation);

// Listening to port
app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});
