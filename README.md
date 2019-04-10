# Movie Rental Service API
The Video Rental Client Software implementing this api are expected to be run
locally in a video store outlet. Users are expected to be clerks.

## Installation

The environment variable `denki_jwtPrivateKey` has to be set to a secure key.
`denki_mongoDb` has to be set to the ip address of the database server.

    Examples:
    export denki_jwtPrivateKey=du3hf94j$jd0#jsf.s
    export denki_mongoDb=localhost

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
