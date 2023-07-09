let personagens = document.querySelectorAll('.personagem');

personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        let persSelecionado = document.querySelector('.selecionado');
        persSelecionado.classList.remove('selecionado')
    })
})