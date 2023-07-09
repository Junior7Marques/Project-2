let personagens = document.querySelectorAll('.personagem');

personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter', () => {
        let persSelecionado = document.querySelector('.selecionado');
        persSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        let idPersonagem = personagem.attributes.id.value; 

        let picGrande = document.querySelector('.personagem-grande');
        
        picGrande.src = `./src/imagens/card-${idPersonagem}.png`;
        


    })
})