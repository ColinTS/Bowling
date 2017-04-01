module.exports = (bowls) => {
  var score = 0;

  function strikeLastFrame(){
      score += bowls[9].pinCount1 + bowls[10].pinCount1 + bowls[10].pinCount2;
    }

  for(var i = 0; i < bowls.length; i++){
    //strike on last frame
    if (bowls[9].pinCount1 === 10 && i === 9){
      strikeLastFrame();
      break;
    }
      //strike
      else if (bowls[i].pinCount1 === 10){
      score += bowls[i].pinCount1 + ((bowls[i + 1].pinCount1 + bowls[i + 1].pinCount2));
    }
    //spare
    else if(bowls[i].pinCount1 + bowls[i].pinCount2 === 10){
      score += bowls[i].pinCount1 + bowls[i].pinCount2 + bowls[i + 1].pinCount1;
    }
    //normal roll
    else if(bowls[i].pinCount1 + bowls[i].pinCount2 < 10){
      score += bowls[i].pinCount1 + bowls[i].pinCount2;
    }
  }
  return score;
};

