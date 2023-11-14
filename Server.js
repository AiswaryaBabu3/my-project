const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 9090;
const mongoURI = "mongodb://127.0.0.1:27017/project";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a Mongoose schema for registration
const registrationSchema = new mongoose.Schema({
  Fullname: String,
  EmailID: String,
  ContactNumber: String,
  Gender: String,
  DateOfBirth: String,
  Password: String,
});

// Create a model based on the schema
const Registration = mongoose.model("Registration", registrationSchema);

// Registration endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { Fullname, EmailID, ContactNumber, Gender, DateOfBirth, Password } = req.body;

    console.log("Received registration request:", { Fullname, EmailID, ContactNumber, Gender, DateOfBirth, Password });

    if (!Fullname || !EmailID || !ContactNumber || !Gender || !DateOfBirth || !Password) {
      console.log("Validation failed: Missing required fields");
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    // Create a new registration document
    const registration = new Registration({
      Fullname,
      EmailID,
      ContactNumber,
      Gender,
      DateOfBirth,
      Password,
    });

    // Save the document to the database
    const savedRegistration = await registration.save();

    console.log("Registration saved successfully:", savedRegistration);
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
