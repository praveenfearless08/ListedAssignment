const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const boom = require("boom");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const uri =
  "mongodb+srv://praveen:praveen@cluster0.zmsr4ut.mongodb.net/?retryWrites=true&w=majority";
// mongoose
//   .connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

//Routes
app.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw boom.conflict("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.send({ message: "Successfully registered" });
  } catch (err) {
    next(err);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw boom.unauthorized("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw boom.unauthorized("Invalid email or password");
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.send({ token });
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.output ? err.output.statusCode : 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).send({ message });
});

//DEPLOYMENT
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    console.log("Api is running succesfully");
  });
}
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
