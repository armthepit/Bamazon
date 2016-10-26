var mysql = require('mysql');
var inquirer = require('inquirer');
var clear = require('clear');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Saigon469", //Your password
    database: "bamazondb"
})

connection.connect(function(error) {
    if (error) throw error;
    clear();
})

connection.query('SELECT * FROM products', function(error, result) {
    console.log('Product Id Product Name Unit Price');
    console.log("-----------------------------------");
    for (var i = 0; i < result.length; i++) {
        console.log(result[i].itemid + " | " + result[i].productname + " | " + result[i].price);
    }
    console.log("-----------------------------------");
})

connection.end();

function runMainMenu() {

}

runMainMenu();


