const titulo = document.querySelector("#titulo");

titulo.textContent = "Nossa primeira página com JavaScript";

const inputNovoTitulo = document.querySelector("#novo-titulo");
const botaoAlterar = document.querySelector("#alterar-titulo");

// Adiciona uma "escuta" no Elemento. Nesse caso o evento de Click do usuário no botão.
botaoAlterar.addEventListener("click", () => {
    const novoTitulo = inputNovoTitulo.value.trim();

    if (novoTitulo === "") {
        return;
    }

                                         // Contém o valor atual do input
    titulo.textContent = inputNovoTitulo.value;
});

const totalElemento = document.querySelector("#total");
const botaoDestacar = document.querySelector("#destacar-total");

botaoDestacar.addEventListener("click", () => {
    // Para aplicar uma classe CSS não precisa do ponto como tem no style.css
    totalElemento.classList.toggle("destaque");
})

const produtos = ["Caderno", "Caneta", "Mochila"];

const lista = document.querySelector("#lista-produtos");

produtos.forEach((produto) => {
    const item = document.createElement("li");

    item.textContent = produto;

    lista.appendChild(item);
})