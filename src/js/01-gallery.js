import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryMarKup = createGaleryItemMarKup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarKup);

function createGaleryItemMarKup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
}
let openGallleryItem = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
