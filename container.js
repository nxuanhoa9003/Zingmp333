// key Storage
const keyStorage = "ZingMusic";
// variables
const Personal = $(".personal");
const slideWrapper = $(".slide__warp");
const playListbody = $(".playlist-body");
const playlistAlbum = $(".personal__container--playlists");
const mvBody = $(".personal__container--mv");
const player = $(".player-music");
const playListMainBody = $(".playlist");
const container = $(".container");

let iconBtnPlay, iconBtnPause, mobileNextSongFrom;
function setIconPlayPauseMoblie(currentWidth) {
  if (player.className.includes("form__player") === false) {
    if (currentWidth < 767) {
      player.classList.add("player--middle");
      mobileNextSongFrom = true;
      iconBtnPlay = "fa-sharp fa-solid fa-play";
      iconBtnPause = "fa-sharp fa-solid fa-pause";
    } else {
      player.classList.remove("player--middle");
      mobileNextSongFrom = false;
      iconBtnPlay = "fa-sharp fa-regular fa-circle-play";
      iconBtnPause = "fa-sharp fa-regular fa-circle-pause";
    }

    if (currentWidth < 500) {
      player.classList.add("player--moblie");
    } else {
      player.classList.remove("player--moblie");
    }
  }
}
setIconPlayPauseMoblie(window.innerWidth);
window.addEventListener("resize", () => {
  setIconPlayPauseMoblie(window.innerWidth);
});

