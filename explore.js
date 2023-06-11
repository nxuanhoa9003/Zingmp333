function galleryRun() {
  let arr = ["select", "next", "last", "add", "first", "prev"];
  let galleryTags = document.querySelectorAll(".explore__slider--body-item");
  let galleryContainerTags = document.querySelector(".explore__slider");
  let controlPrev = document.querySelector(".slide__btn-prev");
  let controlNext = document.querySelector(".slide__btn-next");

  let indexLast = arr.length - 1;
  let i = arr.length;
  galleryDecre();
  let timeId = setInterval(galleryDecre, 5000);
  function galleryDecre() {
    let select, next, first, last, add, prev;
    i < 0 && (i = indexLast);
    i--;

    select = i;
    select < 0 && (select = indexLast);
    prev = select - 1;
    prev < 0 && (prev = indexLast);
    next = select + 1;
    next > indexLast && (next = 0);
    first = next + 1;
    first > indexLast && (first = 0);
    last = first + 1;
    last > indexLast && (last = 0);
    add = last + 1;
    add > indexLast && (add = 0);

    galleryTags[0].className = `explore__slider--body-item ${arr[select]}`;
    galleryTags[1].className = `explore__slider--body-item ${arr[next]}`;
    galleryTags[2].className = `explore__slider--body-item ${arr[first]}`;
    galleryTags[3].className = `explore__slider--body-item ${arr[last]}`;
    galleryTags[4].className = `explore__slider--body-item ${arr[add]}`;
    galleryTags[5].className = `explore__slider--body-item ${arr[prev]}`;
  }

  function galleryIncre() {
    let select, next, first, last, add, prev;
    i > indexLast && (i = 0);
    i++;

    select = i;
    // console.log(i);
    select > indexLast && (select = 0);

    prev = select - 1;
    prev < 0 && (prev = indexLast);
    next = select + 1;
    next > indexLast && (next = 0);
    first = next + 1;
    first > indexLast && (first = 0);
    last = first + 1;
    last > indexLast && (last = 0);
    add = last + 1;
    add > indexLast && (add = 0);

    //render
    galleryTags[0].className = `explore__slider--body-item ${arr[select]}`;
    galleryTags[1].className = `explore__slider--body-item ${arr[next]}`;
    galleryTags[2].className = `explore__slider--body-item ${arr[first]}`;
    galleryTags[3].className = `explore__slider--body-item ${arr[last]}`;
    galleryTags[4].className = `explore__slider--body-item ${arr[add]}`;
    galleryTags[5].className = `explore__slider--body-item ${arr[prev]}`;
  }

  galleryContainerTags.addEventListener("mouseenter", function () {
    clearInterval(timeId);
    controlPrev.style.opacity = 1;
    controlNext.style.opacity = 1;
    controlPrev.onclick = () => galleryIncre();
    controlNext.onclick = () => galleryDecre();
  });
  galleryContainerTags.addEventListener("mouseleave", function () {
    timeId = setInterval(galleryDecre, 5000);
    controlPrev.style.opacity = 0;
    controlNext.style.opacity = 0;
  });
}

// img gallery list
ListGalleryImg = [
  "./assets/images/slider_explore/a.jpg",
  "./assets/images/slider_explore/b.jpg",
  "./assets/images/slider_explore/c.jpg",
  "./assets/images/slider_explore/d.jpg",
  "./assets/images/slider_explore/e.jpg",
  "./assets/images/slider_explore/f.jpg",
];

// render gallery slides
function renderGallerySlides() {
  return `
  <button class="slide__btn slide__btn-prev">
  <i class="fa-solid fa-chevron-left"></i>
  </button>
  <div class="explore__slider--body">
    ${ListGalleryImg.map((img) => {
      return `<div class="explore__slider--body-item">
        <img src="${img}" alt="" />
      </div>
      `;
    }).join("")}
    
  </div>
  <button class="slide__btn slide__btn-next">
    <i class="fa-solid fa-chevron-right"></i>
  </button>
  `;
}

