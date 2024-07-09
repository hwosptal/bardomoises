const lista = ['0','00',3,6,9,12,15,18,21,24,27,30,33,36,2,5,8,11,14,17,20,23,26,29,32,35,1,4,7,10,13,16,19,22,25,28,31,34];
let soma = 0;

let NumeroEscolhidoSpan = document.getElementById("NumeroEscolhidoSpn"); //exibe os numeros escolhido 
let numero_escolhido = document.getElementById("numero_sorteado");

//jogador
let dinheiro_ganho = 500;
let dinheiro_perdido = 0;
let dinheiro_ganho_2 = 0; 

let p_jogadas = 0;

let p_jogadas_ganhas = 0;
let p_jogadas_perdidas = 0;

//dinheiro
let dinheiro_perdido_partida = document.getElementById("dinheiro_perdido"); //dinheiro_perdido
let dinheiro = document.getElementById("dinheiro"); //dinheiro_ganho

dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho;
dinheiro_perdido_partida.innerHTML = "DINHEIRO PERDIDO R$ " + dinheiro_perdido;

//partidas
let partidas_jogadas = document.getElementById("partidas_jogadas");
let partidas_ganhas = document.getElementById("partidas_ganhas");
let partidas_perdidas = document.getElementById("partidas_perdidas");

partidas_ganhas.innerHTML = p_jogadas_ganhas;
partidas_perdidas.innerHTML = p_jogadas_perdidas;


//numeros individuais
let numerosEscolhidos = []  
function NumeroEscolhido(numero) {
    let index = numerosEscolhidos.indexOf(numero) //pega o index o do numero 
    
    if(numerosEscolhidos.includes(numero)) {
        numerosEscolhidos.splice(index, 1) //remove o numero  
        NumeroEscolhidoSpan.innerHTML = numerosEscolhidos.join(", ");
    } else {
        numerosEscolhidos.push(numero) //adiciona o numero ao array 
        NumeroEscolhidoSpan.innerHTML = numerosEscolhidos.join(", ");   
    }  
}   

//duzias
const primeira_duzia = [3,6,9,12,2,5,8,11,1,4,7,10];
const segunda_duzia = [15,18,21,24,14,17,20,23,13,16,19,22];
const terceira_duzia = [27,30,33,36,26,29,32,35,25,28,31,34];

let duziaEscolhida = [];
let duziaEscolhida_segunda = [];
let duziaEscolhida_terceira = [];

let duzia_1 = document.getElementById("duzia_1");
let duzia_2 = document.getElementById("duzia_2");
let duzia_3 = document.getElementById("duzia_3");

function DuziaEscolhida(duzia) {  
    if(duzia == "1st12" && !duziaEscolhida.length) {
        duziaEscolhida = primeira_duzia 
        duzia_1.classList.add('escolhido')
    } 
    else if(duzia == "2nd12" && !duziaEscolhida_segunda.length) {
        duziaEscolhida_segunda = segunda_duzia  
        duzia_2.classList.add('escolhido')
    } 
    else if(duzia == "3rd12" && !duziaEscolhida_terceira.length) {
        duziaEscolhida_terceira = terceira_duzia  
        duzia_3.classList.add('escolhido')
    } else {
        if(duzia == "1st12") { 
            duziaEscolhida = [] 
            duzia_1.classList.remove('escolhido')
        } else if(duzia == "2nd12") {
            duziaEscolhida_segunda = [] 
            duzia_2.classList.remove('escolhido')
        } else if(duzia == '3rd12') {
            duziaEscolhida_terceira = [] 
            duzia_3.classList.remove('escolhido')
        }
    }
}  

//1:18 19:36
const b_1_18 = [3,6,9,12,15,18,2,5,8,11,14,17,1,4,7,10,13,16]
const b_19_36 = [21,24,27,30,33,36,20,23,26,29,32,35,19,22,25,28,31,34]

let baixo_1_18 = []
let alto_19_36 = []

