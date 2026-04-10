const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 TEST ROUTE (to confirm server)
app.get("/test", (req, res) => {
  res.send("TEST WORKING");
});

// ✅ MongoDB Connection (LOCAL)
mongoose.connect("mongodb://127.0.0.1:27017/mernDB")
.then(() => console.log("MongoDB Connected (Local) ✅"))
.catch(err => console.log(err));

// ✅ Schema + Model
const dataSchema = new mongoose.Schema({
  message: String
});

const Data = mongoose.model("Data", dataSchema);

// ================= ROUTES =================

// 📖 Default API (optional)
app.get("/api", (req, res) => {
  res.json({ message: "API working 🚀" });
});

// 📖 READ ALL
app.get("/api/all", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ➕ CREATE
app.post("/api", async (req, res) => {
  try {
    const newData = new Data({
      message: req.body.message
    });

    await newData.save();
    res.json(newData);
  } catch (err) {
    res.status(500).json({ error: "Error creating data" });
  }
});

// ✏️ UPDATE
app.put("/api/:id", async (req, res) => {
  try {
    const updated = await Data.findByIdAndUpdate(
      req.params.id,
      { message: req.body.message },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Error updating data" });
  }
});

// ❌ DELETE
app.delete("/api/:id", async (req, res) => {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting data" });
  }
});

// ================= SERVER =================

app.listen(7000, () => {
  console.log("Server running on port 7000 🚀");
});