const books = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    authorName: "Patrick Bet-David and Greg Dinkin",
    releaseYear: 2020,
  },
  { title: "Atomic Habits", authorName: "James Clear", releaseYear: 2018 },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
