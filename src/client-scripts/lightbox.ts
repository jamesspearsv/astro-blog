document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const imageContainers = document.querySelectorAll('.imageContainer');
    const lightboxCloseButton = document.getElementById('lightboxCloseButton');
    const lightboxImage = document.getElementById('lightboxImage');

    lightboxCloseButton?.addEventListener('click', () => {
        if (!(lightboxModal instanceof HTMLDialogElement)) return;
        lightboxModal.close();
    });

    imageContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
            if (
                !(container instanceof HTMLElement) ||
                !(lightboxModal instanceof HTMLDialogElement) ||
                !(lightboxImage instanceof HTMLImageElement)
            )
                return;

            const src = container.dataset.src;
            lightboxImage.src = src!;
        });

        container.addEventListener('click', () => {
            if (
                !(container instanceof HTMLElement) ||
                !(lightboxModal instanceof HTMLDialogElement)
            )
                return;

            lightboxModal.showModal();
        });
    });
});
