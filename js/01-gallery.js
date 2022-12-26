import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");

  return markup;
}
galleryContainer.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
console.log("galleryItems", galleryItems);
