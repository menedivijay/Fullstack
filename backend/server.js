const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// Define Schema and Model
const FormData = mongoose.model("FormData", new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}));

// POST API
app.post("/api/submit", async (req, res) => {
  const { name, email, message } = req.body;
  const data = new FormData({ name, email, message });
  await data.save();
  res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
