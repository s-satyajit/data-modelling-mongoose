import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: Boolean,
      enum: ["M", "F", "O"],
      required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    address: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
