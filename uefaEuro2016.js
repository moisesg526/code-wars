// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  let homeTeam = teams[0];
  let awayTeam = teams[1];
  let homeScore = scores[0];
  let awayScore = scores[1];
  let winningTeam;
  if (homeScore > awayScore) {
    winningTeam = homeTeam;
    return `At match ${homeTeam} - ${awayTeam}, ${winningTeam} won!`;
  } else if (homeScore < awayScore) {
    winningTeam = awayTeam;
    return `At match ${homeTeam} - ${awayTeam}, ${winningTeam} won!`;
  } else {
    return `At match ${homeTeam} - ${awayTeam}, teams played draw.`;
  }
}
