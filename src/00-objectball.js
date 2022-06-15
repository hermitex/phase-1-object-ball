const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 1,
        },
        "Brook Lopez": {
          number: 1,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

const [homePlayers, awayPlayers] = [
  gameObject().home.players,
  gameObject().away.players,
];

const players = { ...homePlayers, ...awayPlayers };
const [homeTeam, awayTeam] = [gameObject().home, gameObject().away];

const [home, away] = [homeTeam.teamName, awayTeam.teamName];

const colors = {
  [homeTeam.teamName]: homeTeam.colors,
  [awayTeam.teamName]: awayTeam.colors,
};

//returns the points scored by the player
//whose name has been provided
const numPointsScored = (playerName) => players[playerName].points;

// console.log(numPointsScored("Jeff Adrien"));

//returns the shoe size of the player
//whose name has been provided
const shoeSize = (playerName) => players[playerName].shoe;
// console.log(shoeSize("Jeff Adrien"));

//returns the colors of the team
//whose name has been provided
const teamColors = (teamName) => colors[teamName];

// console.log(teamColors("Charlotte Hornets"));

//returns an array of teams
const teamNames = () => [homeTeam.teamName, awayTeam.teamName];

// console.log(teamNames());

//returns an array of jersey numbers
const playerNumbers = (teamName) => {
  let jerseyNumbersArray = [];
  if (teamName === home) {
    for (const player in homePlayers) {
      jerseyNumbersArray.push(players[player].number);
    }
  } else {
    for (const player in awayPlayers) {
      jerseyNumbersArray.push(players[player].number);
    }
  }

  return jerseyNumbersArray;
};

// console.log(playerNumbers("Charlotte Hornets"));

//returns the player statistics object of the player
//whose name has been provided
const playerStats = (playerName) => players[playerName];

// console.log(playerStats("Brendan Haywood"));

//returns the number of rebounds associated with
//the player that has the largest shoe size
const bigShoeRebounds = () => {
  let rebounds = 0;
  let largestShoeSize = 0;

  for (const player in players) {
    if (players[player].shoe > largestShoeSize) {
      largestShoeSize = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }

  return rebounds;
};

// console.log(bigShoeRebounds());

//returns the player with most points
const mostPointsScored = () => {
  let playerWithHighestPoints = {};
  let highestPoints = 0;

  for (const player in players) {
    if (players[player].points > highestPoints) {
      highestPoints = players[player].points;
      playerWithHighestPoints = {};
      playerWithHighestPoints[player] = players[player];
    }
  }

  return playerWithHighestPoints;
};

// console.log(mostPointsScored());

//returns the team with most points
const winningTeam = () => {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  [home, away].forEach((team) => {
    if (team === home) {
      for (const player in homePlayers) {
        homeTeamPoints += homePlayers[player].points;
      }
    } else if (team === away) {
      for (const player in awayPlayers) {
        awayTeamPoints += awayPlayers[player].points;
      }
    }
  });

  return `
  Winning Team: ${homeTeamPoints > awayTeamPoints ? home : away}
  Points: ${homeTeamPoints > awayTeamPoints ? homeTeamPoints : awayTeamPoints}
  `;
};

// console.log(winningTeam());

//returns the player has the longest name
const playerWithLongestName = () => {
  let playerName = "";
  let sizeOfLongestName = 0;
  Object.keys(players).filter((player) => {
    if (player.length > sizeOfLongestName) {
      sizeOfLongestName = player.length;
      playerName = player;
    }
  });

  return playerName;
};

// console.log(playerWithLongestName());

//returns true if the player with the
//longest name had the most steals
const doesLongNameStealATon = () => {
  let mostSteals = 0;
  let playerWithMostSteals = "";

  for (const player in players) {
    if (players[player].steals > mostSteals) {
      mostSteals = players[player].steals;
      playerWithMostSteals = player;
    }
  }

  return playerWithMostSteals === playerWithLongestName();
};

console.log(doesLongNameStealATon());
