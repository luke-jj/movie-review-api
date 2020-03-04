/*
 * Seed Data for MongoDB.
 */

const mongoose = require("mongoose");
const config = require('../config');
const { Genre } = require("../src/models/genre");
const { Movie } = require("../src/models/movie");

const data = [
  {
    name: "Documentary",
    movies: [
      {
          "title": "Samsara",
          "tagline": "no tagline",
          "description": "Filmed over nearly five years in twenty-five countries on five continents, and shot on seventy-millimetre film, Samsara transports us to the varied worlds of sacred grounds, disaster zones, industrial complexes, and natural wonders.",
          "posterUrl": "",
          "posterPath": "/48DZ4MewllwsQ3tOsky5GhOcuBT.jpg",
          "backdropPath": "/9zEguaP31VaPhIzEOYWphk4n5ox.jpg",
          "imdbId": "tt0770802",
          "themoviedbId": 89708,
          "releaseDate": "2011-09-16",
          "numberInStock": 8,
          "dailyRentalRate": 1
      },
      {
          "title": "Penguins",
          "tagline": "For Steve, his adventure isn't all black and white.",
          "description": "The story of Steve, an Adélie penguin, on a quest to find a life partner and start a family. When Steve meets with Wuzzo the emperor penguin they become friends. But nothing comes easy in the icy Antarctic.",
          "posterUrl": "",
          "posterPath": "/eMSuKJ2e5VgYFr4SwOTLnnl5L15.jpg",
          "backdropPath": "/9c1rYqUGEgee9xGNGiafiX341cN.jpg",
          "imdbId": "tt8080302",
          "themoviedbId": 508802,
          "releaseDate": "2019-04-17",
          "numberInStock": 4,
          "dailyRentalRate": 6
      },
      {
          "title": "Baraka",
          "tagline": "A world beyond words.",
          "description": "A paralysingly beautiful documentary with a global vision—an odyssey through landscape and time—that attempts to capture the essence of life.",
          "posterUrl": "",
          "posterPath": "/5ZNf6N5rtLYotZKi03QXqJ3FuvD.jpg",
          "backdropPath": "/gwFQYtCNNU7ZjSfICTIoJxabKc9.jpg",
          "imdbId": "tt0103767",
          "themoviedbId": 14002,
          "releaseDate": "1992-09-15",
          "numberInStock": 1,
          "dailyRentalRate": 6
      }
    ]
  },
  {
    name: "Horror",
    movies: [
      {
          "title": "Midsommar",
          "tagline": "Let the festivities begin.",
          "description": "Several friends travel to Sweden to study as anthropologists a summer festival that is held every ninety years in the remote hometown of one of them. What begins as a dream vacation in a place where the sun never sets, gradually turns into a dark nightmare as the mysterious inhabitants invite them to participate in their disturbing festive activities.",
          "posterUrl": "",
          "posterPath": "/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
          "backdropPath": "/g6GtOfXtzDpY73ef7wludoorTti.jpg",
          "imdbId": "tt8772262",
          "themoviedbId": 530385,
          "releaseDate": "2019-07-03",
          "numberInStock": 1,
          "dailyRentalRate": 7
      }
    ]
  },
  {
    name: "Drama",
    movies: [
      {
          "title": "City of God",
          "tagline": "If you run you're dead... if you stay, you're dead again. Period.",
          "description": "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro’s most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé. Buscapé was raised in a very violent environment. Despite the feeling that all odds were against him, he finds out that life can be seen with other eyes...",
          "posterUrl": "",
          "posterPath": "/4YEX7qUfg6kN2tHm84CMt2CEq9n.jpg",
          "backdropPath": "/k4BAPrE5WkNLvpsPsiMfu8W4Zyi.jpg",
          "imdbId": "tt0317248",
          "themoviedbId": 598,
          "releaseDate": "2002-02-05",
          "numberInStock": 6,
          "dailyRentalRate": 9
      },
      {
          "title": "Wind River",
          "tagline": "Nothing is harder to track than the truth.",
          "description": "An FBI agent teams with the town's veteran game tracker to investigate a murder that occurred on a Native American reservation.",
          "posterUrl": "",
          "posterPath": "/pySivdR845Hom4u4T2WNkJxe6Ad.jpg",
          "backdropPath": "/6B8e784decj9vtKuNjbl9Fes2aZ.jpg",
          "imdbId": "tt5362988",
          "themoviedbId": 395834,
          "releaseDate": "2017-08-03",
          "numberInStock": 4,
          "dailyRentalRate": 5
      },
      {
          "title": "The Fountain",
          "tagline": "Death is the road to awe",
          "description": "Spanning over one thousand years, and three parallel stories, The Fountain is a story of love, death, spirituality, and the fragility of our existence in this world.",
          "posterUrl": "",
          "posterPath": "/lGIJvQ8ZQazOHVAA0E34yIy7gxv.jpg",
          "backdropPath": "/krgbGFHNXs9Xt4CYOhERo9hllfM.jpg",
          "imdbId": "tt0414993",
          "themoviedbId": 1381,
          "releaseDate": "2006-09-06",
          "numberInStock": 1,
          "dailyRentalRate": 6
      },
      {
          "title": "The Twilight Samurai",
          "tagline": "no tagline",
          "description": "Seibei Iguchi leads a difficult life as a low ranking samurai at the turn of the nineteenth century. A widower with a meager income, Seibei struggles to take care of his two daughters and senile mother. New prospects seem to open up when the beautiful Tomoe, a childhood friend, comes back into he and his daughters' life, but as the Japanese feudal system unravels, Seibei is still bound by the code of honor of the samurai and by his own sense of social precedence. How can he find a way to do what is best for those he loves?",
          "posterUrl": "",
          "posterPath": "/3cWsPgrwxEpTbJMCRXcWpxWgW11.jpg",
          "backdropPath": "/sHhRLxifxYPmft1yLh8iIO9z00H.jpg",
          "imdbId": "tt0351817",
          "themoviedbId": 12496,
          "releaseDate": "2002-11-02",
          "numberInStock": 9,
          "dailyRentalRate": 3
      },
      {
          "title": "The Handmaiden",
          "tagline": "no tagline",
          "description": "1930s Korea, in the period of Japanese occupation, a young woman is hired as a handmaiden to a Japanese heiress who lives a secluded life on a large countryside estate with her domineering uncle. But, the maid has a secret: she is a pickpocket recruited by a swindler posing as a Japanese count to help him seduce the heiress to elope with him, rob her of her fortune, and lock her up in a madhouse. The plan seems to proceed according to plan until the women discover some unexpected emotions.",
          "posterUrl": "",
          "posterPath": "/cw1BvSDk4wyHHpVStj4t82pAvq7.jpg",
          "backdropPath": "/keQhqxE9i7wNQIM3W5B0iLnjaHW.jpg",
          "imdbId": "tt4016934",
          "themoviedbId": 290098,
          "releaseDate": "2016-06-01",
          "numberInStock": 1,
          "dailyRentalRate": 3
      },
      {
          "title": "Lost in Translation",
          "tagline": "Everyone wants to be found.",
          "description": "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
          "posterUrl": "",
          "posterPath": "/wkSzJs7oMf8MIr9CQVICsvRfwA7.jpg",
          "backdropPath": "/iJP2ogeM5YpZyUOkmCiZ5UXWyBf.jpg",
          "imdbId": "tt0335266",
          "themoviedbId": 153,
          "releaseDate": "2003-08-31",
          "numberInStock": 1,
          "dailyRentalRate": 8
      },
      {
          "title": "Oldboy",
          "tagline": "15 years of imprisonment, five days of vengeance",
          "description": "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
          "posterUrl": "",
          "posterPath": "/hzj9o9cizYFv76rK0C7nXBAQ9lw.jpg",
          "backdropPath": "/cne1AaNoVPHOEUiwcdS7sSo1uJ5.jpg",
          "imdbId": "tt0364569",
          "themoviedbId": 670,
          "releaseDate": "2003-11-21",
          "numberInStock": 7,
          "dailyRentalRate": 3
      },
      {
          "title": "Pan's Labyrinth",
          "tagline": "What happens when make-believe believes it's real?",
          "description": "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks.",
          "posterUrl": "",
          "posterPath": "/t0TDsqbCTgSi0AL7k4baZrOYYhi.jpg",
          "backdropPath": "/4XP5kp70Pw01qpD6Gr0PQwy43Mr.jpg",
          "imdbId": "tt0457430",
          "themoviedbId": 1417,
          "releaseDate": "2006-08-25",
          "numberInStock": 5,
          "dailyRentalRate": 1
      },
      {
          "title": "Léon: The Professional",
          "tagline": "If you want a job done well, hire a professional.",
          "description": "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
          "posterUrl": "",
          "posterPath": "/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg",
          "backdropPath": "/dXQ7HILRK1Tg33RT64JwbQI7Osh.jpg",
          "imdbId": "tt0110413",
          "themoviedbId": 101,
          "releaseDate": "1994-09-14",
          "numberInStock": 4,
          "dailyRentalRate": 6
      },
      {
          "title": "Norwegian Wood",
          "tagline": "no tagline",
          "description": "Set in the 1960s, high school student Toru Watanabe loses his only friend Kizuki after he commits suicide. Toru, now looking for a new life, enters a university in Tokyo. By chance, Toru meets Kizuki's ex-girlfriend Naoko in the university. They grow close because they both share the same loss. As Toru and Naoko grow even closer, Naoko's sense of loss also grows. After Naoko's 20th birthday, she leaves for a sanitarium in Kyoto. Watanabe, devastated by the situation, meets pure-hearted Midori during the spring semester. Midori looks like a small animal that just came into the world ...",
          "posterUrl": "",
          "posterPath": "/cnTbsvghYlN8B3vhhxPOezimOGQ.jpg",
          "backdropPath": "/tG0hfkAnzMRhRKWGet7TUkfQlsJ.jpg",
          "imdbId": "tt1270842",
          "themoviedbId": 57703,
          "releaseDate": "2010-12-11",
          "numberInStock": 6,
          "dailyRentalRate": 1
      },
      {
          "title": "Joker",
          "tagline": "Put on a happy face.",
          "description": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          "posterUrl": "",
          "posterPath": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          "backdropPath": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
          "imdbId": "tt7286456",
          "themoviedbId": 475557,
          "releaseDate": "2019-10-02",
          "numberInStock": 1,
          "dailyRentalRate": 6
      },
      {
          "title": "Babel",
          "tagline": "If You Want to be Understood...Listen",
          "description": "Tragedy strikes a married couple on vacation in the Moroccan desert, touching off an interlocking story involving four different families.",
          "posterUrl": "",
          "posterPath": "/fxneN0EQZwTfAfhTGUvUuIn6PLi.jpg",
          "backdropPath": "/uHx9E9xqSgOBoRvL4shmMNu8Ojc.jpg",
          "imdbId": "tt0449467",
          "themoviedbId": 1164,
          "releaseDate": "2006-09-08",
          "numberInStock": 3,
          "dailyRentalRate": 4
      },
      {
          "title": "Shoplifters",
          "tagline": "no tagline",
          "description": "After one of their shoplifting sessions, Osamu and his son come across a little girl in the freezing cold. At first reluctant to shelter the girl, Osamu’s wife agrees to take care of her after learning of the hardships she faces. Although the family is poor, barely making enough money to survive through petty crime, they seem to live happily together until an unforeseen incident reveals hidden secrets, testing the bonds that unite them.",
          "posterUrl": "",
          "posterPath": "/4nfRUOv3LX5zLn98WS1WqVBk9E9.jpg",
          "backdropPath": "/xOpQ4jIQJ0HSUhVDixZA9yWqVBP.jpg",
          "imdbId": "tt8075192",
          "themoviedbId": 505192,
          "releaseDate": "2018-06-02",
          "numberInStock": 3,
          "dailyRentalRate": 2
      },
      {
          "title": "Enter the Void",
          "tagline": "Sex. Money. Power.",
          "description": "This psychedelic tour of life after death is seen entirely from the point of view of Oscar, a young American drug dealer and addict living in Tokyo with his prostitute sister, Linda. When Oscar is killed by police during a bust gone bad, his spirit journeys from the past -- where he sees his parents before their deaths -- to the present -- where he witnesses his own autopsy -- and then to the future, where he looks out for his sister from beyond the grave.",
          "posterUrl": "",
          "posterPath": "/AvD7oAOit8FZYG1fH2GA5SPLDst.jpg",
          "backdropPath": "/tb6rRzvBuVwGBYCED9VFu31c0XV.jpg",
          "imdbId": "tt1191111",
          "themoviedbId": 34647,
          "releaseDate": "2009-06-17",
          "numberInStock": 1,
          "dailyRentalRate": 7
      }
    ]
  },
  {
    name: "Adventure",
    movies: [
      {
          "title": "The Lord of the Rings: The Fellowship of the Ring",
          "tagline": "One ring to rule them all",
          "description": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
          "posterUrl": "",
          "posterPath": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
          "backdropPath": "/ua5EHfleb44L5hfHPs2BPqRAove.jpg",
          "imdbId": "tt0120737",
          "themoviedbId": 120,
          "releaseDate": "2001-12-18",
          "numberInStock": 9,
          "dailyRentalRate": 10
      },
      {
          "title": "The Fall",
          "tagline": "A little blessing in disguise.",
          "description": "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story about 5 mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality starts to blur as the tale advances.",
          "posterUrl": "",
          "posterPath": "/gUex3Twn97Jp8F27Op1r7OnMTFt.jpg",
          "backdropPath": "/ubddkoDKa4dTayX1GHLf9nDKH4I.jpg",
          "imdbId": "tt0460791",
          "themoviedbId": 14784,
          "releaseDate": "2008-01-03",
          "numberInStock": 9,
          "dailyRentalRate": 3
      },
      {
          "title": "Kingdom of Heaven",
          "tagline": "Be without fear in the face of your enemies. Safeguard the helpless, and do no wrong",
          "description": "After his wife dies, a blacksmith named Balian is thrust into royalty, political intrigue and bloody holy wars during the Crusades.",
          "posterUrl": "",
          "posterPath": "/aB4urkgTxBURJMUkd0kceDD7FUM.jpg",
          "backdropPath": "/dzMGckpN2xAQDLr2Ddr8CZ3WbYF.jpg",
          "imdbId": "tt0320661",
          "themoviedbId": 1495,
          "releaseDate": "2005-05-03",
          "numberInStock": 2,
          "dailyRentalRate": 9
      }
    ]
  },
  {
    name: "Family",
    movies: [
      {
          "title": "Alice in Wonderland",
          "tagline": "You're invited to a very important date",
          "description": "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason – to conquer the horrific Jabberwocky and restore the rightful queen to her throne.",
          "posterUrl": "",
          "posterPath": "/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
          "backdropPath": "/aBCjJWQkEsn3Y3nbx1IOKRLalqa.jpg",
          "imdbId": "tt1014759",
          "themoviedbId": 12155,
          "releaseDate": "2010-03-03",
          "numberInStock": 7,
          "dailyRentalRate": 1
      },
      {
          "title": "WALL·E",
          "tagline": "After 700 years of doing what he was built for, he'll discover what he was meant for.",
          "description": "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
          "posterUrl": "",
          "posterPath": "/9cJETuLMc6R0bTWRA5i7ctY9bxk.jpg",
          "backdropPath": "/2nFyTvssbtJMLC6eyYwwZ88gALD.jpg",
          "imdbId": "tt0910970",
          "themoviedbId": 10681,
          "releaseDate": "2008-06-22",
          "numberInStock": 3,
          "dailyRentalRate": 5
      },
      {
          "title": "Ice Age",
          "tagline": "They came. They thawed. They conquered.",
          "description": "With the impending ice age almost upon them, a mismatched trio of prehistoric critters – Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth – find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
          "posterUrl": "",
          "posterPath": "/zpaQwR0YViPd83bx1e559QyZ35i.jpg",
          "backdropPath": "/oDqbewoFuIEWA7UWurole6MzDGn.jpg",
          "imdbId": "tt0268380",
          "themoviedbId": 425,
          "releaseDate": "2002-03-10",
          "numberInStock": 1,
          "dailyRentalRate": 6
      },
      {
          "title": "Spirited Away",
          "tagline": "no tagline",
          "description": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
          "posterUrl": "",
          "posterPath": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
          "backdropPath": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
          "imdbId": "tt0245429",
          "themoviedbId": 129,
          "releaseDate": "2001-07-20",
          "numberInStock": 2,
          "dailyRentalRate": 4
      }
    ]
  },
  {
    name: "Comedy",
    movies: [
      {
          "title": "Sideways",
          "tagline": "In search of wine. In search of women. In search of themselves.",
          "description": "Two middle-aged men embark on a spiritual journey through Californian wine country. One is an unpublished novelist suffering from depression, and the other is only days away from walking down the aisle.",
          "posterUrl": "",
          "posterPath": "/k8UfdLAP07SDfilmWOHFPv23tu7.jpg",
          "backdropPath": "/viDgWsq06MsCPEz2sglrGRCzG2P.jpg",
          "imdbId": "tt0375063",
          "themoviedbId": 9675,
          "releaseDate": "2004-10-22",
          "numberInStock": 3,
          "dailyRentalRate": 6
      },
      {
          "title": "Juno",
          "tagline": "A comedy about growing up… and the bumps along the way.",
          "description": "Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding her unborn child.",
          "posterUrl": "",
          "posterPath": "/eE64N6PYCSRW2mtQucfK2av5Wk2.jpg",
          "backdropPath": "/xfcb5Cq5pYrGcAxGjFQqKCPVOK3.jpg",
          "imdbId": "tt0467406",
          "themoviedbId": 7326,
          "releaseDate": "2007-12-05",
          "numberInStock": 2,
          "dailyRentalRate": 10
      },
      {
          "title": "Parasite",
          "tagline": "Act like you own the place.",
          "description": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          "posterUrl": "",
          "posterPath": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          "backdropPath": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
          "imdbId": "tt6751668",
          "themoviedbId": 496243,
          "releaseDate": "2019-05-30",
          "numberInStock": 7,
          "dailyRentalRate": 1
      },
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
          "title": "Sin City",
          "tagline": "Walk down the right back alley in Sin City and you can find anything...",
          "description": "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
          "posterUrl": "",
          "posterPath": "/vKJVGOKPyWqp9d2EX5NH1liqRqR.jpg",
          "backdropPath": "/my81Hjt7NpZhaMX9bHi4wVhFy0v.jpg",
          "imdbId": "tt0401792",
          "themoviedbId": 187,
          "releaseDate": "2005-04-01",
          "numberInStock": 6,
          "dailyRentalRate": 8
      },
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
          "title": "(500) Days of Summer",
          "tagline": "This is not a love story. This is a story about love.",
          "description": "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
          "posterUrl": "",
          "posterPath": "/5SjtNPD1bb182vzQccvEUpXHFjN.jpg",
          "backdropPath": "/yYw9cVdRJ4zzwxM2cTDXfT6JI6E.jpg",
          "imdbId": "tt1022603",
          "themoviedbId": 19913,
          "releaseDate": "2009-07-17",
          "numberInStock": 6,
          "dailyRentalRate": 10
      },
      {
          "title": "5 Centimeters per Second",
          "tagline": "At what speed must I live to see you again?",
          "description": "Three moments in Takaki's life: his relationship with Akari and their forced separation; his friendship with Kanae, who is secretly in love with him; the demands and disappointments of adulthood, an unhappy life in a cold city.",
          "posterUrl": "",
          "posterPath": "/wX7RbjclqHoSWd4NGouDisBHq1o.jpg",
          "backdropPath": "/ukxXDeC4qps2U9kxbC99QfwulCj.jpg",
          "imdbId": "tt0983213",
          "themoviedbId": 38142,
          "releaseDate": "2007-03-03",
          "numberInStock": 5,
          "dailyRentalRate": 8
      },
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
          "title": "The Matrix",
          "tagline": "Welcome to the Real World.",
          "description": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
          "posterUrl": "",
          "posterPath": "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
          "backdropPath": "/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
          "imdbId": "tt0133093",
          "themoviedbId": 603,
          "releaseDate": "1999-03-30",
          "numberInStock": 8,
          "dailyRentalRate": 7
      },
      {
          "title": "Sunshine",
          "tagline": "If the sun dies, so do we.",
          "description": "Fifty years into the future, the sun is dying, and Earth is threatened by arctic temperatures. A team of astronauts is sent to revive the Sun — but the mission fails. Seven years later, a new team is sent to finish the mission as mankind’s last hope.",
          "posterUrl": "",
          "posterPath": "/upgi8oTlMthM9sweAyBoXqr8doZ.jpg",
          "backdropPath": "/vise7XoPrUGV9hmdK8Gt3BWGkym.jpg",
          "imdbId": "tt0448134",
          "themoviedbId": 1272,
          "releaseDate": "2007-04-05",
          "numberInStock": 7,
          "dailyRentalRate": 5
      },
      {
          "title": "Inception",
          "tagline": "Your mind is the scene of the crime.",
          "description": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
          "posterUrl": "",
          "posterPath": "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
          "backdropPath": "/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
          "imdbId": "tt1375666",
          "themoviedbId": 27205,
          "releaseDate": "2010-07-15",
          "numberInStock": 8,
          "dailyRentalRate": 6
      },
      {
          "title": "Rogue One: A Star Wars Story",
          "tagline": "A Rebellion Built on Hope",
          "description": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
          "posterUrl": "",
          "posterPath": "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
          "backdropPath": "/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
          "imdbId": "tt3748528",
          "themoviedbId": 330459,
          "releaseDate": "2016-12-14",
          "numberInStock": 8,
          "dailyRentalRate": 9
      },
      {
          "title": "Alien",
          "tagline": "In space no one can hear you scream.",
          "description": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
          "posterUrl": "",
          "posterPath": "/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
          "backdropPath": "/dfNrZ82poQ8blHWJreIv6JZQ9JA.jpg",
          "imdbId": "tt0078748",
          "themoviedbId": 348,
          "releaseDate": "1979-05-25",
          "numberInStock": 4,
          "dailyRentalRate": 10
      },
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
