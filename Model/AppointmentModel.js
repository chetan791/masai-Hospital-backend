const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Image_URL: { type: String, required: true },
    Specialization: { type: String, required: true },
    Experience: { type: String, required: true },
    Location: { type: String, required: true },
    date: { type: Date, required: true },
    slots: { type: String, required: true },
    Fee: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = appointmentModel;
