const items = document.querySelectorAll('.image');

/* On stock le nombre d'image  -1 car en js on compte a partir de Zero */
const nbSlide = items.length ; 

/* Recup des boutons en javascript */
const suivant = document.querySelector('.droite');
const precedent = document.querySelector('.gauche');

/* Variable de comptage */
let count = 0;


/* Event des boutons */
suivant.addEventListener('click', slideSuivante)
precedent.addEventListener('click', slidePrecedente)


/* Regle le bug du premier clic */
suivant.click()


/* Function slide suivante */


function slideSuivante(){
    
    if(count < nbSlide){
        items[count].classList.remove('active');
        count++;
        items[count].classList.add('active')
    }else{
        items[count].classList.remove('active');
        count = 0;
        items[0].classList.add('active')
    }

}

/* Function slide precedente */


function slidePrecedente(){

    
    if(count > 0){
        items[count].classList.remove('active')
        count--;
        items[count].classList.add('active')
    }
    else{
        items[count].classList.remove('active')
        count = nbSlide ;
        items[0].classList.add('active')
    }

}