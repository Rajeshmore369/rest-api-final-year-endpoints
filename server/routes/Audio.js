const express = require("express");
const router = express.Router();
const audioController = require("../controllers/Audio");
const upload = require("../middleware/multerMiddleware");

router.use(express.json());
const cors = require("cors");
router.use(cors());
router.use("/files", express.static("files"));

router.post("/upload-files", upload.single("file"), audioController.uploadFile);
// router.get("/get-files", audioController.getFiles);
// router.get("/", audioController.successMessage);

module.exports = router;