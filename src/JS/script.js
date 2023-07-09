let personagens = document.querySelectorAll('.personagem');

personagens.forEach( (personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scroll({top: 0, behavior: "smooth"});
        }

        removerSelecaoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemSelecionada(personagem);
        
        alterarNomePersonagem(personagem);

        alterarDescricaoPersonagem(personagem);


    })
})

function alterarDescricaoPersonagem(personagem) {
    let descricao = document.getElementById("descricao-personagem");

    descricao.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagem(personagem) {
    let nomegrande = document.getElementById("nome-personagem");

    nomegrande.innerText = personagem.getAttribute("data-name");
}

function alterarImagemSelecionada(personagem) {
    let idPersonagem = personagem.attributes.id.value;

    let picGrande = document.querySelector('.personagem-grande');

    picGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    let persSelecionado = document.querySelector('.selecionado');
    persSelecionado.classList.remove('selecionado');
}
