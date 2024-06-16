# NoSQL Challenge

## Scenario

You have been hired as a database administrator for a new startup called "TechShop". TechShop is an online marketplace for tech products where users can buy and sell various tech items such as laptops, smartphones, and accessories.

Your task is to design and implement a NoSQL database for TechShop using MongoDB. The database should store information about users, products, and transactions.

## Requirements

1. **Users**: For each user, the database should store their name, email (which should be unique), and password.

2. **Products**: Each product should have a name, description, price, and the ID of the user who listed the product.

3. **Transactions**: Each transaction should record the ID of the buyer, the ID of the product, the date of the transaction, and the quantity purchased.

4. **Indexes**: Create an index on the `name` field of the `Users` collection to speed up queries.

5. **Aggregation**: Use MongoDB's aggregation framework to count the number of products listed by each user.

6. **Advanced Queries**: Write MongoDB queries to:
   - Find all products listed by a specific user.
   - Find the total amount spent by a specific user.
   - Find the top 5 most popular products (i.e., products with the most transactions).

## Instructions

1. Design the database schema based on the requirements above. Draw a diagram to visualize the schema.

2. Implement the schema in MongoDB. Write the commands to create the collections.

3. Insert some sample data into your collections. Write the commands to insert the data.

4. Write the MongoDB queries for the advanced queries mentioned in the requirements.

5. Test your database by running your MongoDB queries.

Remember, this challenge is designed to test both your understanding of the basics and some advanced concepts of NoSQL. Take your time, and make sure to test your work as you go along. Good luck!