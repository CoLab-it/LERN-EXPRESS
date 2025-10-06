const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    gmail: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"],
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
    },
    age: {
        type: Number,
        required: [true, "Please provide an age"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password must be at least 6 characters long"]
    }
});

module.exports = mongoose.model("User", userSchema);