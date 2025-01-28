import {Player} from "../Player/player";
import './among-us.css';
import {useState} from "react";



export function AmongUs() {
    const [players, setPlayers] = useState([
        {
            id: 1,
            name:"SUSSYBAKA",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [1, 100],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color:"#201d1d",
            roleHistory: []
        },
        {
            id: 2,
            name: "DFG",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [101, 200],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#8e8686",
            roleHistory: []
        },
        {
            id: 3,
            name: "MisterJDay",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [201, 300],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#266121",
            roleHistory: []
        },
        {
            id: 4,
            name: "Flangle",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [301, 400],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#b82f6d",
            roleHistory: []
        },
        {
            id: 5,
            name: "Clemovitch",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [401, 500],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#4a1916",
            roleHistory: []
        },
        {
            id: 6,
            name: "Natoo",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [501, 600],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#af0d33",
            roleHistory: []
        },
        {
            id: 7,
            name: "JDG",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [601, 700],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#aa5b08",
            roleHistory: []
        },
        {
            id: 8,
            name: "Gomart",
            role:  '',
            impostorWeight: 100,
            intervalImpostorWeight: [701, 800],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#bf0707",
            roleHistory: []
        },
        {
            id: 9,
            name: "Mynthos",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [801, 900],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#4f138a",
            roleHistory: []
        },
        {
            id: 10,
            name: "BagheraJones",
            role: '',
            impostorWeight: 100,
            intervalImpostorWeight: [901, 1000],
            nbImpostor: 0,
            nbCrewmate: 0,
            streakImpostor: 0,
            streakCrewmate: 0,
            ratioImpostor: 0,
            ratioCrewmate: 0,
            roleDifference: 0,
            variance: 0,
            color: "#a87315",
            roleHistory: []
        }
    ]);

    const [gameStarted, setGameStarted] = useState(false);
    const [count, setCount] = useState(0);

    function setPlayerToCrewmate(player) {
        if (typeof player === 'object' && player !== null) {
            player.role = 'crewmate';
            player.roleHistory = [...player.roleHistory, 'crewmate'];
        } else {
            console.error("setPlayerToCrewmate called with invalid player:", player);
        }
    }

    function setPlayerToImpostor(player) {
        if (typeof player === 'object' && player !== null) {
            player.role = 'impostor';
            player.roleHistory = [...player.roleHistory, 'impostor'];
        } else {
            console.error("setPlayerToImpostor called with invalid player:", player);
        }
    }

    function updateIntervalImpostors() {
        let minInterval = 1;

        players.forEach(player => {
            let maxInterval = minInterval + player.impostorWeight - 1;
            player.intervalImpostorWeight = [minInterval, maxInterval];
            minInterval = maxInterval + 1;
        });
    }

    function updateStreaks(player) {
        if(player.role === 'impostor') {
            player.streakImpostor++;
            player.streakCrewmate = 0;
        } else if(player.role === 'crewmate') {
            player.streakCrewmate++;
            player.streakImpostor = 0;
        }
    }

    const levelsImpostor = [85, 65, 70, 40, 30, 35, 25, 0];
    const levelsCrewmate = [100, 110, 130, 150, 180, 200];

    function setImpostorWeight(player) {
        if(player.streakImpostor > 0) {
            const index = Math.min(player.streakImpostor - 1, levelsImpostor.length - 1);
            player.impostorWeight = levelsImpostor[index];
        } else if(player.streakCrewmate > 0) {
            const index = Math.min(player.streakCrewmate -1, levelsCrewmate.length - 1);
            player.impostorWeight = levelsCrewmate[index];
        } else {
            player.impostorWeight = 100;
        }

        //updateIntervalImpostors(player);
    }

    function calculateImpostorsValue(totalImpostorWeight) {
        return Math.random() * (totalImpostorWeight - 1) + 1;
    }

    function calculateAverageImpostorRatio() {
        let total = 0;
        players.map(player => total += player.ratioImpostor );

        return total / 10;
    }

    function calculateAverageCrewmateRatio() {
        let total = 0;
        players.map(player => total += player.ratioCrewmate);

        return total / 10;
    }

    function determinePlayerRole(totalImpostorWeight) {
        const firstImpostorValue = calculateImpostorsValue(totalImpostorWeight);
        let secondImpostorValue;

        // Évite que les deux valeurs soient identiques
        do {
            secondImpostorValue = calculateImpostorsValue(totalImpostorWeight);
        } while (secondImpostorValue === firstImpostorValue);

        let impostorsSelected = 0;

        if(!gameStarted)
            players.forEach(player => player.impostorWeight = 100 );


        return players.map(player => {
            const updatedPlayer = { ...player };

            if (
                impostorsSelected < 2 &&
                firstImpostorValue >= player.intervalImpostorWeight[0] &&
                firstImpostorValue <= player.intervalImpostorWeight[1]
            ) {
                setPlayerToImpostor(updatedPlayer);
                impostorsSelected++;
                setImpostorWeight(player);
            } else if (
                impostorsSelected < 2 &&
                secondImpostorValue >= player.intervalImpostorWeight[0] &&
                secondImpostorValue <= player.intervalImpostorWeight[1]
            ) {
                setPlayerToImpostor(updatedPlayer);
                impostorsSelected++;
            } else {
                setPlayerToCrewmate(updatedPlayer);
            }

            updateValues(updatedPlayer);

            updateStreaks(updatedPlayer);
            setImpostorWeight(updatedPlayer);


            return updatedPlayer;
        });
    }

    function updateValues(player) {
        if(player.role === 'impostor') {
            player.nbImpostor++;
            setImpostorWeight(player);
        } else if(player.role === 'crewmate') {
            player.nbCrewmate++;
        }

        calculateRatioCrewmate(player);
        calculateRatioImpostor(player);
        calculateRoleDifference(player);
        calculateRoleVariance(player);
    }

    function calculateRatioCrewmate(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const total = nbImpostor + nbCrewmate;
        player.ratioCrewmate = total > 0 ? nbCrewmate / total : 0;
    }

    function calculateRatioImpostor(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const total = nbImpostor + nbCrewmate;
        player.ratioImpostor = total > 0 ? nbImpostor / total : 0;
    }

    function basicRunGame() {
        if (!Array.isArray(players) || players.length === 0) {
            console.error("Players array is invalid or empty.");
            return;
        }

        const totalImpostorWeight = players.reduce((acc, player) => acc + player.impostorWeight, 0);

        // Met à jour les joueurs
        const updatedPlayers = determinePlayerRole(totalImpostorWeight, players);
        setPlayers(updatedPlayers);

        setCount(count + 1);
        setGameStarted(true);
    }


    function runNewGame() {
        basicRunGame();
    }

    function resetGame() {
        setCount(0);
        setGameStarted(false);

        players.forEach(player => {
                player.ratioImpostor = 0;
                player.nbImpostor = 0;
                player.impostorWeight = 100;
                player.nbCrewmate = 0;
                updateIntervalImpostors(player);
                player.ratioCrewmate = 0;
                player.role = ""
            }
        );
    }

    function calculateRoleDifference(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        player.roleDifference = Math.abs(nbCrewmate - nbImpostor);

        return player.roleDifference;
    }

    function calculateGlobalImbalance(players) {
        let totalDifference = 0;

        players.forEach(player => {
            const crewmateGames = player.nbCrewmate;
            const impostorGames = player.nbImpostor;

            const difference = Math.abs(crewmateGames - impostorGames);
            totalDifference += difference;
        });

        return totalDifference;
    }


    function calculateRoleVariance(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const gamesPlayed = nbCrewmate + nbImpostor;
        const average = gamesPlayed / 2;

        player.variance = Math.abs(nbCrewmate - average) + Math.abs(nbImpostor -average);
    }

    return (
        <main>
            <header>
                <h1>PROJECT "My Little impostor's algorithm"</h1>
            </header>
            <section>
                <section className="intro">
                    {gameStarted ? <h2>Game n°{count}</h2> : <h2>Run the first game</h2>}
                </section>
            </section>

            <section className="btns">
                <button type="submit" id="run" className="btn" onClick={runNewGame}>Run game</button>
                <button type="submit" id="reset" className="btn" onClick={resetGame}>Reset game</button>
            </section>
            <section className="global-stats" style={{opacity: !gameStarted ? 0 : 1}}>
                <h3>Statistics :</h3>
                <p>Global Imbalance : {calculateGlobalImbalance(players)}</p>
                <p>Average ratio crewmates : {(calculateAverageCrewmateRatio() * 100).toFixed(2)} %</p>
                <p>Average ratio impostors : {(calculateAverageImpostorRatio() * 100).toFixed(2)} %</p>
            </section>
            <section className="players-list">
                {players.map(player => (
                    <Player player={player} gameStarted={gameStarted} key={player.id}/>
                ))}
            </section>
            <section className="btns">
                <button type="submit" id="run" className="btn" onClick={runNewGame}>Run game</button>
                <button type="submit" id="reset" className="btn" onClick={resetGame}>Reset game</button>
            </section>
        </main>

);
}