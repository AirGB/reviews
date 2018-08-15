CREATE  KEYSPACE IF NOT EXISTS reviews
CREATE TABLE ratings (
  review_id int,
  listing_id int PRIMARY KEY,
  user_id text,
  accuracy int,
  communication int,
  cleanliness int,
  location int,
  check_in int,
  is_value int,
  review_date date,
  content text,
  is_reported boolean,
  listing_name text,
  PRIMARY KEY (listing_id, review_id)
)

CREATE TABLE reviews (
  listing_id int,
  listing_name text,
  user_name text,
  user_photo text,
  review_date date,
  content text,
  is_reported boolean,
  review_id,
  PRIMARY KEY (listing_id, review_id)
)
