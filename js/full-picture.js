import { blockScrollInPopup, onCloseButtonClick, onEscapeClick } from './utils.js';

const commentContainer = document.querySelector('.social__comments');
const commentTemplate = commentContainer.querySelector('li');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
commentCount.classList.add('hidden');
commentLoader.classList.add('hidden');

const liCommentFirst = commentContainer.querySelector('li:first-child');
const liCommentSecond = commentContainer.querySelector('li:nth-child(2)');
liCommentFirst.remove();
liCommentSecond.remove();


function setPhotoToPopup(photo) {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments ? photo.comments.length : 0;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  for (let i = 0; i < photo.comments.length; i++) {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = photo.comments[i].avatar;
    commentElement.querySelector('.social__picture').alt = photo.comments[i].name;
    commentElement.querySelector('.social__text').textContent = photo.comments[i].message;

    commentContainer.appendChild(commentElement);
  }
  document.addEventListener('keydown', () => onEscapeClick(bigPicture, event));
  closeButton.addEventListener('click', () => onCloseButtonClick(closeButton, bigPicture));
  blockScrollInPopup();
}

export { setPhotoToPopup };
