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
const lista = document.querySelector("#lista-produtos");
const botaoOrdemCrescente = document.querySelector("#ordem-crescente");
const botaoOrdemDecrescente = document.querySelector("#ordem-decrescente");

botaoDestacar.addEventListener("click", () => {
    // Para aplicar uma classe CSS não precisa do ponto como tem no style.css
    totalElemento.classList.toggle("destaque");
})

const produtos = [
    { nome: "Caderno", preco: 25 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 120 }
];

function exibirProdutos() {
    lista.innerHTML = "";

    produtos.forEach((produto) => {
        const item = document.createElement("li");

        item.textContent = `${produto.nome} - R$ ${produto.preco}`;

        lista.appendChild(item);
    })
};

exibirProdutos();

botaoOrdemCrescente.addEventListener("click", () => {
    produtos.sort((a, b) => a.preco - b.preco);

    exibirProdutos()
});

botaoOrdemDecrescente.addEventListener("click", () => {
    produtos.sort((a, b) => b.preco - a.preco);

    exibirProdutos()
});

const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);

totalElemento.textContent = `Total: R$ ${total}`;


//1. Exiba um item de lista para cada produto, com nome e preço.
//2. Calcule o total com `reduce` e mostre-o na página.
//3. Faça o botão de ordem crescente mostrar os produtos do menor para o maior preço.
//4. Faça o botão de ordem decrescente mostrar os produtos do maior para o menor preço.
//5. Mantenha a alteração do título e o destaque do total funcionando.
//6. Garanta que repetir os cliques de ordenação não duplique os itens.