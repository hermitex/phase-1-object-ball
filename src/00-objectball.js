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

//returns the points scored by the player
//whose name has been provided
const numPointsScored = (playerName) => {
  const baseGameObject = gameObject();
  let homePlayers = baseGameObject.home.players;
  let awayPlayers = baseGameObject.away.players;

  return homePlayers[playerName]
    ? homePlayers[playerName].points
    : awayPlayers[playerName].points;
};

console.log(numPointsScored('Bismak Biyombo'));

//returns the shoe size of the player
//whose name has been provided
const shoeSize = (playerName) => {
  return 0;
};

//returns the colors of the team
//whose name has been provided
const teamColors = (teamName) => {
  return "red and white";
};

//returns an array of teams
const teamNames = (gameObject) => {
  return [];
};

//returns an array of jersey numbers
const playerNumbers = (teamName) => {
  return [];
};

//returns the player statistics object of the player
//whose name has been provided
const playerStats = (playerName) => {
  return {};
};

//returns the number of rebounds associated with
//the player that has the largest shoe size
const bigShoeRebounds = () => {
  return "John Smith";
};

//returns the player with most points
const mostPointsScored = () => {
  return "John Smith";
};

//returns the team with most points
const winningTeam = () => {
  return "Charlotte Hornets";
};

//returns the player has the longest name
const playerWithLongestName = () => {
  return "John Smith";
};

//returns true if the player with the
//longest name had the most steals
const doesLongNameStealATon = () => {
  return false;
};
