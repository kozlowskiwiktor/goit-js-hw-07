import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Tworzenie i renderowanie znacznika
const list = document.querySelector('.gallery')
const markup = galleryItems
     .map(image => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" 
                    src="${image.preview}"
                    data-original="${image.original}"
                    alt="${image.description}"/>
            </a>
        </div>`)
    .join("");

list.insertAdjacentHTML('afterbegin', markup);

// Implementacja delegowania i otrzymanie większego obrazu

document.querySelector('.gallery').onclick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } 
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.original}" width="800" height="600">`);

    instance.show()

    const closeImage = (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    }
    document.addEventListener('keydown', closeImage);
    }