let baixo_id = document.getElementById("baixo_1_18")
let alto_id = document.getElementById("alto_19_36")
function baixo(bx) {
    if(bx == '1:18' && !baixo_1_18.length) {
        baixo_1_18 = b_1_18 
        baixo_id.classList.add('escolhido') 
    } else if(bx == '19:36' && !alto_19_36.length) {
        alto_19_36 = b_19_36 
        alto_id.classList.add('escolhido')
    } 

    else {
        if(bx == '1:18') {
            baixo_1_18 = [] 
            baixo_id.classList.remove('escolhido')
        } else if(bx == '19:36') {
            alto_19_36 = [] 
            alto_id.classList.remove('escolhido')
        }
    }
}

const vermelho_numeros = [3,9,12,18,21,27,30,36,5,14,23,32,1,7,16,19,25,34]
const preto_numeros = [6,15,24,33,2,8,11,17,20,26,29,35,4,10,13,22,28,31]

let preto_coluna = document.getElementById("preto_coluna")
let vermelho_coluna = document.getElementById("vermelho_coluna") 

let cor_escolhida_p = []
let cor_escolhida_v = []

function cores(cor) {
    if(cor == 'preto' && !cor_escolhida_p.length) {
        cor_escolhida_p = preto_numeros 
        preto_coluna.classList.add('escolhido')
    } else if(cor == 'vermelho' && !cor_escolhida_v.length) {
        cor_escolhida_v = vermelho_numeros
        vermelho_coluna.classList.add('escolhido')
    } 
    
    else {
        if(cor == 'preto') {
            cor_escolhida_p = []
            preto_coluna.classList.remove('escolhido')
        } else if(cor == 'vermelho') {
            cor_escolhida_v = []
            vermelho_coluna.classList.remove('escolhido')
        }
    }
}

const par = [6,12,18,24,30,36,2,8,14,20,26,32,4,10,16,22,28,34]
const impar = [3,9,15,21,27,33,5,11,17,23,29,35,1,7,13,19,25,31] 

let escolhido_par = []
let escolhido_impar = []

let even_span = document.getElementById("par_span")
let odd_span = document.getElementById("impar_span")

function odd_even(bx) {
    if(bx == 'par' && !escolhido_par.length) {
        escolhido_par = par
        even_span.classList.add('escolhido')
    } else if(bx == 'impar' && !escolhido_impar.length) {
        escolhido_impar = impar 
        odd_span.classList.add('escolhido')
    } else {
        if(bx == 'par') {
            escolhido_par = []
            even_span.classList.remove('escolhido')
        } else if(bx == 'impar') {
            escolhido_impar = []
            odd_span.classList.remove('escolhido')
        }
    }
}

//as tres colunas 
const col_1 = [3,6,9,12,15,18,21,24,27,30,33,36] 
const col_2 = [2,5,8,11,14,17,20,23,26,29,32,35]
const col_3 = [1,4,7,10,13,16,19,22,25,28,31,34]

let coluna_num_1 = document.getElementById("coluna_num_1")
let coluna_num_2 = document.getElementById("coluna_num_2")  
let coluna_num_3 = document.getElementById("coluna_num_3")

let colu_1 = []
let colu_2 = []
let colu_3 = []

function colunas(bx) {
    if (bx === 'coluna_1' && !colu_1.length) {
        colu_1 = col_1;
        coluna_num_1.classList.add('escolhido');
    } else if(bx == 'coluna_2' && !colu_2.length) {
        colu_2 = col_2
        coluna_num_2.classList.add('escolhido')
    } else if(bx=='coluna_3' && !colu_3.length) {
        colu_3 = col_3 
        coluna_num_3.classList.add('escolhido')
    } else {
        if(bx=='coluna_1') {
            colu_1 = []
            coluna_num_1.classList.remove('escolhido')
        } else if(bx=='coluna_2'){
            colu_2 = []
            coluna_num_2.classList.remove('escolhido')
        } else if(bx=='coluna_3') {
            colu_3 = []
            coluna_num_3.classList.remove('escolhido')
        }
    }
}

