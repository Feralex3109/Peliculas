const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
let db = "";

app.use(express.json());
app.use(cors());

app.post("/api/peliculas", async (req, res) => {
  try {
    console.log(req.body);
    const result = await db
      .collection("movies")
      .find()
      .limit(+req.body.limit)
      .toArray();

    res.status(200).json({
      ok: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error.message,
    });
  }
});


mongoose
  .connect(
    "mongodb+srv://Feralex:Mathi-3109@cluster0.to6x330.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conectadome a la BD");
    db = mongoose.connection.db;
  })
  .catch(() => {
    console.log("Conecction Failed!");
  })
  .finally(() => {
    console.log("Request Finished");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});