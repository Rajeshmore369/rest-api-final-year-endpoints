const Alert = require('../models/Alert');
const User = require('../models/User');

// Create a new alert
const createAlert = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      _id, // Assuming you provide the user ID in the request body or params
      fullName,
      home,
      work,
      mobile,
      email,
      password,
      images,
      location,
      latitude,
      longitude,
      numberPlate,
    } = req.body;

    // Check if the user with the provided ID exists
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new alert
    const alert = new Alert({
      user: _id,
      fullName,
      home,
      work,
      mobile,
      email,
      password,
      images,
      location,
      latitude,
      longitude,
      numberPlate,
    });

    // Save the alert to the database
    await alert.save();

    res.status(201).json(alert);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAlertsByUserId = async (req, res) => {
    try {
      // Extract user ID from request parameters
      const userId = req.params.userId;
  
      // Check if the user with the provided ID exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Find alerts associated with the user ID
      const alerts = await Alert.find({ user: userId });
  
      res.status(200).json(alerts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
  createAlert,
  getAlertsByUserId
};
