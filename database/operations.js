const db = require("./config.js");

// get average ratings to render
const getRatings = (listing_id, whenRatings) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, is_value from reviews where listing_id = ${listing_id}`;

  db.query(qs, whenRatings);
};

// get user reviews
const getReviews = (listing_id, whenReviews) => {
  const qs = `select users.name, users.photo, reviews.review_date, reviews.content, reviews.is_reported from users JOIN reviews on reviews.listing_id = ${listing_id} AND users.id = reviews.user_id ORDER BY reviews.review_date DESC;`;

  db.query(qs, whenReviews);
};

// post a new review from listing
const postReview = (review, respondToServer) => {
  console.log("hello, review", review.content);
  const qs = `INSERT INTO reviews (listing_id, user_id, accuracy, communication, cleanliness, location, check_in, is_value, review_date, content, is_reported) VALUES (${
    review.listing_id
  }, ${review.user_id}, ${review.accuracy}, ${review.communication}, ${
    review.cleanliness
  }, ${review.location}, ${review.check_in}, ${review.is_value}, '${
    review.review_date
  }', '${review.content}', ${review.is_reported})`;

  console.log("im qs", qs);

  db.query(qs, respondToServer);
};

// update a review from listing
const updateReview = (review, respondToServer) => {
  // review input sample
  // {id: 9999,
  // changes: [["check_in", 0], ["is_value", 0]]
  // }

  var updates = JSON.parse(review.changes);
  var customQuery = [];

  for (var i = 0; i < updates.length; i++) {
    var update = updates[i];

    customQuery.push(`${update[0]} = ${update[1]}`);
  }

  const qs = `UPDATE reviews set ${customQuery.join(",")} where id = ${
    review.id
  }`;

  db.query(qs, respondToServer);
};

// delete a review from listing
const deleteReview = (review_id, respondToServer) => {
  const qs = `DELETE FROM reviews where id = ${review_id}`;

  db.query(qs, respondToServer);
};
module.exports = {
  getRatings: getRatings,
  getReviews: getReviews,
  postReview: postReview,
  updateReview: updateReview,
  deleteReview: deleteReview
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

// var review = { id: 10000002, changes: [["check_in", 0], ["is_value", 0]] };
//
// updateReview(review, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// deleteReview(10000002, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
