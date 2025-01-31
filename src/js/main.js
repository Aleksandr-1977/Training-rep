import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loadCredentials, auth } from './server.js';

const selectSize = document.querySelector('.select-list');
const selectMini = document.querySelector('.card-product-list');
const mainImg = document.querySelector('.card-product a img');
const mainLink = document.querySelector('.card-product a ');

const simplelightbox = new SimpleLightbox('.card-product a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

const chooseMini = event => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    mainImg.src = event.target.src;
    mainImg.alt = event.target.alt;
    mainLink.href = event.target.src;
  }
  lightbox.refresh();
};
selectMini.addEventListener('click', chooseMini);

const chooseSize = event => {
  if (event.target.classList.contains('size-choose')) {
    document
      .querySelectorAll('.size-choose.is-active')
      .forEach(item => item.classList.remove('is-active'));
    event.target.classList.add('is-active');
  }
};
selectSize.addEventListener('click', chooseSize);

document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch('/getImage');
    const data = await response.json();

    const imageElement = document.getElementById('driveImage');
    const linkElement = imageElement.parentElement;

    imageElement.src = data.imageUrl;
    linkElement.href = data.imageUrl;

    console.log('Изображение загружено:', data.imageUrl);
  } catch (error) {
    console.error('Ошибка загрузки изображения:', error);
  }
});
