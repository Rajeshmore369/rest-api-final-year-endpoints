const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./db/connection');
const userRouter = require("./routes/User");
const contactsRouter = require('./routes/Contacts');
const messageRouter = require('./routes/Messages');
const alertRouter = require('./routes/Alert');
const ocrRouter = require('./routes/OCR');
const audioRouter = require('./routes/Audio');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '100kb' }));
connectToDatabase();
app.use("/user", userRouter);
app.use("/contacts", contactsRouter);
app.use("/msg", messageRouter)
app.use("/alert", alertRouter)
app.use("/ocr", ocrRouter)
app.use("/audio", audioRouter)
app.listen(8800, () => {
  console.log('Server started on port 8800');
});