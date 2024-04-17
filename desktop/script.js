document.querySelectorAll('.question-icon').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon-plus');
        toggleAnswer(answer, icon);
    });
});

function toggleAnswer(answer, icon) {
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        icon.textContent = '-';
    } else {
        answer.style.display = 'none';
        icon.textContent = '+';
    }
}
