//variables//
var floatingMenuisOpened = false;
var hiddenNavIsOpened = false;
var isDesktop = false;
var topMenuIsClicked = false;
var vw = document.documentElement.clientWidth;

const me = document.getElementById("me");
const png = document.getElementById("png");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");
const menu = document.getElementById("menu");
const mask = document.querySelector("#mask");
const button = document.getElementById("button-container");
const topMenu = document.getElementById("topMenu");
const hiddenNav = document.getElementById("hidden-nav");

const backToTop = document.getElementById("back-to-top");
const buttonClientProjects = document.getElementById("button-client-projects");
const buttonRatings = document.getElementById("button-ratings");
const buttonHireMe = document.getElementById("button-hire-me");
const buttonSocial = document.getElementById("button-social");

const menuLabel1 = document.getElementById("menuLabel1");
const menuLabel2 = document.getElementById("menuLabel2");
const menuLabel3 = document.getElementById("menuLabel3");
const menuLabel4 = document.getElementById("menuLabel4");

const above = document.getElementById("top");
const middle = document.getElementById("middle");
const bottom = document.getElementById("bottom");

const aboveTop = document.getElementById("top-top");
const middleTop = document.getElementById("middle-top");
const bottomTop = document.getElementById("bottom-top");

const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");
const project3 = document.querySelector("#project3");
const project4 = document.querySelector("#project4");

const black1 = document.querySelector("#black1");
const black2 = document.querySelector("#black2");
const black3 = document.querySelector("#black3");
const black4 = document.querySelector("#black4");

function setup() {
  logo.classList.add("slideright");
  nav.classList.add("slideright");
  menu.classList.add("slideleft");
  logo.classList.remove("slideleft");
  nav.classList.remove("slideleft");
  menu.classList.remove("slideright");
  // Reset My Picture, Scroll symbol(png), set header to left
  me.classList.remove("fade-out");
  me.classList.add("fade-in");
  png.classList.remove("fade-out");
  png.classList.add("fade-in");
  png.classList.add("scroll-down");
  logo.classList.remove("slideright");
  nav.classList.remove("slideright");
  menu.classList.remove("slideleft");
  logo.classList.add("slideleft");
  nav.classList.add("slideleft");
  menu.classList.add("slideright");

  //Hide Floating Menu Items
  backToTop.classList.remove("show-backToTop");
  backToTop.classList.add("hide-backToTop");
  buttonClientProjects.classList.remove("show-buttonClientProjects");
  buttonClientProjects.classList.add("hide-buttonClientProjects");
  buttonRatings.classList.remove("show-buttonRatings");
  buttonRatings.classList.add("hide-buttonRatings");
  buttonHireMe.classList.remove("show-buttonHireMe");
  buttonHireMe.classList.add("hide-buttonHireMe");
  buttonSocial.classList.remove("show-buttonSocial");
  buttonSocial.classList.add("hide-buttonSocial");

  // Hide hidden Nav
  hiddenNav.classList.add("hide-hidden-nav");
  hiddenNav.classList.remove("show-hidden-nav");

  // Top Menu Default - closed
  middleTop.classList.remove("slideright");
  middleTop.classList.add("slideleft");
  aboveTop.classList.remove("skew-down_above");
  aboveTop.classList.add("skew-up_above");
  bottomTop.classList.remove("skew-up_bottom");
  bottomTop.classList.add("skew-down_bottom");
}

// Functions

