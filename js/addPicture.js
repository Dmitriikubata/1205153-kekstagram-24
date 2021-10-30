import {photoInfo} from './data.js';

const picContainer = document.querySelector('.pictures');
const picTemplateFragment = document.querySelector('#picture').content;
const picTemplate = picTemplateFragment.querySelector('a');
const picFragment = document.createDocumentFragment();

photoInfo.forEach( (photo) => {
  const picElement = picTemplate.cloneNode(true);
  picElement.querySelector('.picture__img').src = photo.url;
  picElement.querySelector('.picture__likes').textContent = photo.likes;
  picElement.querySelector('.picture__comments').textContent = photo.comments ? photo.comments.length : 0;

  picFragment.appendChild(picElement);
} );

picContainer.appendChild(picFragment);

export {picContainer, picFragment};

