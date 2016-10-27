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

//Connect To Bamazon database
function dbConnect() {
    connection.connect(function(error) {
        if (error) throw error;
        // clear();
        console.log(connection.threadId);
        customer = connection.threadId;
        productList();
    })  
}

//Build a table of products for sale
function productList() {
    clear();
    console.log('Serving customer ' + customer + '\n'); 
    connection.query('SELECT * FROM products', function(error, result) {
        var choiceArray = [];
        for (var i = 0; i < result.length; i++) {
            choiceArray.push(result[i]);
        }
        console.log('Bamazon Product Catalog\n')
        console.table(choiceArray, "lllrr");
        placeOrder();
    })

}

//Ask for item to order
function placeOrder() {
    inquirer.prompt({
        name: "itemid",
        type: "input",
        message: "\n What item would you like to purchase?"
    }).then(function(item) {
        var query = 'SELECT itemid, productname, price, stockquantity FROM products WHERE ?'
        var itemid = item.itemid;
        connection.query(query, { itemid: itemid }, function(error, result) {
            if (result.length == 0) {
                console.log("\n Unable to find product " + itemid + ". Please check your product and reenter.");
                placeOrder();
            } else {
                var productName = result[0].productname;
                var price = result[0].price;
                var stockQuantity = parseInt(result[0].stockquantity);
                purchaseQuantity(itemid, productName, price, stockQuantity);
            }
        })
    })
};

//Ask for quantity to purchase
function purchaseQuantity(itemid, productName, price, stockQuantity) {

}


function runMainMenu() {

}

dbConnect();