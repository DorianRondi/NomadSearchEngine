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

// Modifiez cette classe selon vos besoin //
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

// Respectez l'architecture décrite dans la documentation //
const interface = {};
const database = {}

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
  
  if(Interface._category == "wallpaper"){
    const button = document.createElement("button");
    button.id = "zoom";
    button.classList.add("btn", "btn-outline-light", "btn-sm", "darker", "mb-3", "ms-3");
    button.innerText = "Zoom";
    button.addEventListener("click", function() {zoomWallpaper();});
    full.appendChild(button);
  }
}

// Modifiez cette fonction pour modifier l'affichage des Cards //
// Ne pas modifier les constantes précédents cardBody sous peine de perdre la cohérence de l'affichage //
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
    const dataObjectKey = interface[interfaceKey]._category;
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
    const dataObjectKey = InterfaceXP[interfaceKey]._category;
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

///////////////////
// Bouton Switch //
///////////////////

function switchWallpaper() {
  location.reload()
}

/////////////////
// Bouton Zoom //
/////////////////

function zoomWallpaper() {
  const bodyZoom = document.querySelector(".wallpaper");
  const currentSize = window.getComputedStyle(bodyZoom).getPropertyValue("background-size");

  switch (currentSize) {
    case "cover":
      bodyZoom.style.backgroundSize = "contain";
      break;
    case "contain":
      bodyZoom.style.backgroundSize = "initial";
      break;
    default:
      bodyZoom.style.backgroundSize = "cover";
      break;
  }
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
