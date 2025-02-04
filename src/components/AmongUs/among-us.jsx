import {Player} from "../Player/player";
import './among-us.css';
import {useState} from "react";
import {Statistics} from "../Statistics/statistics";



export function AmongUs(totalImpostorWeight) {
        /**
         * players list state
         * @property { object } player = {
         *     @property number id
         *     @property string name
         *     @property string role = null | "Impostor" | "Crewmate"
         *     @property Array intervalImpostorWeight
         *     @property number impostorWeight
         *     @property number nbImpostor
         *     @property number nbCrewmate
         *     @property number streakImpostor
         *     @property number streakImpostor
         *     @property number roleDifference
         *     @property number variance
         *     @property string color: string
         *     @property Array roleHistory
         * }
         * */
    const [players, setPlayers] = useState([
        {
            id: 1,
            name:"🎩 SUSSYBAKA 🎩",
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
            name: "🕶️ DFG 🕶️",
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
            color: "#676262",
            roleHistory: []
        },
        {
            id: 3,
            name: "🧀 MisterJDay 🧀",
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
            name: "🦆 Flangle 🦆",
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
            name: "🍷 Clemovitch 🍷",
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
            name: "🧠 Natoo 🧠",
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
            name: "👷 JDG 👷",
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
            name: "🐱 Gom4rt 🐱",
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
            name: "👨‍🍳 Mynthos 👨‍🍳",
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
            name: "🧻 BagheraJones 🧻",
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

        // project's features states
    const [gameStarted, setGameStarted] = useState(false);
    const [count, setCount] = useState(0);
    const [countMulti, setCountMulti] = useState(0);


    /**
     * @description - set player's role to "Crewmate" (player.role)
     *  @param { Object } player - the player whose his role will be changed to "Crewmate"
     *  @returns { void } - this function doesn't return anything
     * */
    function setPlayerToCrewmate(player) {
        if (typeof player === 'object' && player !== null) {
            player.role = 'crewmate';
            player.roleHistory = [...player.roleHistory, 'crewmate'];
        } else {
            console.error("setPlayerToCrewmate called with invalid player:", player);
        }
    }

    /**
     *  @description - set player's role to "Impostor" (player.role)
     *  @param { Object } player - the player whose his role will be changed to "Impostor"
     *  @returns { void } - this function doesn't return anything
     * */
    function setPlayerToImpostor(player) {
        if (typeof player === 'object' && player !== null) {
            player.role = 'impostor';
            player.roleHistory = [...player.roleHistory, 'impostor'];
        } else {
            console.error("setPlayerToImpostor called with invalid player:", player);
        }
    }

        /**
         * @description = updates player's impostor interval (player.intervalImpostorWeight)
         *  @returns { void } - this function doesn't return anything
         * */
    function updateIntervalImpostors() {
        let cumulativeWeight = 0;

        players.forEach(player => {
            let min = cumulativeWeight;
            let max = cumulativeWeight + player.impostorWeight;
            player.intervalImpostorWeight = [min, max];
            cumulativeWeight = max; // Mise à jour du poids total cumulé
        });
    }


        /**
         *  @description = updates streaks players (player.streakImpostor && player.streakCrewmate)
         *  @param { Object } player - the player whose his impostor's and crewmate's streak will be updated
         *  @returns { void } - this function doesn't return anything
         * */
    function updateStreaks(player) {
        if(player.role === 'impostor') {
            player.streakImpostor++;
            player.streakCrewmate = 0;
        } else if(player.role === 'crewmate') {
            player.streakCrewmate++;
            player.streakImpostor = 0;
        }
    }



        /**
         * @description - calculates impostors ratio
         * @returns { number } - this function returns integer
         * */
    function calculateAverageImpostorRatio() {
        let total = 0;
        players.map(player => total += player.ratioImpostor );

        return total / 10;
    }


        /**
         * @description - updates player's crewmate's ratio
         * @param { Object } player - The player for which his crewmate's ratio will be updated
         * @returns { void } - this function doesn't return anything
         */
    function calculateRatioCrewmate(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const total = nbImpostor + nbCrewmate;
        player.ratioCrewmate = total > 0 ? nbCrewmate / total : 0;
    }


    /**
     * @description - updates player's impostor's ratio
     * @param {Object} player - The player for which his impostor's ratio will be updated
     * @returns {void} - this function doesn't return anything
     */
    function calculateRatioImpostor(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const total = nbImpostor + nbCrewmate;
        player.ratioImpostor = total > 0 ? nbImpostor / total : 0;
    }

    /**
     * @description - calculates crewmates ratio
     * @returns { number } - this function returns integer
     * */
    function calculateAverageCrewmateRatio() {
        let total = 0;
        players.map(player => total += player.ratioCrewmate);

        return total / 10;
    }

    


                // FUNCTION CALCULATING GLOBAL PROPERTIES

        /**
         * @description - this function calculates the player's role difference
         * @param { Object } player -
         * @returns {number} - this function returns number
         */
    function calculateRoleDifference(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        player.roleDifference = Math.abs(nbCrewmate - nbImpostor);

        return player.roleDifference;
    }


    /**
     * @description - this function calculates the global imbalance of Players Array state
     * @returns { number } - this function returns number
     */
    function calculateGlobalImbalance() {
        let totalDifference = 0;

        players.forEach(player => {
            const crewmateGames = player.nbCrewmate;
            const impostorGames = player.nbImpostor;

            const difference = Math.abs(crewmateGames - impostorGames);
            totalDifference += difference;
        });

        return totalDifference;
    }


    /**
     * @description - this function calculates the player's role variance
     * @returns { Object } player - the player for whose role variance will be calculated
     * @returns { void } - this function doesn't return anything
     */
    function calculateRoleVariance(player) {
        const nbCrewmate = player.nbCrewmate;
        const nbImpostor = player.nbImpostor;

        const gamesPlayed = nbCrewmate + nbImpostor;
        const average = gamesPlayed / 2;

        player.variance = Math.abs(nbCrewmate - average) + Math.abs(nbImpostor - average);
    }


    /**
     *  @description - this function fills the streak's list to the players role
     * @param { string } role - the player's role
     * @param { Array } streaksList - the streak's list
     * @return null - this function returns nothing
     */
    function addToStreaksList(role = 'impostor' | 'crewmate', streaksList) {
        // eslint-disable-next-line no-unused-expressions
        role === 'impostor' ?
            players.forEach((player, index) => {
                streaksList[index] = player.streakImpostor;
            })
        : role === 'crewmate' ?
                players.forEach((player, index) => {
                    streaksList[index] = player.streakCrewmate;
                })
        : null;
    }


    /**
     *  @description - this function calculates the standard deviation to the players role (if we want to determine
     *      this value for impostors or for crewmates)
     * @param { string } role - the player's role
     * @return { number } - this function returns number corresponding to the role's standard deviation
     */
    function calculateStandardDeviation(role = 'impostor' | 'crewmate') {
        let streaksList = [];
        let length = 0;
        let average = 0;
        let variance = 0;

        if(players.length === 0) {
            return 0;
        } else {
            // eslint-disable-next-line no-unused-expressions
            role === 'impostor' ?
                addToStreaksList("impostor", streaksList) :
            role === 'crewmate' ?
                 addToStreaksList("crewmate", streaksList) : null

            length = streaksList.length;

            if (role === "impostor") {
                average = streaksList.reduce((a, b) => a + b, 0) / length;
                variance = streaksList.reduce((sum, x) => sum + Math.pow(x - average, 2), 0) / length;


                return Math.sqrt(variance);
            } else if (role === "crewmate") {
                average = streaksList.reduce((a, b) => a + b, 0) / length;
                variance = streaksList.reduce((sum, x) => sum + Math.pow(x - average, 2), 0) / length;

                return Math.sqrt(variance);
            } else {
                alert.error("ROLE ERROR : Please enter 'crewmate' or 'impostor' to the function !");

                return 0;
            }
        }
    }



        /**
         *  @description - corresponding to each update weight's updates
         *  @const { Array } levelsImpostor - each updates when player.streakImpostor is updated
         *  @const { Array } levelsCrewmate - each updates when player.streakCrewmate is updated
         * */
    const levelsImpostor = [70, 55, 40, 15, 5, 0];
    const levelsCrewmate = [250, 500, 5000, 10000];

        /**
         * @description - updates the impostor's weight after the role is changed
         * @param { Object } player - the selected player whose his impostor's weight will be changed (by descending or ascending
         * @returns { number } - this function returns integer
         * */
    function setImpostorWeight(player) {
        if (player.streakImpostor > 0) {
            let index = Math.min(player.streakImpostor - 1, levelsImpostor.length - 1);
            player.impostorWeight = levelsImpostor[index] ?? 100; // Sécurité si tableau vide
        } else if (player.streakCrewmate > 0) {
            let index = Math.min(player.streakCrewmate - 1, levelsCrewmate - 1);
            player.impostorWeight = levelsCrewmate[index] ?? 100;
        } else {
            player.impostorWeight = 100;
        }

        updateIntervalImpostors(player);
    }


        /**
         * @description - this function randomized the players array state
         * @returns {Array} - this function returns a randomized players array
         */
    function randomizePlayers(list) {
        return list.map(player => ({
            player, sort: Math.random()
        })
        ).sort((a, b) => a.sort - b.sort
        ).map(({player}) => player);
    }


        /**
         * @description = calculates the value for the next impostor
         * @param totalImpostorWeight = the sum of all player's impostor's weight (integer)
         * @returns { number } - this function returns integer
         * */
    function calculateImpostorsValue(totalImpostorWeight) {
        return Math.random() * totalImpostorWeight;
    }


        /**
         *  @description = determines the player's role for the next game
         *  @param { number } totalImpostorWeight = the sum of all player's impostor's weight (integer)
         *  @returns { state } - the updated player's list
         * */
    function determinePlayerRole(totalImpostorWeight) {
        let randomizedPlayers = randomizePlayers(players);

            // impostors indexes to determine in which player's interval the 1st and 2nd impostor's values will be
        let firstImpostorIndex = -1;
        let secondImpostorIndex = -1;

            /**
             * the 1st and 2nd impostor's value && the 1st impostor's value calculating with calculateImpostorsValue()
             * the value corresponds to a weight
             * */
        const firstImpostorValue = calculateImpostorsValue(totalImpostorWeight);
        let secondImpostorValue;

            // determines in which player's weight's interval the 1st impostor's value is
            randomizedPlayers.forEach((player, index) => {
            const [min, max] = player.intervalImpostorWeight;
            if (firstImpostorValue >= min && firstImpostorValue <= max) {
                firstImpostorIndex = index;
            }
        });

            // determines in which player's weight's interval the 2nd impostor's value is by :
        while (secondImpostorIndex === -1 || secondImpostorIndex === firstImpostorIndex) {
                // calculating 2nd impostor's value with calculateImpostorsValue()
            secondImpostorValue = calculateImpostorsValue(totalImpostorWeight);

            /**
             * checking that 2nd impostor's value isn't in the same weight's interval as the 1st value
             * because it's in the same interval, we will have only one impostor,
             * but it's not what we want in Among Us
             */
            // eslint-disable-next-line no-loop-func
            randomizedPlayers.forEach((player, index) => {
                const [min, max] = player.intervalImpostorWeight;
                if (
                    index !== firstImpostorIndex &&
                    secondImpostorValue >= min &&
                    secondImpostorValue <= max
                )
                    secondImpostorIndex = index;
            });
        }


            /**
             * it's a 2nd security checking for the 1st and 2nd impostor's value and weight's interval
             */
        while (firstImpostorIndex === secondImpostorIndex) {
            const firstImpostorValue = calculateImpostorsValue(totalImpostorWeight);
            const secondImpostorValue = calculateImpostorsValue(totalImpostorWeight);

            // eslint-disable-next-line no-loop-func
            randomizedPlayers.forEach((player, index) => {
                if (
                    firstImpostorIndex === -1 &&
                    firstImpostorValue >= player.intervalImpostorWeight[0] &&
                    firstImpostorValue <= player.intervalImpostorWeight[1]
                ) {
                    firstImpostorIndex = index;
                } else if (
                    secondImpostorIndex === -1 &&
                    secondImpostorValue >= player.intervalImpostorWeight[0] &&
                    secondImpostorValue <= player.intervalImpostorWeight[1]
                ) {
                    secondImpostorIndex = index;
                }
            });
        }

            /**
             * after all these checkings, we change player's according to their weight interval
             * and 1st / 2nd impostor's values
             */
            randomizedPlayers = randomizedPlayers.map((player, index) => {
            let updatedPlayer = { ...player };

            if(index === firstImpostorIndex || index === secondImpostorIndex)
                setPlayerToImpostor(updatedPlayer);
            else
                setPlayerToCrewmate(updatedPlayer);

            updateValues(updatedPlayer);
            updateStreaks(updatedPlayer);

            setImpostorWeight(updatedPlayer);

            return updatedPlayer;
        });

        //randomizedPlayers = randomizePlayers(randomizedPlayers);

        let newPlayers = players.map((player, index) => {
            return { ...player, ...randomizedPlayers[index]};
        });

        newPlayers = newPlayers.sort((a, b) => a.id - b.id);

        setPlayers(newPlayers);

        // Vérification et log des imposteurs
        const impostorsSelected = newPlayers.filter(p => p.role === "impostor").length;
        console.log(`Impostor's number : ${impostorsSelected}`);
        if (impostorsSelected !== 2) {
            console.error("❌ ERROR : Bad impostors number !");
        }

        return newPlayers;
    }

        /**
         * @description - updates the player's values
         * @param { Object } player - the player whose his values will be updated
         */
    function updateValues(player) {
        let updatedPlayer = player;


        if(updatedPlayer.role === 'impostor') {
            updatedPlayer.nbImpostor++;
            setImpostorWeight(updatedPlayer);
        } else if(updatedPlayer.role === 'crewmate') {
            updatedPlayer.nbCrewmate++;
        }

        calculateRatioCrewmate(updatedPlayer);
        calculateRatioImpostor(updatedPlayer);
        calculateRoleDifference(updatedPlayer);
        calculateRoleVariance(updatedPlayer);
    }


    /**
     * @description - this function runs only one new game
     * @returns { void } - this function doesn't return anything
     */
    function runNewGame() {
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
        // eslint-disable-next-line no-unused-expressions
        isFilteredByRole ? filterPlayersByRole() : null;
    }


        /**
         *  @description - this function reset games counter and all player's properties
         *  @returns { void } - this function doesn't return anything
         */
    function resetGame() {
        setCount(0);
        setCountMulti(0);
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

        /**
         * @description - this function returns the impostor's number in Players
         * @returns { number } - this function returns a number
         */
    function controlImpostorNumber() {
        return players.filter(player => player.role === 'impostor').length;
    }


        /**
         * @description - determines player's role for simulating multiple runs
         * @param { number } totalImpostorWeight = the sum of all player's impostor's weight (integer)
         * @returns { Array } - this function returns an Array for the players state
         */
    function determineRoleForMultipleRun(totalImpostorWeight) {
            // 1st players randomizing
        let randomizedPlayers = randomizePlayers(players);

        // impostors indexes to determine in which player's interval the 1st and 2nd impostor's values will be
        let firstImpostorIndex = -1;
        let secondImpostorIndex = -1;

        /**
         * the 1st and 2nd impostor's value && the 1st impostor's value calculating with calculateImpostorsValue()
         * the value corresponds to a weight
         * */
        const firstImpostorValue = calculateImpostorsValue(totalImpostorWeight);
        let secondImpostorValue;

        // determines in which player's weight's interval the 1st impostor's value is
        randomizedPlayers.forEach((player, index) => {
            const [min, max] = player.intervalImpostorWeight;
            if (firstImpostorValue >= min && firstImpostorValue <= max) {
                firstImpostorIndex = index;
            }
        });


        // determines in which player's weight's interval the 2nd impostor's value is by :
        while (secondImpostorIndex === -1 || secondImpostorIndex === firstImpostorIndex) {
            // calculating 2nd impostor's value with calculateImpostorsValue()
            secondImpostorValue = calculateImpostorsValue(totalImpostorWeight);

            /**
             * checking that 2nd impostor's value isn't in the same weight's interval as the 1st value
             * because it's in the same interval, we will have only one impostor,
             * but it's not what we want in Among Us
             */
            // eslint-disable-next-line no-loop-func
            randomizedPlayers.forEach((player, index) => {
                const [min, max] = player.intervalImpostorWeight;
                if (
                    index !== firstImpostorIndex &&
                    secondImpostorValue >= min &&
                    secondImpostorValue <= max
                ) {
                    secondImpostorIndex = index;
                }
            });
        }


        /**
         * it's a 2nd security checking for the 1st and 2nd impostor's value and weight's interval
         */
        while (firstImpostorIndex === secondImpostorIndex) {
            const firstImpostorValue = calculateImpostorsValue(totalImpostorWeight);
            const secondImpostorValue = calculateImpostorsValue(totalImpostorWeight);

            // eslint-disable-next-line no-loop-func
            randomizedPlayers.forEach((player, index) => {
                if (
                    firstImpostorIndex === -1 &&
                    firstImpostorValue >= player.intervalImpostorWeight[0] &&
                    firstImpostorValue <= player.intervalImpostorWeight[1]
                ) {
                    firstImpostorIndex = index;
                } else if (
                    secondImpostorIndex === -1 &&
                    secondImpostorValue >= player.intervalImpostorWeight[0] &&
                    secondImpostorValue <= player.intervalImpostorWeight[1]
                ) {
                    secondImpostorIndex = index;
                }
            });
        }

            randomizedPlayers = randomizedPlayers.map((player, index) => {
            if (index === firstImpostorIndex || index === secondImpostorIndex) {
                setPlayerToImpostor(player);
            } else {
                setPlayerToCrewmate(player);
            }

            updateValues(player);
            updateStreaks(player);
            setImpostorWeight(player);

            return player;
        });

            // 2nd players randomizing
        //randomizedPlayers = randomizePlayers(randomizedPlayers);

        /**
         * after all these checkings, we change player's according to their weight interval
         * and 1st / 2nd impostor's values
         */
        let newPlayers = players.map((player, index) => {
            return { ...player, ...randomizedPlayers[index] }
        });

        newPlayers = newPlayers.sort((a, b) => a.id - b.id);

        setPlayers(newPlayers);

        // last impostor's number checking
        console.log("Impostor's number after many runs:", controlImpostorNumber());
        if (controlImpostorNumber() !== 2) {
            console.error("Error ! The impostor's number is incorrect !");
        }

        return newPlayers;
    }


    /**
     * @description - this function run game's simulation
     * @returns { state } players - this function returns the updated players state
     */
    function runGameSimulation() {
        if (!Array.isArray(players) || players.length === 0) {
            console.error("Players array is invalid or empty.");
            return;
        }

        const totalImpostorWeight = players.reduce((acc, player) => acc + player.impostorWeight, 0);
        const newPlayers = determineRoleForMultipleRun(totalImpostorWeight, players);

        setPlayers(newPlayers);
        cancelFilter();

        return players;
    }

    /**
     * @description - this function multiple games
     * @param { number } nbGames - the number of game runs
     */
    function runMultipleGames(nbGames) {
        let newPlayers = [...players];

        for(let currentGame = 0; currentGame < nbGames; currentGame++) {
            newPlayers = runGameSimulation(newPlayers);
        }

        setPlayers(newPlayers);

        setGameStarted(true);
        setCountMulti(countMulti + nbGames);
        // eslint-disable-next-line no-unused-expressions
        isFilteredByRole ? filterPlayersByRole() : null;
    }

    /**
     * @const { state } isFilteredByRole - boolean to determine which array between playersFilteredByRole and players will be chosen
     */
    const [isFilteredByRole, setIsFilteredByRole] = useState(false);

    const [playersImpostored, setPlayersImpostored] = useState([]);
    const [playersCrewmated, setPlayersCrewmated] = useState([]);

    /**
     * @description - this function filters players' array is the playersFilteredByRole array to better show who is impostor or crewmate
     * @returns null - this function doesn't return anything
     */
    function filterPlayersByRole() {
        cancelFilter();

        setIsFilteredByRole(true);

        setPlayersImpostored([
            ...players.filter(player => player.role === "impostor"),
        ]);

        setPlayersCrewmated([
            ...players.filter(player => player.role === "crewmate"),
        ]);
    }

    function cancelFilter() {
        setPlayersImpostored([]);
        setPlayersCrewmated([]);
        setIsFilteredByRole(false);
    }


    return (
        <main>

            <section>
                <section className="intro">
                    {gameStarted ? <h2>Game n°{count + countMulti}</h2> : <h2>Run your first game</h2>}
                </section>
            </section>

            <section className="btns">
                <section>
                    <button type="submit" id="run" className="btn"
                            onClick={runNewGame}
                    >
                        🚀 Run game
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(10)}
                    >
                        🔁 Run 10 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(25)}
                    >
                        🔁 Run 25 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(50)}
                    >
                        🔁 Run 50 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(100)}
                    >
                        🔁 Run 100 games
                    </button>
                </section>
                <section>
                    <button type="submit" id="reset" className="btn"
                            onClick={resetGame}
                    >
                        🔄 Reset game
                    </button>
                    {
                        gameStarted ? (<button type="submit" id="fiterByRole" className="btn"
                                               onClick={filterPlayersByRole}
                        >
                            Filter players by role
                        </button>) : null
                    }
                    {
                        isFilteredByRole ? (<button type="submit" id="cancelRole" className="btn"
                        onClick={cancelFilter}
                >
                    Cancel filter
                </button>) : null
                    }
                </section>
            </section>
            <Statistics
                globalImbalance={calculateGlobalImbalance()}
                crewmateRatio={calculateAverageCrewmateRatio()}
                impostorRatio={calculateAverageImpostorRatio()}
                gameStarted={gameStarted}
                impostorsStandardDeviation={calculateStandardDeviation('impostor')}
                crewmateStandardDeviation={calculateStandardDeviation('crewmate')}
            />
            <section className="players-list">
                {(isFilteredByRole ? <h4 className="filter-1" style={{textDecoration: "underline #b61515"}}>Impostor's' list after filtering</h4> : null)}
                {(isFilteredByRole ? playersImpostored : players).map(player => (
                    <Player player={player} gameStarted={gameStarted} key={player.id}/>
                ))}
            </section>
            <section className="players-list" style={{ marginTop: '55px'}}>
                { (isFilteredByRole ? <h4 className="filter-1" style={{textDecoration: "underline #125e22"}}>Crewmate's list after filtering</h4> : null)}
                {(isFilteredByRole ? playersCrewmated : []).map(player => (
                    <Player player={player} gameStarted={gameStarted} key={player.id}/>
                ))}
            </section>


            <section className="btns">
                <section>

                    <button type="submit" id="run" className="btn"
                            onClick={runNewGame}
                    >
                        🚀 Run game
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(10, count + countMulti - 1)}
                    >
                        🔁 Run 10 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(25)}
                    >
                        🔁 Run 25 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(50)}
                    >
                        🔁 Run 50 games
                    </button>
                    <button type="submit" id="multiple" className="btn"
                            onClick={() => runMultipleGames(100)}
                    >
                        🔁 Run 100 games
                    </button>
                </section>
                <section>
                    <button type="submit" id="reset" className="btn"
                            onClick={resetGame}
                    >
                        🔄 Reset game
                    </button>
                    {
                        gameStarted ? (<button type="submit" id="fiterByRole" className="btn"
                                           onClick={filterPlayersByRole}
                        >
                            Filter players by role
                        </button>) : null
                    }
                    {
                        isFilteredByRole ? (<button type="submit" id="cancelRole" className="btn"
                                                    onClick={cancelFilter}
                        >
                            Cancel filter
                        </button>) : null
                    }
                </section>
            </section>
        </main>

    );
}