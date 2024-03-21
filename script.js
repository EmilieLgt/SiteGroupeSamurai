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

/* Menu mobile */ 

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */

function closeNav(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton
    sidenav.classList.remove("active");
    
  }


/* Tri de tableau */ 
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


/* affichage du prénom + d'un gif pour le formulaire */
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

/*affichage d'une chanson après le quizz*/ 

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


/* MUSIQUE PHOTO CREW */

var item = document.getElementById("crewPhotoLeft1");
var vocal = new Audio('musicCrew/vocal.mp3');

item.addEventListener("mouseover", playVocal, false);
item.addEventListener("mouseout", stopVocal, false);

function playVocal() {
   vocal.play();
}

function stopVocal() {
   vocal.pause();
   vocal.currentTime = 2;
}



var item = document.getElementById("crewPhotoRight2");
var guitar = new Audio('musicCrew/guitar.mp3');

item.addEventListener("mouseover", playGuitar, false);
item.addEventListener("mouseout", stopGuitar, false);

function playGuitar() {
   guitar.play();
}

function stopGuitar() {
   guitar.pause();
   guitar.currentTime = 5;
}


var item = document.getElementById("crewPhotoLeft3");
var drum = new Audio('musicCrew/drum.mp3');

item.addEventListener("mouseover", playDrum, false);
item.addEventListener("mouseout", stopDrum, false);

function playDrum() {
   drum.play();
}

function stopDrum() {
   drum.pause();
   drum.currentTime = 13;
}

var item = document.getElementById("crewPhotoRight4");
var bass = new Audio('musicCrew/bass.mp3');

item.addEventListener("mouseover", playBass, false);
item.addEventListener("mouseout", stopBass, false);

function playBass() {
   bass.play();
}

function stopBass() {
   bass.pause();
   bass.currentTime = 3;
}

var item = document.getElementById("crewPhotoLeft5");
var synth = new Audio('musicCrew/synth.mp3');

item.addEventListener("mouseover", playSynth, false);
item.addEventListener("mouseout", stopSynth, false);

function playSynth() {
   synth.play();
}

function stopSynth() {
   synth.pause();
   synth.currentTime = 17;
}





