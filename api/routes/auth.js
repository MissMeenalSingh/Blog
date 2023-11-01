const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const options = {
    // Set a higher timeout value (e.g., 20 seconds)
    bufferTimeoutMS: 30000,
};
//REGISTER
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
        })
        const user = await newUser.save();
        res.status(200).json(user);

    } catch(err) {
        console.log("Error caught:", err);
        res.status(500).json(err);
    }
});

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const usernameValidate = await User.findOne({username: req.body.username });
        if (!usernameValidate) {
            return res.status(400).json('Wrong Credentials');
        }
        
        const passwordValidate = await bcrypt.compare(req.body.password, usernameValidate.password);
        if (!passwordValidate) {
            return res.status(400).json('Wrong Credentials');
        }

        const {password, ...others} = usernameValidate._doc;

        return res.status(200).json(others);
    } catch(err) {
        console.log("Error caught:", err);
        res.status(500).json(err);
    }
})

module.exports = router;