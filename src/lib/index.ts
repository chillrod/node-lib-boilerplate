import express from "express";

import "reflect-metadata";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "My friend!" });
});

app.listen(3333, () => {
  console.log("listening on port 3333");
});
