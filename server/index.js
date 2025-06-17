const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./models"); // Sequelize instance

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

// Sync DB and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
