const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
console.log(botoes);

for (let i=0;i <botoes.length;i++){
    botoes[i].onclick = function (){

        for (let j=0;j<botoes.length;j++) {
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-03-15T00:00:00");
const tempoObjetivo2 = new Date("2024-04-29T00:00:00");
const tempoObjetivo3 = new Date("2024-07-29T00:00:00");
const tempoObjetivo4 = new Date("2024-08-23T00:00:00");
const tempoObjetivo5 = new Date("2025-02-19T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];



contadores[0].textContent = calculaTempo(tempoObjetivo1);


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos]
    } else {
        return [0,0,0,0];
    }
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";

}

function atualizaCronometro(){ 
    document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];  
    document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
    for (let i=0; i<contadores.length;i++){
        //contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}



function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);

}
