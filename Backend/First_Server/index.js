import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  // port - location of our server where we will be listening for requests on client side
  console.log(`Server running on port ${port}.`);
});
