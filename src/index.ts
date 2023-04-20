import express from "express";
import fs from "fs";
const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// GET
app.get("/", function (req, res) {
  fs.readFile("./public/data/combinations.json", "utf-8", (err: any, data: any) => {
    if (err) throw err;

    console.log("DATA", data);

    res.send(data);
  });
});

// GET
app.get("/combinations", function (req, res) {
  fs.readFile("./public/data/combinations.json", "utf-8", (err: any, data: any) => {
    if (err) throw err;

    console.log("DATA", data);

    res.send(data);
  });
});

// POST
app.post("/combinations", function (req, res) {
  console.log("REQ.BODY!!!:", req.body);

  const data = JSON.stringify(req.body);
  console.log(typeof data);

  fs.writeFile("./public/data/combinations.json", data, (err: any) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error occured");
    } else {
      console.log("File written successfully\n");
      res.json(req.body);
    }
  });
});
