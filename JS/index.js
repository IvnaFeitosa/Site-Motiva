function opcaoMenu(){
    let fullHeader = document.getElementById("fullHeader");
    let bodyTop = document.getElementById("bodyTop");
    let opcoes = document.getElementById("opcoes");
    if(opcoes.style.display == 'block'){
        opcoes.style.display = 'none';
        fullHeader.style.background = '#fff';
        bodyTop.style.marginTop = '70px';

    }else{
        opcoes.style.display = 'block';
        fullHeader.style.background = '#d3d3d3';
        bodyTop.style.marginTop = '10em';
    }
     
    
}


document.addEventListener("DOMContentLoaded", function() {
let botaoMenu = document.getElementById("burguer");
botaoMenu.onclick = opcaoMenu;
});