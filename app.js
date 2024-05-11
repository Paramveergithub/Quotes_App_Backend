const express = require("express");
const app = express();
const mongoose = require("mongoose");
const quotesRoutes = require("./apis/quotesRoutes");
const seedDB = require("./seed");
const cors = require("cors");
const path = require("path");
const User = require("./models/Quotes");
const dotenv = require("dotenv");
const fileURLToPath = require("url").URL;

dotenv.config();
mongoose.set("strictQuery", true);
app.use(express.json()); // for parsing application/json

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("ERROR IN DB", err);
  });

const corsOptions = {
  origin: "*",
  Credentials: true,
  optionsSuccessStatus: 200,
};

// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//   })
// );

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "./client/dist/index.html"))
// );


app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello from root" });
});

// seedDB();
app.use(quotesRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend server is connected: ${PORT}`);
});
