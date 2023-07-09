let personagens = document.querySelectorAll('.personagem');

personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter', () => {
        let persSelecionado = document.querySelector('.selecionado');
        persSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

    })
})