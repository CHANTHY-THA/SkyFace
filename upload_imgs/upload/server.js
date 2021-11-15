const express = require('express');
const multer = require('multer');
const app = express();
const path = require('path');
app.listen(3000 , () => console.log("Server is running ..."));

const storageImage = multer.diskStorage({
    destination: 'upload/images',
    filename: (req, file , callback) => {
        return callback(null , `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})
app.use(express.static('publist'));
const upload = multer({
    storage: storageImage
})
app.use('image', express.static('/upload/images'))
app.post('/upload', upload.single('image'),(req,res) => {
    res.send({
        success: "upload!",
        img_url: "http://localhost:3000/image/" + req.file.filename,
    })
    console.log(req.file)
})