#!/bin/bash

mysql -u root -e "UPDATE mysql.user SET Password = PASSWORD('Admin@12345') WHERE User = 'root'"
mysql -u root -e "DELETE FROM mysql.user WHERE User = ''"
mysql -u root -e "DELETE FROM mysql.db WHERE Db = 'test' OR Db = 'test_%'”
mysql -u root -e "FLUSH PRIVILEGES"

echo "MySQL root user secured."
