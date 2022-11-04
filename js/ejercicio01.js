function duplica(){
    let valor=document.getElementById("numero");
    //*let resultado=valor*3;
    valor.innerHTML*=3;
}

function dentro(){
    document.getElementById("numero").style.backgroundColor="yellow";
    document.getElementById("numero").style.color="grey";
}

function fuera(){
    document.getElementById("numero").style.backgroundColor="grey";
    document.getElementById("numero").style.color="yellow";
}