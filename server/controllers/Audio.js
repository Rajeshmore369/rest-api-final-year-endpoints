const upload = require("../middleware/multerMiddleware")
const fs = require("fs")

const uploadFile = async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;

    try {
        const audioFilePath = `./files/${fileName}`;

        const audioFile = fs.readFileSync(audioFilePath);
        res.status(200).json({ status: "ok", path: audioFile });
    } catch (error) {
        console.error("Error uploading file", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    uploadFile,
};