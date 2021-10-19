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

const DESCRIPTION_PHOTO = [
  'Фотография из последней поездки',
  'Мы в путешествии',
  'Фото на даче',
  'Жить в кайф',
];

const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

let generatedIdPhoto = 0;
let generatedUrlPhoto = 0;

function generateComment () {
  return {
    id: getRandomInt(1000,9000),
    avatar: `img/avatar-${  getRandomInt(1, 6)  }.svg`,
    message: COMMENTS_LIST[ getRandomInt(0, COMMENTS_LIST.length - 1) ],
    name: NAME_LIST[ getRandomInt(0, 6) ],
  };
}

const getPhotoInfo = () => {
  generatedIdPhoto++;
  generatedUrlPhoto++;

  return {
    id: generatedIdPhoto,
    url: `photos/${ generatedUrlPhoto }.jpg`,
    description: DESCRIPTION_PHOTO[ getRandomInt(0, DESCRIPTION_PHOTO.length - 1) ],
    likes: getRandomInt(1,300),
    comments: Array.from( {length: getRandomInt(1,6)}, generateComment ),
  };
};

// временное отключение линтера, нужно для дз
// eslint-disable-next-line no-unused-vars
const photoInfo = Array.from( {length: PHOTO_INFO_COUNT}, getPhotoInfo );
