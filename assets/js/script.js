  /////////////
 // CLASSES //
/////////////

class Interface {
  constructor(_category, _label){
    this._category = _category;
    this._label = _label;
  }
  get category() {
    return this._category;
  }
  set category(value) {
    this._category = value;
  }
  get label() {
      return this._label;
  }
  set label(value) {
      this._label = value;
  }
}

class DisplayCard {
  constructor(_title, _img, _url) {
    this._title = _title;
    this._img = _img;
    this._url = _url;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get image() {
    return this._img;
  }
  set image(value) {
    this._img = value;
  }
  get url() {
    return this._url;
  }
  set url(value) {
    this._url = value;
  }
}

  ///////////////
 // DATABASES //
///////////////

const interface = {
  aperitifs: new Interface("aperitifs", "Apéritifs"),
  boissons: new Interface("boissons", "Boissons"),
  entrees: new Interface("entrees", "Entrées"),
  plats: new Interface("plats", "Plats"),
  desserts: new Interface("desserts", "Désserts"),
};

const database = {
  aperitifsDB:{
    gougeresBoursin: new DisplayCard("Gougères au Boursin/Amuse Bouche", "https://img.cuisineaz.com/320x320/2020/12/16/i158452-gougeres-au-boursin-ail-fines-herbes.webp", "https://www.cuisineaz.com/recettes/gougeres-au-boursin-ail-fines-herbes-111477.aspx"),
    tartareLangoustine: new DisplayCard("Tartare de Langoustine/Dips", "https://img.cuisineaz.com/320x320/2019/04/18/i146631-tartare-de-langoustine-passion-langoustine-snackee-beurre-de-gingembre-guacamole-vanille.webp", "https://www.cuisineaz.com/recettes/tartare-de-langoustine-passion-langoustine-snackee-beurre-de-gingembre-guacamole-vanille-106401.aspx"),
  },
  boissonsDB:{
    sexOnTheBeach: new DisplayCard("Sex on the Beach/Cocktail alcoolisé", "https://img.cuisineaz.com/320x320/2019/07/10/i147916-sex-on-the-beach.webp", "https://www.cuisineaz.com/recettes/sex-on-the-beach-106916.aspx"),
    cafeViennois: new DisplayCard("Café Viennois/Boisson Chaude", "https://img.cuisineaz.com/320x320/2015/04/27/i113775-cafe-viennois.webp", "https://www.cuisineaz.com/recettes/cafe-viennois-79596.aspx"),
    chocolatCoco: new DisplayCard("Chocolat au lait de Coco/Boisson Chaude", "https://img.cuisineaz.com/320x320/2016/10/23/i103604-chocolat-chaud-au-lait-de-coco.webp", "https://www.cuisineaz.com/recettes/chocolat-chaud-au-lait-de-coco-90440.aspx"),
  },
  entreesDB:{
    chevreChaud: new DisplayCard("Chèvre chaud sur canapé/Entrée chaude", "https://img.cuisineaz.com/320x320/2023/04/24/i193164-chevre-chaud-sur-canape.webp", "https://www.cuisineaz.com/recettes/chevre-chaud-sur-canape-45618.aspx"),
    betterave: new DisplayCard("Betteraves au chèvre frais", "https://img.cuisineaz.com/320x320/2015/01/28/i47848-betteraves-au-chevre-frais.webp", "https://www.cuisineaz.com/recettes/betteraves-au-chevre-frais-44400.aspx"),
    avocatThon: new DisplayCard("Avocat au thon", "https://img.cuisineaz.com/320x320/2016/03/17/i104041-avocat-au-thon.webp", "https://www.cuisineaz.com/recettes/avocat-au-thon-29826.aspx"),
    saladRusse:new DisplayCard("Salade Russe/Salade", "https://img.cuisineaz.com/320x320/2013/12/20/i99711-salade-russe.webp", "https://www.cuisineaz.com/recettes/salade-russe-49397.aspx"),
    saladAvocatSaumon: new DisplayCard("Salade avocat saumon/Salade", "https://img.cuisineaz.com/320x320/2015/07/31/i86099-salade-avocat-saumon.webp", "https://www.cuisineaz.com/recettes/salade-avocat-saumon-81844.aspx"),
  },
  platsDB:{
    limande: new DisplayCard("Limande aux légumes/Poisson", "https://img.cuisineaz.com/320x320/2023/10/31/i196359-limande-legumes-rotis.webp", "https://www.cuisineaz.com/recettes/limande-aux-legumes-d-automne-rotis-116768.aspx"),
    dorade:new DisplayCard("Dorade Royal au four/Poisson", "https://img.cuisineaz.com/320x320/2017/06/12/i128186-daurade-royale-au-four.webp", "https://www.cuisineaz.com/recettes/daurade-royale-au-four-97780.aspx"),
    congre: new DisplayCard("Congre poêlé/Poisson", "https://img.cuisineaz.com/320x320/2019/05/15/i147184-congre-poele.webp", "https://www.cuisineaz.com/recettes/congre-poele-106644.aspx"),
    filetPoulet: new DisplayCard("Filet de poulet sauté/Viande", "https://img.cuisineaz.com/320x320/2023/04/06/i192476-filet-de-poulet-a-la-moutarde-et-creme.webp", "https://www.cuisineaz.com/recettes/filets-de-poulet-sautes-a-la-moutarde-et-creme-69307.aspx"),
    tourte: new DisplayCard("Tourte à la viande/Viande", "https://img.cuisineaz.com/320x320/2015/08/25/i87254-tourte-aux-legumes-et-viande-hachee.webp", "https://www.cuisineaz.com/recettes/tourte-a-la-viande-hachee-72752.aspx"),
    kefta: new DisplayCard("Keftas/Viande" ,"https://img.cuisineaz.com/320x320/2017/01/11/i115527-kefta.webp", "https://www.cuisineaz.com/recettes/kefta-42062.aspx"),
    jouePorc: new DisplayCard("Joues de porc mijotées/Viande", "", "https://www.cuisineaz.com/recettes/joues-de-porc-mijotees-a-la-moutarde-73526.aspx"),
    ceviche: new DisplayCard("Ceviche de Poulpe/Fruits de mer", "https://img.cuisineaz.com/320x320/2023/08/28/i195823-ceviche-de-poulpe.webp", "https://www.cuisineaz.com/recettes/ceviche-de-poulpe-116621.aspx"),
    stJacques: new DisplayCard("Saint Jacques à la Bretonne/Fruits de mer", "https://img.cuisineaz.com/320x320/2016/10/27/i32507-coquilles-st-jacques-a-la-bretonne.webp", "https://www.cuisineaz.com/recettes/coquilles-st-jacques-a-la-bretonne-80764.aspx"),
    gambas: new DisplayCard("Gambas à l'ail/Fruits de mer", "https://img.cuisineaz.com/320x320/2019/11/04/i150642-gambas-a-l-ail-et-au-persil.webp", "https://www.cuisineaz.com/recettes/gambas-a-l-ail-et-au-persil-108833.aspx"),
    hamburger: new DisplayCard("Hamburger maison/Fast Food", "https://img.cuisineaz.com/320x320/2013/12/20/i42852-hamburger.webp", "https://www.cuisineaz.com/recettes/hamburger-maison-23274.aspx"),
    hotdog: new DisplayCard("HotDog/Fast Food", "https://img.cuisineaz.com/320x320/2022/11/14/i190050-hot-dog.webp", "https://www.cuisineaz.com/recettes/hot-dog-de-liguori-lecomte-115755.aspx"),
    empenadas: new DisplayCard("Empanadas Mexicains/Fast Food", "https://img.cuisineaz.com/320x320/2015/12/22/i77716-empanadas-mexicains-au-chevre-maison.webp", "https://www.cuisineaz.com/recettes/empanadas-mexicains-au-chevre-maison-53522.aspx"),
    calmar: new DisplayCard("Calmar poêlés/Fruit de mer", "https://img.cuisineaz.com/320x320/2016/04/28/i46954-calmar-poeles-a-l-ail-et-au-persil.webp", "https://www.cuisineaz.com/recettes/calmar-poeles-a-l-ail-et-au-persil-40432.aspx"),
    tartiflette: new DisplayCard("Tartiflette du chef", "https://img.cuisineaz.com/320x320/2022/09/16/i187842-i0-tartiflette-etchebest-ok.webp", "https://www.cuisineaz.com/recettes/tartiflette-du-chef-philippe-etchebest-115216.aspx"),
  },
  dessertsDB:{
    muffinChocolat: new DisplayCard("Muffins au coeur fondant/gateaux", "https://img.cuisineaz.com/320x320/2013/12/20/i34710-muffins-chocolat-au-coeur-fondant.webp", "https://www.cuisineaz.com/recettes/muffins-chocolat-au-coeur-fondant-14543.aspx"),
    foretNoir: new DisplayCard("Forêt noire aux cerises noires/gateaux", "https://img.cuisineaz.com/320x320/2013/12/20/i110385-.webp", "https://www.cuisineaz.com/recettes/foret-noire-aux-cerises-noires-4388.aspx"),
    painsAuChocolat: new DisplayCard("Mini pains choco-cannelle/Viennoiserie", "https://img.cuisineaz.com/320x320/2017/06/15/i128269-mini-pains-choco-cannelle-facile.webp", "https://www.cuisineaz.com/recettes/mini-pains-choco-cannelle-facile-97833.aspx"),
    mochi: new DisplayCard("Mochi glacé/ Glace", "https://img.cuisineaz.com/320x320/2023/11/13/i196490-mochi-glace.webp", "https://www.cuisineaz.com/recettes/mochi-glace-107003.aspx"),
  },
}

