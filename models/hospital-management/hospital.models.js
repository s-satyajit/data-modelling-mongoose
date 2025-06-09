import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    specializedIn: {
        type: String
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likesCount: {
        type: Number,
        default: 0,
        min: 0
    }
}, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)