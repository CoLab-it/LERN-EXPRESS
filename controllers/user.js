// Create controller
const User = require("../model/user");

// Register user
exports.register = async (req, res) => {
    try {
        const { name, gmail, age, password } = req.body;

        // Check is any user exists with the same gmail
        const existingUser = await User.findOne({gmail: gmail});

        // User exists. send error response
        if(existingUser) {
            res.status(400).json({message: "User already exists"});
            return;
        }

        // User not exists, create a new user
        const user = new User({
            name,
            gmail,
            age,
            password
        });
        
        // Save the user to the database
        await user.save();

        res.status(201).json({message: "User registered successfully", user});
    } catch (error) {
        
    }
};

exports.login = async (req, res) => {
    try {
        const { gmail, password } = req.body;
    } catch (error) {
        
    }
}