'use strict';
const faker = require('faker');
const DateGen = require('random-date-generator');


const IDGen = () => {
  return Math.floor((Math.random() * 10000000)) + 1;
}

const IDGenBottom = () => {
  return Math.floor((Math.random() * 1000000)) + 9000000;
}

const getRating = () => {
  return Math.round((Math.random() * (4 - 1) + 1) * 2)/2;
}

const getDate = () => {
  let start = new Date (2011, 1, 1);
  let end = new Date ();

  var randoDate = faker.date.between('2001-01-01', '2018-01-05');
  return randoDate.toISOString().slice(0, 19).replace('T', ' ');
};

function generateRandomData(userContext, events, done) {

  const listing_a = IDGenBottom();
  const listing_b = IDGenBottom();
  const listing_c = IDGenBottom();
  const listing_d = IDGenBottom();
  const listing_e = IDGenBottom();
  const listing_f = IDGenBottom();
  const listing_g = IDGenBottom();
  const listing_h = IDGenBottom();
  const listing_i = IDGenBottom();
  const listing_j = IDGenBottom();
  const user_id =  IDGen();
  const rating =  getRating();
  const date =  getDate();
  const contentOne =  faker.lorem.sentences();

  userContext.vars.listing_a = listing_a;
  userContext.vars.listing_b = listing_b;
  userContext.vars.listing_c = listing_c;
  userContext.vars.listing_d = listing_d;
  userContext.vars.listing_e = listing_e;
  userContext.vars.listing_f = listing_f;
  userContext.vars.listing_g = listing_g;
  userContext.vars.listing_h = listing_h;
  userContext.vars.listing_i = listing_i;
  userContext.vars.listing_j = listing_j;
  userContext.vars.user_id = user_id;
  userContext.vars.rating = rating;
  userContext.vars.date = date;
  userContext.vars.contentOne = contentOne;

  return done();
}


module.exports = {
  generateRandomData
};
