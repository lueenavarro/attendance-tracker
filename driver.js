//Required Modules:
//npm install serialport
//npm install mysql

// Documentation about the serialport module: https://serialport.io/docs/en/guide-about

console.log("Start tapping IDs...")


// Require the serialport node module
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM7', {
  baudRate: 9600
}); // change COM7 to the COM port where device is connected
const parser = port.pipe(new Readline());

//Require the MySQL node module
var mysql = require('mysql');

//Setup mySQL database
var con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "attendance"
});

//Establish connection to database
con.connect(function(err) {
  if (err) throw err;
	});

//Read the port data	
parser.on('data', function (data) {
var sql=`INSERT INTO attendance(ID) VALUES("${data}")`;
con.query(sql, function (err, result) {
   if (err) throw err;
   console.log(data);
   console.log("Registered to Database");
  });
});