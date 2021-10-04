function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return false;
  } else {
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
}

getRandomInt(1,100);

//sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function checkCommentLength(commentLength) {
  const maxCommentLength = 140;
  if (commentLength > maxCommentLength) {
    return false;
  } else {
    return true;
  }
}

checkCommentLength(100);
