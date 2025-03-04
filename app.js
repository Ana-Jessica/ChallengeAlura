//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista de amigos inicializada vazia
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {   
    let nomeAmigo = document.getElementById("amigo").value;

    // Confere se o campo não está vazio
    if (nomeAmigo.trim() !== "") {
        listaAmigos.push(nomeAmigo); 
        document.getElementById("amigo").value = ""; 
        atualizarLista(); 
    }
}

// Função para exibir os nomes na tela
function atualizarLista() {
    let listaNomes = document.getElementById("listaAmigos");
    listaNomes.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
        let nome = document.createElement("li"); 
        nome.textContent = amigo; 
        listaNomes.appendChild(nome);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSorteado = listaAmigos[indiceSorteado]; 

    document.getElementById("resultado").textContent = `Amigo sorteado: ${amigoSorteado}`; 
    document.getElementById("reboot").textContent = 'Pressione F5 para sortear de novo'; 
}

// Adiciona um evento para detectar a tecla Enter no campo de entrada
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        adicionarAmigo(); 
    }
});

// Adiciona um evento para detectar Shift + Enter e sortear um amigo
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault(); 
        sortearAmigo(); 
    }
});