  ///////////////////
 //// Functions ////
///////////////////

// fonction issue du theme Bootstrap //
// global bootstrap: false //
const initTooltips = () => {
  'use strict';

  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
};

function removeAdditionalChildren(parentSelector) {
  const parentElement = document.querySelector(parentSelector);

  if (parentElement) {
    let currentChild = parentElement.firstElementChild;

    while (currentChild && currentChild.nextElementSibling) {
      parentElement.removeChild(currentChild.nextElementSibling);
    }
  }
}

function copyToClipBoard(password, login = false) {
    let type = (login) ? "login" : "mot de passe";
    navigator.clipboard.writeText(password)
        .then(() => {
            console.log("Le " + type + ": [ " + password + " ] a bien été copié dans le Clipboard");
        })
        .catch((err) => {
            console.error("Erreur lors de la copie dans le Clipboard : ", err);
        });
}

function switchWallpaper() {
  const body = document.querySelector("#body");
  const currentSize = window.getComputedStyle(body).getPropertyValue("background-size");
  
  switch (currentSize) {
    case "cover":
      body.style.backgroundSize = "contain";
      break;
    case "contain":
      body.style.backgroundSize = "initial";
      break;
    default:
      body.style.backgroundSize = "cover";
      break;
  }
}

function sortByTitle(listDB) {
  const sortedList = Object.entries(listDB)
      .sort(([keyA, valueA], [keyB, valueB]) => valueA.title.localeCompare(valueB.title))
      .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
      }, {});
  return sortedList;
}

