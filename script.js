const container = document.getElementById("personagens");

personagens.forEach(personagem => {

    const elemento = document.createElement("div");

    elemento.classList.add("personagem");

    elemento.style.top = personagem.top;
    elemento.style.left = personagem.left;

    elemento.innerHTML = `
        <div class="avatar">
            <img src="${personagem.imagem}" 
            alt="${personagem.nome}"
            style="width: ${personagem.largura};">
        </div>

        <div class="nome-tag">
            ${personagem.apelido}
        </div>
    `;

    elemento.addEventListener("click", () => {
        mostrarInfo(personagem.nome, personagem.bio);
    });

    container.appendChild(elemento);
});


function mostrarInfo(nome, bio) {

    const caixa = document.getElementById("caixa-descricao");

    document.getElementById("info-nome").innerText = nome;
    document.getElementById("info-bio").innerText = bio;

    caixa.classList.remove("hidden");
}
