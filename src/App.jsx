import GameItem from "./GameItem";
import "./App.css";

function App() {
    const games = [
        { id: 1, title: "Outer Wilds", genre: "Puzzle" },
        { id: 2, title: "UNDERTALE", genre: "RPG" },
        { id: 3, title: "Elite Dangerous", genre: "MMO" },
        { id: 4, title: "CONTROL", genre: "Action-Adventure" },
        { id: 5, title: "The Witness", genre: "Puzzle" }
    ];

    return (
        <div className="app">
            <h1>My Digital Game Vault</h1>

            <div className="game-list">
                {games.map(game => (
                    <GameItem key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default App;
