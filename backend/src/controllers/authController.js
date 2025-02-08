const User = require("../models/User")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        await user.save();
        return res.status(201).json({
            message: "User Register Successfully",
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not Found in data base"
            })
        }
        const isVerify = await bcrypt.compare(password, user.password);
        if (!isVerify) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        console.log("token", process.env.JWT_SRCRET)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        // console.log("token", token)
        res.cookie("token", token, { httpOnly: true });
        return res.status(200).json({
            message: "Login Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}