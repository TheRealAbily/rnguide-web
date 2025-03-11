// When the page is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
    // Images:
    let touch_image = false;
    const images = document.querySelectorAll('.content__img');
    const body = document.getElementById('body');

    images.forEach(img => {
        img.addEventListener('click', (event) => {
            if (touch_image === false) {
                const src = event.target.getAttribute('src');
                const alt = event.target.getAttribute('alt');

                // Add the image:
                const label_preview_img = `<img class="preview_img__img" src="${src}" alt="${alt}">`;

                // Add the container:
                let label_container_preview = document.createElement('div');
                label_container_preview.classList.add('preview_img');
                label_container_preview.innerHTML = label_preview_img;

                // Add the element:
                body.appendChild(label_container_preview);

                // Overflow Y:
                document.documentElement.style.overflowY = 'hidden';

                // -------------------------------------------------------------------------------------

                // Labels:
                const label_preview = document.querySelector('.preview_img');
                const label_img = document.querySelector('.preview_img__img');

                touch_image = true;

                label_preview.style.top = `${window.scrollY - (5 * parseFloat(getComputedStyle(document.documentElement).fontSize))}px`;

                window.addEventListener('scroll', () => {
                    label_preview.style.top = `${window.scrollY - (5 * parseFloat(getComputedStyle(document.documentElement).fontSize))}px`;
                });

                // -------------------------------------------------------------------------------------

                // Exit event:
                label_preview.addEventListener('click', (event) => {
                    label_preview.classList.add('preview_img-out');
                    label_img.classList.add('preview_img__img-out');

                    setTimeout(() => {
                        touch_image = false;

                        // Label:
                        label_preview.remove();

                        // Overflow Y:
                        document.documentElement.style.overflowY = 'auto';
                    }, 0.16 * 1000);
                });
            }
        });
    });
});
