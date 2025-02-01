import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { products } from './base';

const cardProductItem = document.querySelector('.container-card');
const cardProducts = products
  .map(
    elem =>
      `<li class="container">
    <div class="card-product-mini">
                <ul class="card-product-list">
<a class="mini" href="${elem.bigMini1}"><img src="${elem.mini1}" alt="${
        elem.discrfoto1
      }" title="" /></a>
<a class="mini" href="${elem.bigMini2}"><img src="${elem.mini2}" alt="${
        elem.discrfoto2
      }" title="" /></a>
<a class="mini" href="${elem.bigMini3}"><img src="${elem.mini3}" alt="${
        elem.discrfoto3
      }" title="" /></a>
                </ul>
    <div class="card-product">
<a href="${elem.original}"><img id="driveImage" src="${
        elem.preview
      }" width="400" height="600" /></a>
    </div>
    </div>
    <div class="discription">
<a class="link-production" href="${elem.link}" target="_blank">POLO RALPH</a>
<h2 class="title">${elem.title}</h2>
<p class="title-text">${elem.description}</p>
                <div class="price">
<div class="sale">
<p class="price-fix">$${elem.price - elem.price * (elem.discount / 100)}</p>
<p class="discount">-${elem.discount}%</p>
</div>
<p class="max-price">$${elem.price}</p>
</div>
<p class="size">Choose size</p>
<ul class="select-list">
<li class="size-choose">S</li>
<li class="size-choose">M</li>
<li class="size-choose">L</li>
<li class="size-choose">XL</li>
<li class="size-choose">XXL</li>
</ul>
<button class="btn-submit" type="submit">Add to bag</button>
</div>
 </li>`
  )
  .join();

cardProductItem.insertAdjacentHTML('beforeend', cardProducts);

const simplelightbox = new SimpleLightbox('.card-product a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

document.querySelectorAll('.card-product-list').forEach(selectMini => {
  selectMini.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      const card = event.target.closest('.container'); // Найти родительский контейнер карточки
      const mainImg = card.querySelector('.card-product a img'); // Изменять именно в текущей карточке
      const mainLink = card.querySelector('.card-product a');

      mainImg.src = event.target.src;
      mainImg.alt = event.target.alt;
      mainLink.href = event.target.src;
    }
    simplelightbox.refresh();
  });
});
selectMini.addEventListener('click', chooseMini);

const selectSize = document.querySelector('.select-list');
const chooseSize = event => {
  if (event.target.classList.contains('size-choose')) {
    document
      .querySelectorAll('.size-choose.is-active')
      .forEach(item => item.classList.remove('is-active'));
    event.target.classList.add('is-active');
  }
};
selectSize.addEventListener('click', chooseSize);
