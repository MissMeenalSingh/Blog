const router = require('express').Router();
const Post = require('../models/Post');

//CREATE
router.post('/create', async (req, res) => {

    const newPost = new Post(req.body);
    try {        
        const postSaved = await newPost.save();
        return res.status(200).json(postSaved);

    } catch(err) {
        return res.status(500).json(err);
    }
});

//UPDATE
router.put('/:id', async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);
        if (post) {

            if (post.username === req.body.username) {

                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{ $set : req.body},{new:true})
                return res.status(200).json(updatedPost);

            } else {
                return res.status(401).json('You can only update your post!');
            }

        } else {
            return res.status(404).json('Post not found!');
        }

    } catch(err) {
        return res.status(500).json(err);
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try {
       
        const post = await Post.findById(req.params.id);
        if (post) {

            if (post.username === req.body.username) {

                const deletePost = await Post.findByIdAndDelete(req.params.id);
                return res.status(200).json('Your post is deleted....');

            } else {
                return res.status(401).json('You can only delete your post!');
            }

        } else {
            return res.status(404).json('Post not found!');
        }

    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

//GET 
router.get('/:id', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json('Post not found');
        } else {
            return res.status(200).json(post);
        }
    } catch(err) {
        return res.status(500).json(err);
    }

});

//GET ALL POSTS
router.get('/', async (req, res) => {

    try {

        const userName = req.query.user;
        const catName = req.query.cat;
        let posts;

        if (userName) {
            posts = await Post.find({username:userName});
        } else if (catName) {
            posts = await Post.find({categories:{$in:[catName]}});
        } else {
            posts = await Post.find();
        }
        if(!posts) {
            return res.status(404).json('Posts not found');
        } else {
            return res.status(200).json(posts);
        }
    } catch(err) {

        console.log(err);
        return res.status(500).json(err);
    }

});

module.exports = router;