This project uses Docker to run a MySQL database. The MySQL root user is configured to connect from any host, and a local database can be imported into the Docker container.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. Build and start the Docker containers:

```bash
docker-compose up -d
```

## Usage

### Connecting to the MySQL Database

The MySQL root user can connect from any host. Use the following command to connect to the MySQL database:

```bash
mysql -h localhost -P 3306 -u root -p
```

If you get The error message "**Host  xxxxx' is not allowed to connect to this MySQL server**" indicates that the user you're trying to connect with doesn't have your remote host whitelisted. Let's address this issue step by step:

1. **Check MySQL User Hosts**:
   - First, let's verify the hosts associated with the MySQL user. Run the following query in your MySQL container:
     ```sql
     SELECT host FROM mysql.user WHERE User = 'root';
     ```
   - If you only see results with `localhost` and `127.0.0.1`, it means the user can only connect from those sources.

2. **Grant Access to Remote Host**:
   - To allow connections from a specific IP address (for example, `172.22.0.1`), create a new user with the appropriate privileges:
     ```sql
     CREATE USER 'root'@'172.22.0.1' IDENTIFIED BY 'your_password';
     GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.22.0.1';
     FLUSH PRIVILEGES;
     ```
   - Replace `'your_password'` with an actual secure password.

3. **Check Firewall Settings**:
   - Ensure that your server's firewall allows incoming connections on the MySQL port (default is `3306`).
   - Whitelist the IP address `172.22.0.1` if needed.

4. **Restart MySQL Container**:
   - After making changes, restart your MySQL container:
     ```bash
     docker-compose down
     docker-compose up -d
     ```

5. **Test Connection Again**:
   - Try connecting from your host machine using the updated credentials.

### Importing a Local Database

To import a local database into the Docker container, follow these steps:

1. Dump your local database to a SQL file:

```bash
mysqldump -u your_username -p your_database_name > db_configs/local_db.sql
```

2. Copy the SQL file to the Docker container:

```bash
docker cp db_configs/local_db.sql basic-mysql:/tmp/local_db.sql
```

3. Import the SQL file into the MySQL database in the Docker container:

```bash
docker exec -it basic-mysql mysql -u root -p your_database_name < /tmp/local_db.sql
```

Replace `your_username` and `your_database_name` with your actual MySQL username and database name.
