/*
 * Seed Data for MongoDB.
 */

const mongoose = require("mongoose");
const config = require('../config');
const { Genre } = require("../src/models/genre");
const { Movie } = require("../src/models/movie");

const data = [
  {
    name: "Comedy",
    movies: [
      {
        title: "Kiss Kiss Bang Bang",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2005,
        numberInStock: 5,
        dailyRentalRate: 2
      },
      {
        title: "The Hangover",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2009,
        numberInStock: 10,
        dailyRentalRate: 2
      },
      {
        title: "Oh Brother, Where Art Thou?",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2000,
        numberInStock: 15,
        dailyRentalRate: 2
      }
    ]
  },
  {
    name: "Action",
    movies: [
      {
        title: "Die Hard",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 1988,
        numberInStock: 5,
        dailyRentalRate: 2
      },
      {
        title: "Terminator",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 1984,

        numberInStock: 10,
        dailyRentalRate: 2
      },
    ]
  },
  {
    name: "Romance",
    movies: [
      {
        title: "Pride & Prejudice",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2005,
        numberInStock: 5,
        dailyRentalRate: 2
      },
    ]
  },
  {
    name: "Thriller",
    movies: [
      {
        title: "The Sixth Sense",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 1999,
        numberInStock: 5,
        dailyRentalRate: 2
      },
      {
        title: "Gone Girl",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2014,
        numberInStock: 10,
        dailyRentalRate: 2
      },
      {
        title: "The Others",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY268_CR0,0,182,268_AL_.jpg",
        year: 2001,
        numberInStock: 15,
        dailyRentalRate: 2
      }
    ]
  },
  {
    name: "Sci-Fi",
    movies: [
      {
        title: "Blade Runner",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 1982,
        numberInStock: 12,
        dailyRentalRate: 2
      },
      {
        title: "Blade Runner 2049",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        year: 2017,
        numberInStock: 13,
        dailyRentalRate: 3
      }

    ]
  }
];

async function seed() {
  if (!config.DATABASE) {
    throw new Error('DATABASE_API must be set!');
  }

  await mongoose.connect(config.DATABASE);

  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map(movie => ({
      ...movie,
      genre: { _id: genreId, name: genre.name }
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.log("Done!");
}

seed();
