const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal-open");
const modalClose = document.querySelector(".modal__close");
const modalOver = document.querySelector(".modal__overlay");

// modalOpen.addEventListener('click',() =>{
//   modal.classList.add('is-active');
// } )
// modalClose.addEventListener('click',() =>{
//   modal.classList.remove('is-active')
// })
// modalOver.addEventListener('click',() => {
//   modal.classList.remove('is-active')
// })

const Keyframe = {
  opacity: [0, 1],
};
const closeKeyframe = {
  opacity: [1, 0],
};
const Options = {
  duration: 800,
  easing: "ease",
  fill: "forwards",
};
modalOpen.addEventListener("click", () => {
  modal.classList.add("is-active");
  modal.animate(Keyframe, Options);
});

modalClose.addEventListener("click", () => {
  const modalAnimation = modal.animate(closeKeyframe, Options);

  modalAnimation.onfinish = () => {
    modal.classList.remove("is-active");
  };
});

modalOver.addEventListener("click", () => {
  const modalAnimation = modal.animate(closeKeyframe, Options);

  modalAnimation.onfinish = () => {
    modal.classList.remove("is-active");
  };
});
