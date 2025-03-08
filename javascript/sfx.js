// When the page is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
    // Press button A:
    const sfx_button_a = document.getElementById('sfx__press-button-a');
    const header_buttons = document.querySelectorAll('.sfx-button-a');

    // Event:
    header_buttons.forEach(button => {
        button.addEventListener('click', () => {
            const player_button = sfx_button_a.cloneNode();
            player_button.play();
        });
    });

    // Change option:
    const footer_area = document.querySelectorAll('.sfx-change-option');
    const footer_arrows = document.querySelectorAll('.arrow-icon');

    // Events:
    footer_area.forEach((area, index) => {
        area.addEventListener('mouseenter', () => {
            const player_area = sfx_button_a.cloneNode();
            player_area.play();

            footer_arrows[index].style.fill = '#000';
            footer_arrows[index].classList.add('footer__icon-svg-animation');
        });
    });

    footer_area.forEach((area, index) => {
        area.addEventListener('mouseleave', () => {
            footer_arrows[index].style.fill = '#0000';
            footer_arrows[index].classList.remove('footer__icon-svg-animation');
        });
    });
});