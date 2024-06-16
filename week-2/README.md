# Week 2: MySQL and NoSQL

## MySQL

### Creating Tables with Constraints

In MySQL, you can create tables with constraints to enforce certain rules on the data. Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.

## Types of Constraints in MySQL

MySQL supports several types of constraints to enforce specific rules on the data in a table. Here are the main types:

1. **NOT NULL**: This constraint ensures that a column cannot have a NULL value.

2. **UNIQUE**: This constraint ensures that all values in a column are unique.

3. **PRIMARY KEY**: This is a combination of a NOT NULL and UNIQUE constraint. It uniquely identifies each record in a table.

4. **FOREIGN KEY**: This constraint is used to prevent actions that would destroy links between tables. It provides a method of enforcing data integrity.

5. **CHECK**: This constraint ensures that all values in a column satisfy certain conditions.

6. **DEFAULT**: This constraint provides a default value for a column when none is specified.

Here's a brief example of how these constraints can be used when creating a table:

```sql
CREATE TABLE Employees (
    ID INT NOT NULL,
    Name VARCHAR(100) NOT NULL,
    Age INT CHECK (Age >= 18),
    Email VARCHAR(100) UNIQUE,
    DepartmentID INT DEFAULT 1,
    PRIMARY KEY (ID),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
```

In this example, `ID` is the primary key, `Name` and `ID` cannot be NULL, `Age` must be at least 18, `Email` must be unique, and `DepartmentID` has a default value of 1 and is a foreign key that references the `DepartmentID` of the `Departments` table.

In this example, `NOT NULL` means that the column cannot accept NULL values, and `PRIMARY KEY` is a constraint that uniquely identifies each record in a table.

### Optimizing Queries by Adding Indexes

Indexes are used to retrieve data from the database more quickly than otherwise. They are particularly beneficial when you need to query large amounts of data. Creating an index involves the `CREATE INDEX` statement:

```sql
CREATE INDEX idx_customers_name
ON Customers (Name);
```

This creates an index on the `Name` column of the `Customers` table. Now, any queries that sort or search by `Name` will be faster.

### Stored Procedures and Functions in MySQL

Stored procedures and functions are reusable pieces of code stored in the database. A stored procedure does not return a value, but the function returns a value.

Here's an example of a stored procedure:

```sql
DELIMITER //
CREATE PROCEDURE GetCustomerCount()
BEGIN
   SELECT COUNT(*) FROM Customers;
END //
DELIMITER ;
```

And here's an example of a function:

```sql
DELIMITER //
CREATE FUNCTION TotalCustomers() RETURNS INT
BEGIN
   DECLARE total INT;
   SELECT COUNT(*) INTO total FROM Customers;
   RETURN total;
END //
DELIMITER ;
```

### Views in MySQL

A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

Here's an example of creating a view:

```sql
CREATE VIEW CustomerView AS
SELECT Name, Email
FROM Customers;
```

### Triggers in MySQL

A trigger is a stored procedure that is invoked automatically in response to an event such as insert, update, or delete that occurs on the associated table.

Here's an example of creating a trigger:

```sql
DELIMITER //
CREATE TRIGGER before_customer_update
BEFORE UPDATE ON Customers
FOR EACH ROW
BEGIN
   SET NEW.Email = LOWER(NEW.Email);
END; //
DELIMITER ;
```

This trigger will convert the `Email` field to lower case before any update operation on `Customers` table.

## Best practices for optimizing performance in a MySQL database:

1. **Indexing**: Indexes are used to find rows with specific column values quickly. Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows.

2. **Use EXPLAIN**: The EXPLAIN statement in MySQL is a great tool to understand how MySQL executes a query. It can help you optimize the query by showing you the order in which tables are read, what type of read is used, possible indexes to use, and more.

3. **Normalize Your Data**: Normalization is the process of efficiently organizing data in a database. It involves dividing a database into two or more tables and defining relationships between the tables to eliminate redundancy and dependency.

4. **Avoid Using Wildcards at the Start of a LIKE Query**: The '%' wildcard character in a LIKE query can be slow if it begins the query because it forces MySQL to scan the entire table.

5. **Limit the Size of Your Working Data Set**: Try to limit your working data set size to improve the speed of MySQL. This can be done by using LIMIT and appropriate WHERE clauses.

6. **Use Appropriate Storage Engines**: MySQL uses storage engines for database tables. The choice of a storage engine depends on the application's requirement. InnoDB and MyISAM are the most commonly used storage engines.

