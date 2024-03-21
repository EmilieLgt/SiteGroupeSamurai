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


/* affichage du prénom pour le formulaire */
let form = document.querySelector(".formulaireJeu");
let prenomInput = document.getElementById("prenom");
let messageConfirmation = document.querySelector(".confirmationParticipation");
let imageConfirmation = document.createElement("img");
imageConfirmation.src="https://cache.teia.rocks/ipfs/QmXCxmeLURZStpvvDb9ZeFsLrjH2FWc5JfURvXwyVmxwff";
imageConfirmation.style.padding="1em";
imageConfirmation.style.width="20%";
let blocImage = document.querySelector(".blocImageConfirmation");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let prenomUser = prenomInput.value;
    messageConfirmation.innerText = `Merci ${prenomUser}, votre participation au tirage au sort est bien enregistrée ! `
    blocImage.appendChild(imageConfirmation)

})

/*affichage d'une chanson*/ 

function choixChanson()  {


    //Si on veut que le choix soit unique (pas de possibilité de cliquer plusieurs fois il faut recharger la page)
    const boutonsRadio = document.querySelectorAll('input[type="radio"]');
    boutonsRadio.forEach(function(bouton) {
        bouton.disabled = true;
    }); 
    
    //Si on met un choix unique, on peut garder la couleur, sinon enlever ou faire autrement
    if(document.getElementById('avantCereales').checked)
       {
     document.getElementById('resultatChanson').innerHTML='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1AslaQYl1cMb1ItQKmtJer?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> ';
     let lait = document.getElementById('labelAvantCereales')
     lait.style.color="#f4e724"
    }
    else if(document.getElementById('apresCereales').checked)
    {
    document.getElementById('resultatChanson').innerHTML='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4SxtjfUfvCe4NoeDAY0YhF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> ';
    let cereales = document.getElementById('labelApresCereales')
    cereales.style.color="#f4e724"
    }
   else if(document.getElementById('intolerantLactose').checked)
    {
    document.getElementById('resultatChanson').innerHTML='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5Ln8eNkYC9to99zsPEZbS2?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    let lactose = document.getElementById('labelIntolerantLactose')
    lactose.style.color="#f4e724"
    }
   else if(document.getElementById('poulet').checked)
    {
    document.getElementById('resultatChanson').innerHTML='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4QFsfUVgZesJCJ7jQXCXZ4?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> ';
    let poulet = document.getElementById('labelPoulet')
    poulet.style.color="#f4e724"}
}

/*bouton qui remonte */

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







