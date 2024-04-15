document.querySelectorAll('.icon-plus').forEach(item => {
    item.addEventListener('click', () => {
        const listItem = item.parentElement.nextElementSibling;
        if (listItem.style.display === 'none' || listItem.style.display === '') {
            listItem.style.display = 'block';
            item.textContent = '-';
        } else {
            listItem.style.display = 'none';
            item.textContent = '+';
        }
    });
});
