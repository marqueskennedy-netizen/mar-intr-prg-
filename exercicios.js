function lutar(){
    const classe= document.getElementById('classe').Value;
    const arma=document.getElementById('arma').value.trim();
    const log= document.getElementById('log');

    if(!arma){
        log.innerHTML= "Você esqueceu de equipar uma arma"

    }
    let dado = Match.floor(Match.radom() * 20) + 1
    let resultado = 'Dados: ${dado} | <strong>${classe}</strong> com </strong>'

    switch(classe){//Espada ESPADA EsPaDa
        case "gerreiro":
            if(arma.toLowerCase()==="espada" && dado>5){
                resultado += "<span class='sucesso'>SUCESSO: você decaptou o monstro com um golpe de espada!</spam>"

            }else if(dado >15){
                resultado += "<spam>classe=  'sucesso'>VITÒRIA: Na força bruta você esmagou o inimigo com seu"+arma+"</spam>"

            }else{
                resultado +="<span class='derrota'>DERROTA: O mostro foi mais rápido. SUa "+arma+"ficou presa no chão:</span>";
            }

    }
    

   
}