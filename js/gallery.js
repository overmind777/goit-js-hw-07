//! change nameFile

import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

function createMurkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
}

listEl.insertAdjacentHTML('beforeend', createMurkup(galleryItems));

function onPressEsc(e) {
    if (e.code !== 'Escape') return;
    instance.close();
    window.removeEventListener('keydown', onPressEsc);
}


const instance = basicLightbox.create(`<div class="modal"></div>`);

listEl.addEventListener('click', (e) => {
    e.preventDefault();
    
    instance.element().querySelector('.modal').innerHTML = `<img width="1280" height="auto" src="${e.target.dataset.source}">`;

    if (e.target.nodeName !== "IMG") return;
    
    window.addEventListener('keydown', onPressEsc);
    instance.show();
})











