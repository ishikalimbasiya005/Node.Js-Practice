const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student' // database name
});

connection.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = connection;
