# MySQL Challenge

## Scenario

You have been hired as a database administrator for a new startup called "TechShop". TechShop is an online marketplace for tech products where users can buy and sell various tech items such as laptops, smartphones, and accessories.

Your task is to design and implement a MySQL database for TechShop. The database should store information about users, products, and transactions.

## Requirements

1. **Users**: For each user, the database should store their name, email (which should be unique), and password.

2. **Products**: Each product should have a name, description, price, and the ID of the user who listed the product.

3. **Transactions**: Each transaction should record the ID of the buyer, the ID of the product, the date of the transaction, and the quantity purchased.

4. **Constraints**: Apply appropriate constraints to your tables. For example, all IDs should be primary keys, emails should be unique, etc.

5. **Indexes**: Create an index on the `Name` column of the `Users` table to speed up queries.

6. **Views**: Create a view that shows the product name, description, and the name of the user who listed the product.

7. **Stored Procedures and Functions**: Create a stored procedure that gets the count of products and a function that gets the total number of users.

8. **Triggers**: Create a trigger that updates the `TransactionDate` field to the current date before any insert operation on the `Transactions` table.

9. **Advanced Queries**: Write SQL queries to:
   - Find all products listed by a specific user.
   - Find the total amount spent by a specific user.
   - Find the top 5 most popular products (i.e., products with the most transactions).

## Instructions

1. Design the database schema based on the requirements above. Draw an Entity-Relationship (ER) diagram to visualize the schema.

2. Implement the schema in MySQL. Write the SQL `CREATE TABLE` statements.

3. Insert some sample data into your tables. Write the SQL `INSERT INTO` statements.

4. Write the SQL queries for the advanced queries mentioned in the requirements.

5. Test your database by running your SQL queries

6. Export your database in .sql format.

Remember, this challenge is designed to test both your understanding of the basics and some advanced concepts of MySQL. Take your time, and make sure to test your work as you go along. Good luck!