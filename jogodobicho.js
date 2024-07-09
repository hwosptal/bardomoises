let dinheiro = document.getElementById("dinheiro");
let dinheiro_perdido_span = document.getElementById("dinheiro_perdido");
let animal_escolhido = document.getElementById("animal");
let partidas_jogadas = document.getElementById("partidas_jogadas");
let partidas_vencidas = document.getElementById("partidas_ganhas");
let partidas_perdidas = document.getElementById("partidas_perdidas");
let animal_sorteado = document.getElementById("animal_sorteado");
let valor_apostado = document.getElementById("aposta");
let error = document.getElementById("error");

const animais = ['Avestruz','Aguia','Burro','Borboleta','Cachorro','Cabra','Carneiro','Camelo','Cobra','Coelho','Cavalo','Elefante','Galo','Gato','Jacare','Leao','Macaco','Porco','Pavao','Peru','Touro','Tigre','Urso','Veado','Vaca'];

let dinheiro_ganho = 500;
let dinheiro_perdido = 0;

let partidas_jog = 0;
let partidas_vencidas_jog = 0;
let partidas_perdidas_jog = 0;
let animal_escolhido_jog = '';
let som = 0; //aqui ele vai somar de acordo com o dinheiro perdido
let valor_partida = 0; //para imprimir o valor ganho na partida

dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho; //aqui ele mostra o valor inicial
dinheiro_perdido_span.innerHTML = "DINHEIRO PERDIDO R$ " + dinheiro_perdido;

function animal_esc(animal) {
    animais.forEach(a => {
        document.getElementById(a).classList.remove("animal_escolhido");
        animal_escolhido_jog = animal;
        animal_escolhido.innerHTML = animal;
    })
    document.getElementById(animal).classList.add("animal_escolhido");
}

function jogar() {
    let aposta = parseInt(valor_apostado.value);
    let sortear = animais[Math.floor((Math.random() * animais.length))];

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<p style='color: #d10fc1;font-size:30px;font-weight:700;'>SORTEANDO....</p>";
    setTimeout(() => {
        if(isNaN(aposta) || aposta <= 0 || aposta > dinheiro_ganho) {
            error.innerHTML = "Joga direito fdp";
        } else {
            error.innerHTML = "";

            partidas_jog += 1;
            if(sortear == animal_escolhido_jog) {
                valor_partida = aposta * 2;
                dinheiro_ganho += valor_partida;

                partidas_vencidas_jog += 1;
                dinheiro.innerHTML = dinheiro_ganho;
                partidas_vencidas.innerHTML = partidas_vencidas_jog;

                resultado.innerHTML = "<p style='color: green; font-size: 26px;  font-weight: 700;'>VOCÊ GANHOU R$ +" + valor_partida + "</p> ";
                dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho;
            } else {
                dinheiro_ganho -= aposta;    
                dinheiro_perdido += aposta;
                partidas_perdidas_jog += 1;
                partidas_perdidas.innerHTML = partidas_perdidas_jog;   

                dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho;
                dinheiro_perdido_span.innerHTML = "DINHEIRO PERDIDO R$ " + dinheiro_perdido; 
                resultado.innerHTML = "<p style='color: red; font-size: 26px;font-weight: 700;'>VOCÊ PERDEU R$ -" + aposta;
            }
            animal_sorteado.innerHTML = "<p style='color: #d10fc1;font-size:30px;font-weight: 700;'>ANIMAL SORTEADO: " + sortear + "</p>";
            partidas_jogadas.innerHTML = "PARTIDAS JOGADAS " + partidas_jog;
            
            if(dinheiro_ganho === 0) {
                dinheiro_ganho = 500;
                dinheiro.innerHTML = "DINHEIRO " + dinheiro_ganho; 
            }
        } 
    }, 2000);          
}  