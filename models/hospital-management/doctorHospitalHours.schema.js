import mongoose from "mongoose";

const doctorHospitalHoursSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  hoursWorkedInHours: {
    type: Number,
    min: 0,
  },
});

export const DoctorHospitalHours = mongoose.model(
  "DoctorHospitalHours",
  doctorHospitalHoursSchema
);
