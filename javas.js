var h1 = window.document.getElementById('h1')
var body = window.document.getElementById('body')
var eu = document.getElementById('eu')
var maq = document.getElementById('maq')
var h3 = document.getElementById('h3')
var p = document.getElementById('p')
var h2 = document.getElementById('h21')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var nome1 = document.getElementById('nome1')
var nome = window.prompt('Nome:')
var cont = 0
var conti = 0
var esc = 0
var ale = Math.floor(Math.random() * (3));
nome1.innerHTML = `${nome}`
nome1.style.opacity = '1'
function entra(){

}
function sair(){
    
}
function img1enter(){
    h3.style.opacity = '1'
    h3.style.transition = '1s'
    h3.innerHTML = 'Tesoura'
    img1.style.opacity = '0.5'
    img1.style.transition = '1s'
}
function img1out(){
    h3.style.opacity = '0'
    h3.style.transition = '1s'
    img1.style.opacity = '1'
    img1.style.transition = '1s'
}
function img2enter(){
    h3.style.opacity = '1'
    h3.style.transition = '1s'
    h3.innerHTML = 'Pedra'
    img2.style.opacity = '0.5'
    img2.style.transition = '1s'
}
function img2out(){
    h3.style.opacity = '0'
    h3.style.transition = '1s'
    img2.style.opacity = '1'
    img2.style.transition = '1s'
}
function img3enter(){
    h3.style.opacity = '1'
    h3.style.transition = '1s'
    h3.innerHTML = 'Papel'
    img3.style.opacity = '0.5'
    img3.style.transition = '1s'
}
function img3out(){
    h3.style.opacity = '0'
    h3.style.transition = '1s'
    img3.style.opacity = '1'
    img3.style.transition = '1s'
}
function click1(){
    var ale = Math.floor(Math.random() * (3));
    esc = 2
    if(ale==0){
        eu.innerHTML = 'Você jogou Tesoura'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Pedra'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'PERDEU'
        p.style.color = 'red'
        p.style.opacity = '1'
        p.style.transition = '1s'
        conti = conti + 1
        h22.innerHTML = `${conti}`
    }else if(ale==1){
        eu.innerHTML = 'Você jogou Tesoura'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Papel'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'GANHOU'
        p.style.color = 'green'
        p.style.opacity = '1'
        p.style.transition = '1s'
        cont = cont + 1
        h21.innerHTML = `${cont}`
    }else if(ale==2){
        eu.innerHTML = 'Você jogou Tesoura'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Tesoura'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'EMPATE'
        p.style.color = 'yellow'
        p.style.opacity = '1'
        p.style.transition = '1s'
        conti = conti + 1
        cont = cont + 1
        h21.innerHTML = `${cont}`
        h22.innerHTML = `${conti}`
    }
}
function click2(){
    esc = 0
    var ale = Math.floor(Math.random() * (3));
    if(ale==0){
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'EMPATE'
        p.style.color = 'yellow'
        p.style.opacity = '1'
        p.style.transition = '1s'

    }else if(ale==1){
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'PERDEU'
        p.style.color = 'red'
        p.style.opacity = '1'
        p.style.transition = '1s'
    }else if(ale==2){
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'GANHOU'
        p.style.color = 'green'
        p.style.opacity = '1'
        p.style.transition = '1s'
    }
}
function click3(){
    esc = 1
    var ale = Math.floor(Math.random() * (3));
    if(ale==0){
        eu.innerHTML = 'Você jogou Papel'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Pedra'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'GANHOU'
        p.style.color = 'green'
        p.style.opacity = '1'
        p.style.transition = '1s'

    }else if(ale==1){
        eu.innerHTML = 'Você jogou Papel'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Papel'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'EMPATE'
        p.style.color = 'yellow'
        p.style.opacity = '1'
        p.style.transition = '1s'
    }else if(ale==2){
        eu.innerHTML = 'Você jogou Pepl'
        eu.style.color = '#7f8fa6'
        eu.style.opacity = '1'
        maq.innerHTML = 'A máquina jogou Tesoura'
        maq.style.color = '#7f8fa6'
        maq.style.opacity = '1'
        eu.style.transition = '0.5s'
        p.innerHTML = 'PERDEU'
        p.style.color = 'red'
        p.style.opacity = '1'
        p.style.transition = '1s'
    }
}