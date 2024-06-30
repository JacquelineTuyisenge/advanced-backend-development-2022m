# Challenges

-- Find all projects with a deadline before December 1st, 2024.
-- List all projects for "Big Retail Inc." ordered by deadline.
-- Find the team lead for the "Mobile App for Learning" project.
-- Find projects containing "Management" in the name.
-- Count the number of projects assigned to David Lee.
-- Find the total number of employees working on each project.
-- Find all clients with projects having a deadline after October 31st, 2024.
-- List employees who are not currently team leads on any project.
-- Combine a list of projects with deadlines before December 1st and another list with "Management" in the project name.
-- Display a message indicating if a project is overdue (deadline passed).
-- Create a view to simplify retrieving client contact 
-- Create a view to show only ongoing projects (not yet completed).
-- Create a view to display project information along with assigned team leads.
-- Create a view to show project names and client contact information for projects with a deadline in November 2024.
-- Create a view to display the total number of projects assigned to each employee.
-- Create a function to calculate the number of days remaining until a project deadline
-- Create a function to calculate the number of days a project is overdue
-- Create a stored procedure to add a new client and their first project in one call
-- Create a stored procedure to move completed projects (past deadlines) to an archive table
-- Create a trigger to log any updates made to project records in a separate table for auditing purposes
-- Create a trigger to ensure a team lead assigned to a project is a valid employee
-- Create a view to display project details along with the total number of team members assigned
-- Create a view to show overdue projects with the number of days overdue
-- Create a stored procedure to update project team members (remove existing, add new ones)
-- Create a trigger to prevent deleting a project that still has assigned team members

## Querries

## 1

mysql> SELECT * FROM projects WHERE deadline < '2024-12-01';
+----+----------------------------------------+--------------------------------------------------------------+------------+-----------+
| id | name                                   | requirements
                       | deadline   | client_id |
+----+----------------------------------------+--------------------------------------------------------------+------------+-----------+
|  2 | Mobile App for Learning                | Gamified learning modules
                       | 2024-08-15 |         2 |
|  3 | Social Media Management Tool           | User-friendly interface with analytic 
                       | 2024-10-31 |         3 |
|  4 | Inventory Management System            | Barcode integration and real-time stock tracking             | 2024-11-01 |         4 |
|  5 | Restaurant Reservation System          | Online booking with table management  
                       | 2024-09-01 |         5 |
|  7 | Customer Relationship Management (CRM) | Secure parent portal and communication tools                 | 2024-10-01 |         7 |
|  8 | Data Analytics Dashboard               | Real-time visualization of key performance indicators (KPIs) | 2024-11-30 |         8 |
|  9 | E-learning Platform Development        | Interactive course creation and delivery tools               | 2024-09-15 |         9 |
+----+----------------------------------------+--------------------------------------------------------------+------------+-----------+
7 rows in set (0.01 sec)

mysql>

## 2

mysql> SELECT p.* 
    -> FROM projects p
    -> JOIN clients c ON p.client_id = c.id
    -> WHERE c.name = 'Big Retail Inc.'
    -> ORDER BY p.deadline;
ERROR 1146 (42S02): Table 'testing.clients' doesn't exist
mysql> SELECT p.* FROM projects p JOIN Clients c ON p.Client_id = c.id Where c.name = 
'Big Retail Inc.' ORDER BY p.deadline;
+----+---------------------+-------------------------+------------+-----------+
| id | name                | requirements            | deadline   | client_id |       
+----+---------------------+-------------------------+------------+-----------+
|  1 | E-commerce Platform | Extensive documentation | 2024-12-01 |         1 |       
+----+---------------------+-------------------------+------------+-----------+       
1 row in set (0.01 sec)

## 3

mysql> SELECT e.name 
    -> FROM projectTeam pt
    -> JOIN projects p ON pt.project_id = p.id
    -> JOIN Employees e ON pt.employee_id = e.id
    -> WHERE p.name = 'Mobile App for Learning' AND pt.is_lead = TRUE;
+-----------+
| name      |
+-----------+
| David Lee |
+-----------+
1 row in set (0.01 sec)

mysql>

## 4


mysql> SELECT * FROM projects WHERE name LIKE '%Management%';
+----+------------------------------------------+-------------------------------------------------------------+------------+-----------+
| id | name                                     | requirements
                        | deadline   | client_id |
