const toggleButtons = document.querySelectorAll('.toggle-button')
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const answer = this.nextElementSibling
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'inline'
            this.textContent = 'Скрыть ответ'
        } else {
            answer.style.display = 'none'
            this.textContent = 'Показать ответ'
        }
    })
})