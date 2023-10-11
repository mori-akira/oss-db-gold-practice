document.querySelectorAll('mask-block').forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('clicked')) {
            e.removeAttribute('class');
        } else {
            e.setAttribute('class', 'clicked');
        }
    });
});
