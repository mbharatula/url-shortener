const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });
    const verificationLink = `http://localhost:5000/api/auth/verify/${verificationToken}`;

    await sendEmail(
      email,
      "Verify Your Account",
      `
    <h2>Verify Your Email</h2>

    <p>
      Click below to verify
      your account.
    </p>

    <a href="${verificationLink}">
      Verify Account
    </a>
    `,
    );

    res.status(201).json({
      message: "Verification email sent",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    if (!user.isVerified) {

    return res.status(401).json({
        message:
        "Please verify your email first, it may end up in spam"
    });

}
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const verifyEmail = async (req, res) => {

    try {

        const user = await User.findOne({
            verificationToken:
            req.params.token
        });

        if (!user) {

            return res.status(400).json({
                message:
                "Invalid verification token"
            });

        }

        user.isVerified = true;
        user.verificationToken = null;

        await user.save();

        res.status(200).json({
            message:
            "Email verified successfully"
        });

    } catch (error) {

        res.status(500).json({
            message:
            error.message
        });

    }

};

module.exports = {
  register,
  login,
  verifyEmail
};
