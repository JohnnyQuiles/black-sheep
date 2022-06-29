const User = require('../model/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;

        let salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salt);

        let newUser = new User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: hashPassword
        });

        let savedUser = await newUser.save();
        res.status(200).json({ message: "New user has been created", payload: savedUser });

    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
};

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const foundUser = await User.findOne({ username: username });
        console.log("found user:", foundUser);

        if (foundUser === null) throw { message: "User not found" };

        const comparedPassword = await bcrypt.compare(password, foundUser.password);
        if(!comparedPassword) throw { message: "Username and Password do not match"};

        res.status(200).json({ payload: foundUser });
        console.log(foundUser);
    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
}

module.exports = {
    createUser,
    userLogin
}