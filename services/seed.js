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
        tagline: "SeX. MurdEr. MyStery. Welcome to the party.",
        description: "A petty thief posing as an actor is brought to Los Angeles for an unlikely audition and finds himself in the middle of a murder investigation along with his high school dream girl and a detective who's been training him for his upcoming role...",
        rating: 7.2,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_UX182_CR0,0,182,268_AL_.jpg",
        posterPath: "/5Lif1qGiyaF8OqG9lR3eqzeEC3S.jpg",
        backdropPath: "/wGoyTXBDWHh2V7Jft0R9A0HdKHA.jpg",
        imdbId: "tt0373469",
        themoviedbId: "",
        releaseDate: "2005-09-05",
        numberInStock: 5,
        dailyRentalRate: 2,
      },
      {
        title: "The Hangover",
        tagline: "Some guys just can't handle Vegas.",
        description: "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug – who's supposed to be tying the knot. Launching a frantic search for Doug, the trio perseveres through a nasty hangover to try to make it to the church on time.",
        rating: 7.3,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        posterPath: "/aMmNLuyXvdBih1R5RRHtdtNaS6N.jpg",
        backdropPath: "/xxKd56iFbMeRQARUosTGgxKxrnF.jpg",
        imdbId: "tt1119646",
        themoviedbId: "",
        releaseDate: "2009-06-02",
        numberInStock: 10,
        dailyRentalRate: 2
      },
      {
        backdropPath: "/wGxK2uFowRXdyKcv8Gni7snK3yu.jpg",
        themoviedbId: "134",
        imdbId: "tt0190590",
        description: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.",
        posterPath: "/eIqSzq6j3yuxNmifiUOh6iTpG9N.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "2000-08-30",
        rating: 7.3,
        tagline: "They have a plan...but not a clue.",
        title: "Oh Brother, Where Art Thou?",
        numberInStock: 15,
        dailyRentalRate: 2
      }
    ]
  },
  {
    name: "Action",
    movies: [
      {
        backdropPath: "/6yFoLNQgFdVbA8TZMdfgVpszOla.jpg",
        themoviedbId: "218",
        imdbId: "tt0088247",
        description: "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the \"Terminator\" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
        posterPath: "/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "1984-10-26",
        rating: 7.5,
        tagline: "Your future is in his hands.",
        title: "Terminator",
        numberInStock: 10,
        dailyRentalRate: 2
      },
    ]
  },
  {
    name: "Romance",
    movies: [
      {
        backdropPath: "/jusbnq1mqU80jW7xjTrAnN8lNGO.jpg",
        themoviedbId: "4348",
        imdbId: "tt0414387",
        description: "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
        posterPath: "/dAC0hkYmz5ZOCHURZCyj9isPMPd.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "2005-09-16",
        rating: 7.9,
        tagline: "A romance ahead of its time.",
        title: "Pride & Prejudice",
        numberInStock: 5,
        dailyRentalRate: 2
      },
    ]
  },
  {
    name: "Thriller",
    movies: [
      {
        backdropPath: "/1X6F9OvfaWl6AGcCdqYl8icxG9z.jpg",
        themoviedbId: "745",
        imdbId: "tt0167404",
        description: "A psychological thriller about an eight year old boy named Cole Sear who believes he can see into the world of the dead. A child psychologist named Malcolm Crowe comes to Cole to help him deal with his problem, learning that he really can see the ghosts of dead people.",
        posterPath: "/imps263dHNe3SuoaAJORZyNTdDT.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMWM4NTFhYjctNzUyNi00NGMwLTk3NTYtMDIyNTZmMzRlYmQyXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "1999-08-06",
        rating: 7.9,
        tagline: "Not every gift is a blessing.",
        title: "The Sixth Sense",
        numberInStock: 5,
        dailyRentalRate: 2
      },
      {
        backdropPath: "/8ZNGBfGoN3uI5Akj5vEUDMxvmGO.jpg",
        themoviedbId: "210577",
        imdbId: "tt2267998",
        description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
        posterPath: "/gdiLTof3rbPDAmPaCf4g6op46bj.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "2014-10-01",
        rating: 7.9,
        tagline: "You don't know what you've got 'til it's...",
        title: "Gone Girl",
        numberInStock: 10,
        dailyRentalRate: 2
      },
      {
        backdropPath: "/sLZULNJbQ4ZlomXzFIKKzqr4dte.jpg",
        themoviedbId: "1933",
        imdbId: "tt0230600",
        description: "Grace is a religious woman who lives in an old house kept dark because her two children, Anne and Nicholas, have a rare sensitivity to light. When the family begins to suspect the house is haunted, Grace fights to protect her children at any cost in the face of strange events and disturbing visions.",
        posterPath: "/k9GpVK2dyMMzjciQiMdoaL1WUlS.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY268_CR0,0,182,268_AL_.jpg",
        releaseDate: "2001-08-02",
        rating: 7.6,
        tagline: "Sooner or later she'll see them, then everything will be different.",
        title: "The Others",
        numberInStock: 15,
        dailyRentalRate: 2
      }
    ]
  },
  {
    name: "Sci-Fi",
    movies: [
      {
        backdropPath: "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
        themoviedbId: "78",
        imdbId: "tt0083658",
        description: "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        posterPath: "/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "1982-06-25",
        rating: 7.9,
        tagline: "Man has made his match... now it's his problem.",
        title: "Blade Runner",
        numberInStock: 12,
        dailyRentalRate: 2
      },
      {
        backdropPath: "/8QXGNP0Vb4nsYKub59XpAhiUSQN.jpg",
        themoviedbId: "335984",
        imdbId: "tt1856101",
        description: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        posterPath: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        releaseDate: "2017-10-04",
        rating: 7.9,
        tagline: "The key to the future is finally unearthed.",
        title: "Blade Runner 2049",
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
