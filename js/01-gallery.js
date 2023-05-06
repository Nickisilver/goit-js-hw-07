import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
let instance = null;

function createGalleryMarkup(item) {
  return item
    .map((el) => {
      return `
  <li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="Image description"
    />
  </a>
</li>
`;
    })
    .join("");
}
let markup = createGalleryMarkup(galleryItems);
// console.log(markup)

function onImgClick(event) {
  prevetnDefault(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const options = {
    onShow: (instance) => {
      window.addEventListener("keydown", closeByEscape);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", closeByEscape);
    },
  };

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" >`,
    options
  );

  instance.show();
}

function closeByEscape(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

function prevetnDefault(e) {
  e.preventDefault();
}

galleryList.insertAdjacentHTML("beforeend", markup);
galleryList.addEventListener("click", onImgClick);
