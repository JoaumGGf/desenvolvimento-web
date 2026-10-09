//Arrays e Métodos

console.log("=== BLOCO 1: ARRAYS ===");

// 1. Array de nomes
const nomes = ["João", "Maria", "Pedro"];

// forEach: percorre cada nome
nomes.forEach(function(nome) {
    console.log("Olá, " + nome + "!");
});

// map: cria um novo array em maiúsculas
const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes maiúsculos:", nomesMaiusculos);


// 2. Array de preços
const precos = [10, 25, 40, 5, 60];

// filter: preços maiores que 20
const precosMaiores = precos.filter(function(preco) {
    return preco > 20;
});

console.log("Preços acima de 20:", precosMaiores);

// reduce: soma todos os preços
const somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


// 3. Array de objetos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 45 }
];

// map: extrair nomes
const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

// filter: produtos abaixo de 50 reais
const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosBaratos);

// reduce: somar preços
const totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("Total dos produtos: R$", totalProdutos);

// forEach: imprimir cada produto
produtos.forEach(function(produto) {
    console.log(produto.nome + ": R$ " + produto.preco);
});

//manipulção do dom

console.log("=== BLOCO 2: DOM ===");

// 1. Alterar título
const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog do João";

// 2. Selecionar todos os parágrafos
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function(paragrafo) {
    console.log(paragrafo.textContent);
});

// 3. Selecionar lista
const lista = document.querySelector("#lista");

// Adicionar dois itens usando innerHTML
// += preserva os três itens que já estão no HTML
lista.innerHTML += `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

// 4. Criar terceiro item
const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

// 5. Adicionar classe destaque
terceiroItem.classList.add("destaque");

console.log(
    "Possui destaque:",
    terceiroItem.classList.contains("destaque")
);

// 6. Array de tarefas
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

// Criar um li para cada tarefa
tarefas.forEach(function(tarefa) {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

// Aplicar classe feito ao primeiro li
const primeiroItem = lista.querySelector("li");

primeiroItem.classList.add("feito");

// Contar todos os itens
const quantidade = lista.querySelectorAll("li").length;

console.log("Quantidade de itens:", quantidade);

//Eventos e Event Delegation

console.log("=== BLOCO 3: EVENTOS ===");

// 1. Evento de clique
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});

// 2. Evento mouseover
botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});

// 3. Evento keyup
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log("Nome digitado:", campoNome.value);
});


// 4. Event Delegation
// Um único listener para todos os itens da lista
lista.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {

        e.target.classList.toggle("feito");

        console.log("Item clicado:", e.target.textContent);
    }

});

// Criar novo item dinamicamente
const novoItem = document.createElement("li");

novoItem.textContent = "Item criado via JavaScript";

lista.append(novoItem);


// 5. Formulário
const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(e) {

    // Impede recarregar a página
    e.preventDefault();

    // Remove espaços no início e no final
    const texto = campoTarefa.value.trim();

    // Verifica se não está vazio
    if (texto !== "") {

        const item = document.createElement("li");

        item.textContent = texto;

        lista.append(item);

        console.log("Tarefa adicionada:", texto);

        // Limpar campo
        campoTarefa.value = "";
    }

});
