document.querySelectorAll('mask-block, m-b').forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('clicked')) {
            e.removeAttribute('class');
        } else {
            e.setAttribute('class', 'clicked');
        }
    });
});