const SectionCarouselData = {
  // có thể bạn muốn nghe
  sectionFist: [
    {
      title: "Nhóm Nhạc Việt Những Năm 2000",
      desc: "Mây Trắng, Mắt Ngọc, MTV Band...",
      image: "./assets/images/explore__section_1/6a.jpg",
    },

    {
      title: "R&B Thế Hệ Mới",
      desc: "FLO, Q, Fousheé",
      image: "./assets/images/explore__section_1/1a.jpg",
    },

    {
      title: "2000s Band",
      desc: "Westlife, Blue, Atomic Kitten",
      image: "./assets/images/explore__section_1/2a.jpg",
    },

    {
      title: "2000s Pop Rock",
      desc: "Maroon 5, Avril Lavigne, The Fray",
      image: "./assets/images/explore__section_1/3a.jpg",
    },

    {
      title: "2010s Collab",
      desc: "Shawn Mendes, Camila Cabello, P!nk",
      image: "./assets/images/explore__section_1/4a.jpg",
    },
  ],

  sectionSecond: [
    {
      title: "",
      desc: "Ở đây có những bản hit cực chill, vừa nghe vừa feel",
      image: "./assets/images/explore__section_2/1b.jpg",
    },

    {
      title: "",
      desc: "Va vào những giai điệu thư giãn của V-Pop",
      image: "./assets/images/explore__section_2/2b.jpg",
    },
    {
      title: "",
      desc: "Thanh âm Lofi quen mà lạ, lạ mà quen",
      image: "./assets/images/explore__section_2/3b.jpg",
    },
    {
      title: "",
      desc: "Giai điệu để xoa dịu những tổn thương đã qua",
      image: "./assets/images/explore__section_2/4b.jpg",
    },
    {
      title: "",
      desc: `Nhạc Việt "lâu phai" và gây nghiện hoài hoài`,
      image: "./assets/images/explore__section_2/5b.jpg",
    },
  ],

  sectionThree: [
    {
      title: "",
      desc: `Nhạc Sỹ Việt Và Những...`,
      image: "./assets/images/explore__section_2/5b.jpg",
    },
  ],

  sectionRadio: [
    {
      title: "XONE Radio",
      numberView: "110 đang nghe",
      svgCdn: 150,
      imgPrimary: "./assets/images/explore__section_radio/1.jpg",
      imgHost: "./assets/images/explore__section_radio/1a.jpg",
    },
    {
      title: "V-POP",
      numberView: "701 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/2.jpg",
      imgHost: "./assets/images/explore__section_radio/2a.jpg",
    },
    {
      title: "Pladio",
      numberView: "56 đang nghe",
      svgCdn: 158,
      imgPrimary: "./assets/images/explore__section_radio/3.jpg",
      imgHost: "./assets/images/explore__section_radio/3a.jpg",
    },
    {
      title: "Chạm",
      numberView: "92 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/4.jpg",
      imgHost: "./assets/images/explore__section_radio/4a.jpg",
    },
    {
      title: "On Air",
      numberView: "44 đang nghe",
      svgCdn: 170,
      imgPrimary: "./assets/images/explore__section_radio/5.jpg",
      imgHost: "./assets/images/explore__section_radio/5a.jpg",
    },
    {
      title: "Bolero",
      numberView: "167 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/6.jpg",
      imgHost: "./assets/images/explore__section_radio/6a.jpg",
    },
    {
      title: "US-UK",
      numberView: "68 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/7.jpg",
      imgHost: "./assets/images/explore__section_radio/7a.jpg",
    },
    {
      title: "KPOP",
      numberView: "38 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/8.jpg",
      imgHost: "./assets/images/explore__section_radio/8a.jpg",
    },
    {
      title: "Aucostic",
      numberView: "65 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/9.jpg",
      imgHost: "./assets/images/explore__section_radio/9a.jpg",
    },
    {
      title: "Rap Việt",
      numberView: "53 đang nghe",
      svgCdn: 0,
      imgPrimary: "./assets/images/explore__section_radio/10.jpg",
      imgHost: "./assets/images/explore__section_radio/10a.jpg",
    },
  ],

  sectionNewMusic: [
    {
      title: "Mất anh em tìm lại thấy chính mình",
      singer: "Lưu Hương Giang",
      order: 1,
      image: "./assets/images/section_new_music/1.jpg",
      date: "10.05.2023",
    },
    {
      title: "Ghosting",
      singer: "Linh Ka, Kewtiie",
      order: 2,
      image: "./assets/images/section_new_music/2.jpg",
      date: "09.05.2023",
    },
    {
      title: "Chúng Ta Bấy Lâu Nay Là…  (Live Session)",
      singer: "Phạm Quỳnh Anh, Trung Quân",
      order: 3,
      image: "./assets/images/section_new_music/3.jpg",
      date: "10.05.2023",
    },
    {
      title: "Em Với Anh",
      singer: "Catchellers, Huy Vũ",
      order: 4,
      image: "./assets/images/section_new_music/4.jpg",
      date: "10.05.2023",
    },
    {
      title: "Đôi Mươi (Remix)",
      singer: "Hoàng Dũng, GDucky",
      order: 5,
      image: "./assets/images/section_new_music/5.jpg",
      date: "10.05.2023",
    },
    {
      title: "Lời Nói Dối Ngọc Ngà",
      singer: "Hồ Ngọc Hà",
      order: 6,
      image: "./assets/images/section_new_music/6.jpg",
      date: "08.05.2023",
    },
    {
      title: "Tự Yours",
      singer: "SOOBIN",
      order: 7,
      image: "./assets/images/section_new_music/7.jpg",
      date: "10.05.2023",
    },
    {
      title: "Phiêu Nhịp Thở",
      singer: "Phương Ly, Khắc Hưng",
      order: 8,
      image: "./assets/images/section_new_music/8.jpg",
      date: "11.05.2023",
    },
  ],

  sectionFooter: [
    "./assets/images/footer/1.png",
    "./assets/images/footer/2.png",
    "./assets/images/footer/3.png",
    "./assets/images/footer/4.png",
    "./assets/images/footer/5.png",
    "./assets/images/footer/6.png",
    "./assets/images/footer/7.png",
    "./assets/images/footer/8.png",
    "./assets/images/footer/9.png",
    "./assets/images/footer/10.png",
    "./assets/images/footer/11.png",
    "./assets/images/footer/12.png",
    "./assets/images/footer/13.png",
    "./assets/images/footer/14.png",
    "./assets/images/footer/15.png",
    "./assets/images/footer/16.png",
  ],
};

