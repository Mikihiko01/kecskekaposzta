window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}
function ID(nev) {
    return document.getElementById(nev);
}

function init() {
    ID("keszito").innerHTML = "Tellér Ádám ";
    for (var i = 0; i < ("aside img").length; i++) {
        $("aside img")[i].addEventListener("mouseenter", keret);
        $("aside img")[i].addEventListener("mouseleave", nincskeret);
        
        
        }

}
function keret() {
   this.classList.add("formazas");
}
function nincskeret() {
    this.classList.remove("formazas");
}

var tomb = ["kepek/farkas.jpg", "kepek/kaposzta.jpg","kepek/kecske2.jpg"];

console.log(tomb);




