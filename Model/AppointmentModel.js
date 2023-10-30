const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    slots: { type: String, required: true },
    fee: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = appointmentModel;
