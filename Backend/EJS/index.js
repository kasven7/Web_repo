import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("April 16, 2025 20:00:00");
  const day = today.getDay();

  let type = "weekend";
  let conclusion = "it's time to have some fun!";

  if (day >= 1 && day <= 5) {
    type = "weekday";
    conclusion = "it's time to work hard!";
  }
  res.render("index.ejs", {
    weekDayOrEnd: type,
    funOrWork: conclusion,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
