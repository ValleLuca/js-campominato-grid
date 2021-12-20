let pulsante = document.getElementById("msBottone");
let livelloSelezionato = document.getElementById("livello");
let spawnGriglia = document.getElementById("griglia");

pulsante.addEventListener("click", function(){
    difficolta = livelloSelezionato.value;
    console.log(difficolta);

    if(difficolta == "base"){
        console.log("gg");
        for(let i = 1; i <= 100; i++){
        spawnGriglia.innerHTML += '<div class="col text-center border border-dark p-4">' + i + '</div>';
        }
    }
    else if(difficolta == "intermedio"){
        for(let i = 1; i <= 81; i++){
            spawnGriglia.innerHTML += '<div class="col text-center border border-dark p-4">' + i + '</div>';
        }
    }
    else
    {
        for(let i = 1; i <= 49; i++){
            spawnGriglia.innerHTML += '<div class="col text-center border border-dark p-4">' + i + '</div>';
        }
    }
})





// 
 