const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const mensagem = document.querySelector('h1');

function tempoDosSegundos(segundos){
    const data = new Date(segundos *1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function inicializaRelogio(){
    timer = setInterval(function(){
        segundos ++,
        relogio.innerHTML = tempoDosSegundos(segundos)
    }, 1000);
}


iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');  
    mensagem.classList.remove('pausado'); 
    clearInterval(timer);
    inicializaRelogio();      
    mensagem.innerHTML = 'Meu Tempo';
},)

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add('pausado');
    mensagem.classList.add('pausado');
    mensagem.innerHTML = 'Cronômetro Parado!';

})

zerar.addEventListener('click', function(e){
    segundos = 0;
    relogio.classList.remove('pausado');
    mensagem.classList.remove('pausado'); 
    relogio.innerHTML = '00:00:00';
    mensagem.innerHTML = 'Meu Tempo';
    clearInterval(timer);
    
})
