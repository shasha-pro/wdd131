const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1') 

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    h1.classList.toggle('show');
}

hambutton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});

const temples = [
    {
      name: "Monsterrado County",
      location: "Monrovia, Liberia",
      dedicated: "2001, December, 24",
      area: 13500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Liberia Temple"
    },
    {
      name: "Nimba County",
      location: "Monrovia, Liberia",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Liberia Temple"
    },
    {
      name: "Buchnna City",
      location: "Monrovia Liberia",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Liberia Temple"
    },
    {
      name: "Margibi County",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Liberia Temple"
    },
    {
      name: "Bomi County",
      location: "Monrovia, Liberia",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Liberia Temple"
    },
    {
      name: "Maryland County",
      location: "Monrovia, Liberia",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Liberia Temple"
    }
    
  ]
  
createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900")));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date("2000")));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) > ("90000")));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area) < ("10000")));
});

function createTempleCard(filteredTemples) {
  document.querySelector(".temple-card").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    card.classList.add(`temple-card-${1}`);
    let templeName = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    templeName.textContent = temple.name;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.name} Temple`);
    img.style.aspectRatio = "5 / 3";
    img.setAttribute("loading", "lazy");

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
    
    document.querySelector(".temple-card").appendChild(card);
  });
  }

  
