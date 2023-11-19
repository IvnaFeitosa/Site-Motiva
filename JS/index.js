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
        fullHeader.style.background = '#FFE3F1';
        bodyTop.style.marginTop = '10em';
    }
     
    
}






document.addEventListener("DOMContentLoaded", function() {

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const cards = document.querySelectorAll('.card');
const maxCards = cards.length;
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        //console.log('clicado');
        isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxCards) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxCards - 1;
    }

    cards.forEach((card) => card.classList.remove("current-card"));

    cards[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    cards[currentItem].classList.add("current-card");
    })
});


let botaoMenu = document.getElementById("burguer");
botaoMenu.onclick = opcaoMenu;
});