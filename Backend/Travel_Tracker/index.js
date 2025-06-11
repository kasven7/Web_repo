import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres", 
  host: "localhost",
  database: "world", 
  password: "GandalfisGood8_8",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(){
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/modify", async (req, res) => {
  try{
  const userInput = req.body["country"];

  const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) like '%' || ($1) || '%'", [userInput.toLowerCase()]);
    
  const countryCode = result.rows[0].country_code;

  try{
    await db.query(
    "INSERT INTO visited_countries (country_code) VALUES ($1)",
    [countryCode]
  );
  res.redirect("/");
  } catch(error){
    console.log(error);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country has already been added. Try again!",
    });
  }
  } catch(error){
    console.log(error);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist. Try again!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
