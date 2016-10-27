var mysql = require('mysql');
var inquirer = require('inquirer');
var clear = require('clear');
var tab = require('table-master');

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "homework",
    password: "homework", //Your password
    database: "bamazondb"
})

connection.connect(function(error) {
    if (error) throw error;
    clear();
    console.log('Serving customer ' + connection.threadId + '\n');
})

connection.query('SELECT * FROM products', function(error, result) {
    var choiceArray = [];
    for (var i = 0; i < result.length; i++) {
        choiceArray.push(result[i]);
    }
    console.log('Bamazon Product Catalog\n')
    console.table(choiceArray, "lllrr");
})


function runMainMenu() {

}

runMainMenu();
