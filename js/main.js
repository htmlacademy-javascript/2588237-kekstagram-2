import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils';

const MESSAGE_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Я в Париже',
  'Я в Дубае',
  'Я в Италии',
  'Я в Венеции',
  'Я на Камчатке',
  'Я на Алтае'
];

const NICKNAME_COMMENTS = [
  'Ира',
  'Света',
  'Вася',
  'Петя',
  'Саша',
  'Оля'
];

const PHOTO_ID = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_URL = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_LIKES = createRandomIdFromRangeGenerator(15, 200);
const COMMENTS = createRandomIdFromRangeGenerator(0, 30);
const AVATAR_COMMENTS = createRandomIdFromRangeGenerator(1, 6);
const ID_COMMMENTS = createRandomIdFromRangeGenerator(1, 999);

function createComments() {
  return {
    id: ID_COMMMENTS(),
    avatar: `img/avatar-${AVATAR_COMMENTS()}.svg`,
    message: MESSAGE_COMMENTS[getRandomInteger(0, MESSAGE_COMMENTS.length - 1)],
    name: NICKNAME_COMMENTS[getRandomInteger(0, NICKNAME_COMMENTS.length - 1)]
  };
}
createComments();

//Cоздает функцию для объекта
function describePhoto() {
  return {
    id: PHOTO_ID(),
    url: `photos/${PHOTO_URL()}.jpg`,
    description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
    likes: PHOTO_LIKES(),
    comments: Array.from({length: COMMENTS()}, createComments)
  };
}

const arrayPhoto = Array.from({length: 25}, describePhoto);

export {arrayPhoto}; // Временно для lint error
