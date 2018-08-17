const db = require("./config.js");

const getRatings = (listing_id, whenRatings) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, is_value from reviews where listing_id = ${listing_id}`;

  db.query(qs, whenRatings);
};

const getReviews = (listing_id, whenReviews) => {
  const qs = `select users.name, users.photo, reviews.review_date, reviews.content, reviews.is_reported from users JOIN reviews on reviews.listing_id = ${listing_id} AND users.id = reviews.user_id ORDER BY reviews.review_date DESC;`;

  db.query(qs, whenReviews);
};

module.exports = {
  getRatings: getRatings,
  getReviews: getReviews
};

// const getRatings = (listing_id, whenRatings) => {
//   console.log("im whenRatings", whenRatings);
//   const qs = `SELECT accuracy, communication, cleanliness, location, check_in, _value \
//               FROM reviews WHERE listing_id = ${listing_id}`;
//
//   db.query(qs, whenRatings);
// };
//
//  const getReviews = (listing_id, whenReviews) => {
//   const qs = `select users.name, users.photo, reviews._date, reviews.content, reviews.is_reported \
//               FROM users JOIN reviews \
//               WHERE reviews.listing_id = ${listing_id} AND users.id = reviews.user_id
//               ORDER BY reviews._date DESC`;
//
//   db.query(qs, whenReviews);
// };

// getRatings(1, function(err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result.rows);
//   }
// });

// getReviews(1, function(err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result.rows);
//   }
// });
