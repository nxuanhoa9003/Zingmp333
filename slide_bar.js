const sliderBar = $(".slidebar");
const btnExpanded = $(".btn-expanded");
const headerRespon = $(".header");
const containerRespon = $(".container");
const listItem = $$(".list--item span");
function HildeShowElementSliderBar(mode1, mode2, mode3, mode4) {
  Array.from(listItem).forEach((e) => {
    e.style.display = mode1;
  });
  Array.from($$(".list--item")).forEach((e) => {
    if (e.querySelector(".btn-play")) {
      e.addEventListener("mouseover", () => {
        e.querySelector(".btn-play").style.display = mode3 || "flex";
      });

      e.addEventListener("mouseout", () => {
        e.querySelector(".btn-play").style.display = mode4 || "none";
      });
    }
  });

  $(".footer__lib--title").style.display = mode1;
  $(".footer__banner").style.display = mode2;
  $(".slidebar__addplay-play-list").style.display = mode1;
}

function sliderBarBig() {
  btnExpanded.style.display = "none";
  $(".slidebar__logo").style.width = "240px";
  $(".zmp3__logo-img").style.width = "120px";
  $(".slidebar__logo").style.padding = "0 25px 0 28px";
  $(".slidebar__logo").style.justifyContent = "center";
  $(".zmp3__logo-img").style.setProperty(
    "--img-logo-mp3",
    "url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-light.svg)"
  );
}

function sliderBarSmall() {
  $(".slidebar__logo").style.width = "70px";
  $(".zmp3__logo-img").style.width = "70px";
  $(".slidebar__logo").style.padding = "0";
  $(".slidebar__logo").style.justifyContent = "center";
  $(".zmp3__logo-img").style.setProperty(
    "--img-logo-mp3",
    "url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.32/static/media/icon_zing_mp3_60.f6b51045.svg)"
  );
}

function setWidthSliderBar(currentWidth) {
  if (currentWidth < 1132) {
    sliderBar.style.backgroundColor = "var(--sidebar-popup-bg)";
    sliderBar.style.width = "70px";
    btnExpanded.style.display = "flex";
    HildeShowElementSliderBar("none", "none", "none");
    sliderBarSmall();
    headerRespon.style.left = "70px";
    headerRespon.style.setProperty("--header-width", "calc(100% - 70px)");
    containerRespon.style.left = "70px";
    containerRespon.style.width = "calc(100% - 70px)";
    $(".player-music").style.bottom = "0px";
  } else {
    sliderBar.style.backgroundColor = "var(--sidebar-bg)";
    headerRespon.style.left = "240px";
    headerRespon.style.setProperty("--header-width", "calc(100% - 240px)");
    containerRespon.style.left = "240px";
    containerRespon.style.width = "calc(100% - 240px)";
    sliderBar.style.width = "240px";
    btnExpanded.style.display = "none";
    HildeShowElementSliderBar("flex", "block", "flex", "none");
    sliderBarBig();
    $(".player-music").style.bottom = "0px";
  }

  if (currentWidth <= 767) {
    sliderBar.style.width = "100%";
    containerRespon.style.left = "0";
    containerRespon.style.width = "100vw";
    btnExpanded.style.display = "none";
    headerRespon.style.left = "0px";
    headerRespon.style.setProperty("--header-width", "100%");
    Array.from(listItem).forEach((e) => {
      e.className !== "radio--live" && (e.style.display = "flex");
    });

    $(".player-music").style.bottom = "50px";
  }
}

setWidthSliderBar(window.innerWidth);
window.addEventListener("resize", () => {
  setWidthSliderBar(window.innerWidth);
});

btnExpanded.onclick = () => {
  if (sliderBar.offsetWidth === 70) {
    sliderBar.style.width = "240px";

    sliderBarBig();
    HildeShowElementSliderBar("flex", "block", "flex", "none");
    btnExpanded.style.display = "flex";
    btnExpanded
      .querySelector("i")
      .classList.replace("fa-angle-right", "fa-angle-left");
    sliderBar.style.zIndex = "100";
  } else {
    sliderBar.style.width = "70px";
    sliderBarSmall();
    HildeShowElementSliderBar("none", "none", "none");

    btnExpanded
      .querySelector("i")
      .classList.replace("fa-angle-left", "fa-angle-right");
  }
};
