import GameItem from "./GameItem";
import { RAW_GAMES, getFavoriteGames } from "../logic";
import "./App.css";

function App() {
    const favoriteGames = getFavoriteGames(RAW_GAMES);

    return (
        <div className="app">
            <h1>My Digital Game Vault</h1>

            <div className="game-list">
                {favoriteGames.map(game => (
                    <GameItem key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default App;
