const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../database/operations.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../client/dist")));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get("/api/listing/:listingid/overview", (req, res) => {
  const listing_id = Number(req.params.listingid);
  console.log(listing_id);
  let ratingsObj = {
    accuracy: 0,
    communication: 0,
    cleanliness: 0,
    location: 0,
    check_in: 0,
    _value: 0,
    avg: 0
  };

  db.getRatings(listing_id, function(err, results) {
    if (err) {
      console.log("err in server - overview: ", err);
      return;
    }

    // ratingsObj.total = results.length;
    // ratingsObj.accuracy = Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj.communication =
    //   Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj.cleanliness = Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj.location = Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj.check_in = Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj._value = Math.round((Math.random() * (4 - 1) + 1) * 2) / 2;
    // ratingsObj.avg =
    //   Math.round(
    //     ((ratingsObj.accuracy +
    //       ratingsObj.communication +
    //       ratingsObj.cleanliness +
    //       ratingsObj.location +
    //       ratingsObj.check_in +
    //       ratingsObj._value) /
    //       6) *
    //       2
    //   ) / 2;

    results.rows.forEach(function(ratings) {
      ratingsObj.avg += ratings.accuracy;
      ratingsObj.accuracy += ratings.accuracy;
      ratingsObj.avg += ratings.communication;
      ratingsObj.communication += ratings.communication;
      ratingsObj.avg += ratings.cleanliness;
      ratingsObj.cleanliness += ratings.cleanliness;
      ratingsObj.avg += ratings.location;
      ratingsObj.location += ratings.location;
      ratingsObj.avg += ratings.check_in;
      ratingsObj.check_in += ratings.check_in;
      ratingsObj.avg += ratings.is_value;
      ratingsObj._value += ratings.is_value;
    });

    ratingsObj.avg =
      Math.round((ratingsObj.avg / (results.rows.length * 6)) * 2) / 2;
    ratingsObj.accuracy =
      Math.round((ratingsObj.accuracy / results.rows.length) * 2) / 2;
    ratingsObj.communication =
      Math.round((ratingsObj.communication / results.rows.length) * 2) / 2;
    ratingsObj.cleanliness =
      Math.round((ratingsObj.cleanliness / results.rows.length) * 2) / 2;
    ratingsObj.location =
      Math.round((ratingsObj.location / results.rows.length) * 2) / 2;
    ratingsObj.check_in =
      Math.round((ratingsObj.check_in / results.rows.length) * 2) / 2;
    ratingsObj._value =
      Math.round((ratingsObj._value / results.rows.length) * 2) / 2;
    res.status(200).json(ratingsObj);
  });
});

app.get("/api/listing/:listingid/reviews", (req, res) => {
  const listing_id = Number(req.params.listingid);
  console.log(listing_id);

  db.getReviews(listing_id, function(err, results) {
    if (err) {
      console.log("err in server - reviews: ", err);
      return;
    }

    console.log(results.rows);

    res.status(200).json(results.rows);
  });
});

app.listen(3002, console.log("Listening on port 3002"));

module.exports = app;
