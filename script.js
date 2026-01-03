const question = document.querySelectorAll('.question');

question.forEach((question) => {
    const plus = question.querySelector('.plus');
    const minus = question.querySelector('.minus');
    const resposta = question.nextElementSibling;

    plus.addEventListener('click', () => {
        minus.classList.remove('oculto');
        plus.classList.add('oculto');
        resposta.classList.remove('oculto');
    });

    minus.addEventListener('click', () => {
        minus.classList.add('oculto');
        plus.classList.remove('oculto');
        resposta.classList.add('oculto');
    });

});
