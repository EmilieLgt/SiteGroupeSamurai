/* Carousel*/ 
const slider = document.querySelector('.carouselList');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 10;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
})

/* Recherche tournée */ 

function filterPays () {
    let filtre, tableau, ligne, cellule, i, texte 

    filtre = document.getElementById("rechercheTourneePays").value.toUpperCase();
    tableau = document.getElementById("tableTournee");
    ligne = tableau.getElementsByTagName ("tr")

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [1] ;
         ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [2] ;
         ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }

} 
function filterCity () {
    let filtre, tableau, ligne, cellule, i, texte 

    filtre = document.getElementById("rechercheTourneeVille").value.toUpperCase();
    tableau = document.getElementById("tableTournee");
    ligne = tableau.getElementsByTagName ("tr")

    for (i=0 ; i<ligne.length ; i++)

    {
        cellule = ligne [i].getElementsByTagName ("td") [1] ;
        if (cellule) {
            texte = cellule.innerText;
            if (texte.toUpperCase().indexOf(filtre)> -1) 
            { 
                ligne [i].style.display= "";
            }
            else  { 
                ligne [i].style.display= "none";
            }
        }
    }
}

/* changement de couleur au survol 
const title = document.querySelector(".titleTournee");

title.addEventListener('mouseover', function () {
    title.style.color ="rgb(224, 124, 247)";
    ;
});

title.addEventListener('mouseout', function () {
    title.style.color = "yellow"; // Réinitialisez la couleur lorsqu'on quitte la zone du titre
});
*/

/* Menu mobile */ 

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});


/* Tri de tableau (ordre alphabétique)*/ 

let villes = document.getElementsByClassName("villesTournee");
let toto = []
for (let i = 0; i < villes.length; i++) {
toto.push(villes[i].innerText);
}
console.log(toto.sort())
console.log(villes);


/* Tri de tableau qui fonctionne (mais je ne l'ai pas encore comprise) */ 
const compare = function(ids, asc){
    return function(row1, row2){
      const tdValue = function(row, ids){
        return row.children[ids].textContent;
      }
      const tri = function(v1, v2){
        if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)){
          return v1 - v2;
        }
        else {
          return v1.toString().localeCompare(v2);
        }
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
      };
      return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
  }
  
  const tbody = document.querySelector('tbody');
  const thx = document.querySelectorAll('th');
  const trxb = tbody.querySelectorAll('tr');
  thx.forEach(function(th) {
    th.addEventListener('click', function(){
      let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
      classe.forEach(function(tr){
         tbody.appendChild(tr);
      });
    });
});

let mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}







