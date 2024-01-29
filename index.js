
const counterDisplay = document.querySelector("h3");

let counter = 0 ;


const bubbleMaker = () => {

    // je créé un span

    const bubble = document.createElement('span');

    // je lui donne une classe

    bubble.classList.add("bubble");

    // je l'injecte dans le body

    document.body.appendChild(bubble);

    // je créé un valeur entre 100 et 200

    const size = Math.random() * 200 + 100 + "px";

    // je l'injecte dans la hauter et la largeur du span 

    bubble.style.height = size;
    bubble.style.width = size;

    // pareil mai pour la position top et left

    bubble.style.top = Math.random() *100 + 50 +"%";
    bubble.style.left = Math.random() * 100 + "%";

    // je sai splus trop mai c'est rélié au css

    bubble.style.setProperty('--left', Math.random() * 100+"%")
    
    // fonction pour : ajouter des bulles, au click counter +1 et les retirer

    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })

    // on les retire automatiquement toutes les 8 secondes

    setTimeout (() => {
        bubble.remove();
    }, 8000);


}

setInterval(bubbleMaker, 500)






