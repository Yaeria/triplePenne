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

var lienEcran = document.querySelectorAll(".lien-pour-js")
var dataLien = []

lienEcran.forEach(lien => {

    dataLien.push(lien.dataset.lien)
    lien.addEventListener('click', function () {

        for (i = 0; i < dataLien.length; i++) {

            if (dataLien[i] == this.dataset.lien) {
                document.querySelector("#" + this.dataset.lien).scrollIntoView({
                    block: "start",
                    inline: 'start',
                    behavior: 'smooth'
                })
            }
        }
    })
})


var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("main").style.backgroundPositionX = "";
        document.getElementById("titre-js").style.marginLeft = "";
    } else {
        document.getElementById("main").style.backgroundPositionX = "2000px";
        document.getElementById("titre-js").style.marginLeft = "-1000px";
    }
    prevScrollpos = currentScrollPos;
}

const audio1 = new Audio();

audio1.src = "sound/mario-nav-oof.mp3"

const audio2 = new Audio();
audio2.src = "sound/mario.mp3"


if (window.addEventListener) {
    var state = 0, do_want = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    window.addEventListener(('keydown'), function (e) {
        if (e.keyCode == do_want[state]) state++;

        else state = 0;

        if (state == 10) {
            audio2.play();
            alert('Well Done.')
            document.getElementById('main').style.rotate = "18000deg"
            document.getElementById('btn').style.rotate = "18000deg"
            document.getElementById('main').style.transition = "5s"
        }
    }, true);
}