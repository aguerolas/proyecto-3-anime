const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("uploads/"))
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage });



const updateCover = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("uploads/covers"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage });
  return upload;
};
const updateChapter = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("uploads/chapters"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage });
  return upload;
};
module.exports = {
  updateChapter,
  updateCover
};
