// variables navigation

let btnOpenClose = document.querySelector(".btn__toggle"),
  itemLinks = document.querySelectorAll(".link__item");

// for add event for all element with one forEch

let addEventOnElement = (eles, type, opre) => {
  if (eles.length > 1) {
    eles.forEach((ele) => {
      ele.addEventListener(type, opre);
    });
  } else {
    eles.addEventListener(type, opre);
  }
};

// add aevent when click button

addEventOnElement(btnOpenClose, "click", () => {
  toggleFunct(btnOpenClose);
});

// function for remove nav when click on one of this links

let removeAction = () => {
  btnOpenClose.classList.remove("active");
};

// add event click on all of this links with fuctions

addEventOnElement(itemLinks, "click", removeAction);

// function toggle one element or more and add class active

function toggleFunct(...eles) {
  eles.forEach((ele) => {
    ele.classList.toggle("active");
  });
}

/*
  ## headder active when on scroll down more than 80px
*/
// var header
let header = document.querySelector(".header");

// fuction for add and remove active

let headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElement(window, "scroll", headerActive);

/*
# filter book Chapter
*/

let cardItems = document.querySelectorAll(".card__preview");
let box = cardItems[0];
let filterationTap = function () {
  box.classList.remove("active");
  this.classList.toggle("active");
  box = this;
};
addEventOnElement(cardItems, "click", filterationTap);
