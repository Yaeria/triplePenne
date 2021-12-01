let nav = document.getElementById('nav');


let btn = document.getElementById('btn');
// Mieux de mettre const !

btn.addEventListener('click', affichageNav);

let links = document.querySelectorAll('.link')

links.forEach(link => {
    console.log(link)
    link.addEventListener('click', affichageNav);

})

function affichageNav() {
    console.log(nav)

    if (nav.style.visibility == "hidden") {

        nav.style.visibility = "visible"
        nav.style.opacity = "1"
        nav.style.zIndex = "9998"
    } else {

        nav.style.visibility = "hidden"
        nav.style.zIndex = "-9998"
        nav.style.opacity = "0"

    }

}


affichageNav()