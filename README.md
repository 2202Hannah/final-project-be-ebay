# Northcoders News Backend Project

Link to hosted version: https://nc-ebay-api.herokuapp.com/api

## Table of Contents

1. Summary of the project
2. How to use the project

## A Summary of the Project:

This project creates a server for React Native mobile app called Santa's Little Helper. This was a group project completed over 8 days as part of the Northcoders bootcamp.

We used the Node.js web application framework Express to create the server.

The server includes a postgresql database to store user and recipient data.

The server also makes calles to the eBay production API to access live data of item listings. The documentation for the eBay API can be found here: https://developer.ebay.com/

Please see the enpoints.json file for a full list of all endpoints including a description of their functionality.

We used the MVC model to structure the project.

We wrote the application using full Test Driven Development (TDD). The tests for the application can be found in the **tests** folder. The tests also account for error handling and consider user error.

We are hosting the app on Heroku here: https://nc-ebay-api.herokuapp.com/api

The front end repository can be found here: https://github.com/robcarter123/react-final-project
The machine learning model repository can be found here: https://github.com/teyahbd/ecommerce-keyword-api

## How to setup and use the project:

### To clone the repository:

```bash dark
git clone https://github.com/2202Hannah/final-project-be-ebay.git
```

### Dependencies:

express version 4.18.2 minimum

```bash dark
npm install express
```

pg version 8.8.0 minimum

```bash dark
npm install pg
```

dotenv version 16.0.3 minimum

```bash dark
npm install dotenv --save
```

### To create the .env files for development and test:

File name: ".env.development"
content: PGDATABASE=santas_little_helper

File name: ".env.test"
content: PGDATABASE=santas_little_helper_test

### To seed the local database run:

```bash dark
npm run seed
```

### To run tests:

```bash dark
npm run test
```