function ExploreRenderCarousel(arr, title) {
  return `
      <div class="explore__channel-section">
        <h3 class="section__title">${title}</h3>
        <div class="section__body">
          <div class="section--carousel">
          ${arr
            .map((obj) => {
              return `<div class="card">
            <div class="card--image">
              <figure>
                <img
                  src="${obj.image}"
                  alt=""
                />
              </figure>

              <div class="opacity">
                <div class="option">
                  <span class="img__option--heart">
                    <i class="fa-light fa-heart"></i>
                  </span>

                  <span class="img__option--play">
                    <i class="fa-sharp fa-regular fa-circle-play"></i>
                  </span>

                  <span class="img__option--more">
                    <i class="fa-thin fa-ellipsis-stroke"></i>
                  </span>
                </div>
              </div>
            </div>

            <div class="card--content">
              <a class="card--content-title" href="#"
                >${obj.title}</a
              >

              <p class="card--content-desc">
              ${obj.desc}
              </p>
            </div>
          </div>
          `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function ExploreRenderRadioSection(arr, title) {
  return `
          <div class="explore__channel-section radio__section">
          <h3 class="section__title">${title}</h3>
          <div class="section__wrapper">
            <div class="section__body">
              <div class="section__body-container">
                ${arr
                  .map((obj) => {
                    return `<div class="radio_card card">
                  <div class="card--image">
                    <svg
                      class="svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        class="svg-circle-bg"
                        stroke="rgba(255, 255, 255, 0.2)"
                        fill="none"
                        cx="50"
                        cy="50"
                        r="48.75"
                        stroke-width="2.5"
                      ></circle>
                      <circle
                        class="svg-circle"
                        stroke="#ff4b4a"
                        fill="none"
                        cx="50"
                        cy="50"
                        r="48.75"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-dasharray="306.3052837250048"
                        stroke-dashoffset="${obj.svgCdn}"
                        style="
                          transition: stroke-dashoffset 850ms ease-in-out
                            0s;
                        "
                      ></circle>
                    </svg>

                    <figure class="image__primary">
                      <img
                        src="${obj.imgPrimary}"
                      />
                      <div class="opacity">
                        <div class="option">
                          <span class="img__option--play">
                            <i
                              class="fa-sharp fa-regular fa-circle-play"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <figure class="image__host">
                      <img
                        src="${obj.imgHost}"
                      />
                    </figure>
                    <figure class="image__label">
                      <img src="./assets/icons/live-tag.svg" />
                    </figure>
                  </div>
                  <div class="card--content radio_card-content">
                    <a class="card--content-title" href="#">${obj.title}</a>

                    <p class="card--content-desc">${obj.numberView}</p>
                  </div>
                </div>`;
                  })
                  .join("")}
                
              </div>
            </div>
          </div>
        </div>
          `;
}

function renderSectionNewMusic(arr, title) {
  return `
          <div class="explore__channel-section new__music">
          <h3 class="section__title">${title}</h3>
          <div class="section__body">
            <div class="section__newmusic--container">
            ${arr
              .map((obj) => {
                return `
                  <div class="media__child">
                  <div class="media__item">
                    <div class="media__left">
                      <div class="card--image">
                        <figure>
                          <img
                            src="${obj.image}"
                            alt=""
                          />
                        </figure>
                        <div class="opacity">
                          <div class="option">
                            <span class="img__option--play">
                              <i
                                class="fa-sharp fa-regular fa-circle-play"
                              ></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="media__content">
                      <div class="media__content-top">
                        <h3 class="media__title">
                          ${obj.title}
                        </h3>
                        <span class="media__subtitle">${obj.singer}</span>
                      </div>

                      <div class="media__content-bottom">
                        <span class="media__order">#${obj.order}</span>
                        <span class="media__date">${obj.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                `;
              })
              .join("")}
              
            </div>
          </div>
        </div>
  `;
}

function renderFooter(arr, title) {
  return `
        <footer class="footer">
          <div class="footer__title">${title}</div>
         <div class="footer__body">
         ${arr
           .map((obj) => {
             return `<div class="footer--item">
                      <figure>
                        <img src="${obj}" alt="" />
                      </figure>
                    </div>`;
           })
           .join("")}
            
            
          </div>
        </footer>
  `;
}

function Explore() {
  return `
  <div class="explore__container">
    <div class="explore__slider">
      ${renderGallerySlides()}
    </div> 
      ${ExploreRenderCarousel(
        SectionCarouselData.sectionFist,
        "Có Thể Bạn Muốn Nghe"
      )}
      
      ${ExploreRenderCarousel(SectionCarouselData.sectionSecond, "Chill")}
      
      ${renderSectionNewMusic(
        SectionCarouselData.sectionNewMusic,
        "BXH Nhạc Mới"
      )}

      ${ExploreRenderRadioSection(
        SectionCarouselData.sectionRadio,
        "Radio Nổi Bật"
      )}

      ${renderFooter(SectionCarouselData.sectionFooter, "đối tác âm nhạc")}

            
  </div>
  `;
}

const explore = document.querySelector(".explore");
explore.innerHTML = Explore();
galleryRun();

// set number of elements when resize creen
function setElementScreen(currentWidth) {
  let arrCard = $$(".section--carousel .card");
  if (currentWidth < 1370) {
    Array.prototype.forEach.call(arrCard, (element) => {
      element.style.width = "25%";
    });
  } else {
    Array.prototype.forEach.call(arrCard, (element) => {
      element.style.width = "20%";
    });
  }

  if (currentWidth < 500) {
    Array.prototype.forEach.call(arrCard, (element) => {
      element.style.width = "calc(100% / 3)";
      element.style.padding = "0 5px";
    });
  }
}

setElementScreen(window.innerWidth);
window.addEventListener("resize", () => {
  setElementScreen(window.innerWidth);
});
