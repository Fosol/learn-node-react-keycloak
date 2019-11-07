# Docker Compose Example

https://github.com/keycloak/keycloak-containers/tree/master/docker-compose-examples

Keycloak and PostgreSQL
The keycloak-postgres.yml template creates a volume for PostgreSQL and starts Keycloak connected to a PostgreSQL instance.

Run the example with the following command:

`docker-compose -f docker-compose.yml up`
Open http://localhost:8080/auth and login as user 'admin' with password 'Pa55w0rd'.

Note - If you run the example twice without removing the persisted volume there will be a warning 'user with username exists'. You can ignore this warning.