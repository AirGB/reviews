const pg = require("pg");
const db = new pg.Pool({
  user: "user",
  host: "127.0.0.1",
  database: "postgres",
  port: 5432
});

module.exports = db;

// db.query("select * from listings limit 10", (err, res) => {
//   console.log(err, res);
//   db.end();
// });

// pgp way
// var pgp = require("pg-promise")();
// var db = pgp("postgres://user@localhost:5432/postgres");
//
// db.any("select * from listings where id = 1").then(function(data) {
//   console.log(data);
// });

// const mysql = require("mysql");
//
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "review_db"
// });
//
// db.connect();
//
// module.exports = db;
