# Learn Node, React and KeyCloak

This project is to help understand how to get Node, React and KeyCloak working together.
Each project should be hosted in its own container, but the API and web app can be run locally if required.

# Setup

Before getting start do the following;

1. Create a `/api/.env` file and populate it with the following fields;
   - NODE_ENV="development"
   - EXPRESS_PORT=[port]
   - NODE_KEYCLOAK_SECRET="[keycloak secret key]"
   - NODE_CONNECTION_STRING="[postgresql URL]"
2. Using `docker-compose` get the environments running
3. Connect to the KeyCloak admin center
   - http://localhost:8080/auth
   - Refer to the KeyCloak project [README](./keycloak/README.md) for credentials.
   - Create an appropriate Realm, Client and User.
   - Copy the `Client>Installation` details into the `/api/config/default.json` configuration file.
   - Copy the `keycloak.credentials.secret` to the `/api/.env` file `NODE_KEYCLOAK_SECRET` environment variable.
4. Install require packages
   - `>npm install`
5. If you want to use the `http://localhost:3000/test` endpoints you will need to create the database
   - use the scripts in the `/db/scripts` folder. These will need to be run against the PostgreSql docker instance (i.e. `localhost:54320`). Refer to the [README](./db/README.md) for information.
   - `create-function-oninsert-rowversion.sql`
6. Start the API project

## Environments

To get the environment up and running;
`>docker-compose up -d`

This will start up the following containers;

- KeyCloak
- KeyCloak PostgreSQL
- PotgreSQL (for Express)

## API

Go to the `/api` folder workspace and either run it in a container or locally.

### Locally

`>npm run dev`
or
`>npm start`

### Container

Open folder in remote container, then run the application.
_There is an issue currently where running in a container will not allow secure connections_
