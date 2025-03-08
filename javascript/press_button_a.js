// When the page is loaded:
document.addEventListener('DOMContentLoaded', (event) => {
    // Press button A:
    const sfx_button_a = document.getElementById('sfx__press-button-a');
    const buttons = document.querySelectorAll('.sfx-button-a');

    // Event:
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const player = sfx_button_a.cloneNode();
            player.play();
        });
    });
});