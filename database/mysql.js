const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chris',
  database: 'lululemon'
});

con.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

module.exports = con;