# PostgreSQL DB

## Problems
Windows doesn't support mounting volumes locally. You have to add a `.env` file to the same directory as the `docker-compose.yml` file.  Within that file the `COMPOSE_CONVERT_WINDOWS_PATHS=true` setting.

To connect
`npm install -g psql`
`psql -h localhost -p 54320 -U john -d mydb`