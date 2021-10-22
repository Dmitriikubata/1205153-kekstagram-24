// функция рандомной выдачи числа

function getRandomInt(min, max) {
  if (min > max || min < 0) {
    throw new Error('Ошибка. Введите корректные данные');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//sourse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// функция проверки длины комментария

function checkCommentLength(comment, maxCommentLength = 140) {
  if (!comment || typeof comment !== 'string') {
    throw new Error('Ошибка. Нет текста комментария');
  }
  return comment.length <= maxCommentLength;
}

checkCommentLength('check length message - true', 140);
checkCommentLength('check length message - false', 10);

export {getRandomInt, checkCommentLength};