function createInterface(Interface) {

  const navBar = document.querySelector("#navBar");

  const interfaceElement = document.createElement("li");
  interfaceElement.id = Interface._category + "LI";
  navBar.appendChild(interfaceElement);

  const interfaceLink = document.createElement("a");
  interfaceLink.href = "#" + Interface._category;
  interfaceLink.title = Interface._label;
  interfaceLink.setAttribute("aria-current", "page");
  interfaceLink.setAttribute("data-bs-toggle", "tooltip");
  interfaceLink.setAttribute("data-bs-placement", "right");
  interfaceLink.classList.add("nav-link", "py-1", "px-0", "rounded-0", "nav-hover");
  interfaceElement.appendChild(interfaceLink);

  const interfaceSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  interfaceSVG.classList.add("bi", "pe-none");
  interfaceSVG.setAttribute("width", "24");
  interfaceSVG.setAttribute("height", "24");
  interfaceSVG.setAttribute("role", "img");
  interfaceSVG.setAttribute("aria-label", Interface._label);
  interfaceLink.appendChild(interfaceSVG);

  const interfaceSVGuse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  interfaceSVGuse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + Interface._category + "SVG");
  interfaceSVG.appendChild(interfaceSVGuse);
}

function createCategory(Interface){
  
  const category = document.querySelector("#body");

  const full = document.createElement("div");
  full.classList.add("full");
  category.appendChild(full);

  const ancre = document.createElement("div");
  ancre.id = Interface._category
  ancre.classList.add("ancre");
  full.appendChild(ancre);

  const titre = document.createElement("h2");
  titre.classList.add("h1", "text-center", "text-lg-start", "ps-lg-5");
  titre.innerText = Interface._label;
  full.appendChild(titre);
  
  if(Interface._category != "wallpaper"){
    const row = document.createElement("div");
    row.classList.add(Interface._category, "row");
    full.appendChild(row);
  }
  
  if(Interface._category == "wallpaper"){
    const button = document.createElement("button");
    button.id = "switch";
    button.classList.add("btn", "btn-outline-light", "btn-sm", "darker", "mb-3");
    button.innerText = "Switch";
    button.addEventListener("click", function() {switchWallpaper();});
    full.appendChild(button);
  }
}

