const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { getAviralData, verifyAviralPassword } = require("../utils/aviral.js");



const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ rollNumber: username });
    if (user.length === 0) {
      const data = await getAviralData(username, password);

      if (data) {
        const updatedName = formatName(data.name).trim();
        const newUser = await User.create(data);
        const token = generateToken(username);
        res.status(200).json({ token , user : newUser});
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      const isMatch = await verifyAviralPassword(username, password);

      if (!isMatch) {
        res.status(401).json({ message: "Invalid Credentials" });
      }

      const token = generateToken(username);
      res.status(200).json({ token, user : user[0]});
    }
  } catch (err) {
    console.log(err);
  }
};

  const formatName = (name) => {
  const nameParts = name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  if (nameParts.length > 2) {
    nameParts.splice(1, 1);
  }

  return nameParts.join(" ");
};

const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { login };
