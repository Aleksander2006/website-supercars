// Get the button
const mybutton = document.querySelector(".myBtn");

// als ik 20px naar beneden ga, dan komt de button tevoorschijn
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// als ik erop klik, dan gaat die weer naar boven
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//-------------------------SEARCHBAR------------------------------------------

const searchInput = document.querySelector('.search'); 

searchInput.addEventListener('keyup', function(event) {
  const value = event.target.value.toLowerCase(); // Dit is wat de gebruiker heeft getypt
  const box = document.querySelectorAll('.box'); // Dit selecteert alle boxes
  const titles = document.querySelectorAll('.neontekst'); // Dit selecteert alle titels met classname 'neontekst'

  box.forEach(function(box) {
    const name = box.getAttribute('data-name').toLowerCase(); // Dit haalt de naam van elke supercar op

    if (name.includes(value)) {
      box.style.display = 'block'; // Als de naam overeenkomt met wat de gebruiker heeft getypt, wordt het blokje weergegeven
    } else {
      box.style.display = 'none'; // Als de naam niet overeenkomt, wordt het blokje verborgen
    }
  });

//-------------------------titles die verdwijnen--------------------

  titles.forEach(function(title) {
    const titleText = title.textContent.toLowerCase(); // Dit haalt de tekst van elke titel op

    if (!titleText.includes(value)) {
      title.style.display = 'none'; // Als de titeltekst niet overeenkomt met wat de gebruiker heeft getypt, wordt de titel verborgen
    } else {
      title.style.display = 'block'; // Als de titeltekst overeenkomt, wordt de titel weergegeven
    }
  });
});


//----------------------------LEES MEER KNOPPEN TWEEDE PAGINA-----


// Selecteer alle elementen met de classname "box"
let Boxes = document.querySelectorAll('.box');

// Loop door elk element en voer een actie uit
Boxes.forEach(box => {

  const leesMeerKnop = box.querySelector('.read-more');
  const extraTekst = box.querySelector('.gt3rs');

  extraTekst.style.display = "none";

  leesMeerKnop.addEventListener("click", function() {
     
      if (extraTekst.style.display === "none") {
     
      extraTekst.style.display = "block";
      box.style.height = "650px";
      leesMeerKnop.innerHTML = "LEES MINDER";
    } else {
    
      extraTekst.style.display = "none";
      box.style.height = "450px"; 
      leesMeerKnop.innerHTML = "LEES MEER";
    }
  });
});

//-----------------------------------------------------------


//let cars = [
//  {
//    name: "CCGT",
//    image: "images/gttt.jpg",
//    alt: "murcielago sv",
//    year: 2002,
//    price: "€3,65 mil",
//    engine: "5.0L V8",
//    power: "600 hp",
//    torque: "1100 Nm",
//    acceleration: "3 seconds",
//    topSpeed: "395 km/h",
//    description: "De Koenigsegg CCGT is een raceauto die is ontworpen en gebouwd door Koenigsegg Automotive AB, met de bedoeling om te concurreren in de GT1-klasse van sportwagenraces. De auto is gebaseerd op de Koenigsegg CC-modellen en heeft een 5.0L V8-motor die 600 pk levert."
//  },
//  // Voeg hier meer auto-objecten toe...
//];
//
//cars.forEach(car => {
//  document.querySelector('.box').innerHTML += `
//    <img class="porsche-gt3-rs" src="${car.image}" alt="${car.alt}">
//    <h3 class="tekst-gt3rs">${car.name}</h3>
//    <p class="specs">
//      <strong>Bouwjaar:</strong> ${car.year} <br>
//      <strong>Prijs:</strong> ${car.price} <br>
//      <strong>Engine:</strong> ${car.engine}<br>
//      <strong>Power:</strong> ${car.power} <br>
//      <strong>Torque:</strong> ${car.torque} <br>
//      <strong>0-100 km/h:</strong> ${car.acceleration} <br>
//      <strong>Top Speed:</strong> ${car.topSpeed} <br>
//    </p>
//    <p class="gt3rs">${car.description}</p> 
//    <div class="read-more">LEES MEER</div>
//  `;
//});
//

function createBox(data) {
  return `
    <div class="box" data-name="${data.name}">
      <img class="porsche-gt3-rs" src="${data.imgSrc}" alt="${data.alt}">
      <h3 class="tekst-gt3rs">${data.title}</h3>
      <p class="specs">
        <strong>Bouwjaar:</strong> ${data.year} <br>
        <strong>Prijs:</strong> ${data.price} <br>
        <strong>Engine:</strong> ${data.engine} <br>
        <strong>Power:</strong> ${data.power} <br>
        <strong>Torque:</strong> ${data.torque} <br>
        <strong>0-100 km/h:</strong> ${data.zeroToHundred} seconds <br>
        <strong>Top Speed:</strong> ${data.topSpeed} km/h <br>
      </p>
      <p class="gt3rs">${data.description}</p>
      <div class="read-more">LEES MEER</div>
    </div>`;
}

//var boxData = [
//  {
//    name: "gt2 rs",
//    imgSrc: "images/ad6aef78-porsche-911-gt2-rs-configurator-3-1024x576.jpg",
//    alt: "gt2 rs",
//    title: "GT2 RS",
//    year: 2018,
//    price: "€353.285",
//    engine: "3.8L Twin-turbocharged Flat-6",
//    power: "700 hp",
//    torque: "553 Nm",
//    zeroToHundred: "2,8",
//    topSpeed: "340",
//    description: "De Porsche 911 GT2 RS is een absolute krachtpatser onder de sportwagens. Met meer dan 700 pk afkomstig van een turbomotor en een indrukwekkende acceleratie van 0 naar 100 km/u in slechts enkele seconden, is dit vlaggenschip van Porsche een icoon in snelheid en prestaties."
//  },
//  {
//    name: "cayman gt4 rs",
//    imgSrc: "images/porsche gt4------rsss.jpg",
//    alt: "gt4 rs",
//    title: "CAYMAN GT4 RS",
//    year: 2022,
//    price: "€244.590",
//    engine: "4-liter Flat 6",
//    power: "493 hp",
//    torque: "450 Nm",
//    zeroToHundred: "3.2",
//    topSpeed: "315",
//    description: "De GT4 RS is de nieuwste toevoeging aan de Cayman-familie. Hij is niet goedkoop, maar die extra premiumprijs biedt u een auto met verbluffende prestaties en een gillende atmosferische motor die tot 8400 rpm kan draaien. Het is ook het enige GT4-model dat momenteel beschikbaar is voor de Cayman in 2023."
//  }
//];
//
//let boxes = boxData.map(createBox).join("");
//document.getElementById("container").innerHTML = boxes;
//

const welkom = document.querySelectorAll('.box');

console.log(welkom);