module.exports = (bowls) => {
  var score = 0;

  for(var i = 0; i < bowls.length; i++){
    if(bowls[i].pinCount1 === 10){
      score += bowls[i].pinCount1 + ((bowls[i + 1].pinCount1 + bowls[i + 1].pinCount2));
    }
    if(bowls[i].pinCount1 + bowls[i].pinCount2 < 10){
      score += bowls[i].pinCount1 + bowls[i].pinCount2;
    }
    if(bowls[i].pinCount1 + bowls[i].pinCount2 === 10){
      score += bowls[i].pinCount1 + bowls[i].pinCount2 + bowls[i + 1].pinCount1;
    }

  }
  return score;
};

