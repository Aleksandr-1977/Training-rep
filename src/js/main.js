import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
