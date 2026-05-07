/* NAVBAR */

function toggleMenu(){

    document.getElementById("menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
    document.getElementById("toggle").classList.toggle("active");

}

/* BOTÕES */

const nomes = [
"Anunciada","Djanira","Éder","Eduardo","Edison","Eliana","Emerson","Fernando","Iara","José","Layla","Leandro","Lucca","Lucimara","Mara","Marina","Néia","Nilson","Noemi","Ondina","Otto","Paulo","Raquel","Roque","Sidney","Silvana","Vinni"];

const container = document.getElementById("container");

const cores = ["ciano","verde","amarelo","vermelho"];

nomes.forEach(nome => {

    const botao = document.createElement("button");

    botao.textContent = nome;

    let estado = 0;

    botao.addEventListener("click", () => {

        botao.classList.remove(...cores);

        botao.classList.add(cores[estado]);

        estado++;

        if(estado >= cores.length){
            estado = 0;
        }

    });

    container.appendChild(botao);

});

/* CRONÔMETRO */

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function atualizarTempo(){

    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;
    }

    if(minutos === 60){
        minutos = 0;
        horas++;
    }

    document.getElementById("tempo").textContent =
        String(horas).padStart(2,'0') + ":" +
        String(minutos).padStart(2,'0') + ":" +
        String(segundos).padStart(2,'0');
}

function iniciar(){
    if(!intervalo){
        intervalo = setInterval(atualizarTempo,1000);
    }
}

function pausar(){
    clearInterval(intervalo);
    intervalo = null;
}

function resetar(){
    pausar();
    segundos = 0;
    minutos = 0;
    horas = 0;

    document.getElementById("tempo").textContent = "00:00:00";
}
