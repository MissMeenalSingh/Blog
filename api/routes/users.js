const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
    try {

        if (req.body.userId === req.params.id) {

            if (req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{ $set : req.body},{new:true});
            if (!updatedUser) {
                return res.status(401).json('User not found')
            }
            return res.status(200).json(updatedUser);

        } else {
            return res.status(401).json('You can only update your account!');
        }

    } catch(err) {
        return res.status(500).json(err);
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        if (req.body.userId === req.params.id) {

            const user = await User.findById(req.body.userId);

            if (!user) {

                return res.status(404).json('User not found');
            } else {

                const userPosts = await Post.deleteMany({username:user.username});
                const userDeleted = await User.findByIdAndDelete(req.body.userId);
                return res.status(200).json("User has been deleted....");
            }

        } else {
            return res.status(401).json('You can only delete your account!');
        }

    } catch(err) {
        return res.status(500).json(err);
    }
});

//GET 
router.get('/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).json('User not found');
        } else {
            const {password , ...others} = user._doc;
            return res.status(200).json(others);
        }
    } catch(err) {
        return res.status(500).json(err);
    }

});

module.exports = router;