const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const destinations = require("./data/destinations.json");

const hotels = require("./data/hotels.json");

app.get("/", (req, res) => {
  res.send("travel guru server running");
});

app.get("/destinations", (req, res) => {
  res.send(destinations);
});

app.get("/destinations/:id", (req, res) => {
  const id = req.params.id;
  const selectedDestination = destinations.destinations.find((destination) => destination.id == id);
    res.send(selectedDestination)
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const availableHotels = hotels.hotels.filter((h) => h.destination_id == id);
  res.send(availableHotels);
});

app.listen(port, () => {
  console.log(`Travel apli running on port ${port}`);
});
