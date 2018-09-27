// Set up MySQL connection.
var mysql = require("mysql");

var connection;

  console.log("In connection");
  console.log(process.env.JAWSDB_URL);
  console.log(process.env);

if(process.env.JAWDB_URL.length > 0) {
    connection = mysql.createConnection(process.env.JAWDB_URL); 
    console.log("jawsdb")
}else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Zy-phr_24",
      database: "menu_db"
  });
  console.log("developer")
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
