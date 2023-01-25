import multer from "multer";
import path from "path";

console.log(__dirname);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.basename(__dirname+"/uploads"));
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

export default upload;