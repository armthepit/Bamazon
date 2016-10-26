var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Saigon469", //Your password
    database: "bamazondb"
})

connection.connect(function(err) {
    if (err) throw err;
    runMainMenu();
})

function runMainMenu() {
	console.log("Let's go shopping");
}

connection.end();