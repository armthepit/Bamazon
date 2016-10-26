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