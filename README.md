# Movie Review And Rental Service API

## Requirements
- [Node.js](https://nodejs.org/en/) version v12.15.0 or later,
- [NPM packet manager](https://npmjs.com) version 6.9.0 or later.
- [MongoDB Server](https://www.mongodb.com/download-center/community)

## Installation
Download and install the above listed requirements.
After node and npm have been installed run `npm install` in the project
directory to download and install all necessary third party dependencies.
Double check the results and consult the `package.json` configuration file to
make sure all dependencies have been installed correctly.

This API uses a [MongoDB](https://www.mongodb.com/download-center/community)
database server. You can download, install and run a MongoDB database locally or
use an online provider. Make sure to set the `video_db` environment
variable to the connection string of the MongoDB server you are using.

The environment variable `video_jwtprivatekey` has to be set to a secure key.
The secure key has to be 'long and random' and may use any common alphabetic
characters, numbers, and special symbols. The same recommendations that apply
for ['strong passwords'](https://www.grc.com/passwords.htm) apply for the
json webtoken key.

Before starting the application ensure that you have set the necessary
environment variables and your MongoDB server is up:

    export NODE_ENV=production
    export video_jwtPrivateKey=du3hf94j$jd0#jsf.s
    export video_db=mongodb://mongodb0.example.com:27017/movies?sdf


### Populate the Database

    node services/seed.js

### Run the Tests

    npm test

All tests should pass.

### Start The Application

Run `npm start` from the project root folder to start the REST API.

## API Documentation: Endpoints

    POST    /api/customers
    GET     /api/customers
    GET     /api/customers/{id}
    PUT     /api/customers/{id}
    DELETE  /api/customers/{id}

    POST    /api/genres
    GET     /api/genres
    GET     /api/genres/{id}
    PUT     /api/genres/{id}
    DELETE  /api/genres/{id}

    POST    /api/movies
    GET     /api/movies
    GET     /api/movies/{id}
    PUT     /api/movies/{id}
    DELETE  /api/movies/{id}

    POST    /api/rentals            create a rental / rent a movie
    GET     /api/rentals

    POST    /api/returns            delete a rental / return a rental

    POST    /api/users              create new user
    GET     /api/users/me           get current user details

    POST    /api/auth               login / create JSON web token


## Headers
On login or registration a json webtoken is sent to the client as a value of
the header `x-auth-token`. This header and token value has to be sent with
future api calls to authorize usage of some endpoints.