+----+------------------------------------------+-------------------------------------------------------------+------------+-----------+
|  3 | Social Media Management Tool             | User-friendly interface with analytic                       | 2024-10-31 |         3 |
|  4 | Inventory Management System              | Barcode integration and real-time stock tracking            | 2024-11-01 |         4 |
|  6 | Content Management System (CMS)          | Drag-and-drop interface for easy content updates            | 2024-12-15 |         6 |
|  7 | Customer Relationship Management (CRM)   | Secure parent portal and communication tools                | 2024-10-01 |         7 |
| 10 | Bug Tracking and Issue Management System | Prioritization and collaboration features for bug reporting | 2024-12-31 |        10 |
+----+------------------------------------------+-------------------------------------------------------------+------------+-----------+
5 rows in set (0.01 sec)

mysql>

## 5

mysql> SELECT COUNT(*) 
    -> FROM projectTeam pt
    -> JOIN Employees e ON pt.employee_id = e.id
    -> WHERE e.name = 'David Lee';
+----------+
| COUNT(*) |
+----------+
|        6 |
+----------+
1 row in set (0.03 sec)

mysql>

## 6

mysql> SELECT p.name, COUNT(pt.employee_id) AS total_employees
    -> FROM projects p
    -> JOIN projectTeam pt ON p.id = pt.project_id
    -> GROUP BY p.id;
+------------------------------------------+-----------------+
| name                                     | total_employees |
+------------------------------------------+-----------------+
| E-commerce Platform                      |               3 |
| Mobile App for Learning                  |               3 |
| Social Media Management Tool             |               3 |
| Inventory Management System              |               3 |
| Restaurant Reservation System            |               3 |
| Content Management System (CMS)          |               3 |
| Customer Relationship Management (CRM)   |               3 |
| Data Analytics Dashboard                 |               3 |
| E-learning Platform Development          |               3 |
| Bug Tracking and Issue Management System |               3 |
+------------------------------------------+-----------------+
10 rows in set (0.01 sec)

mysql>

## 7

mysql> SELECT DISTINCT c.name
    -> FROM Clients c
    -> JOIN projects p ON c.id = p.client_id
    -> WHERE p.deadline > '2024-10-31';
+----------------------+
| name                 |
+----------------------+
| Big Retail Inc.      |
| Gearhead Supply Co.  |
| Green Thumb Gardens  |
| Acme Pharmaceuticals |
| Software Craft LLC   |
+----------------------+
5 rows in set (0.02 sec)

mysql>

## 8

mysql> SELECT e.name
    -> FROM Employees e
    -> LEFT JOIN projectTeam pt ON e.id = pt.employee_id AND pt.is_lead = TRUE
    -> WHERE pt.employee_id IS NULL;
+---------------+
| name          |
+---------------+
| Jane Doe      |
| Michael Young |
| Emily Chen    |
| William Green |
| Sarah Jones   |
+---------------+
5 rows in set (0.01 sec)

mysql>

## 9

mysql> SELECT * FROM projects WHERE deadline < '2024-12-01'
    -> UNION
    -> SELECT * FROM projects WHERE name LIKE '%Management%';
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
| id | name                                     | requirements                                                 | deadline   | client_id |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
|  2 | Mobile App for Learning                  | Gamified learning modules                                    | 2024-08-15 |         2 |
|  3 | Social Media Management Tool             | User-friendly interface with analytic                        | 2024-10-31 |         3 |
|  4 | Inventory Management System              | Barcode integration and real-time stock tracking             | 2024-11-01 |         4 |
|  5 | Restaurant Reservation System            | Online booking with table management                         | 2024-09-01 |         5 |
|  7 | Customer Relationship Management (CRM)   | Secure parent portal and communication tools                 | 2024-10-01 |         7 |
|  8 | Data Analytics Dashboard                 | Real-time visualization of key performance indicators (KPIs) | 2024-11-30 |         8 |
|  9 | E-learning Platform Development          | Interactive course creation and delivery tools               | 2024-09-15 |         9 |
|  6 | Content Management System (CMS)          | Drag-and-drop interface for easy content updates             | 2024-12-15 |         6 |
| 10 | Bug Tracking and Issue Management System | Prioritization and collaboration features for bug reporting  | 2024-12-31 |        10 |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
9 rows in set (0.01 sec)

