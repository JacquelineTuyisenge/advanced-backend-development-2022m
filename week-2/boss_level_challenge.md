# Boss Level Challenge

## Chinook Database

![Chinook Database ERD](https://private-user-images.githubusercontent.com/135025/299867754-cea7a05a-5c36-40cd-84c7-488307a123f4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg5NTk2MDUsIm5iZiI6MTcwODk1OTMwNSwicGF0aCI6Ii8xMzUwMjUvMjk5ODY3NzU0LWNlYTdhMDVhLTVjMzYtNDBjZC04NGM3LTQ4ODMwN2ExMjNmNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyNlQxNDU1MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODM2OWMwNjYxZWE3NTQyZDJmYmNiMTM0Njc3M2E0NmE3ZmY2NjhjYjE1NDU3MmQyNjQ5YzgyNzI4ZGRmZDA2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.05jozGnKnxxVPSUmSPf0KRCFEoOcILp6cbQtBq5Vscw)

A step-by-step guide to install the Chinook database on MySQL:

1. **Download the Chinook Database**: The Chinook database is available on GitHub. You can download it from [here](https://github.com/lerocha/chinook-database). Click on the `Code` button and then `Download ZIP`.

2. **Extract the ZIP File**: Once the download is complete, extract the ZIP file. Inside the extracted folder, navigate to the `ChinookDatabase/DataSources` directory. You will find a file named `Chinook_MySql_AutoIncrementPKs.sql`. This is the SQL script that will create the Chinook database in MySQL.

3. **Open MySQL Command Line Client**: Open your MySQL command line client. This could be the MySQL shell, MySQL Workbench, or any other MySQL client you prefer.

4. **Create the Database**: Before running the script, you need to create a new database. Run the following command to create a new database named `Chinook`:
    ```sql
    CREATE DATABASE Chinook;
    ```

5. **Select the Database**: Use the following command to select the `Chinook` database:
    ```sql
    USE Chinook;
    ```

6. **Run the Script**: Now, you need to run the `Chinook_MySql_AutoIncrementPKs.sql` script. If you're using the MySQL command line client, you can use the `source` command followed by the path to the script file. Replace `/path/to/your/script` with the actual path to the `Chinook_MySql_AutoIncrementPKs.sql` file:
    ```sql
    source /path/to/your/script/Chinook_MySql_AutoIncrementPKs.sql;
    ```

7. **Check the Database**: To ensure that the database has been created successfully, you can show all tables in the `Chinook` database with the following command:
    ```sql
    SHOW TABLES;
    ```

That's it! You have successfully installed the Chinook database on MySQL. Now you can start querying the database.

## Queries

Here are some practical questions based on the Chinook database structure and the topics covered in the MySQL guide:

1. Write a SQL query to find all distinct genres of tracks.
2. Write a SQL query to find the total number of tracks in each genre.
3. Write a SQL query to find the total length of all tracks in each genre.
4. Write a SQL query to find the average length of tracks in each genre.
5. Write a SQL query to find the longest track in each genre.
6. Write a SQL query to find the shortest track in each genre.
7. Write a SQL query to find all tracks that are longer than the average length of tracks.
8. Write a SQL query to find all tracks that are shorter than the average length of tracks.
9. Write a SQL query to find all albums of a specific artist.
10. Write a SQL query to find all artists who have more than 10 albums.
11. Write a SQL query to find all artists who have less than 10 albums.
12. Write a SQL query to find all artists who have exactly 10 albums.
13. Write a SQL query to find all albums that have more than 10 tracks.
14. Write a SQL query to find all albums that have less than 10 tracks.
15. Write a SQL query to find all albums that have exactly 10 tracks.
16. Write a SQL query to find the total length of all tracks in each album.
17. Write a SQL query to find the average length of tracks in each album.
18. Write a SQL query to find the longest track in each album.
19. Write a SQL query to find the shortest track in each album.


## More Queries

Here are some additional questions that involve functions, stored procedures, triggers, and views based on the Chinook database structure:

1. Write a stored procedure to find the total number of tracks in each genre.
2. Write a function to find the average length of tracks in each genre.
3. Create a trigger that updates the `Composer` field to 'Unknown' before any insert operation on the `Tracks` table if the `Composer` field is not provided.
4. Create a view that shows the track name, album title, and artist name.
5. Write a stored procedure to find all albums of a specific artist.
6. Write a function to find the total number of albums by a specific artist.
7. Create a trigger that updates the `Title` field to 'Untitled' before any insert operation on the `Albums` table if the `Title` field is not provided.
8. Create a view that shows the album title and the name of its artist.
9. Write a stored procedure to find all customers from a specific country.
10. Write a function to find the total number of customers from a specific country.
11. Create a trigger that updates the `Country` field to 'Unknown' before any insert operation on the `Customers` table if the `Country` field is not provided.
12. Create a view that shows the customer name and their country.
13. Write a stored procedure to find all employees who are sales agents.
14. Write a function to find the total number of sales agents.
15. Create a trigger that updates the `Title` field to 'Employee' before any insert operation on the `Employees` table if the `Title` field is not provided.
16. Create a view that shows the employee name and their title.
17. Write a stored procedure to find all playlists that have more than 10 tracks.
18. Write a function to find the average number of tracks in each playlist.
19. Create a trigger that updates the `Name` field to 'Untitled' before any insert operation on the `Playlists` table if the `Name` field is not provided.
20. Create a view that shows the playlist name and the number of tracks in it.

## Views

1. **Top Customers**: This view  would show the customers who have made the most purchases.

2. **Sales by Country**: This view would show the total sales for each country.

3. **Most Profitable Tracks**: This view would  show the tracks that have generated the most revenue.

4. **Sales Over Time**: This view would show the total sales over a period of time.

5. **Customer Lifetime Value**: This view would  calculate the total revenue generated by each customer.

6. **Customer Purchases**: This view  would provide a comprehensive look at each customer's purchases.

7. **Album Sales**: This view  shows how many times each album has been purchased.

8. **Artist Popularity**: This view shows how many times tracks from each artist have been purchased.

9. **Track Popularity**: This view shows how many times each track has been purchased.

10. **Genre Popularity**: This view shows how many times tracks of each genre have been purchased.