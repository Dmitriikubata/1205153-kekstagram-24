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


// Генерация массива с описанием фотографии от пользователя

const ID_PHOTO = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];

const URL_PHOTO = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTION_PHOTO = 'Фотография из последней поездки';

const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function createMessage() {
  return COMMENTS_LIST[getRandomInt(0,5)];
}

const NAME_LIST = [
  'Иван Степанов',
  'Виталий Ильин',
  'Наталья Воронченко',
  'Екатерина Маслакова',
  'Екатерина Лупаштян',
  'Александр Брезгин',
  'Евгений Трафимов',
];

const PHOTO_INFO_COUNT = 25;


//shuffle функция для смешевания порядка элементов в массиве

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//функция для смешивания порядка элементов в массиве + отдавать по одному элементу из массива
function shuffledShift(shuffleShiftKey) {
  shuffle(shuffleShiftKey);
  return shuffleShiftKey.shift();
}

const getPhotoInfo = () => {
  const LIKES_PHOTO = getRandomInt(1,300);
  const COMMENT = {
    id: getRandomInt(1000,9000),
    avatar: 'img/avatar-' + getRandomInt(1,6) + '.svg',
    message: createMessage(),
    name: NAME_LIST[getRandomInt(0,6)],
  };
  return {
    id: shuffledShift(ID_PHOTO),
    url: shuffledShift(URL_PHOTO),
    description: DESCRIPTION_PHOTO,
    likes: LIKES_PHOTO,
    comments: COMMENT,
  };
};

const photoInfo = Array.from({length: PHOTO_INFO_COUNT}, getPhotoInfo);

photoInfo;
