import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
  return markup;
}

const imagesMarkup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

const gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  gallery.options.captionsData = "alt";
  gallery.options.captionsDelay = 250;
  console.log(gallery.options);
});

//console.log(galleryItems);
