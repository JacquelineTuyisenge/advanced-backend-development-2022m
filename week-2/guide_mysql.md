# MySQL Tutorial

This tutorial will guide you through the MySQL concepts covered in the README file. We will use a real-world scenario of managing a library system to highlight some of the database logical design concepts.

## Setting Up MySQL

Before we start, make sure you have MySQL installed on your machine. If not, you can download it from the official MySQL website.

## Creating a Database

First, we need to create a database for our library system. In MySQL, you can create a database using the `CREATE DATABASE` statement.

```sql
CREATE DATABASE Library;
```

## Creating Tables with Constraints

In our library system, we will have two tables: `Books` and `Authors`. The `Books` table will have a foreign key constraint to the `Authors` table.

```sql
USE Library;

CREATE TABLE Authors (
    AuthorID INT AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    PRIMARY KEY (AuthorID)
);

CREATE TABLE Books (
    BookID INT AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    AuthorID INT,
    PublishedYear YEAR,
    PRIMARY KEY (BookID),
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);
```

## Inserting Data

Let's insert some data into our tables.

```sql
INSERT INTO Authors (Name, Email)
VALUES ('John Doe', 'john.doe@example.com'),
       ('Jane Doe', 'jane.doe@example.com');

INSERT INTO Books (Title, AuthorID, PublishedYear)
VALUES ('Book 1', 1, 2000),
       ('Book 2', 2, 2005);
```

## Querying Data

You can retrieve data from your tables using the `SELECT` statement.

```sql
SELECT * FROM Authors;

SELECT * FROM Books;
```

## Updating Data

You can update data in your tables using the `UPDATE` statement.

```sql
UPDATE Authors
SET Email = 'john.new@example.com'
WHERE Name = 'John Doe';
```

## Deleting Data

You can delete data from your tables using the `DELETE` statement.

```sql
DELETE FROM Authors
WHERE Name = 'Jane Doe';
```

## Creating Indexes

Creating an index can help speed up retrieval of records. Let's create an index on the `Name` column of the `Authors` table.

```sql
CREATE INDEX idx_authors_name
ON Authors (Name);
```

## Creating Views

A view is a virtual table based on the result-set of an SQL statement. Let's create a view that shows the book title and the name of its author.

```sql
CREATE VIEW BooksView AS
SELECT Title, Name
FROM Books
JOIN Authors ON Books.AuthorID = Authors.AuthorID;
```

## Creating Stored Procedures and Functions

Stored procedures and functions are reusable pieces of code stored in the database. Let's create a stored procedure that gets the count of books and a function that gets the total number of authors.

```sql
DELIMITER //
CREATE PROCEDURE GetBookCount()
BEGIN
   SELECT COUNT(*) FROM Books;
END //
DELIMITER ;

DELIMITER //
CREATE FUNCTION TotalAuthors() RETURNS INT
BEGIN
   DECLARE total INT;
   SELECT COUNT(*) INTO total FROM Authors;
   RETURN total;
END //
DELIMITER ;
```

## Creating Triggers

A trigger is a stored procedure that is invoked automatically in response to an event. Let's create a trigger that updates the `PublishedYear` field to the current year before any insert operation on the `Books` table.

```sql
DELIMITER //
CREATE TRIGGER before_book_insert
BEFORE INSERT ON Books
FOR EACH ROW
BEGIN
   SET NEW.PublishedYear = YEAR(CURDATE());
END; //
DELIMITER ;
```

## Advanced SQL Queries

Now that we've covered the basics, let's move on to some advanced SQL queries.

### Joins

A JOIN clause is used to combine rows from two or more tables, based on a related column between them. Let's get the list of books along with their author's name.

```sql
SELECT Books.Title, Authors.Name
FROM Books
JOIN Authors ON Books.AuthorID = Authors.AuthorID;
```

### Subqueries

A subquery is a SQL query nested inside a larger query. Let's find the books written by an author named 'John Doe'.

```sql
SELECT Title
FROM Books
WHERE AuthorID = (SELECT AuthorID FROM Authors WHERE Name = 'John Doe');
```

### Aggregate Functions

Aggregate functions allow you to perform a calculation on a set of values to return a single scalar value. We can use them to compute the count, sum, avg, max, min, etc. Let's find the total number of books.

```sql
SELECT COUNT(*) FROM Books;
```

And the average book's publication year.

```sql
SELECT AVG(PublishedYear) FROM Books;
```

### Group By

The GROUP BY statement groups rows that have the same values in specified columns into aggregated data. Let's find the number of books written by each author.

```sql
SELECT Authors.Name, COUNT(Books.BookID)
FROM Books
JOIN Authors ON Books.AuthorID = Authors.AuthorID
GROUP BY Authors.Name;
```

### Having

The HAVING clause was added to SQL because the WHERE keyword could not be used with aggregate functions. Let's find the authors who have written more than 1 book.

```sql
SELECT Authors.Name, COUNT(Books.BookID)
FROM Books
JOIN Authors ON Books.AuthorID = Authors.AuthorID
GROUP BY Authors.Name
HAVING COUNT(Books.BookID) > 1;
```

That's it! You have now learned both the basics and some advanced concepts of MySQL. Practice these concepts to get a better understanding. Happy learning!


Here are some additional resources that you might find helpful for MySQL:

1. [MySQL Official Documentation](https://dev.mysql.com/doc/)
2. [MySQL Tutorial](https://www.mysqltutorial.org/)
3. [W3Schools MySQL Tutorial](https://www.w3schools.com/sql/)
4. [TutorialsPoint MySQL Tutorial](https://www.tutorialspoint.com/mysql/)
5. [GeeksforGeeks MySQL Tutorial](https://www.geeksforgeeks.org/sql-tutorial/)
6. [MySQL Workbench Manual](https://dev.mysql.com/doc/workbench/en/)
7. [MySQL Indexing](https://www.mysqltutorial.org/mysql-index/)
8. [MySQL Stored Procedures](https://www.mysqltutorial.org/mysql-stored-procedure-tutorial.aspx/)
9. [MySQL Triggers](https://www.mysqltutorial.org/mysql-trigger-tutorial.aspx/)

Remember, the best way to learn is by doing. Try to apply what you learn from these resources in your own projects. Happy learning!


