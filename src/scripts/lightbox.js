document.addEventListener("DOMContentLoaded", () => {
  const imgContainers = document.querySelectorAll(".img-container");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeButton = document.getElementById("modal-close-button");

  imgContainers.forEach((container) =>
    container.addEventListener("click", openLightbox),
  );

  // Handle opening lightbox when a preview is clicked
  function openLightbox(e) {
    console.log("opening lightbox...");
    console.log(lightboxModal);
    console.log(e.currentTarget.dataset.src);
    lightboxImg.src = e.currentTarget.dataset.src;
    lightboxModal.showModal();
  }

  // Handle closing lightbox actions
  closeButton?.addEventListener("click", () => {
    lightboxImg.src = "";
    lightboxModal.close();
  });
});
