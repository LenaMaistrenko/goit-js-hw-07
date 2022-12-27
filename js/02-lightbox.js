import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

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
galleryContainer.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
galleryContainer.addEventListener("click", galleryOnClick);
function galleryOnClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  const imgUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src= "${imgUrl}">`);
  instance.show();
  window.addEventListener("keydown", onEscPress);
  function onEscPress(evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
