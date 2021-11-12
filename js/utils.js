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


// блокировка и разблокировка скролла фона за попапом

const body = document.querySelector('body');
const blockScrollInPopup = () => body.classList.add('modal-open');
const unblockScrollInPopup = () => body.classList.remove('modal-open');


// закрытие попапа по крестику и esc

function onCloseButtonClick(closeButtonClickName, closePopupName) {
  closePopup(closePopupName);
  closeButtonClickName.removeEventListener('click', onCloseButtonClick);
}

function onEscapeClick(closePopupName, evt) {
  if (evt.target.closest('.img-upload__text')) {
    return '';
  } else if
  (evt.key === 'Escape') {
    closePopup(closePopupName);
    document.removeEventListener('keydown', onEscapeClick);
  }
}

function closePopup(popupName) {
  popupName.classList.add('hidden');
  unblockScrollInPopup();
}

export { getRandomInt, checkCommentLength, blockScrollInPopup, unblockScrollInPopup, onCloseButtonClick, onEscapeClick };