function Roleta() {
    let resultado = document.getElementById("resultado");
    let resetar = document.getElementById("resetar");
    let aposta = parseInt(document.getElementById("aposta").value);
    
    if(isNaN(aposta) || aposta <= 0 || aposta > dinheiro_ganho) {
        resultado.innerHTML = "Joga direito fdp";
    } else { 
        p_jogadas += 1;

        let numeroSorteado = lista[Math.floor(Math.random() * lista.length)];

        resultado.innerHTML = "<p style='color: #d10fc1;font-size:30px;font-weight:700;'>SORTEANDO NUMERO....</p>";
        setTimeout(() => {
            resultado.innerHTML = "<p style='color: #d10fc1;font-size:30px;font-weight:700;'>" + numeroSorteado + "</p>";

            if( 
                (colu_1.length > 0 && colu_1.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (colu_2.length > 0 && colu_2.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (colu_3.length > 0 && colu_3.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (escolhido_impar.length > 0 && escolhido_impar.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (escolhido_par.length > 0 && escolhido_par.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (cor_escolhida_v.length > 0 && cor_escolhida_v.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (cor_escolhida_p.length > 0 && cor_escolhida_p.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ||
                (alto_19_36.length > 0 && alto_19_36.includes(numeroSorteado) || numerosEscolhidos.includes(numeroSorteado)) ||
                (baixo_1_18.length > 0 && baixo_1_18.includes(numeroSorteado) || numerosEscolhidos.includes(numeroSorteado)) || 
                (duziaEscolhida_terceira.length > 0 && duziaEscolhida_terceira.includes(numeroSorteado) || numerosEscolhidos.includes(numeroSorteado)) ||
                (duziaEscolhida_segunda.length > 0 && duziaEscolhida_segunda.includes(numeroSorteado) || numerosEscolhidos.includes(numeroSorteado)) || 
                (duziaEscolhida.length > 0 && duziaEscolhida.includes(numeroSorteado)) || numerosEscolhidos.includes(numeroSorteado) ) { 

                dinheiro_ganho += aposta * 2; 
                p_jogadas_ganhas += 1; 


                resultado.innerHTML = "<p style='color: GREEN; font-size: 26px;  font-weight: 700;'>VOCÊ GANHOU R$ +" + aposta*2 + "</p>";

                dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho; 
                partidas_ganhas.innerHTML = p_jogadas_ganhas;
            } else {       
                dinheiro_ganho -= aposta;
                dinheiro_perdido += aposta;
                p_jogadas_perdidas += 1;

                resultado.innerHTML = "<p style='color: RED; font-size: 26px;  font-weight: 700;'>VOCÊ PERDEU R$ -" + aposta + "</p>";
                partidas_perdidas.innerHTML = p_jogadas_perdidas;
                
                dinheiro.innerHTML = "DINHEIRO GANHO R$ " + dinheiro_ganho; //atualiza o dinheiro 
                dinheiro_perdido_partida.innerHTML = "DINHEIRO PERDIDO R$ " + dinheiro_perdido;
            } 

            //reseta tudo
            duziaEscolhida = []
            duziaEscolhida_segunda = []
            duziaEscolhida_terceira = []
            
            colu_1 = []
            colu_2 = []
            colu_3 = [] 

            cor_escolhida_p = []
            cor_escolhida_v = []

            escolhido_par = []
            escolhido_impar = []

            baixo_1_18 = []
            alto_19_36 = []

            numerosEscolhidos = []

            
            //duzias
            duzia_1.classList.remove('escolhido');
            duzia_2.classList.remove('escolhido');
            duzia_3.classList.remove('escolhido');

            //colunas
            coluna_num_1.classList.remove('escolhido');
            coluna_num_2.classList.remove('escolhido');
            coluna_num_3.classList.remove('escolhido');

            //par ou impar
            even_span.classList.remove('escolhido');
            odd_span.classList.remove('escolhido');

            //numeros pretos e vermelhos 
            preto_coluna.classList.remove('escolhido');
            vermelho_coluna.classList.remove('escolhido');
        
            //baixo / alto
            baixo_id.classList.remove('escolhido');
            alto_id.classList.remove('escolhido');
        
            NumeroEscolhidoSpan.innerHTML = " ";

            partidas_jogadas.innerHTML = "PARTIDAS JOGADAS " + p_jogadas;
            numero_escolhido.innerHTML = "<p style='color: #d10fc1;font-size:30px;font-weight: 700;'>NUMERO ESCOLHIDO: " + numeroSorteado + "<p>";
        }, 2000);

        if(dinheiro_ganho === 0) {
            dinheiro_ganho = 500;
            dinheiro.innerHTML = dinheiro_ganho;
        }
    }
} 