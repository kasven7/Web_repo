import express from "express";

const app = express();
const port = 2000;

app.get("/", (req, res) =>{
    res.send("Home Page");
});

app.get("/about", (req, res) =>{
    res.send("About Page");
});

app.get("/contact", (req, res) =>{
    res.send("Contact Page");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});