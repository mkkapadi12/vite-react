require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jokes = require("./joke.json");
const fs = require("fs");
const app = express();

//connect DB
const ConnectDB = require("./DB/connect");
const Port = 3000;
//routes
const user_route = require("./routes/user");
//cors
app.use(
  cors({
    origin: "http://localhost:5174/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
  })
);

// Middleware to parse JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello There");
});

app.use("/api", user_route);

app.post("/api/data", (req, res) => {
  let user = req.body; // Access the parsed request body
  fs.appendFile("formdata.json", JSON.stringify(user), (err, data) => {
    res.send("data from frontend");
  });
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const start = async () => {
  try {
    //Connect to Database
    await ConnectDB(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected"))
      .catch((error) => console.error("MongoDB connection error:", error));
    app.listen(Port, () => {
      console.log(`Server start at port ${Port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
