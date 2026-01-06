require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Auth routes loaded");

app.use("/api", authRoutes); // 🔥 THIS LINE IS CRITICAL

app.get("/", (req, res) => {
  res.send("Backend running...");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
