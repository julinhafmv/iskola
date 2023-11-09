const mensagemDivertida = [
"Qual a diferença da pizza e do judeu?Que a pizza não grita no forno. HAHA",
"Sabe qual a diferença entre um judeu e um escoteiro? O campo.HAHA",
"O que o pintinho caipira falou para o outro? 'pir'. HAHA ",
"AAHHHAHAHAHAHAHAHAAHAHAHAHAHAAHHAHAHAHAH",
];

let botaoriso = document.getElementById("botaoriso");
let mensage =  document.getElementById("mensage");  

mensage.addEventListener('click',function(){
 const mensagemAleatoria = mensagemDivertida [Math.floor(Math.random() * mensagemDivertida.length)]
 mensagemDivertida.textContent = mensagemAleatoria;
})