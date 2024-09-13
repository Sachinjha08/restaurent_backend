const User = require("../schemas/reservationSchema");

exports.reservationController = async (req, res) => {
  try {
    const { fullName, email, phone, location, date, time } = req.body;

    // Check if all required fields are present
    if (!fullName || !email || !phone || !date || !time) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required input",
      });
    }

    // Create a new reservation instance
    const data = new User({
      fullName,
      email,
      phone,
      location,
      date,
      time,
    });

    // Save the reservation data to the database
    await data.save();

    // Send success response
    return res.status(201).send({
      success: true,
      message: "Thanks for your reservation",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};