mysql>

## 10

mysql> SELECT name, 
    ->        deadline,  
    ->        IF(deadline < CURDATE(), 'Overdue', 'On time') AS status 
    -> FROM projects;
+------------------------------------------+------------+---------+
| name                                     | deadline   | status  |
+------------------------------------------+------------+---------+
| E-commerce Platform                      | 2024-12-01 | On time |
| Mobile App for Learning                  | 2024-08-15 | On time |
| Social Media Management Tool             | 2024-10-31 | On time |
| Inventory Management System              | 2024-11-01 | On time |
| Restaurant Reservation System            | 2024-09-01 | On time |
| Content Management System (CMS)          | 2024-12-15 | On time |
| Customer Relationship Management (CRM)   | 2024-10-01 | On time |
| Data Analytics Dashboard                 | 2024-11-30 | On time |
| E-learning Platform Development          | 2024-09-15 | On time |
| Bug Tracking and Issue Management System | 2024-12-31 | On time |
+------------------------------------------+------------+---------+
10 rows in set (0.01 sec)

mysql>

## 11

CREATE VIEW client_contact AS
SELECT id, name, email 
FROM Clients;

## 12

mysql> CREATE VIEW ongoing_projects AS
    -> SELECT * FROM projects 
    -> WHERE deadline > CURDATE();
Query OK, 0 rows affected (0.06 sec)

mysql> SELECT * FROM ongoing_projects; 
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
| id | name                                     | requirements
                         | deadline   | client_id |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
|  1 | E-commerce Platform                      | Extensive documentation
                         | 2024-12-01 |         1 |
|  2 | Mobile App for Learning                  | Gamified learning modules
                         | 2024-08-15 |         2 |
|  3 | Social Media Management Tool             | User-friendly interface with analytic                        | 2024-10-31 |         3 |
|  4 | Inventory Management System              | Barcode integration and real-time stock tracking             | 2024-11-01 |         4 |
|  5 | Restaurant Reservation System            | Online booking with table management                         | 2024-09-01 |         5 |
|  6 | Content Management System (CMS)          | Drag-and-drop interface for easy content updates             | 2024-12-15 |         6 |
|  7 | Customer Relationship Management (CRM)   | Secure parent portal and communication tools                 | 2024-10-01 |         7 |
|  8 | Data Analytics Dashboard                 | Real-time visualization of key performance indicators (KPIs) | 2024-11-30 |         8 |
|  9 | E-learning Platform Development          | Interactive course creation and delivery tools               | 2024-09-15 |         9 |
| 10 | Bug Tracking and Issue Management System | Prioritization and collaboration features for bug reporting  | 2024-12-31 |        10 |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+
10 rows in set (0.00 sec)

mysql>

## 13

mysql> CREATE VIEW project_team_leads AS
    -> SELECT p.id, p.name, e.name AS team_lead
    -> FROM projects p
    -> JOIN projectTeam pt ON p.id = pt.project_id
    -> JOIN Employees e ON pt.employee_id = e.id
    -> WHERE pt.is_lead = TRUE;
Query OK, 0 rows affected (0.03 sec)

mysql> SELECT * FROM project_team_leads;        
+----+------------------------------------------+-------------+
| id | name                                     | team_lead   |
+----+------------------------------------------+-------------+
|  1 | E-commerce Platform                      | Alice Brown |
|  3 | Social Media Management Tool             | Alice Brown |
|  5 | Restaurant Reservation System            | Alice Brown |
|  7 | Customer Relationship Management (CRM)   | Alice Brown |
|  9 | E-learning Platform Development          | Alice Brown |
|  2 | Mobile App for Learning                  | David Lee   |
|  4 | Inventory Management System              | David Lee   |
|  6 | Content Management System (CMS)          | David Lee   |
|  8 | Data Analytics Dashboard                 | David Lee   |
| 10 | Bug Tracking and Issue Management System | David Lee   |
+----+------------------------------------------+-------------+
10 rows in set (0.01 sec)

mysql>

## 14

mysql> CREATE VIEW november_projects AS
    -> SELECT p.name, c.name AS client_name, c.email
    -> FROM projects p
    -> JOIN Clients c ON p.client_id = c.id
    -> WHERE p.deadline BETWEEN '2024-11-01' AND '2024-11-30';
