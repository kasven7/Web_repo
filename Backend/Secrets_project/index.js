import axios from "axios";
import express from "express";

const app = express();
const port = 7000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.respone.data);
    res.status(500);
  }
  res.render("index.ejs", { content: res.data });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