const AppMusic = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isMouse: false,
  isRepeatAll: false,
  isRepeatOne: false,
  isClick: false,
  isCheckList: false,
  currentPlayList: undefined,
  arrSongsRandom: [],
  posSongCrurent: -1,
  bodyItemImagePos: "primary",
  arrflagPlaylistSong: [],
  isCheckPLayList: false,

  config: JSON.parse(localStorage.getItem(keyStorage)) || {}, // objec

  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(keyStorage, JSON.stringify(this.config));
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeatOne = this.config.isRepeatOne || false;
    this.isRepeatAll = this.config.isRepeatAll || false;
    this.currentIndex = this.config.currentIndex || 0;
    this.isCheckPLayList = this.config.isCheckPLayList || false;
    this.currentPlayList =
      this.config.currentPlayList >= 0
        ? this.config.currentPlayList
        : undefined;
    this.isCheckList = this.config.isCheckList || false;
    this.arrflagPlaylistSong = this.config.indexflagPlaylistSong || [];
  },

  // set  property after load config
  setPropertyAfterLoad: function () {
    this.isRandom && ($(".btn--shuffle").style.color = "var(--purple-primary)");
    (this.isRepeatOne || this.isRepeatAll) &&
      ($(".btn--repeat").style.color = "var(--purple-primary)");
    this.isRepeatOne &&
      $(".btn--repeat i").classList.add("fa-arrows-repeat-1") &&
      $(".btn--repeat i").remove("fa-arrows-repeat");
    this.config.Album !== undefined && this.defineProperties(this.config.Album);
    this.config.Album !== undefined && this.handleEventMusic(this.config.Album);
    if (this.isCheckList) {
      player.classList.add("active");
    }
    if (this.isCheckPLayList === true) {
      if ($(".personal").className.includes("active")) {
        $$(".playlists--body-child:not(:first-child)")[
          this.currentPlayList
        ].click();
      }
    }

    if (player.className.includes("active")) {
      (
        $(`.playlist__ContentMain--Song.${this.bodyItemImagePos}`) ||
        $(".playlist-body.primary")
      )
        .querySelectorAll(".playlist-body--item")
        [this.currentIndex].querySelector(".img--icon i").style.display =
        "block";

      (
        $(`.playlist__ContentMain--Song.${this.bodyItemImagePos}`) ||
        $(".playlist-body.primary")
      )
        .querySelectorAll(".playlist-body--item")
        [this.currentIndex].querySelector(".img--icon")
        .style.setProperty("background-color", "var(--dark-alpha-50)");
    }
  },

  ListMusic: [
    {
      song: "Hối Hận Trong Anh",
      singer: "Tuấn Hưng",
      path: "./assets/music/music_sing/hoi_han_trong_anh_tuan_hung.mp3",
      thumbnail: "./assets/music/image_sing/tuan_hung.jpg",
    },
    {
      song: "Anh Khác Hay Em Khác",
      singer: "Khắc Việt",
      path: "./assets/music/music_sing/Anh-Khac-Hay-Em-Khac-Khac-Viet.mp3",
      thumbnail: "./assets/music/image_sing/khac_viet.jpg",
    },
    {
      song: "Chạm Khẽ Tim Anh Một Chút",
      singer: "Noo Phước Thịnh",
      path: "./assets/music/music_sing/cham-khe-tim-anh-mot-chut-noo-phuoc-thinh.mp3",
      thumbnail: "./assets/music/image_sing/noo_phuoc_thinh.jpg",
    },
    {
      song: "Chưa Bao Giờ",
      singer: "Hà Anh Tuấn",
      path: "./assets/music/music_sing/chua-bao-gio_ha_anh_tuan.mp3",
      thumbnail: "./assets/music/image_sing/ha_anh_tuan.jpg",
    },
    {
      song: "Điều Em Lo Sợ",
      singer: "Hiền Thục",
      path: "./assets/music/music_sing/dieu_em_lo_so_hien_thuc.mp3",
      thumbnail: "./assets/music/image_sing/hien_thuc.jpg",
    },
    {
      song: "Kẻ Đứng Sau Tình Yêu",
      singer: "Cẩm Ly",
      path: "./assets/music/music_sing/ke_dung_sau_tinh_yeu_cam_ly.mp3",
      thumbnail: "./assets/music/image_sing/cam_ly.jpg",
    },
    {
      song: "Thành Phố Buồn",
      singer: "Đàm Vĩnh Hưng",
      path: "./assets/music/music_sing/thanh_pho_buon_dam_vinh_hung.mp3",
      thumbnail: "./assets/music/image_sing/dam_vinh_hung.jpg",
    },
    {
      song: "Như Một Giấc Mơ",
      singer: "Mỹ Tâm",
      path: "./assets/music/music_sing/nhu_mot_giac_mo_my_tam.mp3",
      thumbnail: "./assets/music/image_sing/my_tam.jpg",
    },
    {
      song: "Tháng Tư Là Lời Nói Dối Của Em",
      singer: "Hà Anh Tuấn",
      path: "./assets/music/music_sing/Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
      thumbnail: "./assets/music/image_sing/ha_anh_tuan_2.jpg",
    },
    {
      song: "Người Tình Mùa Đông",
      singer: "Hòa Minzy",
      path: "./assets/music/music_sing/nguoi-tinh-mua-dong-hoaminzy-cover.mp3",
      thumbnail: "./assets/music/image_sing/hoa_minzy.jpg",
    },
    {
      song: "Người Ấy",
      singer: "Trịnh Thăng Bình",
      path: "./assets/music/music_sing/Nguoi-Ay-Trinh-Thang-Binh.mp3",
      thumbnail: "./assets/music/image_sing/trinh_thang_binh.jpg",
    },
    {
      song: "Xin Đừng Chạm Vào Nhau",
      singer: "Duy Mạnh",
      path: "./assets/music/music_sing/xin_dung_cham_vao_nhau_duy_manh.mp3",
      thumbnail: "./assets/music/image_sing/duy_manh.jpeg",
    },
    {
      song: "Thành Phố Buồn",
      singer: "Đàm Vĩnh Hưng",
      path: "./assets/music/music_sing/thanh_pho_buon_dam_vinh_hung.mp3",
      thumbnail: "./assets/music/image_sing/dam_vinh_hung.jpg",
    },
    {
      song: "Chiếc Khăn Gió Ấm",
      singer: "Khánh Phương",
      path: "./assets/music/music_sing/Chiec-Khan-Gio-Am-Khanh-Phuong.mp3",
      thumbnail: "./assets/music/image_sing/khanh_phuong.jpg",
    },
    {
      song: "Khi Người Mình Yêu Khóc",
      singer: "Phan Mạnh Quỳnh",
      path: "./assets/music/music_sing/Khi-Nguoi-Minh-Yeu-Khoc-Phan-Manh-Quynh.mp3",
      thumbnail: "./assets/music/image_sing/phan_manh_quynh.jpg",
    },
    {
      song: "Em Là Kẻ Đáng Thương",
      singer: "Phát Huy",
      path: "./assets/music/music_sing/em-la-ke-dang-thuong-phat-huy.mp3",
      thumbnail: "./assets/music/image_sing/phat_huy_elkdt.jpg",
    },
    {
      song: "Thương Em Đến Già",
      singer: "Lê Bảo Bình",
      path: "./assets/music/music_sing/thuong_em_den_gia_le_bao_binh.mp3",
      thumbnail: "./assets/music/image_sing/le_bao_binh.jpg",
    },
    {
      song: "Nơi Này Có Anh",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/music_sing/noi_nay_co_anh_son_tung.mp3",
      thumbnail: "./assets/music/image_sing/son_tung.jpg",
    },
    {
      song: "Nụ Cười Xuân",
      singer: "Hương Ly",
      path: "./assets/music/music_sing/nu_cuoi_xuan_huong_ly.mp3",
      thumbnail: "./assets/music/image_sing/huong_ly.jpg",
    },
    {
      song: "Mộng Uyên Ưonwg Hồ Điệp",
      singer: "Dương Edward",
      path: "./assets/music/music_sing/Mong-Uyen-Uong-Ho-Diep-Duong-Edward.mp3",
      thumbnail: "./assets/music/image_sing/duong_edward.jpg",
    },
    {
      song: "Waiting For You",
      singer: "MONO",
      path: "./assets/music/music_sing/Waiting_For_You_mono.mp3",
      thumbnail: "./assets/music/image_sing/mono.jpg",
    },
    {
      song: "Vĩnh Biệt Màu Xanh",
      singer: "Phương Phương Thảo",
      path: "./assets/music/music_sing/vinh-biet-mau-xanh-phuong-phuong-thao.mp3",
      thumbnail: "./assets/music/image_sing/phuong_phuong_thao.jpeg",
    },
    {
      song: "Gặp Mẹ Trong Mơ",
      singer: "Thùy Chi",
      path: "./assets/music/music_sing/gap_me_trong_mo_thuy_chi.mp3",
      thumbnail: "./assets/music/image_sing/thuy_chi.jpg",
    },
    {
      song: "Phía Sau Một Cô Gái",
      singer: "Soobin Hoàng Sơn",
      path: "./assets/music/music_sing/phia-sau-mot-co-gai-sobin-hoang-son.mp3",
      thumbnail: "./assets/music/image_sing/sobin_hoangson.jpg",
    },
    {
      song: "Missing You",
      singer: "Phương Ly",
      path: "./assets/music/music_sing/missing_you_phuong_ly.mp3",
      thumbnail: "./assets/music/image_sing/phuong_ly.jpg",
    },
  ],

  PlayListAlbumData: [
    {
      title: "Nhạc Hot TikTok",
      singer: "Nhiều ca sĩ",
      background: "./assets/music_child_remix/images/tik_tok.jpg",
      numberLikes: "50k người yêu thích",
      listSongs: [
        {
          song: "Con Tim Không Đổi Thay",
          singer: "Dee Trần",
          path: "./assets/music_child_remix/music/Con-Tim-Khong-Doi-Thay-Remix-Ver-by-HuyD-Dee-Tran.mp3",
          thumbnail:
            "./assets/music_child_remix/images/dee_tran_con_tim_khong_doi_thay.jpg",
        },

        {
          song: "Khúc Nhạc Vui",
          singer: "Hà Nhi",
          path: "./assets/music_child_remix/music/khuc_nhac_vui.mp3",
          thumbnail: "./assets/music_child_remix/images/ha_nhi.jpg",
        },

        {
          song: "Cô Đơn Trên Sofa",
          singer: "Trung Quân Idol",
          path: "./assets/music_child_remix/music/co-don-tren-sofa.mp3",
          thumbnail: "./assets/music_child_remix/images/trung-quan-idol.jpg",
        },

        {
          song: "Lạc Chốn Hồng Trần",
          singer: "Lã Phong Lâm",
          path: "./assets/music_child_remix/music/Lac-Chon-Hong-Tran-Dai-Meo-Remix-La-Phong-Lam.mp3",
          thumbnail: "./assets/music_child_remix/images/la_phong_lam.jpg",
        },

        {
          song: "Nếu Em Không Về",
          singer: "Song Luân",
          path: "./assets/music_child_remix/music/Neu-Em-Khong-Ve-Remix-Song-Luan-Cong-Thanh-Remix-Minh-TienL-Song-Luan-Minh-TienL.mp3",
          thumbnail: "./assets/music_child_remix/images/song_luan.jpg",
        },

        {
          song: "Là Anh",
          singer: "Phạm Lịch",
          path: "./assets/music_child_remix/music/la-anh-pham-lich.mp3",
          thumbnail: "./assets/music_child_remix/images/pham-lich.jpg",
        },

        {
          song: "Thuyền Quyên",
          singer: "Diệu Kiên",
          path: "./assets/music_child_remix/music/thuyen_quyen_lofi.mp3",
          thumbnail: "./assets/music_child_remix/images/thuyen_quyen.jpg",
        },

        {
          song: "Mộng Tàn Hoa",
          singer: "Thiên Tú",
          path: "./assets/music_child_remix/music/Mong-Tan-Hoa-WRC-REMIX-Thien-Tu.mp3",
          thumbnail:
            "./assets/music_child_remix/images/thien_tu_mong_tan_hoa.jpg",
        },

        {
          song: "Tòng Phu",
          singer: "Keyo",
          path: "./assets/music_child_remix/music/tong-phu-keyo.mp3",
          thumbnail: "./assets/music_child_remix/images/key-o.jpg",
        },

        {
          song: "Ánh Nắng Của Anh",
          singer: "Đức Phúc",
          path: "./assets/music_child_remix/music/Anh-Nang-Cua-Anh-Cho-Em-Den-Ngay-Mai-OST-Duc-Phuc.mp3",
          thumbnail: "./assets/music_child_remix/images/duc-phuc.jpg",
        },
      ],
    },

    {
      title: "Nhạc Nước Ngoài",
      singer: "Nhiều ca sĩ",
      background: "./assets/music_foreign/images/bcground.jpg",
      numberLikes: "110k người yêu thích",
      listSongs: [
        {
          song: "Take Me To Your Heart",
          singer: "Michael Learns To Rock",
          path: "./assets/music_foreign/music/Take-Me-To-Your-Heart.mp3",
          thumbnail: "./assets/music_foreign/images/michael-learns-to-rock.jpg",
        },

        {
          song: "Trouble Is A Friend",
          singer: "Lenka",
          path: "./assets/music_foreign/music/TROUBLE-IS-A-FRIEND.mp3",
          thumbnail:
            "./assets/music_foreign/images/Lenka_Trouble_Is_A_Friend.jpg",
        },

        {
          song: "Cheri Cheri Lady",
          singer: "Maléna",
          path: "./assets/music_foreign/music/cheri_cheri_lady.mp3",
          thumbnail: "./assets/music_foreign/images/melena.jpg",
        },

        {
          song: "My Love",
          singer: "Westlife",
          path: "./assets/music_foreign/music/My-Love-Westlife.mp3",
          thumbnail: "./assets/music_foreign/images/westlife.jpg",
        },

        {
          song: "Why Not Me",
          singer: "Enrique Iglesias",
          path: "./assets/music_foreign/music/Why-not-me.mp3",
          thumbnail:
            "./assets/music_foreign/images/why-not-me-enrique-iglesias.jpg",
        },

        {
          song: "I Saw you Walking In The Rain",
          singer: "Samira",
          path: "./assets/music_foreign/music/I-Saw-You-Walking-InTheRain.mp3",
          thumbnail: "./assets/music_foreign/images/samira.jpg",
        },

        {
          song: "Attention",
          singer: "Charlie Puth",
          path: "./assets/music_foreign/music/Attention.mp3",
          thumbnail: "./assets/music_foreign/images/Charlie_Puth.jpg",
        },

        {
          song: "Sunshine in the Rain",
          singer: "BWO",
          path: "./assets/music_foreign/music/SunShineTheInRainRemix.mp3",
          thumbnail: "./assets/music_foreign/images/bwo_band.jpg",
        },

        {
          song: "Nothing's Gonna Change My Love For You",
          singer: "Westlife",
          path: "./assets/music_foreign/music/Nothing-s-Gonna-Change-My-Love-For-You-Westlife.mp3",
          thumbnail: "./assets/music_foreign/images/westlife2.jpg",
        },

        {
          song: "Until You",
          singer: "Shayne Ward",
          path: "./assets/music_foreign/music/Shayne-Ward-Until-You-Audio.mp3",
          thumbnail: "./assets/music_foreign/images/Until-You-Shayne-Ward.jpg",
        },
      ],
    },

    {
      title: "Nhạc Vàng Trữ Tình",
      singer: "Nhiều ca sĩ",
      background: "./assets/music_bolero/images/bcg.jpg",
      numberLikes: "30k người yêu thích",

      listSongs: [
        {
          song: "Sầu Tím Thiệp Hồng",
          singer: "Quang Lê, Lệ Quyên",
          path: "./assets/music_bolero/music/Sau-Tim-Thiep-Hong-Quang-Le-Le-Quyen.mp3",
          thumbnail: "./assets/music_bolero/images/quang_le_le_quyen.jpg",
        },

        {
          song: "Giã Từ",
          singer: "Đàm Vĩnh Hưng",
          path: "./assets/music_bolero/music/Gia-Tu-Dam-Vinh-Hung.mp3",
          thumbnail: "./assets/music_bolero/images/dam_vinh_hung.jpg",
        },

        {
          song: "Một Mai Giã Từ Vũ Khí",
          singer: "Đan Nguyên, Quốc Khanh",
          path: "./assets/music_bolero/music/mot_mai_gia_tu_vu_khi.mp3",
          thumbnail: "./assets/music_bolero/images/dan_nguyen.jpg",
        },

        {
          song: "Duyên Phận",
          singer: "Dương Hồng Loan",
          path: "./assets/music_bolero/music/Duyen-Phan-Duong-Hong-Loan.mp3",
          thumbnail: "./assets/music_bolero/images/duong_hong_loan.jpg",
        },

        {
          song: "Hoa Trinh Nữ",
          singer: "Lệ Quyên",
          path: "./assets/music_bolero/music/Hoa Trinh Nu-Le-Quyen.mp3",
          thumbnail: "./assets/music_bolero/images/le_quyen.jpg",
        },

        {
          song: "Huyền Thoại Mẹ",
          singer: "Jang Mi",
          path: "./assets/music_bolero/music/huyen_thoai_me_jang_mi.mp3",
          thumbnail: "./assets/music_bolero/images/jang_mi.jpg",
        },

        {
          song: "Chuyện Tình Mình",
          singer: "Quốc Khanh, Hoàng Thục Linh",
          path: "./assets/music_bolero/music/Chuyen-Tinh-Minh-Quoc-Khanh-Hoang-Thuc-Linh.mp3",
          thumbnail:
            "./assets/music_bolero/images/hoang_thuc_linh_quoc_khanh.jpg",
        },

        {
          song: "Em Một Mình Quen Rồi",
          singer: "Anh Thơ",
          path: "./assets/music_bolero/music/em_mot_minh_quen_roi_anh_tho.mp3",
          thumbnail: "./assets/music_bolero/images/anh_tho.jpg",
        },

        {
          song: "Tình Lỡ",
          singer: "Lệ Quyên",
          path: "./assets/music_bolero/music/Tinh-Lo-Le-Quyen.mp3",
          thumbnail: "./assets/music_bolero/images/le_quyen_2.jpeg",
        },

        {
          song: "Mùa Xuân Đó Có Em",
          singer: "Đan Nguyên",
          path: "./assets/music_bolero/music/Mua-Xuan-Do-Co-Em-Dan-Nguyen.mp3",
          thumbnail: "./assets/music_bolero/images/dan_nguyen_2.jpg",
        },

        {
          song: "Nhớ Người Yêu",
          singer: "Trường Vũ",
          path: "./assets/music_bolero/music/Nho-Nguoi-Yeu-Truong-Vu.mp3",
          thumbnail: "./assets/music_bolero/images/truong_vu.jpg",
        },

        {
          song: "Hoa Tim Người Xưa",
          singer: "Dương Hồng Loan",
          path: "./assets/music_bolero/music/Hoa-Tim-Nguoi-Xua-Duong-Hong-Loan.mp3",
          thumbnail: "./assets/music_bolero/images/duong_hong_loan.jpg",
        },

        {
          song: "Chuyện Giàn Thiên Lý",
          singer: "Mạnh Đình",
          path: "./assets/music_bolero/music/chuyen_gian_thien_ly_manh_dinh.mp3",
          thumbnail: "./assets/music_bolero/images/manh_dinh.jpg",
        },
      ],
    },
  ],

  mvData: [
    {
      background: "./assets/mv/mv_noinaycoanh.jpg",
      thumbnail: "./assets/mv/mv_noinaycoanh.jpg",
      title: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
    },

    {
      background: "./assets/mv/mv_honcayeu.jpg",
      thumbnail: "./assets/mv/mv_honcayeu.jpg",
      title: "Hơn Cả Yêu",
      singer: "Đức Phúc",
    },
    {
      background: "./assets/mv/mv_emgiamua.jpg",
      thumbnail: "./assets/mv/mv_emgiamua.jpg",
      title: "Em Gái Mưa",
      singer: "Hương Tràm",
    },
  ],

  // artist list
  ListArtist: [
    "./assets/artist/jack.png",
    "./assets/artist/duc_phuc.png",
    "./assets/artist/hoa_minzy.png",
    "./assets/artist/justatee.png",
    "./assets/artist/only_c.png",
    "./assets/artist/trinh_thang_binh.png",
    "./assets/artist/karik.png",
    "./assets/artist/mr_siro.png",
    "./assets/artist/chi_dan.png",
    "./assets/artist/erik.png",
    "./assets/artist/huong_ly.png",
  ],

  //   render playlist next to slide bar
  renderPlayListSlider: function (isRunning) {
    if (isRunning) {
      slideWrapper.innerHTML = this.ListMusic.map(
        (obj, index) =>
          `<div class="slide--item ${
            index === 0
              ? "first"
              : index == 1
              ? "second"
              : index == 2
              ? "three"
              : index == 3
              ? "four"
              : "four"
          }
                ">
                    <img
                    src="${obj.thumbnail}"
                    alt=""/>
                </div>`
      ).join("");
    } else {
      slideWrapper.innerHTML = "";
    }
  },

  // handle auto run slide in the "Personal"
  handleAutoRunSlide: function () {
    const slideItems = Array.from($$(".slide--item"));
    let indextLastItem = slideItems.length - 1;
    let i = 0;

    function changeImage() {
      slideItems.forEach((item, index) => {
        if (index === i) {
          item.classList.replace("four", "first");
          item.classList.replace("second", "first");
          item.classList.replace("three", "second");
        } else if (index === i + 1) {
          item.classList.replace("four", "second");
          item.classList.replace("three", "second");
          item.classList.replace("four", "first");
        } else if (index === i + 2) {
          item.classList.replace("four", "three");
          item.classList.replace("four", "first");
        } else {
          item.classList.replace("three", "second");
          item.classList.replace("second", "first");
          item.classList.replace("first", "four");
        }

        if (index === indextLastItem) {
          slideItems[0].classList.replace("four", "three");
          slideItems[0].classList.replace("three", "second");
          slideItems[0].classList.replace("four", "three");
        }
      });
      i++;
      if (i > indextLastItem) {
        i = 0;
      }
    }

    setInterval(changeImage, 2000);
  },

  convertTime: function (time) {
    let minutes = "0" + Math.floor(time / 60);
    // let seconds = time % 60;
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds.toFixed();
    let timeConvert = `${minutes}:${seconds}`;
    return timeConvert;
  },
  // render các bài hát cạnh slider
  renderSongRight: function (ElementInner, ListSongs) {
    const _this = this;
    if (!ListSongs) {
      ElementInner.innerHTML = "";
      return;
    }
    let htmls = ListSongs.map((obj) => {
      return `
            <div class="playlist-body--item">
                <div class="checkbox-wrapper">
                  <span class="icon--music"
                    ><i class="fa-light fa-music"></i
                  ></span>
                  <div class="checkbox action-checkbox">
                    <input type="checkbox" />
                  </div>
                </div>
                <div class="body-item--img">
                <img
                    src="${obj.thumbnail}"
                    alt=""
                />
                <span class="img--icon">
                    <i class="fa-solid fa-play"></i>
                    <img class= 'icon__img--playing'src="./assets/icons/icon_playing.gif" alt="">
                </span>
                <!-- click show image -->
                <button class="img--playmusic">
                  <img src="./assets/icons/icon_playing.gif" alt="" />
                </button>
                </div>
                <div class="body-item--info">
                  <p class="name-song">${obj.song}</p>
                  <p class="name-singer">${obj.singer}</p>
                  <audio
                    src="${obj.path}"
                    class="info-audio"
                  ></audio>
                </div>
                <div class="body-item--desc">
                  <span class = "desc--singer-name">${obj.singer}</span>
                  <span class = "desc--singer-ps">(singer)</span>
                </div>
    
                <div class="body-item--option">
                  <div class="item--option-icon">
                    <span class="item--option-micro">
                    <i class="fa-light fa-microphone-stand"></i>
                    </span>
                    <span class="item--option-heart">
                    <i class="fa-light fa-heart"></i>
                    </span>
                  </div>
                  <div class="item--option-time">
                    <span class="item--option-duration"></span>
                    <span class="item--option-more"
                    ><i class="fa-thin fa-ellipsis-stroke"></i
                    ></span>
                  </div>
                </div>
            </div>
            
            `;
    }).join("");

    ElementInner.innerHTML = htmls;
    const audioTags = Array.from($$(".info-audio"));
    $$(".item--option-duration").forEach((element, index) => {
      audioTags[index].addEventListener("loadedmetadata", function () {
        let duration = _this.convertTime(audioTags[index].duration);
        element.textContent = duration;
      });
    });
  },

  renderSongsPlayList: function (isRunning) {
    if (isRunning) {
      this.renderSongRight(playListbody, this.ListMusic);
      this.renderPlayListSlider(isRunning);

      this.handleAutoRunSlide();
      this.handleIconMuicAndBoxInput();

      // show sroll when The mouse pointer moves over an element
      playListbody.addEventListener("mousemove", () => {
        playListbody.classList.add("active");
      });

      playListbody.addEventListener("mouseout", () => {
        playListbody.classList.remove("active");
      });
    } else {
      this.renderSongRight(playListbody, undefined);
    }
  },

  //  xử lý ở đây
  renderContentPlayList: function (Index) {
    const _this = this;
    const playlistContainer = document.createElement("div");
    const playlistContentMainSong = document.createElement("div");
    playlistContainer.classList.add("playlist__container");
    playlistContentMainSong.classList.add("playlist__ContentMain--Song");
    playListMainBody.appendChild(playlistContainer);
    playlistContainer.appendChild(playlistContentMainSong);

    playlistContainer.innerHTML = _this.PlayListAlbumData.map((obj) => {
      return ` 
              <div class= "playlist__ContentMain--Song hide" >
                <div class="playlist__info">
                  <div class="playlist__info--bcg">
                    <img
                      class="playlist__info-img"
                      src="${obj.background}"
                      alt=""
                    />
                    <span class="icon--play">
                      <i class="fa-regular fa-circle-play"></i>
                    </span>
                    <div class="opacity"></div>
                  </div>
                  <div class="playlist__desc">
                    <h3 class="playlist__desc--title">${obj.title}</h3>
                    <div class="playlist__desc--numberlike">
                    ${obj.numberLikes}
                    </div>
                  </div>
                  <div class="playlist__menu">
                    <button class="playlist__menu--btnplay">
                      <span class="menu--play-icon"
                        ><i class="fa-sharp fa-solid fa-play"></i
                      ></span>
                      <span class="menu--play-prg">Tiếp tục phát</span>
                    </button>

                    <div class="playlist__menu--other">
                      <span class="menu--other-heart">
                        <i class="fa-light fa-heart"></i>
                      </span>
                      <span class="menu--other-more">
                        <i class="fa-solid fa-ellipsis"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="playlist__ContentMain--Song--body"></div>
             </div>
           
        `;
    }).join("");

    const playListMainSongBody = $$(".playlist__ContentMain--Song--body");
    $$(".playlist__ContentMain--Song")[Index].classList.add(
      `${_this.bodyItemImagePos}`
    );

    _this.renderSongRight(
      playListMainSongBody[Index],
      _this.PlayListAlbumData[Index].listSongs
    );
  },

  renderPlayListAlbum: function () {
    playlistAlbum.innerHTML = `
                  <div class="personal__playlists--head">
                    <h1>Playlist</h1>
                  </div>
                  <div class="personal__playlists--body">
                    <!-- create play list new -->
                    <div class="playlists--body-child">
                      <div class="playlists--body-child-wrap">
                        <div class="child--add-playlist">
                          <div class="add-playlists-icon">
                            <i class="fa-regular fa-plus"></i>
                          </div>
                          <h1>Tạo playlist mới</h1>
                        </div>
                      </div>
                    </div>
  
                    <!-- list play list  -->
                    ${this.PlayListAlbumData.map(
                      (obj) =>
                        `
                      <div class="playlists--body-child">
                      <div class="playlists--body-child-wrap">
                        <div class="child--item-playlist">
                          <div class="child__item-playlist--body">
                            <div class="item__playlist--body-img">
                              <img
                                src="${obj.background}"
                                alt=""
                              />
                              <div class="body__img--option">
                                <span class="img__option--heart">
                                  <i class="fa-solid fa-heart"></i>
                                </span>
                                <span class="img__option--play">
                                  <i class="fa-solid fa-play"></i>
                                </span>
                                <span class="img__option--more">
                                  <i class="fa-thin fa-ellipsis-stroke"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <h1 class="child--item-playlist-title">
                          ${obj.title}
                          </h1>
                          <span class="child--item-desc">Zing mp3</span>
                        </div>
                      </div>
                    </div>
                      `
                    ).join("")}
                    
                  </div>
  
      `;
  },

  renderMV: function () {
    mvBody.innerHTML = `
                  <div class="personal__mv--head">
                    <h1>MV</h1>
                  </div>
                  
                  <div class="personal__mv--body">
                    ${this.mvData
                      .map(
                        (obj) =>
                          `
                    <div class="mv--body-child">
                      <div class="mv--body-child-wrap">
                        <div class="child--item-mv">
                          <div class="child__item-mv--body">
                            <div class="item__mv--body-img">
                              <img
                                src="${obj.background}"
                                alt=""
                              />
                              <div class="body__img--option">
                                <span class="img__option--play">
                                  <i class="fa-solid fa-play"></i>
                                </span>
                              </div>
                            </div>
                            <div class="item__mv--body-infoMV">
                              <div class="item__mv--body-infoMV--img">
                                <img
                                  src="${obj.thumbnail}"
                                  alt=""
                                />
                              </div>
                              <div class="item__mv--body-infoMV--desc">
                                <h1 class="child--item-mv-title">
                                  ${obj.title}
                                </h1>
                                <span class="child--item-mv-namesinger">
                                  ${obj.singer}</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    `
                      )
                      .join("")}
                  </div>
                  
      `;
  },

  renderArtists: function () {
    $(".personal__container--artist").innerHTML = `
        <div class="container__artist--head">
          <h1>Nghệ Sĩ</h1>
        </div>
        <div class="container__artist-wrap">
          <div class="artist__body">
          ${this.ListArtist.map((img) => {
            return `
            <div class="artist__body--item">
              <img src="${img}" alt="" />
            </div>
            `;
          }).join("")}
          </div>
        </div>
    `;
  },

  // define properties of object
  defineProperties: function (ListMusicData) {
    Object.defineProperty(this, "currentSong", {
      configurable: true,
      get: function () {
        return ListMusicData[this.currentIndex];
      },
    });
  },

  rederPlayerMusic: function () {
    const _this = this;

    let htmls = `
      <div class="player">
        <div class="player__wapper">
          <div class="player__media">
            <div class="media__image player__image">
              <span class="icon--music music-1"
                ><i class="fa-solid fa-music"></i
              ></span>
              <span class="icon--music music-2"
                ><i class="fa-solid fa-music-note"></i
              ></span>
              <span class="icon--music music-3"
                ><i class="fa-solid fa-music"></i
              ></span>
              <span class="icon--music music-4"
                ><i class="fa-solid fa-music-note"></i
              ></span>
              <div class="media__thumbnail">
                <img src="${_this.currentSong.thumbnail}" alt="" />
              </div>
            </div>
            <div class="media__body">
              <div class="media__info">
                <div class="info__song-wrapper">
                  <h3 class="info__song--name">
                    <span>${_this.currentSong.song}</span>
                    <span>${_this.currentSong.song}</span>
                  </h3>
                </div>
                <p class="info__artist-current">${_this.currentSong.singer}</p>
                <audio
                  src="${_this.currentSong.path}"
                  class="info__audio-current"
                ></audio>
              </div>
              <div class="media__option">
                <span class="media__option--heart">
                  <i class="fa-light fa-heart"></i>
                </span>
                <span class="media__option--more">
                  <i class="fa-light fa-ellipsis"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="player__control">
            <div class="music__action">
              <button class="btn--shuffle">
                <i class="fa-light fa-shuffle"></i>
              </button>
              <button class="btn--prev">
                <i class="fa-solid fa-backward-step"></i>
              </button>
              <button class="btn--play">
                <i class="${iconBtnPlay}"></i>
              </button>
              <button class="btn--next">
                <i class="fa-solid fa-forward-step"></i>
              </button>
              <button class="btn--repeat">
                <i class="fa-light fa-arrows-repeat"></i>
              </button>
            </div>

            <div class="music__timeline">
              <div class="time left">00:00</div>
              <div class="timeline__duration">
                <div class="track__wrapper">
                  <div class="track__bar duration__track">
                    <div class="thumb__bar"></div>
                  </div>
                  <input
                    class="input__duration"
                    type="range"
                    value="0"
                    step="0.0000001"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <div class="time right"></div>
            </div>
          </div>
          <div class="player__subcontrol">
            <button class="btn--movie">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="mar-r-10"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99991 4.375C8.4965 4.375 6.99079 4.42069 5.75263 4.47353C4.73349 4.51703 4.39788 4.54283 4.067 4.707C3.79604 4.84144 3.4637 5.14441 3.30483 5.40181C3.10952 5.71825 3.05877 6.01406 2.93416 6.9311C2.80727 7.86492 2.70825 8.93595 2.70825 10C2.70825 11.064 2.80727 12.1351 2.93416 13.0689C3.05877 13.9859 3.10952 14.2817 3.30483 14.5982C3.4637 14.8556 3.79604 15.1585 4.067 15.293C4.39788 15.4572 4.73349 15.483 5.75263 15.5265C6.99079 15.5793 8.4965 15.625 9.99991 15.625C11.5033 15.625 13.009 15.5793 14.2472 15.5265C15.2663 15.483 15.6019 15.4572 15.9328 15.293C16.2038 15.1585 16.5361 14.8556 16.695 14.5982C16.8903 14.2817 16.9411 13.9859 17.0657 13.0689C17.1926 12.1351 17.2916 11.064 17.2916 10C17.2916 8.93595 17.1926 7.86492 17.0657 6.9311C16.9411 6.01406 16.8903 5.71825 16.695 5.40181C16.5361 5.14441 16.2038 4.84144 15.9328 4.707C15.6019 4.54283 15.2663 4.51703 14.2472 4.47353C13.009 4.42069 11.5033 4.375 9.99991 4.375ZM5.69933 3.22467C6.94847 3.17136 8.47304 3.125 9.99991 3.125C11.5268 3.125 13.0514 3.17136 14.3005 3.22467C14.3361 3.22619 14.3712 3.22767 14.4059 3.22914C15.2793 3.266 15.8931 3.2919 16.4884 3.58726C16.9687 3.82557 17.4771 4.28901 17.7587 4.74528C18.1076 5.31051 18.1841 5.8756 18.2923 6.67449C18.2963 6.70361 18.3002 6.73303 18.3043 6.76279C18.4361 7.7331 18.5416 8.86306 18.5416 10C18.5416 11.1369 18.4361 12.2669 18.3043 13.2372C18.3002 13.267 18.2963 13.2964 18.2923 13.3255C18.1841 14.1244 18.1076 14.6895 17.7587 15.2547C17.4771 15.711 16.9687 16.1744 16.4884 16.4127C15.8931 16.7081 15.2793 16.734 14.4059 16.7709C14.3712 16.7723 14.3361 16.7738 14.3005 16.7753C13.0514 16.8286 11.5268 16.875 9.99991 16.875C8.47304 16.875 6.94847 16.8286 5.69933 16.7753C5.66377 16.7738 5.62864 16.7723 5.59392 16.7709C4.72048 16.734 4.10668 16.7081 3.51142 16.4127C3.03112 16.1744 2.52274 15.711 2.24113 15.2547C1.89226 14.6895 1.81572 14.1244 1.70752 13.3255C1.70358 13.2964 1.69959 13.267 1.69555 13.2372C1.56369 12.2669 1.45825 11.1369 1.45825 10C1.45825 8.86306 1.56369 7.7331 1.69555 6.76279C1.69959 6.73303 1.70358 6.7036 1.70752 6.67447C1.81572 5.8756 1.89226 5.3105 2.24113 4.74528C2.52274 4.28901 3.03112 3.82557 3.51142 3.58726C4.10668 3.2919 4.72048 3.266 5.59392 3.22914C5.62864 3.22767 5.66377 3.22619 5.69933 3.22467Z"
                ></path>
                <path
                  d="M5.00418 7.7425C5.07418 7.7425 5.14668 7.7625 5.22168 7.8025C5.30168 7.8375 5.36168 7.885 5.40168 7.945L7.22417 10.75L6.84917 10.735L8.71667 7.945C8.81167 7.81 8.93417 7.7425 9.08417 7.7425C9.20417 7.7425 9.31167 7.785 9.40667 7.87C9.50167 7.955 9.54917 8.065 9.54917 8.2V12.5425C9.54917 12.6725 9.50667 12.7825 9.42167 12.8725C9.33667 12.9575 9.22417 13 9.08417 13C8.94417 13 8.82917 12.9575 8.73917 12.8725C8.65417 12.7825 8.61167 12.6725 8.61167 12.5425V9.01L8.90417 9.0775L7.37417 11.41C7.32917 11.465 7.27167 11.5125 7.20167 11.5525C7.13667 11.5925 7.06917 11.61 6.99917 11.605C6.93417 11.61 6.86667 11.5925 6.79667 11.5525C6.73167 11.5125 6.67667 11.465 6.63167 11.41L5.19918 9.145L5.39418 8.7475V12.5425C5.39418 12.6725 5.35418 12.7825 5.27418 12.8725C5.19418 12.9575 5.08918 13 4.95918 13C4.83418 13 4.73168 12.9575 4.65168 12.8725C4.57168 12.7825 4.53168 12.6725 4.53168 12.5425V8.2C4.53168 8.075 4.57668 7.9675 4.66668 7.8775C4.76168 7.7875 4.87418 7.7425 5.00418 7.7425ZM15.3425 7.735C15.4675 7.735 15.575 7.7775 15.665 7.8625C15.76 7.9425 15.8075 8.045 15.8075 8.17C15.8075 8.235 15.7925 8.3025 15.7625 8.3725L13.91 12.7075C13.865 12.8075 13.8 12.8825 13.715 12.9325C13.635 12.9775 13.5525 13 13.4675 13C13.3875 12.995 13.31 12.97 13.235 12.925C13.16 12.875 13.1025 12.805 13.0625 12.715L11.21 8.365C11.195 8.335 11.185 8.305 11.18 8.275C11.175 8.24 11.1725 8.2075 11.1725 8.1775C11.1725 8.0325 11.225 7.9225 11.33 7.8475C11.435 7.7675 11.535 7.7275 11.63 7.7275C11.82 7.7275 11.9575 7.825 12.0425 8.02L13.685 11.8825L13.4225 11.89L14.93 8.02C15.015 7.83 15.1525 7.735 15.3425 7.735Z"
                ></path>
                <path
                  d="M5.22168 7.8025L5.14301 7.95L5.15487 7.9552L5.22168 7.8025ZM5.40168 7.945L5.54144 
                  7.85419L5.54035 7.85255L5.40168 7.945ZM7.22417 10.75L7.21751 10.9165L7.5395 10.9294L7.36393 
                  10.6592L7.22417 10.75ZM6.84917 10.735L6.71067 10.6423L6.54511 10.8896L6.84251 10.9015L6.84917 
                  10.735ZM8.71667 7.945L8.58034 7.84906L8.57817 7.8523L8.71667 7.945ZM9.40667 7.87L9.29554 7.99421L9.29554 
                  7.99421L9.40667 7.87ZM9.42167 12.8725L9.53957 12.9904L9.54284 12.9869L9.42167 12.8725ZM8.73917 12.8725L8.61781 
                  12.9871L8.62474 12.9937L8.73917 12.8725ZM8.61167 9.01L8.64915 8.8476L8.44501 8.80049V9.01H8.61167ZM8.90417 
                  9.0775L9.04353 9.16892L9.17474 8.96889L8.94165 8.9151L8.90417 9.0775ZM7.37417 11.41L7.50317 11.5155L7.50872 
                  11.5087L7.51354 11.5014L7.37417 11.41ZM7.20167 11.5525L7.11894 11.4077L7.11433 11.4106L7.20167 11.5525ZM6.99917 
                  11.605L7.01105 11.4388L6.99872 11.4379L6.98639 11.4388L6.99917 11.605ZM6.79667 11.5525L6.70928 11.6945L6.71398 
                  11.6972L6.79667 11.5525ZM6.63168 11.41L6.49082 11.4991L6.49625 11.5077L6.50268 11.5155L6.63168 11.41ZM5.19918 
                  9.145L5.04954 9.0716L5.00848 9.1553L5.05832 9.23409L5.19918 9.145ZM5.39418 8.7475H5.56084L5.24454 8.6741L5.39418 
                  8.7475ZM5.27418 12.8725L5.39559 12.9868L5.39874 12.9832L5.27418 12.8725ZM4.65168 12.8725L4.52706 12.9833L4.53031 
                  12.9867L4.65168 12.8725ZM4.66668 7.8775L4.55201 7.75647L4.54882 7.75965L4.66668 7.8775ZM5.00418 7.90917C5.04155 
                  7.90917 5.08726 7.9197 5.14324 7.94956L5.30011 7.65544C5.20609 7.6053 5.1068 7.57584 5.00418 7.57584V7.90917ZM5.15487 
                  7.9552C5.21186 7.98013 5.24412 8.00913 5.263 8.03745L5.54035 7.85255C5.47923 7.76088 5.39149 7.69488 5.28848 
                  7.64981L5.15487 7.9552ZM5.26192 8.03581L7.08442 10.8408L7.36393 10.6592L5.54143 7.8542L5.26192 8.03581ZM7.23084 10.5835L6.85584 10.5685L6.84251 10.9015L7.21751 10.9165L7.23084 10.5835ZM6.98768 10.8277L8.85518 8.03771L8.57817 
                  7.8523L6.71067 10.6423L6.98768 10.8277ZM8.85297 8.04092C8.92042 7.94507 8.99448 7.90917 9.08417 7.90917V7.57584C8.87387 
                  7.57584 8.70292 7.67494 8.58037 7.84909L8.85297 8.04092ZM9.08417 7.90917C9.16046 7.90917 9.22902 7.93469 9.29554 
                  7.99421L9.51781 7.7458C9.39432 7.63531 9.24788 7.57584 9.08417 7.57584V7.90917ZM9.29554 7.99421C9.35291 8.04554 
                  9.38251 8.10925 9.38251 8.2H9.71584C9.71584 8.02075 9.65043 7.86446 9.51781 7.7458L9.29554 7.99421ZM9.38251 
                  8.2V12.5425H9.71584V8.2H9.38251ZM9.38251 12.5425C9.38251 12.6323 9.35471 12.7007 9.3005 12.7581L9.54284 12.9869C9.65864 
                  12.8643 9.71584 12.7127 9.71584 12.5425H9.38251ZM9.30382 12.7546C9.25523 12.8032 9.18783 12.8333 9.08417 12.8333V13.1667C9.26051 
                  13.1667 9.41812 13.1118 9.53952 12.9904L9.30382 12.7546ZM9.08417 12.8333C8.98071 12.8333 8.90856 12.8032 8.85361 12.7513L8.62474 
                  12.9937C8.74979 13.1118 8.90764 13.1667 9.08417 13.1667V12.8333ZM8.86034 12.7581C8.80614 12.7007 8.77834 12.6323 8.77834 12.5425H8.44501C8.44501 
                  12.7127 8.50221 12.8643 8.61801 12.9869L8.86034 12.7581ZM8.77834 12.5425V9.01H8.44501V12.5425H8.77834ZM8.5742 9.1724L8.8667 9.2399L8.94165 8.9151L8.64915 8.8476L8.5742 
                  9.1724ZM8.76481 8.98609L7.23481 11.3186L7.51354 11.5014L9.04353 9.16892L8.76481 8.98609ZM7.24518 11.3045C7.21471 11.3417 7.17364 11.3766 7.11898 11.4078L7.28436 11.6972C7.3697 
                  11.6484 7.44364 11.5883 7.50317 11.5155L7.24518 11.3045ZM7.11433 11.4106C7.0763 11.434 7.04317 11.4411 7.01105 11.4388L6.9873 11.7712C7.09518 11.7789 7.19705 11.751 7.28902 11.6944L7.11433 
                  11.4106ZM6.98639 11.4388C6.96178 11.4407 6.92731 11.4352 6.87936 11.4078L6.71398 11.6972C6.80604 11.7498 6.90657 11.7793 7.01196 11.7712L6.98639 11.4388ZM6.88402 11.4106C6.83366 11.3796 6.79307 11.3441 6.76067 
                  11.3045L6.50268 11.5155C6.56028 11.5859 6.62969 11.6454 6.70933 11.6944L6.88402 11.4106ZM6.77253 11.3209L5.34003 9.05592L5.05832 9.23409L6.49082 11.4991L6.77253 11.3209ZM5.34881 9.21841L5.54381 8.82091L5.24454 
                  8.6741L5.04954 9.0716L5.34881 9.21841ZM5.22751 8.7475V12.5425H5.56084V8.7475H5.22751ZM5.22751 12.5425C5.22751 12.6352 5.20023 12.7048 5.14961 12.7618L5.39874 12.9832C5.50812 12.8602 
                  5.56084 12.7098 5.56084 12.5425H5.22751ZM5.15281 12.7583C5.10806 12.8058 5.049 12.8333 4.95918 12.8333V13.1667C5.12935 13.1667 5.28029 13.1092 5.39554 12.9867L5.15281 12.7583ZM4.95918 
                  12.8333C4.87649 12.8333 4.81914 12.8072 4.77304 12.7583L4.53031 12.9867C4.64422 13.1078 4.79186 13.1667 4.95918 13.1667V12.8333ZM4.77624 12.7618C4.72562 12.7048 4.69834 12.6352 4.69834 
                  12.5425H4.36501C4.36501 12.7098 4.41774 12.8602 4.52711 12.9832L4.77624 12.7618ZM4.69834 12.5425V8.2H4.36501V12.5425H4.69834ZM4.69834 8.2C4.69834 8.1201 4.72514 8.05474 4.78453 7.99535L4.54882 
                  7.75965C4.42821 7.88027 4.36501 8.0299 4.36501 8.2H4.69834ZM4.7813 7.99849C4.84557 7.93761 4.91713 7.90917 5.00418 7.90917V7.57584C4.83122 7.57584 4.67778 7.6374 4.55205 7.75651L4.7813 7.99849ZM15.665 
                  7.8625L15.5504 7.98387L15.5577 7.98999L15.665 7.8625ZM15.7625 8.3725L15.6093 8.30685L15.6093 8.30701L15.7625 8.3725ZM13.91 12.7075L14.062 12.7759L14.0633 12.773L13.91 12.7075ZM13.715 12.9325L13.7967 13.0778L13.7995
                   13.0762L13.715 12.9325ZM13.4675 13L13.4571 13.1667H13.4675V13ZM13.235 12.925L13.1425 13.0638L13.1493 13.0679L13.235 12.925ZM13.0625 12.715L12.9092 12.7803L12.9102 12.7827L13.0625 12.715ZM11.21 8.365L11.3637 8.29958L11.3591
                    8.29047L11.21 8.365ZM11.18 8.275L11.015 8.29858L11.0156 8.3024L11.18 8.275ZM11.33 7.8475L11.4269 7.98319L11.431 7.98007L11.33 7.8475ZM12.0425 8.02L12.1959 7.95478L12.1953 7.9534L12.0425 8.02ZM13.685 11.8825L13.6898 12.0491L13.934 12.0421L13.8384 11.8173L13.685 11.8825ZM13.4225 11.89L13.2672 11.8295L13.176 12.0638L13.4273 12.0566L13.4225 11.89ZM14.93 8.02L14.7777 7.95186L14.7747
                     7.95951L14.93 8.02ZM15.3425 7.90167C15.4254 7.90167 15.4919 7.92821 15.5506 7.98367L15.7795 7.74133C15.6582 7.6268 15.5096 7.56834 15.3425 7.56834V7.90167ZM15.5577 7.98999C15.6148 8.03808 15.6409 8.0938 15.6409 8.17H15.9742C15.9742 7.99621 15.9053 7.84692 15.7724 7.73502L15.5577 7.98999ZM15.6409 8.17C15.6409 8.2089 15.6319 8.25408 15.6093 8.30685L15.9157 8.43816C15.9531 8.35093 15.9742 8.26111 15.9742 8.17H15.6409ZM15.6093 8.30701L13.7568 12.642L14.0633 12.773L15.9158 8.438L15.6093 8.30701ZM13.758 12.6391C13.7255 12.7113 13.6825 12.7583 13.6305 12.7888L13.7995 13.0762C13.9176 13.0067 14.0045 12.9037 14.062 12.7759L13.758 12.6391ZM13.6333 12.7872C13.5762 12.8194 13.5216 12.8333 13.4675 12.8333V13.1667C13.5834 13.1667 13.6938 13.1356 13.7967 13.0778L13.6333 12.7872ZM13.4779 12.8337C13.4269 12.8305 13.375 12.8146 13.3208 12.7821L13.1493 13.0679C13.245 13.1254 13.3481 13.1595 13.4571 13.1663L13.4779 12.8337ZM13.3275 12.7863C13.2812 12.7555 13.2432 12.7112 13.2148 12.6473L12.9102 12.7827C12.9618 12.8988 13.0389 12.9945 13.1426 13.0637L13.3275 12.7863ZM13.2159 12.6497L11.3634 8.2997L11.0567 8.4303L12.9092 12.7803L13.2159 12.6497ZM11.3591 8.29047C11.3508 8.27381 11.3464 8.25962 11.3444 8.2476L11.0156 8.3024C11.0236 8.35038 11.0393 8.39619 11.061 8.43954L11.3591 8.29047ZM11.345 8.25143C11.3409 8.2229 11.3392 8.19837 11.3392 8.1775H11.0059C11.0059 8.21663 11.0091 8.2571 11.015 8.29857L11.345 8.25143ZM11.3392 8.1775C11.3392 8.07862 11.3716 8.02261 11.4269 7.98312L11.2332 7.71188C11.0784 7.82239 11.0059 7.98639 11.0059 8.1775H11.3392ZM11.431 7.98007C11.5181 7.91375 11.5834 7.89417 11.63 7.89417V7.56084C11.4867 7.56084 11.352 7.62126 11.229 7.71493L11.431 7.98007ZM11.63 7.89417C11.6951 7.89417 11.7422 7.91031 11.7792 7.93658C11.8175 7.96373 11.8562 8.00971 11.8897 8.0866L12.1953 7.9534C12.1438 7.83529 12.0713 7.73503 11.9721 7.66467C11.8716 7.59345 11.755 7.56084 11.63 7.56084V7.89417ZM11.8891 8.08522L13.5316 11.9477L13.8384 11.8173L12.1959 7.95478L11.8891 8.08522ZM13.6803 11.7159L13.4178 11.7234L13.4273 12.0566L13.6898 12.0491L13.6803 11.7159ZM13.5778 11.9505L15.0853 8.0805L14.7747 7.95951L13.2672 11.8295L13.5778 11.9505ZM15.0822 8.08806C15.1152 8.01411 15.1535 7.96975 15.1916 7.94337C15.2288 7.91767 15.2766 7.90167 15.3425 7.90167V7.56834C15.2185 7.56834 15.1025 7.59983 15.0022 7.66913C14.9028 7.73776 14.8298 7.83589 14.7779 7.95194L15.0822 8.08806Z"
                ></path>
              </svg>
            </button>
            <button class="btn--micro">
              <i class="fa-light fa-microphone-stand"></i>
            </button>
            <div class="music__volume">
              <button class="btn--volume">
                <i class="fa-light fa-volume"></i>
              </button>
              <div class="track__wrapper">
                <div class="track__bar volume__track">
                  <div class="thumb__bar"></div>
                </div>
                <input type="range" value="0" class="input__volume" />
              </div>
            </div>
            <div class="music__divide"></div>
            <button class="btn__queue">
              <i class="fa-light fa-list-music"></i>
            </button>
          </div>
          <button class="player__btn-close">
            <span class="player__ic-close"></span>
          </button>
        </div>
        <section class="modalNextSong"></section>
      </div>
    `;
    player.innerHTML = htmls;

    const audioTags = $(".info__audio-current");
    audioTags.addEventListener("loadedmetadata", function () {
      let duration = _this.convertTime(audioTags.duration);
      $(".time.right").textContent = duration;
    });
  },

  // handle events in each playlist
  handleEventInPlayList: function (indexPlayList) {
    const _this = this;
    const playListThumbnail = $$(".playlist__info--bcg");
    const playListMenuBtn = $$(".playlist__menu--btnplay");
    const BodyItemImages = $$(".body-item--img");
    thumbnailImagePlayListBcg();

    $(".btn--play").addEventListener("click", () => {
      if ($(".info__audio-current").paused) {
        _this.isClick = false;
      } else {
        _this.isClick = true;
      }
      thumbnailImagePlayListBcg();
    });

    // BodyItemImages.forEach((e) => {
    (
      $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`) ||
      $(".playlist-body.primary")
    )
      .querySelectorAll(".body-item--img")
      .forEach((e) => {
        e.addEventListener("click", () => {
          if ($(".info__audio-current").paused) {
            _this.isClick = false;
          } else {
            _this.isClick = true;
          }
          thumbnailImagePlayListBcg();
        });
      });

    // $$(".playlist-body--item").forEach((e) => {
    (
      $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`) ||
      $(".playlist-body.primary")
    )
      .querySelectorAll(".playlist-body--item")
      .forEach((e) => {
        e.addEventListener("dblclick", () => {
          if ($(".info__audio-current").paused) {
            _this.isClick = false;
          } else {
            _this.isClick = true;
          }
          thumbnailImagePlayListBcg();
        });
      });

    function thumbnailImagePlayListBcg() {
      if (_this.isClick) {
        playListThumbnail[indexPlayList].style.borderRadius = "50%";
        playListThumbnail[indexPlayList].style.boxShadow = "unset";
        playListThumbnail[indexPlayList].querySelector(
          ".opacity"
        ).style.borderRadius = "50%";
        playListThumbnail[indexPlayList].querySelector(
          "img"
        ).style.borderRadius = "50%";
        playListThumbnail[indexPlayList].querySelector("img").style.animation =
          "rotateThumb 10s linear infinite";
        playListThumbnail[indexPlayList].querySelector(
          ".icon--play"
        ).innerHTML = `<img class="icon__img--playing" src="./assets/icons/icon_playing.gif" alt="" style="display: block;">`;
        // cmt
        playListMenuBtn[indexPlayList].querySelector(
          ".menu--play-prg"
        ).textContent = "Tạm dừng phát";
        playListMenuBtn[indexPlayList].querySelector(
          ".menu--play-icon"
        ).innerHTML = `<i class="fa-sharp fa-solid fa-pause"></i>`;
      } else {
        playListThumbnail[indexPlayList].style.borderRadius = "8px";
        playListThumbnail[indexPlayList].style.boxShadow =
          "0 5px 8px 0 rgba(0,0,0,.2)";
        playListThumbnail[indexPlayList].querySelector(
          ".opacity"
        ).style.borderRadius = "8px";

        playListThumbnail[indexPlayList].querySelector(
          "img"
        ).style.borderRadius = "8px";
        playListThumbnail[indexPlayList].querySelector("img").style.animation =
          "unset";

        playListThumbnail[indexPlayList].querySelector(
          ".icon--play"
        ).innerHTML = `<i class="fa-regular fa-circle-play"></i>`;
        playListMenuBtn[indexPlayList].querySelector(
          ".menu--play-prg"
        ).textContent = "Tiếp tục phát";
        playListMenuBtn[indexPlayList].querySelector(
          ".menu--play-icon"
        ).innerHTML = `<i class="fa-sharp fa-solid fa-play"></i>`;
      }
    }

    playListMenuBtn[indexPlayList].addEventListener("click", () => {
      if (_this.isClick) {
        $(".info__audio-current").pause();
        _this.isClick = false;
      } else {
        $(".info__audio-current").play();
        _this.isClick = true;
      }
      thumbnailImagePlayListBcg();
    });

    playListThumbnail[indexPlayList].addEventListener("click", (e) => {
      if (e.target.closest(".playlist__info--bcg")) {
        if (_this.isClick) {
          $(".info__audio-current").pause();
          _this.isClick = false;
        } else {
          $(".info__audio-current").play();
          _this.isClick = true;
        }
        thumbnailImagePlayListBcg();
      }
    });

    $(".btn--play").onkeyup = function (e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        if ($(".info__audio-current").paused) {
          $(".info__audio-current").play();
          _this.isClick = true;
        } else {
          $(".info__audio-current").pause();
          _this.isClick = false;
        }
        thumbnailImagePlayListBcg();
      }
    };
  },

  // when click 1 playlist show theme that playlist
  ShowPlayListAfterClick: function () {
    const _this = this;
    const arrowLeftHeader = $(".arrow_left");
    const playListItems = $$(".playlists--body-child:not(:first-child)");
    playListItems.forEach((element, index) => {
      element.addEventListener("click", (e) => {
        let currElementClick = Array.from(playListItems).indexOf(element);
        currElementClick === 0 && (_this.bodyItemImagePos = "second");
        currElementClick === 1 && (_this.bodyItemImagePos = "third");
        currElementClick === 2 && (_this.bodyItemImagePos = "four");

        if (
          !e.target.closest(".img__option--heart") &&
          !e.target.closest(".img__option--more")
        ) {
          player.classList.remove("playing");
          _this.renderSongsPlayList(false);
          _this.renderContentPlayList(currElementClick);
          _this.isCheckPLayList = true;
          _this.currentPlayList = currElementClick;
          _this.isClick = false;
          _this.isCheckList = true;

          _this.currentIndex =
            _this.arrflagPlaylistSong[_this.currentPlayList] || 0;

          _this.posSongCrurent = 0;

          _this.defineProperties(
            _this.PlayListAlbumData[currElementClick].listSongs
          );
          _this.setConfig(
            "Album",
            _this.PlayListAlbumData[currElementClick].listSongs
          );

          _this.loadCurrentSong();
          player.classList.add("active");

          if (currElementClick >= 0) {
            (
              $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`) ||
              $(".playlist-body.primary")
            )
              .querySelectorAll(".playlist-body--item")
              [_this.currentIndex].querySelector(".img--icon i").style.display =
              "block";

            (
              $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`) ||
              $(".playlist-body.primary")
            )
              .querySelectorAll(".playlist-body--item")
              [_this.currentIndex].querySelector(".img--icon")
              .style.setProperty("background-color", "var(--dark-alpha-50)");
          }

          _this.setConfig("currentIndex", _this.currentIndex);
          _this.setConfig("isCheckPLayList", _this.isCheckPLayList);
          _this.setConfig("isCheckList", _this.isCheckList);
          _this.setConfig("currentPlayList", _this.currentPlayList);

          _this.handleEventMusic(
            _this.PlayListAlbumData[currElementClick].listSongs
          );

          $(".info__audio-current").pause();

          _this.handleIconMuicAndBoxInput();
          _this.handleEventInPlayList(currElementClick);

          $$(".playlist__ContentMain--Song")[currElementClick].classList.remove(
            "hide"
          );

          $$(".playlist-body--item .checkbox-wrapper").forEach((value) => {
            value.style.display = "flex";
          });
          $(".personal__container--songs").classList.add("hide");
          $(".personal__container--playlists").classList.add("hide");
          $(".personal__container--mv").classList.add("hide");
          $(".personal__container--artist").classList.add("hide");
          layout.style.overflowY = "hidden";
          $(".playlist").style.paddingTop = "0px";
          layout.scrollTop = 0;
          header.style.setProperty("--header-scroll-bottom", "0px");
          arrowLeftHeader.style.opacity = "1";
          container.style.height = "calc(100% - 70px)";
          //

          arrowLeftHeader.onclick = () => {
            $$(".playlist__ContentMain--Song")[currElementClick].classList.add(
              "hide"
            );

            $$(".playlist-body--item .checkbox-wrapper").forEach((value) => {
              value.style.display = "none";
            });
            $(".personal__container--songs").classList.remove("hide");
            $(".personal__container--playlists").classList.remove("hide");
            $(".personal__container--mv").classList.remove("hide");
            $(".personal__container--artist").classList.remove("hide");
            layout.style.overflowY = "scroll";
            // player.classList.remove("active");

            $(".playlist").style.paddingTop = "0px";
            layout.scrollTop = 0;
            header.style.setProperty("--header-scroll-bottom", "0px");
            arrowLeftHeader.style.opacity = "0.3";
            container.style.height = "calc(100% - 90px)";
            _this.isCheckPLayList = false;
            _this.isCheckList = false;
            // _this.currentPlayList = undefined;
            _this.bodyItemImagePos = "primary";
            _this.currentIndex = 0;
            _this.defineProperties(_this.ListMusic);
            _this.loadCurrentSong();
            _this.renderSongsPlayList(true);
            _this.handleEventMusic(_this.ListMusic);
            _this.setConfig("Album", _this.ListMusic);
            _this.setConfig("isCheckPLayList", _this.isCheckPLayList);
            _this.setConfig("currentPlayList", _this.currentPlayList);
            _this.setConfig("isCheckList", _this.isCheckList);
          };
        }
      });
    });
  },

  trackThumbRender(ratio, track) {
    if (track) {
      return `
      border-radius: 4px;
      background: linear-gradient(
        to right,
        var(--progressbar-active-bg) 0%,
        var(--progressbar-active-bg) ${ratio}%,
        var(--progressbar-player-bg) ${ratio}%,
        var(--progressbar-player-bg) 100%
      )`;
    } else {
      return `
        <div class="thumb__bar" 
        style="border-radius: 50%;background-color: var(--progressbar-active-bg);transform: translate(${
          ratio - 6
        }px, -3.5px);"></div>
      `;
    }
  },

  // when hover item song, icon music hidden, box input show
  handleIconMuicAndBoxInput: function () {
    const playListBodyItems = Array.from($$(".playlist-body--item"));
    let countCheck = 0;
    playListBodyItems.forEach((value) => {
      value.addEventListener("change", () => {
        if (value.querySelector(".checkbox input").checked) {
          countCheck++;
          value.style.backgroundColor = "var(--alpha-bg)";
          playListBodyItems.forEach((element) => {
            element.querySelector(".checkbox-wrapper .checkbox").style.display =
              "block";
          });
        } else {
          value.style.removeProperty("background-color");
          countCheck--;
        }

        if (countCheck === 1) {
          playListBodyItems.forEach((element) => {
            element.querySelector(".checkbox-wrapper .checkbox").style.display =
              "block";
            element.querySelector(
              ".checkbox-wrapper .icon--music"
            ).style.display = "none";
          });
        } else if (countCheck > 1) {
          value.querySelector(".checkbox-wrapper .checkbox").style.display =
            "none";
          value.querySelector(".checkbox-wrapper .icon--music").style.display =
            "block";
        } else {
          playListBodyItems.forEach((element) => {
            element.querySelector(".checkbox-wrapper .checkbox").style.display =
              "none";
            element.querySelector(
              ".checkbox-wrapper .icon--music"
            ).style.display = "block";
          });
        }
      });

      value.addEventListener("mouseover", () => {
        value.querySelector(".checkbox-wrapper .icon--music").style.display =
          "none";
        value.querySelector(".checkbox-wrapper .checkbox").style.display =
          "block";
      });

      value.addEventListener("mouseout", () => {
        if (!countCheck) {
          value.querySelector(".checkbox-wrapper .icon--music").style.display =
            "block";
          value.querySelector(".checkbox-wrapper .checkbox").style.display =
            "none";
        }
      });
    });
  },

  // đang xử lý
  handelEventFormPlayer: function () {
    window.addEventListener("resize", () => {
      if ($(".info__audio-current").paused) {
        $(".btn--play").innerHTML = "";
        $(".btn--play").innerHTML = `<i class="${iconBtnPlay}"></i>`;
      } else {
        $(".btn--play").innerHTML = "";
        $(".btn--play").innerHTML = `<i class="${iconBtnPause}"></i>`;
      }
    });

    player.onclick = (e) => {
      if (
        e.target === player ||
        (e.target.closest(".player-music ") &&
          e.target.closest(
            ".media__option--heart, .music__action, .music__timeline, .music__volume, .btn--movie, .btn--micro,  .btn__queue, .player__btn-close"
          ) === null) ||
        e.target.closest(".track__bar")
      ) {
        player.classList.remove("player--middle");
        player.classList.remove("player--moblie");
        player.classList.add("form__player");
        if (
          e.target.className.includes("form__player") ||
          $(".form__player").contains(e.target)
        ) {
          player.style.backgroundImage =
            "url(" + this.currentSong.thumbnail + ")";
          $(".input__duration").style.display = "block";
        }

        $(".player__btn-close").onclick = (e) => {
          player.classList.remove("form__player");
          player.style.backgroundImage = "unset";

          if (window.innerWidth < 767) {
            player.classList.add("player--middle");
            player.classList.add("player--moblie");
            player.style.backgroundImage = "unset";
            $(".input__duration").style.display = "none";
          } else {
            $(".input__duration").style.display = "block";
          }
        };
      }
    };
  },

  // handle event when click some item in tag music__option--list (tổng quan, bài hát, playlist, nghệ sĩ, mv, mv, tải lên)

  handleEventMusic: function (TypeMusicData) {
    const _this = this;
    _this.rederPlayerMusic();
    // variables in player
    const audio = $(".info__audio-current");
    const btnPrev = $(".btn--prev");
    const btnNext = $(".btn--next");
    const btnPlay = $(".btn--play");
    const btnShufle = $(".btn--shuffle");
    const btnRepeat = $(".btn--repeat");
    const timeLeft = $(".time.left");
    const durationTrack = $(".duration__track");
    const inputDuration = $(".input__duration");

    const btnVolume = $(".btn--volume");
    const volumeTrack = $(".volume__track");
    const inputVolume = $(".input__volume");
    const btnQueue = $(".btn__queue");

    const PLayListBodyType = Array.from(
      (
        $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`) ||
        $(".playlist-body.primary")
      ).querySelectorAll(".playlist-body--item")
    );

    $(".btn-playall").onclick = function () {
      if (audio.paused) {
        audio.play();
      }
    };

    if (_this.isClick) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      sliderBar.style.height = "var(--sliderbar-height)";
      btnPlay.innerHTML = "";
      btnPlay.innerHTML = `<i class="${iconBtnPlay}"></i>`;

      $(".media__image .media__thumbnail").style.borderRadius = "4px";
      PLayListBodyType[_this.currentIndex].querySelector(
        ".icon__img--playing"
      ).style.display = "none";
      PLayListBodyType[_this.currentIndex].querySelector(
        ".img--icon i"
      ).style.display = "block";
      PLayListBodyType[_this.currentIndex]
        .querySelector(".img--icon")
        .style.setProperty("background-color", "var(--dark-alpha-50)");
    };

    audio.onplay = function () {
      player.classList.add("active");
      sliderBar.style.height = "var(--sliderbar-height)";
      $(".media__image .media__thumbnail").style.borderRadius = "50%";
      _this.isPlaying = true;
      player.classList.add("playing");
      btnPlay.innerHTML = "";
      btnPlay.innerHTML = `<i class="${iconBtnPause}"></i>`;
      PLayListBodyType[_this.currentIndex].classList.add("active");
      PLayListBodyType[_this.currentIndex].querySelector(
        ".icon__img--playing"
      ).style.display = "block";

      PLayListBodyType[_this.currentIndex]
        .querySelector(".img--icon")
        .style.setProperty("background-color", "var(--dark-alpha-50)");
      PLayListBodyType[_this.currentIndex].querySelector(
        ".img--icon i"
      ).style.display = "none";
    };

    btnPlay.onkeyup = function (e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    };

    document.addEventListener("keydown", (e) => {
      if (document.activeElement !== $(".input_search")) {
        e.preventDefault();
      }
    });

    // play music when click icon play or pause music when click icon pause
    btnPlay.onclick = function (e) {
      if (btnPlay.querySelector("i").className.includes(`${iconBtnPlay}`)) {
        btnPlay
          .querySelector("i")
          .classList.toggle(`${iconBtnPause.trim().split(" ").pop()}`);
        btnPlay
          .querySelector("i")
          .classList.remove(`${iconBtnPlay.trim().split(" ").pop()}`);
        audio.play();
      } else {
        btnPlay
          .querySelector("i")
          .classList.toggle(`${iconBtnPlay.trim().split(" ").pop()}`);
        btnPlay
          .querySelector("i")
          .classList.remove(`${iconBtnPause.trim().split(" ").pop()}`);
        audio.pause();
      }
    };

    // play music when click button next
    btnNext.onclick = function () {
      if (_this.isRandom) {
        _this.RandomSong(TypeMusicData);
      } else {
        _this.nextSong(TypeMusicData);
      }

      if (player.className.includes("form__player")) {
        player.style.backgroundImage =
          "url(" + _this.currentSong.thumbnail + ")";
      }
      addElementCardInfoNextSong(TypeMusicData);
      handleIconPlayingPause();
      audio.play();
    };

    // play music when click button previous
    btnPrev.onclick = function () {
      if (_this.isRandom) {
        _this.RandomSong(TypeMusicData);
      } else {
        _this.prevSong(TypeMusicData);
      }
      if (player.className.includes("form__player")) {
        player.style.backgroundImage =
          "url(" + _this.currentSong.thumbnail + ")";
      }
      addElementCardInfoNextSong(TypeMusicData);
      handleIconPlayingPause();
      audio.play();
    };

    // play music when click button repeat
    btnRepeat.onclick = function (e) {
      if (_this.isRepeatAll === false && _this.isRepeatOne === false) {
        _this.isRepeatAll = true;
        btnRepeat.style.color = "var(--purple-primary)";
      } else if (_this.isRepeatAll && _this.isRepeatOne === false) {
        _this.isRepeatOne = true;
        _this.isRepeatAll = false;
        e.target.classList.add("fa-arrows-repeat-1");
        e.target.classList.remove("fa-arrows-repeat");
      } else if (_this.isRepeatOne && _this.isRepeatAll === false) {
        _this.isRepeatOne = false;
        e.target.classList.add("fa-arrows-repeat");
        e.target.classList.remove("fa-arrows-repeat-1");
        btnRepeat.style.color = "var(--text-primary)";
      }

      _this.setConfig("isRepeatOne", _this.isRepeatOne);
      _this.setConfig("isRepeatAll", _this.isRepeatAll);
    };

    // play music when click btn random
    btnShufle.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);

      if (btnShufle.style.color !== "var(--purple-primary)") {
        btnShufle.style.color = "var(--purple-primary)";
      } else {
        btnShufle.style.color = "var(--text-primary)";
      }
    };

    // show playslist when click btnQueue
    btnQueue.onclick = function () {
      if (player.className.includes("form__player") === false) {
        $(".playList__modal").style.display = "block";
        if (btnQueue.className.includes("active")) {
          $(".playList__modal").classList.add("is_hide");
          $(".playList__modal").classList.remove("is_show");
          btnQueue.classList.remove("active");
        } else {
          btnQueue.classList.add("active");
          $(".playList__modal").classList.add("is_show");
          $(".playList__modal").classList.remove("is_hide");
        }
      }
    };

    // handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeatOne) {
        _this.arrflagPlaylistSong[_this.currentPlayList] = this.currentIndex;
        _this.setConfig("indexflagPlaylistSong", _this.arrflagPlaylistSong);
        audio.play();
      } else {
        handleIconPlayingPause();
        btnNext.click(TypeMusicData);
      }
    };

    // handle progess music input when audio play

    audio.ontimeupdate = function () {
      if (!_this.isMouse) {
        let currentTime = audio.currentTime;
        let ratioTime = (currentTime / audio.duration) * 100;
        timeLeft.textContent = _this.convertTime(currentTime);
        durationTrack.style = _this.trackThumbRender(ratioTime, true);

        let ratioBar = (ratioTime / 100) * durationTrack.offsetWidth;
        durationTrack.innerHTML = _this.trackThumbRender(ratioBar);
        inputDuration.value = ratioTime;
      }
    };

    inputDuration.onmousedown = () => {
      _this.isMouse = true;
    };

    inputDuration.oninput = (e) => {
      timeLeft.textContent = _this.convertTime(
        (e.target.value / 100) * audio.duration
      );
      durationTrack.style = _this.trackThumbRender(e.target.value, true);
      let ratioBar = (e.target.value / 100) * durationTrack.offsetWidth;
      durationTrack.innerHTML = _this.trackThumbRender(ratioBar);
    };

    inputDuration.onchange = function (e) {
      _this.isMouse = false;
      audio.currentTime = (e.target.value / 100) * audio.duration;
    };
    // end handle progess music input when audio play

    //start hanlde volume music
    btnVolume.onclick = function () {
      audio.volume === 0 && (audio.muted = true);
      audio.muted = audio.muted ? false : true;

      if (audio.muted) {
        volumeTrack.style = _this.trackThumbRender(0, true);
        volumeTrack.innerHTML = _this.trackThumbRender(0);
        btnVolume.innerHTML = `<i class="fa-light fa-volume-xmark"></i>`;
      } else {
        volumeTrack.style = _this.trackThumbRender(audio.volume * 100, true);
        volumeTrack.innerHTML = _this.trackThumbRender(
          audio.volume * volumeTrack.offsetWidth
        );
        btnVolume.innerHTML = `<i class="fa-light fa-volume"></i>`;
      }
    };

    inputVolume.oninput = (e) => {
      audio.volume = inputVolume.value / 100;
      audio.volume === 0 ? (audio.muted = true) : (audio.muted = false);
      audio.muted = audio.volume === 0 ? true : false;

      volumeTrack.style = _this.trackThumbRender(e.target.value, true);
      let ratioBar = (e.target.value / 100) * volumeTrack.offsetWidth;
      volumeTrack.innerHTML = _this.trackThumbRender(ratioBar);

      audio.volume
        ? (btnVolume.innerHTML = `<i class="fa-light fa-volume"></i>`)
        : (btnVolume.innerHTML = `<i class="fa-light fa-volume-xmark"></i>`);
    };
    //end hanlde volume music

    // show card info next song when hover btn next
    function addElementCardInfoNextSong(arrMusicData) {
      const cardInfoNextSong = $(".modalNextSong");
      let nextIndexSong =
        _this.currentIndex === arrMusicData.length - 1
          ? 0
          : _this.currentIndex + 1;

      cardInfoNextSong.innerHTML = `
          <div class="modalNextSong--container">
            <p class="modalNextSong--title">Phát tiếp theo</p>
            <div class="modalNextSong--info">
              <div class="modal__info--bcgSong">
                <img
                  src=" ${arrMusicData[nextIndexSong].thumbnail}"
                  alt=""
                />
              </div>
              <div class="modal__info--main">
                <p class="main--namesong">
                  ${arrMusicData[nextIndexSong].song}
                </p>
                <p class="main--namesinger">
                ${arrMusicData[nextIndexSong].singer}
                </p>
              </div>
            </div>
          </div>
          `;
    }

    addElementCardInfoNextSong(TypeMusicData);

    btnNext.addEventListener("mouseover", () => {
      if (mobileNextSongFrom === false) {
        $(".modalNextSong").style.display = "block";
      }
    });

    btnNext.addEventListener("mouseout", () => {
      if (mobileNextSongFrom === false) {
        $(".modalNextSong").style.display = "none";
      }
    });

    function toggleHeart(e) {
      e.preventDefault();
      if (e.target.querySelector(".fa-heart")) {
        e.target.querySelector(".fa-heart").classList.toggle("fa-light");
        e.target.querySelector(".fa-heart").classList.toggle("fa-solid");
        e.target.querySelector(".fa-heart").style.color = e.target
          .querySelector(".fa-heart")
          .classList.contains("fa-light")
          ? ""
          : "red";
      } else {
        e.target.classList.toggle("fa-light");
        e.target.classList.toggle("fa-solid");
        e.target.style.color = e.target.classList.contains("fa-light")
          ? ""
          : "red";
      }
    }

    $$(".item--option-heart").forEach((element) => {
      element.addEventListener("click", toggleHeart);
    });

    $(".media__option--heart").addEventListener("click", toggleHeart);

    PLayListBodyType.forEach((element, index) => {
      element.ondblclick = (e) => {
        if (
          !e.target.closest(".body-item--img") &&
          !e.target.closest(".body-item--option") &&
          !e.target.closest(".checkbox-wrapper") // thêm
        ) {
          player.classList.add("active");
          _this.isCheckList = true;
          if (_this.isCheckPLayList) {
            _this.arrflagPlaylistSong[_this.currentPlayList] = index;
            _this.setConfig("indexflagPlaylistSong", _this.arrflagPlaylistSong);
          }

          if (_this.posSongCrurent === index) {
            audio && audio.paused ? audio.play() : audio.pause();
          } else {
            _this.currentIndex = index;
            _this.loadCurrentSong();
          }

          if (_this.posSongCrurent !== index) {
            audio.play();
            _this.posSongCrurent = index;
          } else {
            if (_this.isPlaying) {
              _this.isPlaying = false;
              audio.onpause();
            } else {
              audio.play();
            }
          }

          addElementCardInfoNextSong(TypeMusicData);
          handleIconPlayingPause();
          _this.setConfig("currentIndex", _this.currentIndex);
          _this.setConfig("isCheckList", _this.isCheckList);
          // _this.isCheckPLayList &&
          //   _this.setConfig("posSongCrurent", _this.posSongCrurent);
        }
      };
    });

    handleEventBodyItemImage = function (parentNode) {
      parentNode
        .querySelectorAll(".body-item--img")
        .forEach((element, index) => {
          element.onclick = () => {
            _this.posSongCrurent = index;
            _this.isCheckList = true;
            handleIconImg(element, index);
            addElementCardInfoNextSong(TypeMusicData);
            if (_this.isCheckPLayList) {
              _this.arrflagPlaylistSong[_this.currentPlayList] = index;
              _this.setConfig(
                "indexflagPlaylistSong",
                _this.arrflagPlaylistSong
              );
            }

            _this.setConfig("isCheckList", _this.isCheckList);
          };
        });
    };

    if (_this.bodyItemImagePos === "primary") {
      handleEventBodyItemImage($(".playlist-body.primary"));
    } else {
      handleEventBodyItemImage(
        $(`.playlist__ContentMain--Song.${_this.bodyItemImagePos}`)
      );
    }

    handleIconImg = function (element, index) {
      if (_this.currentIndex !== index) {
        _this.currentIndex = index;
        _this.loadCurrentSong();
      }

      _this.setConfig("currentIndex", _this.currentIndex);

      if (audio.paused) {
        audio.play();
        player.classList.add("active");
      } else {
        audio.pause();
      }
      handleIconPlayingPause();
    };

    handleIconPlayingPause = function () {
      // $$(".playlist-body--item").forEach((value, Index) => {
      PLayListBodyType.forEach((value, Index) => {
        value.addEventListener("mouseover", () => {
          if (
            value.querySelector(".icon__img--playing").style.display === "none"
          ) {
            value.querySelector(".img--icon i").style.display = "block";
          }
        });

        value.addEventListener("mouseout", () => {
          if (
            value.querySelector(".img--icon i").style.display === "block" &&
            Index !== _this.currentIndex
          ) {
            value.querySelector(".img--icon i").style.display = "none";
          }
        });

        if (_this.currentIndex !== Index) {
          value.querySelector(".icon__img--playing").style.display = "none";
          value.querySelector(".img--icon i").style.display = "none";
          value
            .querySelector(".img--icon")
            .style.removeProperty("background-color");

          if (value.className.includes("active")) {
            value.classList.remove("active");
          }
        }
      });
    };
  },

  // function next song
  nextSong: function (arrMusicData) {
    this.currentIndex++;
    if (this.currentIndex >= arrMusicData.length) {
      this.currentIndex = 0;
    }
    this.arrflagPlaylistSong[this.currentPlayList] = this.currentIndex;
    this.setConfig("indexflagPlaylistSong", this.arrflagPlaylistSong);
    this.setConfig("currentIndex", this.currentIndex);

    handleIconPlayingPause();
    this.loadCurrentSong();
  },

  // function prev song
  prevSong: function (arrMusicData) {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = arrMusicData.length - 1;
    }
    this.arrflagPlaylistSong[this.currentPlayList] = this.currentIndex;
    this.setConfig("indexflagPlaylistSong", this.arrflagPlaylistSong);
    this.setConfig("currentIndex", this.currentIndex);
    handleIconPlayingPause();
    this.loadCurrentSong();
  },

  RandomSong: function (arrMusicData) {
    let newIndex, check;
    do {
      newIndex = Math.floor(Math.random() * arrMusicData.length);

      if (this.arrSongsRandom.includes(newIndex)) {
        check = true;
      } else {
        check = false;
        this.arrSongsRandom.push(newIndex);
      }
    } while (check);

    if (this.arrSongsRandom.length === arrMusicData.length) {
      this.arrSongsRandom = [];
    }

    this.currentIndex = newIndex;
    this.loadCurrentSong();
    this.arrflagPlaylistSong[this.currentPlayList] = this.currentIndex;
    this.setConfig("indexflagPlaylistSong", this.arrflagPlaylistSong);
    this.setConfig("currentIndex", this.currentIndex);
  },

  loadCurrentSong: function () {
    $(".media__thumbnail img").src = this.currentSong.thumbnail;
    $(".info__audio-current").src = this.currentSong.path;
    $$(".info__song--name span")[0].textContent = this.currentSong.song;
    $$(".info__song--name span")[1].textContent = this.currentSong.song;
    $(".info__artist-current").textContent = this.currentSong.singer;
  },
  // run methods in app
  start: function () {
    this.loadConfig();
    this.defineProperties(this.ListMusic);
    this.renderSongsPlayList(true);
    this.handleEventMusic(this.ListMusic);
    this.renderPlayListAlbum();
    this.renderMV();
    this.renderArtists();
    this.ShowPlayListAfterClick();
    this.handelEventFormPlayer();

    const personalItem = $(".item-first");
    const exploreItem = $(".item-second");
    personalItem.addEventListener("click", () => {
      $(".personal").classList.add("active");
      $(".explore").style.display = "none";
      exploreItem.classList.remove("is-active");
      personalItem.classList.add("is-active");
      layout.scrollTop = 0;
    });

    exploreItem.addEventListener("click", () => {
      personalItem.classList.remove("is-active");
      exploreItem.classList.add("is-active");
      $(".explore").style.display = "block";
      $(".personal").classList.remove("active");
      layout.scrollTop = 0;
    });

    if (this.isCheckPLayList === false) {
      exploreItem.classList.add("is-active");
    } else {
      personalItem.click();
    }
    this.setPropertyAfterLoad();
  },
};

AppMusic.start();