Query OK, 0 rows affected (0.11 sec)

mysql> SELECT * FROM november_projects;  
+-----------------------------+----------------------+--------------------+
| name                        | client_name          | email              |
+-----------------------------+----------------------+--------------------+
| Inventory Management System | Gearhead Supply Co.  | gearhead@gmail.com |
| Data Analytics Dashboard    | Acme Pharmaceuticals | pharm@gmail.com    |
+-----------------------------+----------------------+--------------------+
2 rows in set (0.00 sec)

mysql>

## 15

mysql> CREATE VIEW employee_project_count AS
    -> SELECT e.name, COUNT(pt.project_id) AS total_projects
    -> FROM Employees e
    -> JOIN projectTeam pt ON e.id = pt.employee_id
    -> GROUP BY e.id;
Query OK, 0 rows affected (0.03 sec)

mysql> SELECT * FROM employee_project_count;
+---------------+----------------+
| name          | total_projects |
+---------------+----------------+
| Alice Brown   |              5 |
| David Lee     |              6 |
| Jane Doe      |              4 |
| Michael Young |              5 |
| Emily Chen    |              3 |
| William Green |              4 |
| Sarah Jones   |              3 |
+---------------+----------------+
7 rows in set (0.01 sec)

mysql>

## 16

mysql> CREATE FUNCTION days_until_deadline(project_id INT) RETURNS INT
    -> DETERMINISTIC
    -> READS SQL DATA
    -> BEGIN
    ->     DECLARE days_left INT;
    ->     SELECT DATEDIFF(deadline, CURDATE()) INTO days_left
    ->     FROM projects
    ->     WHERE id = project_id;
    ->     RETURN days_left;
    -> END //
Query OK, 0 rows affected (0.04 sec)

mysql>
mysql> DELIMITER ;
mysql>

## 17

mysql> CREATE FUNCTION days_overdue(project_id INT) RETURNS INT
    -> DETERMINISTIC
    -> READS SQL DATA
    -> BEGIN
    ->     DECLARE days_over INT;
    ->     SELECT DATEDIFF(CURDATE(), deadline) INTO days_over
    ->     FROM projects
    ->     WHERE id = project_id AND deadline < CURDATE();
    ->     RETURN days_over;
    -> END //
Query OK, 0 rows affected (0.03 sec)

## 18

mysql> CREATE PROCEDURE add_client_and_project(
    ->     IN client_name VARCHAR(255),
    ->     IN client_email VARCHAR(255),
    ->     IN project_name VARCHAR(255),
    ->     IN requirements TEXT,
    ->     IN deadline DATE
    -> )
    -> BEGIN
    ->     DECLARE new_client_id INT;
    ->
    ->     INSERT INTO Clients (name, email) VALUES (client_name, client_email);
    ->     SET new_client_id = LAST_INSERT_ID();
    ->
    ->     INSERT INTO projects (name, requirements, deadline, client_id)
    ->     VALUES (project_name, requirements, deadline, new_client_id);
    -> END //
Query OK, 0 rows affected (0.04 sec)

## 19

mysql> CREATE PROCEDURE move_completed_projects_to_archive()
    -> BEGIN
    ->     INSERT INTO archive_projects
    ->     SELECT *
    ->     FROM projects
    ->     WHERE deadline < CURDATE();
    ->
    ->     DELETE FROM projects
    ->     WHERE deadline < CURDATE();
    -> END //
Query OK, 0 rows affected (0.02 sec)

## 20

mysql> CREATE TRIGGER project_update_audit
    -> AFTER UPDATE ON projects
    -> FOR EACH ROW
    -> BEGIN
    ->     INSERT INTO project_audit_log (project_id, old_name, new_name, old_requirements, new_requirements, old_deadline, new_deadline, updated_at)
    ->     VALUES (OLD.id, OLD.name, NEW.name, OLD.requirements, NEW.requirements, OLD.deadline, NEW.deadline, NOW());
    -> END //
Query OK, 0 rows affected (0.10 sec)

## 21

