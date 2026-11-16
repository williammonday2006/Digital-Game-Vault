export const RAW_GAMES = [
  { id: 1, title: "Outer Wilds", genre: "Puzzle", favorite: true },
  { id: 2, title: "UNDERTALE", genre: "RPG", favorite: true },
  { id: 3, title: "Elite Dangerous", genre: "MMO", favorite: false },
  { id: 4, title: "CONTROL", genre: "Action-Adventure", favorite: true },
  { id: 5, title: "The Witness", genre: "Puzzle", favorite: false },
  { id: 6, title: "Minecraft", genre: "Sandbox", favorite: true }
];

export function getFavoriteGames(games) {
  return games.filter(game => game.favorite);
}

export function getGameTitles(games) {
  return games.map(game => game.title);
}
