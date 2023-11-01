const express = require('express');
const app = express();


app.use(express.json());
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

mongoose.connect(process.env.MONGODB_API).then(console.log('connected to MongoDB')).catch((err) => {
    console.log(err)
})

app.listen('5000', () => {
    console.log('backend is running');
});



const authRoute = require('./routes/auth')
app.use('/api/auth',authRoute);

const userRoute = require('./routes/users')
app.use('/api/users',userRoute);

const postRoute = require('./routes/posts')
app.use('/api/posts',postRoute);

const categoryRoute = require('./routes/categories')
app.use('/api/categories',categoryRoute);

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images'); // The directory where images will be stored
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name); // The naming scheme for uploaded files
    }
});

const upload = multer({ storage: storage });

app.post('api/upload', upload.single('image'), (req, res) => {
    // The uploaded image is available as req.file
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Additional processing (e.g., saving file details to a database) can be done here

    return res.status(200).json({ message: 'File uploaded successfully' });
});
  


