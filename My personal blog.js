// Website.js

const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling; // Get the next sibling
        if (hiddenContent && hiddenContent.classList.contains('hidden-content')) {
            hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});