function scrollEvents() {
  const scrolled = window.scrollY;
  if (scrolled == 0) {
    logo.classList.remove("slideright");
    nav.classList.remove("slideright");
    menu.classList.remove("slideleft");
    logo.classList.add("slideleft");
    nav.classList.add("slideleft");
    menu.classList.add("slideright");
  }
  if (scrolled) {
    logo.classList.add("slideright");
    nav.classList.add("slideright");
    menu.classList.add("slideleft");
    logo.classList.remove("slideleft");
    nav.classList.remove("slideleft");
    menu.classList.remove("slideright");
    hiddenNavIsOpened = false;
  }
  if (scrolled >= 150) {
    me.classList.add("fade-out");
    me.classList.remove("fade-in");
    png.classList.remove("scroll-down");
    png.classList.remove("fade-in");
    png.classList.add("fade-out");
  } else {
    me.classList.remove("fade-out");
    me.classList.add("fade-in");
    png.classList.remove("fade-out");
    png.classList.add("fade-in");
    png.classList.add("scroll-down");

    hiddenNav.classList.remove("show-hidden-nav");
    hiddenNav.classList.add("hide-hidden-nav");

    if (floatingMenuisOpened) {
      middle.classList.add("slideleft");
      middle.classList.remove("slideright");
      above.classList.remove("skew-down_above");
      above.classList.add("skew-up_above");
      bottom.classList.remove("skew-up_bottom");
      bottom.classList.add("skew-down_bottom");
      mask.classList.remove("mask-appear");
      mask.classList.add("mask-disappear");

      backToTop.classList.remove("show-backToTop");
      backToTop.classList.add("hide-backToTop");
      buttonClientProjects.classList.remove("show-buttonClientProjects");
      buttonClientProjects.classList.add("hide-buttonClientProjects");
      buttonRatings.classList.remove("show-buttonRatings");
      buttonRatings.classList.add("hide-buttonRatings");
      buttonHireMe.classList.remove("show-buttonHireMe");
      buttonHireMe.classList.add("hide-buttonHireMe");
      buttonSocial.classList.remove("show-buttonSocial");
      buttonSocial.classList.add("hide-buttonSocial");

      menuLabel1.classList.remove("show-iconHolderName");
      menuLabel1.classList.add("hide-iconHolderName");
      menuLabel2.classList.remove("show-iconHolderName");
      menuLabel2.classList.add("hide-iconHolderName");
      menuLabel3.classList.remove("show-iconHolderName");
      menuLabel3.classList.add("hide-iconHolderName");
      menuLabel4.classList.remove("show-iconHolderName");
      menuLabel4.classList.add("hide-iconHolderName");
      floatingMenuisOpened = false;
    }
  }
  if (scrolled >= 300) {
    black1.classList.remove("lighten");
    black1.classList.add("darken");
  } else {
    black1.classList.remove("darken");
    black1.classList.add("lighten");
  }

  if (scrolled >= 1100) {
    black1.classList.remove("darken");
    black1.classList.add("lighten");

    black2.classList.add("darken");
    black2.classList.remove("lighten");
  } else {
    black2.classList.remove("darken");
    black2.classList.add("lighten");
  }

  if (scrolled >= 1650) {
    black2.classList.remove("darken");
    black2.classList.add("lighten");

    black3.classList.add("darken");
    black3.classList.remove("lighten");
  } else {
    black3.classList.remove("darken");
    black3.classList.add("lighten");
  }

  if (scrolled >= 2350) {
    black3.classList.remove("darken");
    black3.classList.add("lighten");

    black4.classList.add("darken");
    black4.classList.remove("lighten");
  } else {
    black4.classList.remove("darken");
    black4.classList.add("lighten");
  }

  if (scrolled >= 3000) {
    black4.classList.remove("darken");
    black4.classList.add("lighten");
  }
}

function TopMenu() {
  if (!topMenuIsClicked) {
    middleTop.classList.add("slideright");
    middleTop.classList.remove("slideleft");
    aboveTop.classList.add("skew-down_above");
    aboveTop.classList.remove("skew-up_above");
    bottomTop.classList.add("skew-up_bottom");
    bottomTop.classList.remove("skew-down_bottom");
    if (vw < 1000) {
      hiddenNav.classList.remove("hide-hidden-nav");
      hiddenNav.classList.add("show-hidden-nav");
    }
  } else {
    middleTop.classList.remove("slideright");
    middleTop.classList.add("slideleft");
    aboveTop.classList.remove("skew-down_above");
    aboveTop.classList.add("skew-up_above");
    bottomTop.classList.remove("skew-up_bottom");
    bottomTop.classList.add("skew-down_bottom");
    if (vw < 1000) {
      hiddenNav.classList.add("hide-hidden-nav");
      hiddenNav.classList.remove("show-hidden-nav");
    }
  }
  topMenuIsClicked = !topMenuIsClicked;
}