function createCard(DisplayCard,selector) {
  
  const row = document.querySelector(selector);
  const tab = DisplayCard._title.split("/");
  let displayCard_Title = tab[0];
  let displayCard_Sub = tab[1];

  const cardElement = document.createElement("div");
  cardElement.classList.add("card-Element", "col-sm-12", "col-md-6", "col-lg-2", "col-xlg-1", "mb-4");
  row.appendChild(cardElement);

  const card = document.createElement("div");
  card.classList.add("card");
  cardElement.appendChild(card);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");
  card.appendChild(cardBody);

  const cardHead = document.createElement("div");
  cardHead.classList.add("text-white", "flex-grow-1", "d-flex", "flex-column", "justify-content-start");
  cardBody.appendChild(cardHead);

  const cardTitleLink = document.createElement("a");
  cardTitleLink.href = DisplayCard._url;
  cardTitleLink.target = "_blank";
  cardHead.appendChild(cardTitleLink);
  
  const cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = displayCard_Title;
  cardTitleLink.appendChild(cardTitle);
  
  const cardSubTitle = document.createElement("h6");
  cardSubTitle.classList.add("card-title");
  cardSubTitle.innerText = displayCard_Sub;
  if(displayCard_Sub == undefined){cardSubTitle.classList.add("hidden");}
  cardTitleLink.appendChild(cardSubTitle);
  
  const cardBody_DivFirstChild = document.createElement("div");
  if(DisplayCard._img.length == 0){cardBody_DivFirstChild.classList.add("none");}
  cardBody.appendChild(cardBody_DivFirstChild);

  const cardLinkImage = document.createElement("a");
  cardLinkImage.href = DisplayCard._url;
  cardLinkImage.target = "_blank";
  cardBody_DivFirstChild.appendChild(cardLinkImage);

  const cardImg = document.createElement("img");
  cardImg.src = DisplayCard._img;
  cardImg.classList.add("img-fluid");
  cardLinkImage.appendChild(cardImg);

  const cardBodyLink = document.createElement("a");
  cardBodyLink.href = DisplayCard._url;
  cardBodyLink.target = "_blank";
  cardBodyLink.classList.add("btn", "btn-dark", "darker", "w-100");
  if(DisplayCard._img.length != 0){cardBodyLink.classList.add("none");}
  cardBodyLink.innerText = displayCard_Title;
  cardBody.appendChild(cardBodyLink);
}

function establishInterface(listDB) {
  Object.keys(listDB).forEach(function (key) {
    createInterface(listDB[key]);
  });
}

function establishCategory(listDB) {
  Object.keys(listDB).forEach(function (key) {
    createCategory(listDB[key]);
  });
}

function establishList(row,listDB) {
  listDB = sortByTitle(listDB);
  Object.keys(listDB).forEach(function (key) {
    createCard(listDB[key],row);
  });
}

function search(query) {
  const searchResults = {};

  Object.keys(interface).forEach(interfaceKey => {
    const itemKey = {};
    const dataObjectKey = interface[interfaceKey]._category + "DB";
    const dataObject = database[dataObjectKey];
    
    if (dataObject) {
      Object.keys(dataObject).forEach(key => {
        const item = dataObject[key];
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          itemKey[key] = item;
        }
      });
      searchResults[dataObjectKey] = itemKey;
    }
  });
  return searchResults;
}

function displayResults(results) {
  if (results.length === 0) {
    generateUserInterface(interface,database);
  } else {
    generateUserInterface(interface,results)
  }
}

function generateUserInterface(InterfaceXP, data){

  Object.keys(InterfaceXP).forEach(interfaceKey => {
    const dataObjectKey = InterfaceXP[interfaceKey]._category + "DB";
    const dataObject = data[dataObjectKey];

    console.log("dataObject length ", Object.keys(dataObject).length);
    console.log(dataObject);

    if (dataObject && Object.keys(dataObject).length > 0) {
      const interfaceCategory = InterfaceXP[interfaceKey]._category;
      const interfaceLabel = InterfaceXP[interfaceKey]._label;
      const row = "." + interfaceCategory;
      const interfaceKit = {
        menu: new Interface(interfaceCategory, interfaceLabel)
      }

      establishInterface(interfaceKit);
      establishCategory(interfaceKit);
      establishList(row, dataObject);
    }
  });

  const wallpaper = {wallpaper: new Interface("wallpaper", "Wallpaper")};
  establishInterface(wallpaper);
  establishCategory(wallpaper);

  initTooltips();
}

//////////////////////////////////////////
// Bouton de restoration de l'Interface //
//////////////////////////////////////////

const interfacer = document.querySelector("#switchInterface");
interfacer.addEventListener("click", function() {switchinterface();});

function switchinterface() {

removeAdditionalChildren("#navBar");
removeAdditionalChildren("#body");

const searchInput = document.querySelector("#searchInput");
searchInput.value = "";
generateUserInterface(interface,database);
}

  /////////////////////////////////////
 // Listener du Moteur de Recherche //
/////////////////////////////////////

document.querySelector("#searchForm").addEventListener("input", function () {
  
  removeAdditionalChildren("#navBar");
  removeAdditionalChildren("#body");

  const searchTerm = document.querySelector("#searchInput").value;
  const searchResults = search(searchTerm);
  
  displayResults(searchResults);
});

/////////////////////
//// Run Program ////
/////////////////////

generateUserInterface(interface,database);
