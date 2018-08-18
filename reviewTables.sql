CREATE TABLE users (
  id int PRIMARY KEY,
  name text,
  photo text
);


CREATE TABLE listings (
  id int PRIMARY KEY,
  name text
);

CREATE TABLE reviews (
  id PRIMARY KEY SERIAL,
  listing_id int,
  user_id int,
  accuracy int,
  communication int,
  cleanliness int,
  location int,
  check_in int,
  is_value int,
  review_date date,
  content text,
  is_reported boolean
);
