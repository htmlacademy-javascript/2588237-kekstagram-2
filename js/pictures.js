const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

function renderPosts (posts) {
  pictures.querySelectorAll('.picture').forEach((element) => element.remove());

  posts.forEach((picture) => {
    const clonedPicture = picturesTemplate.cloneNode(true);

    clonedPicture.querySelector('.picture__img').src = picture.url;
    clonedPicture.querySelector('.picture__img').alt = picture.description;
    clonedPicture.querySelector('.picture__likes').textContent = picture.likes;
    clonedPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    clonedPicture.dataset.pictureId = picture.id;

    fragment.appendChild(clonedPicture);
  });

  pictures.appendChild(fragment);
}

export {renderPosts};
