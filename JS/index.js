function opcaoMenu(){
    let opcoes = document.getElementById("opcoes");
    if(opcoes.style.display == 'block'){
        opcoes.style.display = 'none';
    }else{
        opcoes.style.display = 'block';
    }
     
    
}
document.addEventListener("DOMContentLoaded", function() {
let botaoMenu = document.getElementById("burguer");
botaoMenu.onclick = opcaoMenu;
});