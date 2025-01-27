const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
require("dotenv").config();

const app =express();
const PORT = process.env.PORT // 3000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Markdown Note Taking App");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