function FloatingMenu() {
  if (!floatingMenuisOpened) {
    middle.classList.add("slideright");
    middle.classList.remove("slideleft");
    above.classList.add("skew-down_above");
    above.classList.remove("skew-up_above");
    bottom.classList.add("skew-up_bottom");
    bottom.classList.remove("skew-down_bottom");
    mask.classList.add("mask-appear");
    mask.classList.remove("mask-disappear");

    backToTop.classList.add("show-backToTop");
    backToTop.classList.remove("hide-backToTop");
    buttonClientProjects.classList.add("show-buttonClientProjects");
    buttonClientProjects.classList.remove("hide-buttonClientProjects");
    buttonRatings.classList.add("show-buttonRatings");
    buttonRatings.classList.remove("hide-buttonRatings");
    buttonHireMe.classList.add("show-buttonHireMe");
    buttonHireMe.classList.remove("hide-buttonHireMe");
    buttonSocial.classList.add("show-buttonSocial");
    buttonSocial.classList.remove("hide-buttonSocial");

    menuLabel1.classList.add("show-iconHolderName");
    menuLabel1.classList.remove("hide-iconHolderName");
    menuLabel2.classList.add("show-iconHolderName");
    menuLabel2.classList.remove("hide-iconHolderName");
    menuLabel3.classList.add("show-iconHolderName");
    menuLabel3.classList.remove("hide-iconHolderName");
    menuLabel4.classList.add("show-iconHolderName");
    menuLabel4.classList.remove("hide-iconHolderName");
  } else {
    middle.classList.add("slideleft");
    middle.classList.remove("slideright");
    above.classList.remove("skew-down_above");
    above.classList.add("skew-up_above");
    bottom.classList.remove("skew-up_bottom");
    bottom.classList.add("skew-down_bottom");
    mask.classList.remove("mask-appear");
    mask.classList.add("mask-disappear");

    backToTop.classList.remove("show-backToTop");
    backToTop.classList.add("hide-backToTop");
    buttonClientProjects.classList.remove("show-buttonClientProjects");
    buttonClientProjects.classList.add("hide-buttonClientProjects");
    buttonRatings.classList.remove("show-buttonRatings");
    buttonRatings.classList.add("hide-buttonRatings");
    buttonHireMe.classList.remove("show-buttonHireMe");
    buttonHireMe.classList.add("hide-buttonHireMe");
    buttonSocial.classList.remove("show-buttonSocial");
    buttonSocial.classList.add("hide-buttonSocial");

    menuLabel1.classList.remove("show-iconHolderName");
    menuLabel1.classList.add("hide-iconHolderName");
    menuLabel2.classList.remove("show-iconHolderName");
    menuLabel2.classList.add("hide-iconHolderName");
    menuLabel3.classList.remove("show-iconHolderName");
    menuLabel3.classList.add("hide-iconHolderName");
    menuLabel4.classList.remove("show-iconHolderName");
    menuLabel4.classList.add("hide-iconHolderName");
  }
  floatingMenuisOpened = !floatingMenuisOpened;
}

function hiddenSelected() {
  hiddenNav.classList.add("hide-hidden-nav");
  hiddenNav.classList.remove("show-hidden-nav");
}

function startFunction() {
  window.addEventListener("scroll", scrollEvents);
  button.addEventListener("click", FloatingMenu);
  hiddenNav.addEventListener("click", hiddenSelected);
}

function stopFunction() {
  window.removeEventListener("scroll", scrollEvents);
  button.removeEventListener("click", FloatingMenu);
  hiddenNav.removeEventListener("click", hiddenSelected);
}

function main() {
  setup();
  if (vw < 1000) {
    startFunction();
  } else {
    stopFunction();
  }
}

//--------------------working part-----------//
topMenu.addEventListener("click", TopMenu);
main();

window.addEventListener("resize", function (event) {
  vw = document.documentElement.clientWidth;
  main();
});