7. **Optimize Your Queries for the Query Cache**: Most MySQL servers have query caching enabled. It's useful to optimize your queries so that they can be cached.

8. **Tune Your MySQL Server**: MySQL server variables have a significant impact on the performance of your server. Variables like `innodb_buffer_pool_size`, `query_cache_size`, `tmp_table_size` and `max_heap_table_size` can be tuned according to your server resources.

9. **Partitioning**: MySQL supports table partitioning, which enables you to distribute portions of large tables across different parts of the filesystem, and even across different disks. This can significantly improve query performance.

10. **Regularly Update Statistics**: MySQL uses statistics about the distribution of the key values in each index and uses this statistical information to determine the order in which tables should be joined when you perform a join on something other than a constant.


## NoSQL

### What NoSQL Means

NoSQL stands for "Not Only SQL". It's a type of database that can handle and sort all kinds of data, not just data that can fit into a relational, tabular schema.

### Difference between SQL and NoSQL

SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.

SQL databases are table based databases whereas NoSQL databases are document based, key-value pairs, graph databases or wide-column stores.

### ACID in NoSQL

ACID stands for Atomicity, Consistency, Isolation, Durability. These are a set of properties that guarantee that database transactions are processed reliably.

### Document Storage in NoSQL

Document storage is a type of NoSQL database that is designed to store, retrieve, and manage document-oriented information. A document database is a type of nonrelational database that is designed to store semistructured data as documents.

### NoSQL Types

There are four main types of NoSQL databases: document databases, key-value databases, wide-column stores, and graph databases.

### Benefits of a NoSQL Database

NoSQL databases are more flexible, scalable, and provide superior performance for handling large data and real-time applications.

### Querying Information from a NoSQL Database

In NoSQL databases, data is queried based on the database type. For example, in MongoDB, you can use the `find()` function to query data:

```javascript
db.collection('Customers').find({});
```

### Inserting/Updating/Deleting Information from a NoSQL Database

In MongoDB, you can use the `insert()`, `update()`, and `remove()` functions respectively:

```javascript
// Insert
db.collection('Customers').insert({ name: 'John', email: 'john@example.com' });

// Update
db.collection('Customers').update({ name: 'John' }, { $set: { email: 'john_new@example.com' } });

// Delete
db.collection('Customers').remove({ name: 'John' });
```

## Using MongoDB

MongoDB is a source-available cross-platform document-oriented database program. It is classified as a NoSQL database program. MongoDB uses JSON-like documents with optional schemas.

To use MongoDB, you need to install it on your machine and use a MongoDB client to interact with the database. The MongoDB shell, `mongo`, is an interactive JavaScript interface to MongoDB. You can use the `mongo` shell to query and update data as well as perform administrative operations.

### Best practices for optimizing performance in a NoSQL database:

1. **Indexing**: Similar to SQL databases, NoSQL databases like MongoDB also support indexing. Indexes can significantly improve query performance by allowing the database to locate documents by specific fields, rather than scanning the entire collection.

2. **Sharding**: Sharding is a method for distributing data across multiple machines. It is one of the best ways to scale your NoSQL database as it can help to handle more write loads by distributing them across multiple servers.

3. **Denormalization**: Unlike SQL databases, NoSQL databases often encourage denormalization. Denormalization is the process of copying the same data into multiple documents or tables in order to improve read performance.

4. **Caching**: Caching is another effective way to improve database performance. By storing frequently accessed data in memory, you can reduce the number of read operations to the database.

5. **Batch Processing**: If you need to perform many similar operations, it's often more efficient to batch them together. This can reduce the overhead of initiating database operations.

6. **Use Appropriate Data Model**: Different NoSQL databases are designed for different types of data models. For example, document databases are good for semi-structured data, graph databases are good for interconnected data, etc. Using the appropriate data model can improve performance.

7. **Monitor and Tune Database**: Regularly monitor your database performance and tune your database configuration accordingly. Most NoSQL databases provide tools and utilities for monitoring and tuning.

8. **Avoid Large Documents**: In document databases like MongoDB, try to avoid large documents as they can lead to increased memory usage and decreased performance.

9. **Use Compression**: Some NoSQL databases support compression of data. Compression can reduce the amount of storage used and can also improve I/O efficiency.

10. **Regularly Update Statistics**: Similar to SQL databases, NoSQL databases also use statistics about the distribution of data. Regularly updating these statistics can help the database make better decisions about query planning and execution.