mysql> CREATE TRIGGER validate_team_lead
    -> BEFORE INSERT ON projectTeam
    -> FOR EACH ROW
    -> BEGIN
    ->     DECLARE emp_count INT;
    ->
    ->     SELECT COUNT(*)
    ->     INTO emp_count
    ->     FROM Employees
    ->     WHERE id = NEW.employee_id;
    ->
    ->     IF emp_count = 0 THEN
    ->         SIGNAL SQLSTATE '45000'
    ->         SET MESSAGE_TEXT = 'Invalid team lead: Employee does not exist';
    ->     END IF;
    -> END //
Query OK, 0 rows affected (0.05 sec)

mysql>
mysql> DELIMITER ;

## 22

mysql> DELIMITER ;
mysql> CREATE VIEW project_details_with_team_count AS
    -> SELECT p.id, p.name, p.requirements, p.deadline, p.client_id,
    ->        COUNT(pt.employee_id) AS team_member_count
    -> FROM projects p
    -> LEFT JOIN projectTeam pt ON p.id = pt.project_id
    -> GROUP BY p.id;
Query OK, 0 rows affected (0.08 sec)

mysql> SELECT * FROM project_details_with_team_count;
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+-------------------+
| id | name                                     | requirements                                                 | deadline   | client_id | team_member_count |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+-------------------+
|  1 | E-commerce Platform                      | Extensive documentation                                      | 2024-12-01 |         1 |                 3 |
|  2 | Mobile App for Learning                  | Gamified learning modules                                    | 2024-08-15 |         2 |                 3 |
|  3 | Social Media Management Tool             | User-friendly interface with analytic                        | 2024-10-31 |         3 |                 3 |
|  4 | Inventory Management System              | Barcode integration and real-time stock tracking             | 2024-11-01 |         4 |                 3 |
|  5 | Restaurant Reservation System            | Online booking with table management                         | 2024-09-01 |         5 |                 3 |
|  6 | Content Management System (CMS)          | Drag-and-drop interface for easy content updates             | 2024-12-15 |         6 |                 3 |
|  7 | Customer Relationship Management (CRM)   | Secure parent portal and communication tools                 | 2024-10-01 |         7 |                 3 |
|  8 | Data Analytics Dashboard                 | Real-time visualization of key performance indicators (KPIs) | 2024-11-30 |         8 |                 3 |
|  9 | E-learning Platform Development          | Interactive course creation and delivery tools               | 2024-09-15 |         9 |                 3 |
| 10 | Bug Tracking and Issue Management System | Prioritization and collaboration features for bug reporting  | 2024-12-31 |        10 |                 3 |
+----+------------------------------------------+--------------------------------------------------------------+------------+-----------+-------------------+
10 rows in set (0.03 sec)

mysql>

## 23

mysql> CREATE VIEW overdue_projects AS
    -> SELECT id, name, requirements, deadline,
    ->        DATEDIFF(CURDATE(), deadline) AS days_overdue
    -> FROM projects
    -> WHERE deadline < CURDATE();
Query OK, 0 rows affected (0.03 sec)

## 24

mysql> CREATE PROCEDURE update_project_team(
    ->     IN project_id INT,
    ->     INOUT team_members TEXT
    -> )
    -> BEGIN
    ->     DELETE FROM projectTeam WHERE project_id = project_id;
    ->
    ->     IF team_members IS NOT NULL THEN
    ->         INSERT INTO projectTeam (project_id, employee_id)
    ->         SELECT project_id, id
    ->         FROM Employees
    ->         WHERE FIND_IN_SET(name, team_members);
    ->     END IF;
    -> END //
Query OK, 0 rows affected (0.04 sec)

## 25

mysql> CREATE TRIGGER prevent_delete_project_with_team_members
    -> BEFORE DELETE ON projects
    -> FOR EACH ROW
    -> BEGIN
    ->     DECLARE team_member_count INT;
    ->
    ->     SELECT COUNT(*)
    ->     INTO team_member_count
    ->     FROM projectTeam
    ->     WHERE project_id = OLD.id;
    ->
    ->     IF team_member_count > 0 THEN
    ->         SIGNAL SQLSTATE '45000'
    ->         SET MESSAGE_TEXT = 'Cannot delete project with assigned team members';
    ->     END IF;
    -> END //
Query OK, 0 rows affected (0.04 sec)

@
### 25, example:  
mysql> DELETE FROM projects WHERE id = 1;
ERROR 1644 (45000): Cannot delete project with assigned team members
mysql>