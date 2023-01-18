function score(rolls) {
  let countFrames = 1;
  let index = 0;
  let score = 0;
  const sizeRolls = rolls.length;

  while(index < sizeRolls) {
    if(countFrames > 10) {
      throw new Error('Rolls have more than 10 frames');
    }
    const currentRoll = rolls[index];
    if(currentRoll < 10) {
      if(index + 1 >= sizeRolls) {
        throw new Error('Incomplete frames');
      }
      score += currentRoll;
      const nextRoll = rolls[index + 1];
      if(nextRoll + currentRoll < 10) {
        score += nextRoll;
      }
      else if(nextRoll + currentRoll == 10) {
        score += nextRoll;
        if(index + 2 >= sizeRolls) {
          throw new Error('Incomplete frames');
        }
        score += rolls[index + 2];
      }
      else {
        throw new Error('Incorrect input');
      }
    }
    else if(currentRoll === 10) {
      if(index + 2 >= sizeRolls) {
        throw new Error('Incomplete frames');
      }
      score += currentRoll + rolls[index + 1] + rolls[index + 2];
      if(countFrames === 10) index++;
    }
    index += 2;
  }

  return score;
}

function bestScore(games) {
  const numberOfGames = games.size();
  let best = 0;
  try {
    for(let game = 0; game < numberOfGames; game++) {
      let currentScore = score(games[game]);
      if(currentScore > best) {
        best = currentScore;
      }
    }
  }
  catch(error) {
    throw new Error('Games not valid');
  }
  return best;
}

module.exports = {score, bestScore};