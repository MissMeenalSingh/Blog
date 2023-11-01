const router = require('express').Router();
const Catergory = require('../models/Category');

//CREATE
router.post('/create', async (req, res) => {

    const newCat = new Catergory(req.body);
    try {        
        const catSaved = await newCat.save();
        return res.status(200).json(catSaved);

    } catch(err) {
        return res.status(500).json(err);
    }
});

router.get('/', async (req,res) => {

    try {
        const category = await Catergory.find();
        if (category) {
            return res.status(200).json(category);
        } else {
            return res.status(404).json('Categories not found.');
        }

    } catch (err) {
        return res.status(500).json(err);
    }
});
module.exports = router;