CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE `products` (
  `itemid` INT NOT NULL AUTO_INCREMENT,
  `productname` VARCHAR(50) NULL,
  `departmentname` VARCHAR(25) NULL,  
  `price` DECIMAL(10,2) NULL,
  `stockquantity` INT NULL,
  PRIMARY KEY (`itemid`)
);

INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Bananas','Produce',.07,10);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Apples','Produce',.25,7);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Yogurt','Dairy',.55,12);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Milk','Dairy',3.43,13);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Hot Dogs','Meat',1.95,3);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Bologna','Meat',4.25,9);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Bread','Bakery',1.88,5);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Tortillas','Bakery',2.19,15);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Pop Corn','Snacks',1.95,16);
INSERT INTO products (productname,departmentname,price,stockquantity) VALUES ('Potato Chips','Snacks',2.50,48);