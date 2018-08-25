const pg = require("pg");
// const port = process.env.RDS_PORT || 5432;
// const host = process.env.RDS_HOSTNAME || 'localhost';
// const db = new pg.Client({
//   user: "user",
//   host: "127.0.0.1",
//   database: "postgres",
//   port: 5432
// });

const connectionStr = "postgres://power_user:$poweruserpassword@ec2-18-222-124-122.us-east-2.compute.amazonaws.com:5432/reviews"
var db = new pg.Client(connectionStr);
db.connect();

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
