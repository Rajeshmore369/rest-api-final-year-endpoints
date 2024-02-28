const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModal = require("../models/User");

const secret = "test";

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "7d",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { fullName, home, work, mobile, email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      fullName,
      home,
      work,
      mobile,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params; // Extract user ID from request parameters

  try {
    const user = await UserModal.findById(userId); // Find user by ID

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // User found, send the user object in the response
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch user", error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModal.find(); // Fetch all users from the database
    res.json(users); // Send the users as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // If an error occurs, send an error response
  }
};

const updateMe = async (req, res) => {
  try {
    // Get user ID from authenticated user or token
    const {userId} = req.params; // Adjust based on your authentication method
    // Fetch the user by ID
    const user = await UserModal.findById(userId);
    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user properties
    if (req.body.fullName) user.fullName = req.body.fullName;
    if (req.body.home) user.home = req.body.home;
    if (req.body.work) user.work = req.body.work;
    if (req.body.mobile) user.mobile = req.body.mobile;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = req.body.password;
    if (req.body.location) user.location = req.body.location;
    if (req.body.location) user.latitude = req.body.latitude;
    if (req.body.location) user.longitude = req.body.longitude;
    if (req.body.numberPlate) user.numberPlate = req.body.numberPlate;

    // Update images if provided
    if (req.body.images) {
      user.images = req.body.images;
    }
    const imageArray = req.body.images || [];
    imageArray.map((item,index)=>{
      if (item?.isCar === true) {
          user.numberPlate = item.imageUrl;
      }
    })

    // Save the updated user
    await user.save();

    // Return the updated user
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { signin, signup, getAllUsers, getUserById, updateMe };
