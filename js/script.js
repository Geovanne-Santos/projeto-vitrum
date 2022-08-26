function LeiaMais(){
    var pontos = document.getElementById("pontos");

    var  MaisTexto = document.getElementById("mais");

    var BtnLerMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        MaisTexto.style.display="none";
        BtnLerMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        MaisTexto.style.display="inline";
        BtnLerMais.innerHTML="Leia Menos"
    }
}

function VerMais(){
    var pontos2 = document.getElementById("pontos2");

    var  MaisTexto2 = document.getElementById("mais2");

    var BtnLerMais2 = document.getElementById("vejamais");

    if(pontos2.style.display === "none"){
        pontos2.style.display="inline";
        MaisTexto2.style.display="none";
        BtnLerMais2.innerHTML="Leia Mais";
    }else{
        pontos2.style.display="none";
        MaisTexto2.style.display="inline";
        BtnLerMais2.innerHTML="Leia Menos"
    }
}


