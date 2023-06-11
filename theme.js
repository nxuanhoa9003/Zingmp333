const ThemeBtn = $(".nav_theme");
const ThemedataLocal = JSON.parse(localStorage.getItem(keyStorage)) || {};
const theme = {
  themeData: [
    {
      headTile: "Dynamic",
      lisImageColor: [
        {
          title: "London",
          theme: "london",
          image: "./assets/theme/Dynamic/london.png",
          imageBG: "./assets/theme/Dynamic/LondonBG.jpg",
          codeColorBG: "",
        },
        {
          title: "Sáng Tối",
          theme: "lightdark",
          image: "./assets/theme/Dynamic/dynamic-light-dark-1.jpg",
          imageBG: "",
          codeColorBG: "#1e1e1e",
        },
        {
          title: "Xanh Da Trời",
          theme: "blue-light",
          image: "./assets/theme/Dynamic/dynamic-blue.jpg",
          imageBG: "",
          codeColorBG: "#0f1a2e",
        },
        {
          title: "Hồng",
          theme: "pink",
          image: "./assets/theme/Dynamic/dynamic-pink.jpg",
          imageBG: "",
          codeColorBG: "#411636",
        },
        {
          title: "Nâu",
          theme: "brown",
          image: "./assets/theme/Dynamic/dynamic-brown.jpg",
          imageBG: "",
          codeColorBG: "#251b18",
        },
      ],
    },

    {
      headTile: "Chủ đề",
      lisImageColor: [
        {
          title: "XONE",
          theme: "xone",
          image: "./assets/theme/Other/xone.jpg",
          imageBG: "./assets/theme/Other/xone-bg.jpg",
          codeColorBG: "",
        },
        {
          title: "Zing Music Awards",
          theme: "zma",
          image: "./assets/theme/Other/zma.jpg",
          imageBG: "./assets/theme/Other/zma.svg",
          codeColorBG: "",
        },
        {
          title: "Tháp Eiffel",
          theme: "eiffel",
          image: "./assets/theme/Other/eiffel.jpg",
          imageBG: "./assets/theme/Other/eiffel-bg.jpg",
          codeColorBG: "",
        },
      ],
    },

    {
      headTile: "Nghệ Sĩ",
      lisImageColor: [
        {
          title: "Jack",
          theme: "jack",
          image: "./assets/theme/Artist/jack.jpg",
          imageBG: "./assets/theme/Artist/jack_bg.jpg",
        },
        {
          title: "IU",
          theme: "iu",
          image: "./assets/theme/Artist/iu.jpg",
          imageBG: "./assets/theme/Artist/iu-bg.jpg",
        },
        {
          title: "Ji Chang Wook",
          theme: "ji-chang-wook",
          image: "./assets/theme/Artist/ji-chang-wook.jpg",
          imageBG: "./assets/theme/Artist/ji-chang-wook-bg.jpg",
        },
        {
          title: "Lisa",
          theme: "lisa",
          image: "./assets/theme/Artist/lisa.jpg",
          imageBG: "./assets/theme/Artist/lisa-bg.jpg",
        },
        {
          title: "Jennie Kim",
          theme: "jennie",
          image: "./assets/theme/Artist/jennie.jpg",
          imageBG: "./assets/theme/Artist/jennie-bg.jpg",
        },
        {
          title: "Jisoo",
          theme: "jisoo",
          image: "./assets/theme/Artist/jisoo.jpg",
          imageBG: "./assets/theme/Artist/jisoo-bg.jpg",
        },
        {
          title: "Rosé",
          theme: "rose",
          image: "./assets/theme/Artist/rose.jpg",
          imageBG: "./assets/theme/Artist/rose-bg.jpg",
        },
      ],
    },

    {
      headTile: "Màu Tối",
      lisImageColor: [
        {
          title: "Tối",
          theme: "dark",
          image: "./assets/theme/Dark/dark.jpg",
          imageBG: "",
          codeColorBG: "#1e1e1e",
        },
        {
          title: "Tím",
          theme: "purple",
          image: "./assets/theme/Dark/purple.jpg",
          imageBG: "",
          codeColorBG: "#170f23",
        },
        {
          title: "Xanh Đậm",
          theme: "blue",
          image: "./assets/theme/Dark/blue.jpg",
          imageBG: "",
          codeColorBG: "#0f1a2e",
        },
        {
          title: "Xanh Biển",
          theme: "blue-light",
          image: "./assets/theme/Dark/blue-light.jpg",
          imageBG: "",
          codeColorBG: "#162a45",
        },
        {
          title: "Xanh Lá",
          theme: "green",
          image: "./assets/theme/Dark/green.jpg",
          imageBG: "",
          codeColorBG: "#142922",
        },
        {
          title: "Nâu",
          theme: "brown",
          image: "./assets/theme/Dark/brown.jpg",
          imageBG: "",
          codeColorBG: "#251b18",
        },
        {
          title: "Hồng",
          theme: "pink",
          image: "./assets/theme/Dark/pink.jpg",
          imageBG: "",
          codeColorBG: "#411636",
        },
        {
          title: "Đỏ",
          theme: "red",
          image: "./assets/theme/Dark/red.jpg",
          imageBG: "",
          codeColorBG: "#2e0f10",
        },
      ],
    },
    {
      headTile: "Màu Sáng",
      lisImageColor: [
        {
          title: "Sáng",
          theme: "light",
          image: "./assets/theme/Light/light.jpg",
          imageBG: "",
          codeColorBG: "#fff",
        },
        {
          title: "Xám",
          theme: "gray",
          image: "./assets/theme/Light/gray.jpg",
          imageBG: "",
          codeColorBG: "#e5e3df",
        },
        {
          title: "Xanh Nhạt",
          theme: "green-light",
          image: "./assets/theme/Light/green-light.jpg",
          imageBG: "",
          codeColorBG: "#ced9d9",
        },
        {
          title: "Hồng Cánh Sen",
          theme: "pink-light",
          image: "./assets/theme/Light/pink-light.jpg",
          imageBG: "",
          codeColorBG: "#f9dbdb",
        },
      ],
    },
  ],

  themeImageBcg: {
    london: "./assets/theme/Dynamic/LondonBG.jpg",
    xone: "./assets/theme/Other/xone-bg.jpg",
    zma: "./assets/theme/Other/zma.svg",
    eiffel: "./assets/theme/Other/eiffel-bg.jpg",
    jack: "./assets/theme/Artist/jack_bg.jpg",
    iu: "./assets/theme/Artist/iu-bg.jpg",
    "ji-chang-wook": "./assets/theme/Artist/ji-chang-wook-bg.jpg",
    lisa: "./assets/theme/Artist/lisa-bg.jpg",
    jennie: "./assets/theme/Artist/jennie-bg.jpg",
    jisoo: "./assets/theme/Artist/jisoo-bg.jpg",
    rose: "./assets/theme/Artist/rose-bg.jpg",
  },

  renderModalTheme: function () {
    const themeZing = $(".themeZing");
    let htmls = "";
    this.themeData.forEach((obj) => {
      htmls += `
          <h3 class="theme--title">${obj.headTile}</h3>
          <ul class="theme__parent--body">
            ${obj.lisImageColor
              .map((item) => {
                return `
                  <li class="theme__body--item">
                    <div class="theme__item--image" name = "${item.title}" theme = "${item.theme}">
                      <img src="${item.image}" alt="" />
                      <div class="theme__item--iccheck">
                        <i class="fa-solid fa-check"></i>
                      </div>
                      <div class="opacity"></div>
                      <div class="theme__image--option">
                          <button class="theme__apply" theme="${item.theme}" name="${item.title}" >Áp dụng</button>
                          <button class="theme__preview"  theme="${item.theme}" >Xem trước</button>
                      </div>
                    </div>

                    <p>${item.title}</p>
                  </li>
              `;
              })
              .join("")}
          </ul>
      `;
    });

    themeZing.innerHTML = `
    <div class="theme__wrapper">
      <div class="theme__head">
        <h3>Giao diện</h3>
        <button class="theme__btn-close">
          <i class="fa-light fa-xmark"></i>
        </button>
      </div>
      <div class="theme__container">
        ${htmls}
      </div>
    </div>
    `;
  },

  handleEventModalTheme: function () {
    const layout = $(".layout");
    const modalTheme = $(".themeZing");
    const themeWrapper = $(".theme__wrapper");
    const themeImages = $$(".theme__item--image");
    const btnClose = $(".theme__btn-close");
    const btnApply = $$(".theme__apply");
    const btnPreview = $$(".theme__preview");
    let checkShow = false;
    let currTheme = document.documentElement.getAttribute("data-theme");

    let currBackground = layout.style.backgroundImage;
    ThemeBtn.onclick = () => {
      modalTheme.style.display = "block";
      checkShow = true;
      const _this = this;

      for (const [index, btn] of btnApply.entries()) {
        btn.onclick = () => {
          const theme = btn.getAttribute("theme");
          const nameTheme = btn.getAttribute("name");
          document.documentElement.setAttribute("data-theme", theme);

          themeImages.forEach((themeImage) => {
            themeImage.getAttribute("name") === nameTheme
              ? themeImage.classList.add("active")
              : themeImage.classList.remove("active");
          });

          Array.from($$(".theme__item--iccheck")).forEach((itemCheck, i) => {
            i !== index && (itemCheck.style.display = "none");
          });
          $$(".theme__item--iccheck")[index].style.display = "flex";

          _this.themeImageBcg[theme]
            ? (layout.style.backgroundImage = `url(${_this.themeImageBcg[theme]})`)
            : (layout.style.backgroundImage = "");
          currTheme = theme;
          currBackground = layout.style.backgroundImage;
          ThemedataLocal["theme"] = theme;
          ThemedataLocal["IndexTheme"] = index;
          ThemedataLocal["themeImageBcg"] = currBackground;
          localStorage.setItem(keyStorage, JSON.stringify(ThemedataLocal));

          btnClose.onclick();
        };
      }

      for (let btn of btnPreview) {
        btn.onclick = () => {
          const theme = btn.getAttribute("theme");
          document.documentElement.setAttribute("data-theme", theme);
          _this.themeImageBcg[theme]
            ? (layout.style.backgroundImage = `url(${_this.themeImageBcg[theme]})`)
            : (layout.style.backgroundImage = "");
        };
      }

      function handelThemeMobile(currentWidth) {
        if (currentWidth <= 1024) {
          themeImages.forEach((themeImg, index) => {
            themeImg.onclick = () => {
              const theme = themeImg.getAttribute("theme");
              const nameTheme = themeImg.getAttribute("name");
              document.documentElement.setAttribute("data-theme", theme);

              themeImages.forEach((themeImage) => {
                themeImage.getAttribute("name") === nameTheme
                  ? themeImage.classList.add("active")
                  : themeImage.classList.remove("active");
              });
              Array.from($$(".theme__item--iccheck")).forEach(
                (itemCheck, i) => {
                  i !== index && (itemCheck.style.display = "none");
                }
              );
              $$(".theme__item--iccheck")[index].style.display = "flex";

              _this.themeImageBcg[theme]
                ? (layout.style.backgroundImage = `url(${_this.themeImageBcg[theme]})`)
                : (layout.style.backgroundImage = "");
              currTheme = theme;
              currBackground = layout.style.backgroundImage;
              ThemedataLocal["theme"] = theme;
              ThemedataLocal["IndexTheme"] = index;
              ThemedataLocal["themeImageBcg"] = currBackground;
              localStorage.setItem(keyStorage, JSON.stringify(ThemedataLocal));
              btnClose.onclick();
            };
          });
        }
      }

      handelThemeMobile(window.innerWidth);
      window.addEventListener("resize", () => {
        handelThemeMobile(window.innerWidth);
      });
    };

    $(".theme-item").onclick = () => {
      ThemeBtn.onclick();
    };

    btnClose.onclick = () => {
      modalTheme.style.display = "none";
      document.documentElement.setAttribute("data-theme", currTheme);
      layout.style.backgroundImage = currBackground;
    };

    modalTheme.addEventListener("click", function (event) {
      if (checkShow && !event.target.closest(".theme__wrapper")) {
        btnClose.onclick();
      }
    });
  },

  start: function () {
    this.renderModalTheme();
    this.handleEventModalTheme();
    document.documentElement.setAttribute(
      "data-theme",
      ThemedataLocal["theme"] || ""
    );
    layout.style.backgroundImage = ThemedataLocal["themeImageBcg"];

    if (ThemedataLocal["IndexTheme"] >= 0) {
      $$(".theme__item--iccheck")[ThemedataLocal["IndexTheme"]].style.display =
        "flex";
      $$(".theme__item--image")[ThemedataLocal["IndexTheme"]].classList.add(
        "active"
      );
    }
  },
};

theme.start();
