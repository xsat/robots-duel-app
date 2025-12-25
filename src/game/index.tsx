export default function Game() {
    function startGame() {
        alert("Start")
    }

    return (
        <p>
            <button onClick={startGame}>
                Start Game
            </button>
        </p>
    );
}