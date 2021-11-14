import { blockScrollInPopup, onEscapeClick, onCloseButtonClick } from './utils.js';

const uploadFile = document.querySelector('#upload-file');
const formFrame = document.querySelector('.img-upload__overlay');
const closeButtonForm = document.querySelector('.img-upload__cancel');
const inputHashtag = document.querySelector('.text__hashtags');

function showForm() {
  if (uploadFile.value !== '') {
    formFrame.classList.remove('hidden');
    blockScrollInPopup();
    document.addEventListener('keydown', () => onEscapeClick(formFrame, event));
    closeButtonForm.addEventListener('click', () => onCloseButtonClick(closeButtonForm, formFrame));
  }
}

uploadFile.addEventListener('change', showForm);

// для теста
inputHashtag.value = '';

const HashtagValue = inputHashtag.value.split(' ');
const hashtagRules = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

HashtagValue.forEach((element) => {
  const hashtagRulesTest = hashtagRules.test(element);

  console.log(hashtagRulesTest);
  console.log(inputHashtag.validity);

  inputHashtag.addEventListener('input', () => {

    if (!hashtagRulesTest) {
      inputHashtag.setCustomValidity('Введите в поле хэштег через # без спец символов');

    } else {
      inputHashtag.setCustomValidity('');
      inputHashtag.reportValidity();
    }
  });
});

export { };

