import multer from 'multer';
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/sliders');
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload = multer({storage: storage});
export default upload;
