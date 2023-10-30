const express = require("express");
const appointmentModel = require("../Model/AppointmentModel");
const DoctorRouter = express.Router();

DoctorRouter.post("/appointments", async (req, res) => {
  try {
    const {
      name,
      image,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    } = req.body;
    const doctor = await appointmentModel.create({
      name,
      image,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    });
    doctor.save();
    res.send("Doctor created");
  } catch (error) {
    res.send(error);
  }
});

DoctorRouter.get("/appointments", async (req, res) => {
  try {
    const doctor = await appointmentModel.find();
    res.send(doctor);
  } catch (error) {
    res.send(error);
  }
});

DoctorRouter.patch("/appointments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await appointmentModel.findOneAndUpdate(
      { _id: id },
      req.body
    );
    res.send(doctor);
  } catch (error) {
    res.send(error);
  }
});

DoctorRouter.delete("/appointments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await appointmentModel.findOneAndDelete({ _id: id });
    res.send(doctor);
  } catch (error) {
    res.send(error);
  }
});

module.exports = DoctorRouter;
