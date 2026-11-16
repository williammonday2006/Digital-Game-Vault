const RAW_GAMES = [
  { id: 1, title: "Outer Wilds", genre: "Puzzle", favorite: true },
  { id: 2, title: "UNDERTALE", genre: "RPG", favorite: true },
  { id: 3, title: "Elite Dangerous", genre: "MMO", favorite: false },
  { id: 4, title: "CONTROL", genre: "Action-Adventure", favorite: true },
  { id: 5, title: "The Witness", genre: "Puzzle", favorite: false }
];

function getFavoriteGames(games) {
  return games.filter(game => game.favorite);
}

function getGameTitles(games) {
  return games.map(game => game.title);
}

console.log("Favorite Games:", getFavoriteGames(RAW_GAMES));
console.log("Game Titles:", getGameTitles(RAW_GAMES));
