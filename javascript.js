//--------------------------------supercars--------------------------------------------------------

fetch('supercars.json')
  .then(response => response.json())
  .then(data => {
    let carContainers = {
      porsche: document.getElementById('porsche'),
      lamborghini: document.getElementById('lamborghini'),
      koenigsegg: document.getElementById('koenigsegg')
    };

    //loop through each car type: porsche, lamborghini, koenigsegg)
    let carTypes = Object.keys(data.cars);

    carTypes.forEach(carType => {
      //map through the car array in the json and create html for each car
      data.cars[carType].forEach(car => {
        let carElement = document.createElement('div');
        carElement.setAttribute('data-name', car.name);
        carElement.innerHTML = `

        <div class="box" data-name="${car.name}">
    
          <img class="porsche-gt3-rs" src="${car.imgSrc}" alt="porsche"> 
          
          <h3 class="tekst-gt3rs">${car.title}</h3>

          <p class="specs">
          
          <strong>Bouwjaar:</strong> ${car.year}<br>
          <strong>Prijs:</strong> ${car.price}<br>
          <strong>Motor:</strong> ${car.engine}<br>
          <strong>Power:</strong> ${car.power}<br>
          <strong>Torque:</strong> ${car.torque}<br>
          <strong>0-100:</strong> ${car.acceleration}<br>
          <strong>Top Speed:</strong> ${car.topSpeed}

          </p>

          <p class="gt3rs"> ${car.description} </p>

          <div class="read-more">LEES MEER</div>

        <div>
        `;
        carContainers[carType].appendChild(carElement);
        setupEventListener(carElement);
      });
    });
  })
.catch(error => {
    console.error('Error fetching data:', error);
});

function setupEventListener(boxObject) {
  let leesMeerKnop = boxObject.querySelector('.read-more');
  let extraTekst = boxObject.querySelector('.gt3rs');
  let box = boxObject.querySelector('.box');

  extraTekst.style.display = "none";

  leesMeerKnop.addEventListener("click", function() {
    if (extraTekst.style.display === "none") {
      extraTekst.style.display = "block";
      box.style.height = "650px";
      leesMeerKnop.innerHTML = "LEES MINDER";
    } else {
      extraTekst.style.display = "none";
      box.style.height = "470px";
      leesMeerKnop.innerHTML = "LEES MEER";
    }
  });
}

//--------------------------circuits drie boxes----------------------------

fetch('circuits.json')
.then(response => response.json())
.then(data => {

  let circuitContainer = document.getElementById('container1');

// Map through the car array in the JSON and create HTML for each circuit
    data.circuits.map (circuit => {
    let circuitElement = document.createElement('div');
    circuitElement.innerHTML = `

    <div class="box500">
    
      <img class="circuitfoto" src="${circuit.imgSrc}" alt="${circuit.alt}">

      <h6 class="circuitnaam">${circuit.titel}</h6>

      <p class="tekstcircuitss">${circuit.tekst}</p>

      <a ${circuit.link}>
      <button class="leesmeerknop">LEES MEER</button> 
      </a>

    </div> 
    `;

    circuitContainer.appendChild(circuitElement);
    
    });
})

//-----------------------------BOVEN KNOP----------------------------------

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
  const value = event.target.value.toLowerCase(); // dit is wat er wordt ingetypt
  const box = document.querySelectorAll('.box'); // dit selecteert alle boxes
  const titles = document.querySelectorAll('.neontekst'); // dit selecteert alle titels met classname 'neontekst'

  box.forEach(function(box) {
    const name = box.getAttribute('data-name').toLowerCase(); // dit haalt de naam van elke supercar op

    if (name.includes(value)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none'; 
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