var movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      plot: "Two imprisoned prisoners find solace in a common bond: the hope of one day being released.",
      yearOfRelease: 1994,
      imdbRating: 9.2,
      genre: ["Crime", "Drama"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      actors: [
        { name: "Tim Robbins", age: 57, dateOfBirth: "16/10/1958" },
        { name: "Morgan Freeman", age: 76, dateOfBirth: "01/06/1937" },
      ],
      producer: { name: "Niki Marvin", age: 55, dateOfBirth: "12/12/1962" },
    },
    {
      id: 2,
      title: "Barfi!",
      plot: "Three young people learn that love can neither be defined nor contained by society's norms of normal and abnormal.",
      yearOfRelease: 2012,
      imdbRating: 8.1,
      genre: ["Comedy", "Drama", "Romance"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
      actors: [
        { name: "Ranbir Kapoor", age: 29, dateOfBirth: "28/09/1982" },
        { name: "Priyanka Chopra", age: 30, dateOfBirth: "18/07/1982" },
      ],
      producer: { name: "Ronnie Screwvala", age: 50, dateOfBirth: "08/09/1962" },
    },
    {
      id: 3,
      title: "The Conjuring",
      plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      yearOfRelease: 2013,
      imdbRating: 7.5,
      genre: ["Horror", "Mystery", "Thriller"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
      actors: [
        { name: "Patrick Wilson", age: 40, dateOfBirth: "03/07/1973" },
        { name: "Vera Farmiga", age: 40, dateOfBirth: "06/08/1973" },
      ],
      producer: { name: "Peter Safran", age: 48, dateOfBirth: "22/11/1965" },
    },
    {
      id: 4,
      title: "Deadpool",
      plot: "A wisecracking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",
      yearOfRelease: 2016,
      imdbRating: 8.0,
      genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
      actors: [
        { name: "Ryan Reynolds", age: 39, dateOfBirth: "23/10/1976" },
        { name: "Morena Baccarin", age: 36, dateOfBirth: "02/06/1979" },
      ],
      producer: { name: "Simon Kinberg", age: 43, dateOfBirth: "02/08/1973" },
    },
    {
      id: 5,
      title: "The Wolverine",
      plot: "Wolverine travels to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conflict that forces him to confront his own demons.",
      yearOfRelease: 2013,
      imdbRating: 6.7,
      genre: ["Action", "Adventure", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/74/The_Wolverine_posterUS.jpg",
      actors: [
        { name: "Hugh Jackman", age: 45, dateOfBirth: "12/10/1968" },
        { name: "Tao Okamoto", age: 28, dateOfBirth: "22/05/1985" },
      ],
      producer: { name: "Hugh Jackman", age: 45, dateOfBirth: "12/10/1968" },
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      plot: "After the devastating events of Avengers: Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      yearOfRelease: 2019,
      imdbRating: 8.4,
      genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      actors: [
        { name: "Robert Downey Jr.", age: 54, dateOfBirth: "04/04/1965" },
        { name: "Chris Evans", age: 38, dateOfBirth: "13/06/1981" },
      ],
      producer: { name: "Kevin Feige", age: 46, dateOfBirth: "02/06/1973" },
    },
    {
      id: 7,
      title: "The Hangover Part II",
      plot: "Two years after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu's wedding. But after a wild night out, they find themselves in another messy situation.",
      yearOfRelease: 2011,
      imdbRating: 6.4,
      genre: ["Comedy"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/9/9d/HangoverPart2MP2011.jpg",
      actors: [
        { name: "Bradley Cooper", age: 36, dateOfBirth: "05/01/1975" },
        { name: "Ed Helms", age: 37, dateOfBirth: "24/01/1974" },
      ],
      producer: { name: "Todd Phillips", age: 41, dateOfBirth: "20/12/1970" },
    },
    {
      id: 8,
      title: "Inception",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      yearOfRelease: 2010,
      imdbRating: 8.8,
      genre: ["Action", "Adventure", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      actors: [
        { name: "Leonardo DiCaprio", age: 36, dateOfBirth: "11/11/1974" },
        { name: "Joseph Gordon-Levitt", age: 29, dateOfBirth: "17/02/1981" },
      ],
      producer: { name: "Christopher Nolan", age: 40, dateOfBirth: "30/07/1970" },
    },
    {
      id: 9,
      title: "Iron Man",
      plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      yearOfRelease: 2008,
      imdbRating: 7.9,
      genre: ["Action", "Adventure", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
      actors: [
        { name: "Robert Downey Jr.", age: 43, dateOfBirth: "04/04/1965" },
        { name: "Gwyneth Paltrow", age: 36, dateOfBirth: "27/09/1972" },
      ],
      producer: { name: "Kevin Feige", age: 45, dateOfBirth: "02/06/1973" },
    },
    {
      id: 10,
      title: "My Name Is Khan",
      plot: "An Indian Muslim man with Asperger's syndrome takes a challenge to speak to the President seriously and embarks on a cross-country journey.",
      yearOfRelease: 2010,
      imdbRating: 8.0,
      genre: ["Drama", "Romance"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/5/5d/My_Name_Is_Khan_film_poster.jpg",
      actors: [
        { name: "Shah Rukh Khan", age: 44, dateOfBirth: "02/11/1965" },
        { name: "Kajol", age: 35, dateOfBirth: "05/08/1974" },
      ],
      producer: { name: "Karan Johar", age: 38, dateOfBirth: "25/05/1972" },
    },
    {
      id: 11,
      title: "Rockstar",
      plot: "Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer.",
      yearOfRelease: 2011,
      imdbRating: 7.7,
      genre: ["Drama", "Music", "Romance"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/6/68/Rockstar-Movie-Poster.jpg",
      actors: [
        { name: "Ranbir Kapoor", age: 29, dateOfBirth: "28/09/1982" },
        { name: "Nargis Fakhri", age: 32, dateOfBirth: "20/10/1979" },
      ],
      producer: { name: "Shree Ashtavinayak", age: 43, dateOfBirth: "12/06/1969" },
    },
    {
      id: 12,
      title: "Shutter Island",
      plot: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      yearOfRelease: 2010,
      imdbRating: 8.2,
      genre: ["Mystery", "Thriller"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
      actors: [
        { name: "Leonardo DiCaprio", age: 36, dateOfBirth: "11/11/1974" },
        { name: "Mark Ruffalo", age: 43, dateOfBirth: "22/11/1967" },
      ],
      producer: { name: "Martin Scorsese", age: 67, dateOfBirth: "17/11/1942" },
    },
    {
      id: 13,
      title: "The Dark Knight",
      plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      yearOfRelease: 2008,
      imdbRating: 9.0,
      genre: ["Action", "Crime", "Drama", "Sci-Fi"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      actors: [
        { name: "Christian Bale", age: 34, dateOfBirth: "30/01/1974" },
        { name: "Heath Ledger", age: 28, dateOfBirth: "04/04/1979" },
      ],
      producer: { name: "Christopher Nolan", age: 38, dateOfBirth: "30/07/1970" },
    },
    {
      id: 14,
      title: "Titanic",
      plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      yearOfRelease: 1997,
      imdbRating: 7.9,
      genre: ["Drama", "Romance"],
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      actors: [
        { name: "Leonardo DiCaprio", age: 23, dateOfBirth: "11/11/1974" },
        { name: "Kate Winslet", age: 22, dateOfBirth: "05/10/1975" },
      ],
      producer: { name: "James Cameron", age: 43, dateOfBirth: "16/08/1954" },
    },
  ];

  export default movies;