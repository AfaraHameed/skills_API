const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + " " + file.originalname;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

const uploadFile = (req, res, next) => {
  upload.fields([
    { name: "uploadImage", maxCount: 5 },
    { name: "otherImage", maxCount: 8 },
  ])(req, res, function (err) {
    if (err) {
      res.status(500).json("failed to upload");
    } else {
      res.status(200).json("file uploaded successfully");
    }
    next();
  });
};

module.exports = uploadFile;
