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
use an online provider. Make sure to set the `API_DATABASE` environment
variable to the connection string of the MongoDB server you are using.

The environment variable `API_JWTPRIVATEKEY` has to be set to a secure key.
The secure key has to be 'long and random' and may use any common alphabetic
characters, numbers, and special symbols. The same recommendations that apply
for ['strong passwords'](https://www.grc.com/passwords.htm) apply for the
json webtoken key.

Before starting the application ensure that you have set the required
environment variables and your MongoDB server is up:

    export NODE_ENV=production
    export API_JWTPRIVATEKEY=du3hf94jjd0jsf.s
    export API_DATABASE=mongodb://mongodb0.example.com:27017/movies?sdf

Optional environment variables:

    API_CONFIG_NAME
    API_LOG_ENABLED
    API_PORT

### Populate the Database

    node services/seed.js

### Run the Tests

    npm test

All tests should pass.

### Start The Application

Run `npm start` from the project root folder to start the REST API.

## API Documentation: Endpoints

    POST    /api/v1/movies
    GET     /api/v1/movies
    GET     /api/v1/movies/{id}
    PUT     /api/v1/movies/{id}
    DELETE  /api/v1/movies/{id}

    POST    /api/v1/genres
    GET     /api/v1/genres
    GET     /api/v1/genres/{id}
    PUT     /api/v1/genres/{id}
    DELETE  /api/v1/genres/{id}

    POST    /api/v1/users
    GET     /api/v1/users
    GET     /api/v1/users/{id}
    PUT     /api/v1/users/{id}
    DELETE  /api/v1/users/{id}
    GET     /api/v1/users/me                get current user's details
    PUT     /api/v1/users/me
    DELETE  /api/v1/users/me
    GET     /api/v1/users/me/bookmarks
    POST    /api/v1/users/me/bookmarks      create a bookmark
    DELETE  /api/v1/users/me/bookmarks/{id}

    POST    /api/v1/auth                    login / create JSON web token

    POST    /api/v1/reviews
    GET     /api/v1/reviews
    GET     /api/v1/reviews/{id}
    PUT     /api/v1/reviews/{id}
    DELETE  /api/v1/reviews/{id}

    POST    /api/v1/threads
    GET     /api/v1/threads
    GET     /api/v1/threads/{id}
    PUT     /api/v1/threads/{id}
    DELETE  /api/v1/threads/{id}
    POST    /api/v1/threads/{id}/posts
    GET     /api/v1/threads/{id}/posts
    GET     /api/v1/threads/{id}/posts/{id}
    PUT     /api/v1/threads/{id}/posts/{id}
    DELETE  /api/v1/threads/{id}/posts/{id}

    POST    /api/v1/customers
    GET     /api/v1/customers
    GET     /api/v1/customers/{id}
    PUT     /api/v1/customers/{id}
    DELETE  /api/v1/customers/{id}

    POST    /api/v1/rentals                 rent a movie
    GET     /api/v1/rentals
    GET     /api/v1/rentals/{id}

    POST    /api/v1/returns                 return a rental


## Headers
On login or registration a json webtoken is sent to the client as a value of
the header `x-auth-token`. This header and token value has to be sent with
future api calls to authorize usage of some endpoints.
