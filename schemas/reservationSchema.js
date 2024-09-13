const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"],
    },
    location: {
      type: String,
      default: "India",
    },
    date: {
      type: String,
      default: Date.now, // Change to Date.now() if you want to use timestamp
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
  },
  { timestamps: true }
);

const reservationModel = mongoose.model("Reservation", reservationSchema);

module.exports = reservationModel;
