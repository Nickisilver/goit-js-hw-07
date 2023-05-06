import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgList = document.querySelector(".gallery");
const markup = createImgElements(galleryItems);

function createImgElements(obj) {
  return obj
    .map((el) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
   </a>
</li>
    `;
    })
    .join("");
}
imgList.insertAdjacentHTML("beforeend", markup);


const options ={
  captionDelay: 250,
  captionsData: "alt",
};
const lightbox = new SimpleLightbox('.gallery a', options );


