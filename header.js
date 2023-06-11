const layout = $(".layout");
const header = $(".header");
const nav_setting = $(".nav_setting");
const settings__menu = $(".settings__menu");

const search = $(".search");
const searchBtn = $(".search_icon");
const inputSeacrh = $(".input_search");
const searchSuggestions = $(".search__suggestion");
const iconCloseSearch = $(".icon--close");
// show mennu setting in header
const HeaderEvent = {
  // handle hander setting in navbar right
  header_setting: function () {
    nav_setting.addEventListener("click", function (e) {
      if (
        nav_setting.className === "nav_setting" ||
        nav_setting.className === "nav_setting active"
      ) {
        nav_setting.classList.toggle("active");
      }
    });

    settings__menu.addEventListener("click", function () {
      if (nav_setting.className === "nav_setting active") {
        nav_setting.classList.remove("active");
      }
    });

    window.addEventListener("click", function (e) {
      if (
        nav_setting.className === "nav_setting active" &&
        !e.target.closest(".nav_setting, .settings__menu")
      ) {
        nav_setting.classList.remove("active");
      }
    });
  },

  // handle click icon close in box input
  IconClose: function () {
    iconCloseSearch.addEventListener("click", function () {
      inputSeacrh.value = "";
    });
  },

  // handle click input search -> show search suggestion
  header_search: function () {
    const _this = this;

    inputSeacrh.oninput = function (e) {
      if (e.target.value === "") {
        searchBtn.disabled = true;
        iconCloseSearch.setAttribute("style", "display: none");
      } else {
        searchBtn.disabled = false;
        iconCloseSearch.setAttribute("style", "display: block");
        _this.IconClose();
      }
    };
  },

  show_suggestions: function (e) {
    if (e.target.closest(".search")) {
      search.classList.add("active");
    }

    window.addEventListener("click", function (event) {
      if (
        search.className === "search active" &&
        !event.target.closest(".search, .search__suggestion")
      ) {
        search.classList.remove("active");
      }
    });
  },

  handle_search: function () {
    const _this = this;
    search.addEventListener("click", function (e) {
      searchBtn.disabled = true;
      if (e.target.closest(".search")) {
        _this.header_search();
        _this.show_suggestions(e);
      }
    });
  },

  handle_scroll: function () {
    layout.addEventListener("scroll", function () {
      let y = layout.scrollTop.toFixed();
      if (y > 0) {
        header.style.setProperty("--header-scroll-bottom", "0px");
      } else {
        header.style.setProperty("--header-scroll-bottom", "100px");
      }
    });
  },

  start: function () {
    this.header_setting();
    this.handle_search();
    this.handle_scroll();
  },
};

HeaderEvent.start();
