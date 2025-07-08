const User = require("../models/use-models");
const bcrypt = require("bcryptjs");

// *-------------
// Home Logic
// *-------------
const home = async (req, res) => {
    try {
        res.status(200).send("Hello homes page use auth");
    } catch (error) {
        console.log(error);
    }
};

// *-------------
// Register Logic
// *-------------
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, username, email, phone, password } = req.body;
        const existingUsername = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingEmail && existingUsername) {
            return res.status(400).json({ message: "Username and Email already exist" });
        }

        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            name,
            username,
            email,
            phone,
            password
        });

        res.status(201).json({
            message: "Registered Successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
        console.log(error);
    }
};


// *-------------
// Login Logic
// *-------------

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email })

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        // const user = await bcrypt.compare(password, userExist.password); 
        const user = await userExist.comparePassword(password)
        if (user) {
            res.status(200).json({
                message: "Login Successfully",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        res.status(500).json("internal server error");
        next(error);
    }
}
// *-------------
// to send user data - User Logic
// *-------------
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({ userData })
    } catch (error) {
        console.log(`error from the user route ${error}`);

    }
}

module.exports = { home, register, login, user };