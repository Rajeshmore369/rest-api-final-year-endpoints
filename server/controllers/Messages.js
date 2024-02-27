const accountSid = "ACaa2047a32c5a1ceec3a49153b19ad91e";
const authToken = "8c19275824e2e3f8d1d6610abd389bb8";
const client = require("twilio")(accountSid, authToken);

const sendMessages = (req, res) => {
  const { body } = req.body;
  
  console.log(req.body)
  client.messages
    .create({
      from: "+14028585591", // You can set a default 'from' number if not provided
      to: "+919890562214", // You can set a default 'to' number if not provided
      body: body, // You can set a default message body if not provided
    })
    .then((message) => {
      console.log(message.sid);
      res
        .status(200)
        .json({ sid: message.sid, status: "Message sent successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to send message" });
    });
};

module.exports = {sendMessages}