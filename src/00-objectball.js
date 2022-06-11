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

const [homeTeam, awayTeam] = [gameObject().home, gameObject().away];

//returns the points scored by the player
//whose name has been provided
const numPointsScored = (playerName) => {
  if (Object.keys(homePlayers).includes(playerName)) {
    return homePlayers[playerName].points;
  } else if (Object.keys(awayPlayers).includes(playerName)) {
    return awayPlayers[playerName].points;
  } else {
    return [];
  }
};

// console.log(numPointsScored(""));

//returns the shoe size of the player
//whose name has been provided
const shoeSize = (playerName) => {
  if (Object.keys(homePlayers).includes(playerName)) {
    return homePlayers[playerName].shoe;
  } else if (Object.keys(awayPlayers).includes(playerName)) {
    return awayPlayers[playerName].shoe;
  } else {
    return [];
  }
};

// console.log(shoeSize("Alanss"));

//returns the colors of the team
//whose name has been provided
const teamColors = (teamName) => {
  if (homeTeam.teamName === teamName) {
    return homeTeam.colors;
  } else if (awayTeam.teamName === teamName) {
    return awayTeam.colors;
  } else {
    return [];
  }
};

// console.log(teamColors(""));

//returns an array of teams
const teamNames = (gameObject) => {
  let teamNamesArray = [];
  for (const key in gameObject) {
    teamNamesArray.push(gameObject[key].teamName);
  }
  return teamNamesArray;
};

// console.log(teamNames(gameObject()));

//returns an array of jersey numbers
const playerNumbers = (name) => {
  const gameObj = gameObject();
  let jerseyNumbersArray = [];
  for (const key in gameObj) {
    if (gameObj[key].teamName === name) {
      for (const player in gameObj[key].players) {
        jerseyNumbersArray.push(gameObj[key].players[player].number);
      }
    }
  }
  return jerseyNumbersArray;
};

// console.log(playerNumbers('Brooklyn Nets'));

//returns the player statistics object of the player
//whose name has been provided
const playerStats = (playerName) => {
  const gameObj = gameObject();
  let playerStatsObj = {};
  for (const key in gameObj) {
    for (const player in gameObj[key].players) {
      if (player === playerName) {
        playerStatsObj = gameObj[key].players[player];
      }
    }
  }
  return playerStatsObj;
};

// console.log(playerStats(""));

//returns the number of rebounds associated with
//the player that has the largest shoe size
const bigShoeRebounds = () => {
  const gameObj = gameObject();
  let bigShoeReoundPlayer = {};
  let largestShoeSize = 0;
  for (const key in gameObj) {
    for (const player in gameObj[key].players) {
      if (gameObj[key].players[player].shoe > largestShoeSize) {
        largestShoeSize = gameObj[key].players[player].shoe;
        bigShoeReoundPlayer = gameObj[key].players[player];
      }
    }
  }

  return bigShoeReoundPlayer.rebounds;
};

// console.log(bigShoeRebounds());

//returns the player with most points
const mostPointsScored = () => {
  const gameObj = gameObject();
  let playerWithHighestPoints = {};
  let highestPoints = 0;
  for (const key in gameObj) {
    for (const player in gameObj[key].players) {
      if (gameObj[key].players[player].points > highestPoints) {
        highestPoints = gameObj[key].players[player].points;
        playerWithHighestPoints = {};
        playerWithHighestPoints[player] = gameObj[key].players[player];
      }
    }
  }

  return playerWithHighestPoints;
};

// console.log(mostPointsScored());

//returns the team with most points
const winningTeam = () => {
  const gameObj = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  for (const key in gameObj) {
    if (key === "home") {
      for (const player in gameObj[key].players) {
        homeTeamPoints += gameObj[key].players[player].points;
      }
    } else if (key === "away") {
      for (const player in gameObj[key].players) {
        awayTeamPoints += gameObj[key].players[player].points;
      }
    }
  }

  return `
  Winning Team: ${
    homeTeamPoints > awayTeamPoints
      ? gameObj["home"].teamName
      : gameObj["away"].teamName
  }
  Points: ${homeTeamPoints > awayTeamPoints ? homeTeamPoints : awayTeamPoints}
  `;
};

// console.log(winningTeam());

//returns the player has the longest name
const playerWithLongestName = () => {
  const gameObj = gameObject();
  let playerName = "";
  let sizeOfLongestName = 0;
  for (const key in gameObj) {
    for (const player in gameObj[key].players) {
      if (player.length > sizeOfLongestName) {
        sizeOfLongestName = player.length;
        playerName = player;
      }
    }
  }

  return playerName;
};

// console.log(playerWithLongestName());

//returns true if the player with the
//longest name had the most steals
const doesLongNameStealATon = () => {
  const gameObj = gameObject();
  const nameOfPlayerWithLongestName = playerWithLongestName();
  let mostSteals = 0;
  let playerWithMostSteals = "";
  for (const key in gameObj) {
    for (const player in gameObj[key].players) {
      if (gameObj[key].players[player].steals > mostSteals) {
        mostSteals = gameObj[key].players[player].steals;
        playerWithMostSteals = player;
      }
    }
  }
  return playerWithMostSteals === nameOfPlayerWithLongestName;
};

console.log(doesLongNameStealATon());
