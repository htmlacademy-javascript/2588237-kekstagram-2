import { renderPosts } from './pictures.js';

const SHOW_COUNT_COMMENTS = 5;

const body = document.querySelector('body');

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

const buttonClose = bigPicture.querySelector('.big-picture__cancel');

let commentsShown = 0;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const clonedComment = commentElement.cloneNode(true);

  clonedComment.querySelector('.social__picture').src = avatar;
  clonedComment.querySelector('.social__picture').alt = name;
  clonedComment.querySelector('.social__text').textContent = message;

  return clonedComment;
};

const renderComments = () => {
  commentsShown += SHOW_COUNT_COMMENTS;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');

    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const clonedComment = createComment(comments[i]);

    fragment.append(clonedComment);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);

  commentShowCount.textContent = commentsShown;
  commentTotalCount.textContent = comments.length;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    closeBigPicture();
  }
}

function onButtonCloseClick() {
  closeBigPicture();
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  commentsShown = 0;

  document.removeEventListener('keydown', onDocumentKeydown);
}

function onCommentsLoaderClick() {
  renderComments();
}

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);

  comments = data.comments;

  if (comments.length > 0) {
    renderComments();
  }
};

buttonClose.addEventListener('click', onButtonCloseClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

let pictures = [];

const onContainerClick = (evt) => {
  const clonedPicture = evt.target.closest('.picture');

  if (!clonedPicture) {
    return;
  }

  const picture = pictures.find(
    (item) => item.id === +clonedPicture.dataset.pictureId
  );

  if (picture) {
    showBigPicture(picture);
  }
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;

  renderPosts(pictures, picturesContainer);

  picturesContainer.addEventListener('click', onContainerClick);
};

export {renderGallery, showBigPicture};
