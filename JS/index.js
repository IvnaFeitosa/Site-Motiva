function opcaoMenu(){
    let fullHeader = document.getElementById("fullHeader");
    let bodyTop = document.getElementById("bodyTop");
    let opcoes = document.getElementById("opcoes");
    
    if(opcoes.style.display == 'block'){
        opcoes.style.display = 'none';
        fullHeader.style.background = '#fff';
        bodyTop.style.marginTop = '70px';
        fullHeader.style.border ='none';
        fullHeader.style.borderEndEndRadius ='none';
        fullHeader.style.boxShadow ='none';
    }else{
        opcoes.style.display = 'block';
        fullHeader.style.boxShadow ='0 0 10px #F1F1F1';
        fullHeader.style.background = '#F1F1F1';        
        bodyTop.style.marginTop = '10em';
    }
    
    
     
    
}






document.addEventListener("DOMContentLoaded", function() {

const controls = document.querySelectorAll('.control');
let currentCard = 0;
const cards = document.querySelectorAll('.card');
const maxCards = cards.length;
document.getElementById("second-section-carrossel").innerHTML = (currentCard + 1) + " DE " + (maxCards) ;
controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        //console.log('clicado');
        isLeft = e.target.classList.contains("arrow-left");
      
    if (isLeft) {
      currentCard -= 1;
      

    } else {
      currentCard += 1;
    }

    if (currentCard >= maxCards) {
      currentCard = 0;
    }

    if (currentCard < 0) {
      currentCard = maxCards - 1;
    }

    document.getElementById("second-section-carrossel").innerHTML = (currentCard + 1) + " DE " + (maxCards);

    cards.forEach((card) => card.classList.remove("current-card"));

    cards[currentCard].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
 
    });

    cards[currentCard].classList.add("current-card");
    })

    
});




let botaoMenu = document.getElementById("burguer");
botaoMenu.onclick = opcaoMenu;

let menus = document.querySelector('.header-content-conteiner-nav-list');
if((menus.style.flexDirection) != 'column'){
  fullHeader.style.background = '#fff';
}

});