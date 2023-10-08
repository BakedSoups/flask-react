const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 7050;

app.use(cors());
app.use(express.json());

const axios = require("axios");

// Create an Axios instance with a base URL
const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/", // Replace with your base URL
});

//resolve path for front end
app.use(express.static(path.resolve(__dirname, "../flask-react/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../flask-react/build", "index.html"));
});

app.get("/:page", (req, res) => {
  res.sendFile(path.join(__dirname, "../flask-react/build", "index.html"));
});

app.get("/profile", (req, res) => {
  // Now you can use this instance to make requests
  instance
    .get("/profile")
    .then((response) => {
      // Handle the response
      res.json(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
