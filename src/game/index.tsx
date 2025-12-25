import { DataConnection, Peer } from "peerjs";


export default function Game() {
    const queryString = window.location.search; 
    const params = new URLSearchParams(queryString);
    const from = params.get('from') || "";
    console.log("from", from)
    const peer = new Peer(`peer-${from}`);
    const to = params.get('to') || "";
    console.log("to", to)

    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
    });

    peer.on("connection", (conn: DataConnection) => {
        conn.on("data", (data) => {
            console.log(data);
        });
        conn.on("open", () => {
            conn.send("hello!");
        });
    });

    function startGame() {
        console.log("startGame");

        const conn = peer.connect(`peer-${to}`);

        conn.on("open", () => {
            conn.send("hi!");
        });

        conn.on("error", () => {
            console.log("error");
        });
    }

    return (
        <p>
            <button onClick={startGame}>startGame</button>
        </p>
    );
}
