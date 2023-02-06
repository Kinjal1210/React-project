-- Using the bestbuy database:
USE bestbuy;
-- Copy the following and paste into MySql Workbench

-- find all products
SELECT * FROM products;

-- find all products that cost $1400
SELECT * FROM products WHERE Price =1400.00;

-- find all products that cost $11.99 or $13.99
SELECT * FROM products as p 
WHERE price = 11.99 OR price = 13.99;

-- find all products that do NOT cost 11.99 - using NOT
SELECT * FROM products as p
WHERE NOT price = 11.99;

-- find all products and sort them by price from greatest to least
SELECT * FROM products as p
ORDER BY price DESC;

-- find all employees who don't have a middle initial
SELECT * FROM employees
WHERE MiddleInitial IS NULL;

-- find distinct product prices
SELECT DISTINCT products.price
FROM products;

-- find all employees whose first name starts with the letter ‘j’
SELECT * FROM employees
WHERE FirstName LIKE 'j%';

-- find all Macbooks
SELECT * FROM products
WHERE NAME = 'Macbook';

-- find all products that are on sale
SELECT * FROM products
WHERE OnSale = 1;

-- find the average price of all products
SELECT AVG(products.price) FROM products;

-- find all Geek Squad employees who don't have a middle initial
SELECT * FROM employees AS e
WHERE e.MiddleInitial IS NULL AND e.title = 'Geek Squad';

-- find all products from the products table whose stock level is in the range -- of 500 to 1200. Order by Price from least to greatest. Hint: Use the between keyword
SELECT * FROM products
WHERE StockLevel BETWEEN 500 AND 1200
ORDER BY Price;

