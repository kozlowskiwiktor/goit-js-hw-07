import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.gallery')
const markup = galleryItems
     .map(image => 
        `<a class="gallery__item" href="${image.original}">
            <img class="gallery__image" 
                src="${image.preview}"
                data-original="${image.original}"
                alt="${image.description}"/>
         </a>
        `)
    .join("");

list.insertAdjacentHTML('afterbegin', markup);