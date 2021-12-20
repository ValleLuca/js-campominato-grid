let pulsante = document.getElementById("msBottone");            //Aggiunta variabile bottone
let livelloSelezionato = document.getElementById("livello");    //Aggiunta variabile livelloselezionato
let spawnGriglia = document.getElementById("griglia");          //Aggiunta variabile spawnGriglia
let cambioColore = document.getElementById("msbox");            //Aggiunta variabile cambioColore

pulsante.addEventListener("click", function(){                  //Alla selezione del select nell'html si iniziano ad eseguire tutte le variabili in base al livello selezionato
    difficolta = livelloSelezionato.value;
    console.log(difficolta);

    if(difficolta == "base"){               //spawn delle griglie in base alla difficolta
        for(let i = 1; i <= 100; i++)   
        {
            spawnGriglia.innerHTML += '<div id="msbox" class="col text-center border border-dark p-4 msCursor">' + i + '</div>';    //aggiunta di un div con tutte le classi aggiunte trammite bootstrap

            cambioColore[i].addEventListener("click", function(){   // problema con l'aggiunta di una classe per colorare il quadrato che si seleziona

                prova = this.innerHTML;
                console.log(prova);
                this.classList.add("red");

            })
        }
    }
    else if(difficolta == "intermedio"){    //spawn delle griglie in base alla difficolta
        for(let i = 1; i <= 81; i++)
        {
            spawnGriglia.innerHTML += '<div id="msbox" class="col text-center border border-dark p-4 msCursor">' + i + '</div>';    //aggiunta di un div con tutte le classi aggiunte trammite bootstrap
        }
    }
    else                                    //spawn delle griglie in base alla difficolta
    {
        for(let i = 1; i <= 49; i++)    
        {
            spawnGriglia.innerHTML += '<div id="msbox" class="col text-center border border-dark p-4 msCursor">' + i + '</div>';    //aggiunta di un div con tutte le classi aggiunte trammite bootstrap
        }
    }
}); 