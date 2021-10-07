function getRandomInt(min, max) {
  if (min <= max && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  throw new Error('Ошибка. Введите корректные данные');
}

getRandomInt(1,100);

//sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


function checkCommentLength(commentLength, maxCommentLength) {
  if (commentLength > maxCommentLength || maxCommentLength > 140) {
    return false;
  }
  return true;
}

checkCommentLength(100, 140);
