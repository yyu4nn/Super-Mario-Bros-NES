

let segundos = 0;


function cargarSegundo(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 300;
    }

    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos --;
}

setInterval(cargarSegundo, 1000)