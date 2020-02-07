# Movie Rental Service API
The Video Rental Client Software implementing calls to this api are expected to
be run locally in a video store outlet. Users are expected to be employees.

## Todo
- eliminate fawn dependency
- fix readme (copy from web)
- [ ] test new build

## Requirements
This API requires [Node.js](https://nodejs.org/en/) version v11.0.0 or later,
and the [npm packet manager](https://npmjs.com) version 6.9.0 or later.

## Installation
Download and install the above listed requirements.
After node and npm have been installed run `npm install` in the project
directory to download and install all necessary third party dependencies.
Double check the results and consult the `package.json` configuration file to
make sure all dependencies have been installed correctly.

This API uses a [MongoDB](https://www.mongodb.com/download-center/community)
database server. You can download, install and run a MongoDB database locally or
use an online provider. Make sure to set the `video_db` environment
variable to the ip address of the database server.

The environment variable `video_jwtprivatekey` has to be set to a secure key.
The secure key has to be 'long and random' and may use any common alphabetic
characters, numbers, and special symbols. The same recommendations that apply
for ['strong passwords'](https://www.grc.com/passwords.htm) apply for the
json webtoken key.

    export NODE_ENV=production
    export video_jwtPrivateKey=du3hf94j$jd0#jsf.s
    export video_db=mongo+ssdf@asd.com/test?sdf

Run the npm task: `npm start` in the console in the project folder to start the
web app.

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

    POST    /api/rentals
    GET     /api/rentals

    POST    /api/returns

    GET     /api/users/me
    POST    /api/users

    POST    /api/auth


## Authentication & Authorization
Users can not be logged out using the api, as json web tokens are not saved on
the server. The logout feature has to be implemented in the client application
by deleting the webtoken from local storage.

On login or registration a json webtoken is sent to the client as a value of the
header `x-auth-token`. This header and token value has to be sent with future
api calls to authorize usage of some endpoints.

## Data Model
Mongoose validates the persistence model and Joi validates the user input model.
`isGold` property may be used to calculate the rental fee.

