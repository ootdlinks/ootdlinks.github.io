// 민지(minji) 코디 데이터 — 옛 GitHub 백업에서 EP011~EP015를 복구(2026-11-12). 복구 대상: 인스타에 게시된 5개 릴스.
// 탭 표시 이름은 label(없으면 tab). EP011~EP015 = LOOK 01~05, 앞으로 새 편은 label을 OOTD 01, OOTD 02 … 로 시작한다(사용자 지시 2026-11-12). 이후 편 추가: EPISODES 배열 끝에 객체를 넣고 img/minji/ 에 사진을 올린 뒤 python build.py
const IMGS = {};
const PLINK = {};
const P = (name, price, id, item, vendor, img, ok, hide) => {
  const long = "https://www.coupang.com/vp/products/" + id + "?itemId=" + item + "&vendorItemId=" + vendor;
  return { name, price, ok, hide: !!hide, url: PLINK[long] || long, img };
};
const EPISODES = [
{
    tab: "EP011",
    label: "LOOK 01",
    pov: "전남친도 오는 결혼식, 인생 하객룩 찾아냄",
    looks: [
      { name: "시스루 리본 블라우스 하객룩", imgs: ["ep11s_l1_1.jpg"], items: [
        {name:"블랙 퍼프소매 리본 블라우스", price:23780, ok:true, hide:false, url:"https://link.coupang.com/a/igrVuMy7Oe", img:"ep11s2_sheer_ribbon.jpg"},
        {name:"와인 끈나시 이너", price:14800, ok:true, hide:false, url:"https://link.coupang.com/a/igmHDAySOG", img:"ep11v2_burg_cami.jpg"},
        {name:"그레이 미디 플리츠 스커트", price:16400, ok:true, hide:false, url:"https://link.coupang.com/a/igmIewjghE", img:"ep11v2_gray_pleat.jpg"},
        {name:"블랙 메리제인 플랫슈즈", price:19520, ok:true, hide:false, url:"https://link.coupang.com/a/igsb3ZONiK", img:"ep11s2_mary_jane.jpg"},
        {name:"진주 목걸이", price:5400, ok:true, hide:false, url:"https://link.coupang.com/a/igmIPyKQxg", img:"ep11v2_pearl_nk.jpg"}
      ]},
      { name: "네이비 트위드 자켓 하객룩", imgs: ["ep11s_l2_1.jpg"], items: [
        {name:"네이비 트위드 노카라 자켓", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/igmKtEjn4e", img:"ep11v2_navy_tweed.jpg"},
        {name:"그레이 골지 니트 이너", price:13900, ok:true, hide:false, url:"https://link.coupang.com/a/igmK4wP1Do", img:"ep11v2_gray_knit.jpg"},
        {name:"다크그레이 티어드 니트 스커트", price:41200, ok:true, hide:false, url:"https://link.coupang.com/a/igmLFzL6bs", img:"ep11v2_char_tiered.jpg"},
        {name:"블랙 퀼팅 체인 숄더백", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/igrQ4B6bPU", img:"ep11s2_chain_bag.jpg"},
        {name:"블랙 페니 로퍼", price:29700, ok:true, hide:false, url:"https://link.coupang.com/a/h866f6wnuK", img:"ep11n_blk_loafer.jpg"}
      ]},
      { name: "러스트 프릴 블라우스 하객룩", imgs: ["ep11s_l3_1.jpg"], items: [
        {name:"러스트 브라운 프릴 카라 블라우스", price:18800, ok:true, hide:false, url:"https://link.coupang.com/a/igmNX27KMu", img:"ep11v2_burg_frill.jpg"},
        {name:"브라운 플리츠 롱스커트", price:20710, ok:true, hide:false, url:"https://link.coupang.com/a/igrRFr3qmG", img:"ep11s2_brown_pleat.jpg"},
        {name:"와인 벨벳 리본 헤어핀", price:9900, ok:true, hide:false, url:"https://link.coupang.com/a/igrSgmliBU", img:"ep11s2_ribbon_pin.jpg"},
        {name:"블랙 메리제인 플랫슈즈", price:19520, ok:true, hide:false, url:"https://link.coupang.com/a/igsb3ZONiK", img:"ep11s2_mary_jane.jpg"}
      ]},
      { name: "딥퍼플 니트 원피스 하객룩", imgs: ["ep11s_l4_1.jpg"], items: [
        {name:"딥퍼플 니트 롱원피스", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h83fQkLyk8", img:"ep11n_purple_dress.jpg"},
        {name:"블랙 시스루 크롭 볼레로", price:9900, ok:true, hide:false, url:"https://link.coupang.com/a/igmPKFZw8i", img:"ep11v2_sheer_bolero.jpg"},
        {name:"블랙 가죽 클러치", price:11900, ok:true, hide:false, url:"https://link.coupang.com/a/igmRYOGiOW", img:"ep11v2_clutch.jpg"},
        {name:"진주 귀걸이", price:10520, ok:true, hide:false, url:"https://link.coupang.com/a/igmRnX6lAP", img:"ep11v2_pearl_ear.jpg"},
        {name:"블랙 메리제인 플랫슈즈", price:19520, ok:true, hide:false, url:"https://link.coupang.com/a/igsb3ZONiK", img:"ep11s2_mary_jane.jpg"}
      ]},
      { name: "그레이 울 셋업 하객룩", imgs: ["ep11s_l5_1.jpg"], items: [
        {name:"그레이 울 더블 셋업", price:53460, ok:true, hide:false, url:"https://link.coupang.com/a/h83gr8hGeG", img:"ep11n_check_set.jpg"},
        {name:"블랙 레이스 캐미 이너", price:10400, ok:true, hide:false, url:"https://link.coupang.com/a/igmSzHY1OC", img:"ep11v2_lace_cami.jpg"},
        {name:"블랙 가죽 클러치", price:11900, ok:true, hide:false, url:"https://link.coupang.com/a/igmRYOGiOW", img:"ep11v2_clutch.jpg"},
        {name:"블랙 페니 로퍼", price:29700, ok:true, hide:false, url:"https://link.coupang.com/a/h866f6wnuK", img:"ep11n_blk_loafer.jpg"}
      ]}
    ]
  },
  {
    tab: "EP012",
    label: "LOOK 02",
    pov: "소개팅 1트에 고백 받는 가을 코디 찾아냄",
    looks: [
      { name: "걸리시 소개팅 룩", imgs: ["ep12s_l1_1.jpg"], items: [
        {name:"아이보리 오프숄더 루즈핏 니트", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/im0E4WDNSK", img:"ep12_L1_00.jpg"},
        {name:"화이트 레이스 캉캉 밴딩 미니스커트", price:14800, ok:true, hide:false, url:"https://link.coupang.com/a/im0FXJZZLg", img:"ep12_L1_01.jpg"},
        {name:"베이지 웨지굽 슬라우치 니하이부츠", price:64200, ok:true, hide:false, url:"https://link.coupang.com/a/im0GMzRqMu", img:"ep12_L1_02.jpg"},
        {name:"버건디 가죽 토트 숄더백", price:26970, ok:true, hide:false, url:"https://link.coupang.com/a/im0HAuqkPQ", img:"ep12_L1_03.jpg"}
      ]},
      { name: "프레피 시크 룩", imgs: ["ep12s_l2_1.jpg"], items: [
        {name:"버건디 라운드넥 니트", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/im0Jn04Rpt", img:"ep12_L2_04.jpg"},
        {name:"화이트 쉬폰 롱스카프", price:9900, ok:true, hide:false, url:"https://link.coupang.com/a/im0Ym2wq6e", img:"ep12_L2_05.jpg"},
        {name:"화이트 캉캉 플레어 미니스커트", price:13000, ok:true, hide:false, url:"https://link.coupang.com/a/im1adJbNYa", img:"ep12_L2_06.jpg"}
      ]},
      { name: "걸리시 고프코어 룩", imgs: ["ep12s_l3_1.jpg"], items: [
        {name:"카키 크롭 후드집업", price:38480, ok:true, hide:false, url:"https://link.coupang.com/a/im0LO8jYZM", img:"ep12_L3_07.jpg"},
        {name:"화이트 2단 프릴 레이어드 나시", price:15980, ok:true, hide:false, url:"https://link.coupang.com/a/im0NRBVg7g", img:"ep12_L3_08.jpg"},
        {name:"브라운 셔링 버클 바이커 롱부츠", price:31900, ok:true, hide:false, url:"https://link.coupang.com/a/im0OG0sdjw", img:"ep12_L3_09.jpg"}
      ]},
      { name: "락시크 룩", imgs: ["ep12s_l4_1.jpg"], items: [
        {name:"베이지 오프숄더 긴팔 블라우스", price:9600, ok:true, hide:false, url:"https://link.coupang.com/a/im0PvhZxL2", img:"ep12_L4_10.jpg"},
        {name:"브라운 레더 가죽 미니스커트", price:16900, ok:true, hide:false, url:"https://link.coupang.com/a/im1i9hnn5w", img:"ep12_L4_11.jpg"},
        {name:"블랙 버클 청키 미들 바이커 부츠", price:42200, ok:true, hide:false, url:"https://link.coupang.com/a/im0R3EswZF", img:"ep12_L4_12.jpg"},
        {name:"블랙 소가죽 미니 토트백", price:45800, ok:true, hide:false, url:"https://link.coupang.com/a/im0SR3arg4", img:"ep12_L4_13.jpg"}
      ]},
      { name: "로맨틱 플라워 룩", imgs: ["ep12s_l5_1.jpg"], items: [
        {name:"아이보리 잔골지 립넥 니트", price:15500, ok:true, hide:false, url:"https://link.coupang.com/a/im04BHjboW", img:"ep12_L5_14.jpg"},
        {name:"퍼플 빈티지 플라워 쉬폰 롱스커트", price:29800, ok:true, hide:false, url:"https://link.coupang.com/a/im09ptr8qO", img:"ep12_L5_15.jpg"},
        {name:"아이보리 미니 바게트백", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/im0WbOIRem", img:"ep12_L5_16.jpg"}
      ]}
    ]
  },
  {
    tab: "EP013",
    label: "LOOK 03",
    pov: "영하 되자마자 장원영핏 겨울 코디 찾아냄",
    looks: [
      { name: "걸리시 무난 퍼 재킷 룩", imgs: ["ep13s_l1_1.jpg"], items: [
        {name:"라뷰드 루즈핏 페이크 퍼 숏자켓", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/isx3QWOtie", img:"ep13n_ivory_fur_jkt.jpg"},
        {name:"여성용 코듀로이 플리츠 미니 스커트", price:14890, ok:true, hide:false, url:"https://link.coupang.com/a/isyw5hNd7s", img:"ep13n_blk_pleat_mini.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep13n_blk_longboots.jpg"},
        {name:"쓰리마인즈 TRM 리사이클 나일론 미니 로우백 T24W", price:19800, ok:true, hide:false, url:"https://link.coupang.com/a/isxNHSzvFs", img:"ep13n_blk_mini_bag.jpg"}
      ]},
      { name: "프레피 머플러 룩", imgs: ["ep13s_l2_1.jpg"], items: [
        {name:"남녀공용 울 100 머플러 양말 세트 여성 남성 목도리 겨울 선물 5컬러", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/isxOJjVWmG", img:"ep13n_camel_muffler.jpg"},
        {name:"여성용 울코트 크롭 카라 더블 자켓 숏기장 오피스룩", price:47000, ok:true, hide:false, url:"https://link.coupang.com/a/isxPFVmCrc", img:"ep13n_navy_wool_jkt.jpg"},
        {name:"여리진 여성용 포근 따뜻! 니트 스판 목폴라 터틀넥 골지 긴소매 티셔츠", price:13700, ok:true, hide:false, url:"https://link.coupang.com/a/isxQtNxCjk", img:"ep13n_white_knit.jpg"},
        {name:"메이첼 포히 캐주얼 플리츠 스커트 12326", price:15740, ok:true, hide:false, url:"https://link.coupang.com/a/isxRiLMYyi", img:"ep13n_gray_pleat_mini.jpg"},
        {name:"ZIVIA 여성 V컷 롱부츠 가을겨울 중굽 단색 하이부츠 굽 5cm", price:20330, ok:true, hide:false, url:"https://link.coupang.com/a/isxUmLPNhQ", img:"ep13n_brown_longboots.jpg"}
      ]},
      { name: "걸리시 고프코어 룩", imgs: ["ep13s_l3_1.jpg"], items: [
        {name:"[루엘라]여성 파스텔 글로시 크롭 숏패딩", price:15900, ok:true, hide:false, url:"https://link.coupang.com/a/isxU9Q1iNw", img:"ep13n_cream_crop_padding.jpg"},
        {name:"ELLE PARIS 세미 크롭 베이직 후디", price:15900, ok:true, hide:false, url:"https://link.coupang.com/a/isxVY23TgW", img:"ep13n_gray_hood_crop.jpg"},
        {name:"여성 니트 레그워머 발토시 종아리커버 니트 삭스 무지 TTW001", price:8640, ok:true, hide:false, url:"https://link.coupang.com/a/isxXBa3cnQ", img:"ep13n_white_legwarmer.jpg"},
        {name:"슈레나 여성용 마로 가보시 통굽 키높이 워커 부츠 6cm", price:17140, ok:true, hide:false, url:"https://link.coupang.com/a/isxYo1DICi", img:"ep13n_blk_chunky_boots.jpg"}
      ]},
      { name: "락시크 룩", imgs: ["ep13s_l4_1.jpg"], items: [
        {name:"구디프 여성용 페이크레더 크롭 라이더 자켓", price:19800, ok:true, hide:false, url:"https://link.coupang.com/a/isxZdBmsw0", img:"ep13n_blk_leather_crop.jpg"},
        {name:"셀루앙드 데일리 끈조절 캡내장 레이스 민소매 나시", price:10500, ok:true, hide:false, url:"https://link.coupang.com/a/isx1nFif2i", img:"ep13n_white_lace_cami.jpg"},
        {name:"여리진 여성용 쫀쫀 스판 슬림 H라인 레더 가죽 미니스커트 빅사이즈까지", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/isycPAWd3I", img:"ep13n_blk_leather_mini.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep13n_blk_longboots.jpg"},
        {name:"마리하우스 체인 크로스 미니 숄더백", price:9800, ok:true, hide:false, url:"https://link.coupang.com/a/isx22PD6nk", img:"ep13n_blk_chain_bag.jpg"}
      ]},
      { name: "포근 마무리 룩", imgs: ["ep13s_l5_1.jpg"], items: [
        {name:"cammello 브이넥 슬림핏 골지 플레어 미니원피스 긴팔 A라인 드레스 하객룩", price:29200, ok:true, hide:false, url:"https://link.coupang.com/a/isx4IXzZts", img:"ep13n_beige_knit_mini_op.jpg"},
        {name:"라블 통 큰 웨스턴 스타일 스웨이드 롱부츠 미들부츠 시리즈", price:22900, ok:true, hide:false, url:"https://link.coupang.com/a/isx5ybTmZo", img:"ep13n_beige_longboots.jpg"},
        {name:"미니 바게트백 데일리 숄더백 여성 미니가방", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/isx6l2tTdQ", img:"ep13n_white_mini_bag.jpg"}
      ]}
    ]
  },
  {
    tab: "EP014",
    label: "LOOK 04",
    pov: "오늘 코디 ㄹㅈㄷ라서 약속 없어도 일단 나감",
    looks: [
      { name: "다크 로맨틱 버건디 룩", imgs: ["ep14s_l1_1.jpg"], items: [
        {name:"버건디 크롭 브이넥 니트 가디건", price:15430, ok:true, hide:false, url:"https://link.coupang.com/a/iu3aVxoV0m", img:"ep14n_burgundy_cardi.jpg"},
        {name:"블랙 레이어드 레이스 나시", price:15900, ok:true, hide:false, url:"https://link.coupang.com/a/iu3bxMnMRM", img:"ep14n_lace_tank.jpg"},
        {name:"여성용 코듀로이 플리츠 미니 스커트", price:14890, ok:true, hide:false, url:"https://link.coupang.com/a/isyw5hNd7s", img:"ep14n_blk_pleat_mini.jpg"},
        {name:"블랙 벨벳 리본 헤어핀", price:8900, ok:true, hide:false, url:"https://link.coupang.com/a/iu3ewFyOES", img:"ep14n_ribbon_pin.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep14n_blk_longboots.jpg"}
      ]},
      { name: "타탄 체크 걸리시 룩", imgs: ["ep14s_l2_1.jpg"], items: [
        {name:"버건디 타탄체크 크롭 셔츠 자켓", price:35100, ok:true, hide:false, url:"https://link.coupang.com/a/iu3veaFnoG", img:"ep14n_tartan_jkt.jpg"},
        {name:"레드 타탄 체크 미니 스커트", price:15800, ok:true, hide:false, url:"https://link.coupang.com/a/iu3fxYmLSK", img:"ep14n_tartan_skirt.jpg"},
        {name:"블랙 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iu3fWKOWku", img:"ep14n_elle_turtle_blk.jpg"},
        {name:"블랙 레이스업 통굽 워커부츠", price:24900, ok:true, hide:false, url:"https://link.coupang.com/a/iu3gtt9r9o", img:"ep14n_boots_sn601.jpg"}
      ]},
      { name: "코발트 포인트 룩", imgs: ["ep14s_l3_1.jpg"], items: [
        {name:"코발트블루 브이넥 니트 가디건", price:18890, ok:true, hide:false, url:"https://link.coupang.com/a/iu3nAuP0F2", img:"ep14n_cobalt_cardi.jpg"},
        {name:"아이보리 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iu3gatQSVo", img:"ep14n_elle_turtle_ivory.jpg"},
        {name:"화이트 하이웨스트 플리츠 미니스커트", price:9350, ok:true, hide:false, url:"https://link.coupang.com/a/iu3CTdDrs4", img:"ep14n_elle_pleat_white.jpg"},
        {name:"블랙 메리제인 통굽 로퍼", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iu3gMltFaS", img:"ep14n_maryjane.jpg"},
        {name:"여성 니트 레그워머 발토시 종아리커버 니트 삭스 무지 TTW001", price:8640, ok:true, hide:false, url:"https://link.coupang.com/a/isxXBa3cnQ", img:"ep14n_white_legwarmer.jpg"}
      ]},
      { name: "와인 벨벳 파티 룩", imgs: ["ep14s_l4_1.jpg"], items: [
        {name:"와인 벨벳 미니원피스", price:22910, ok:true, hide:false, url:"https://link.coupang.com/a/iu4AgmuiyW", img:"ep14n_wine_velvet.jpg"},
        {name:"블랙 페이크 퍼 크롭 자켓", price:41800, ok:true, hide:false, url:"https://link.coupang.com/a/iu3hiFLiCq", img:"ep14n_fur_crop_blk.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep14n_blk_longboots.jpg"},
        {name:"마리하우스 체인 크로스 미니 숄더백", price:9800, ok:true, hide:false, url:"https://link.coupang.com/a/isx22PD6nk", img:"ep14n_blk_chain_bag.jpg"}
      ]},
      { name: "포근 크림 퍼 룩", imgs: ["ep14s_l5_1.jpg"], items: [
        {name:"아이보리 하이넥 크롭 퍼 자켓", price:49800, ok:true, hide:false, url:"https://link.coupang.com/a/iu3hsGloT6", img:"ep14n_cream_fur_jkt.jpg"},
        {name:"블랙 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iu3fWKOWku", img:"ep14n_elle_turtle_blk.jpg"},
        {name:"화이트 하이웨스트 플리츠 미니스커트", price:9350, ok:true, hide:false, url:"https://link.coupang.com/a/iu3CTdDrs4", img:"ep14n_elle_pleat_white.jpg"},
        {name:"라블 통 큰 웨스턴 스타일 스웨이드 롱부츠 미들부츠 시리즈", price:22900, ok:true, hide:false, url:"https://link.coupang.com/a/isx5ybTmZo", img:"ep14n_beige_longboots.jpg"},
        {name:"미니 바게트백 데일리 숄더백 여성 미니가방", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/isx6l2tTdQ", img:"ep14n_white_mini_bag.jpg"}
      ]}
    ]
  },
  {
    tab: "EP015",
    label: "LOOK 05",
    pov: "추운데 롱패딩 말고 예쁘게 입고 싶은 사람",
    looks: [
      { name: "네이비 블랙 숏패딩 룩", imgs: ["ep15s_l1_1.jpg"], items: [
        {name:"다크 슬림 숏패딩 하이넥(블랙·다크네이비)", price:42760, ok:true, hide:false, url:"https://link.coupang.com/a/iwwx0i60YK", img:"ep15n_blk_padding.jpg"},
        {name:"진그레이 골지 슬림 터틀넥", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/iwvRFEjEkK", img:"ep15n_gray_rib_turtle.jpg"},
        {name:"여성용 코듀로이 플리츠 미니 스커트", price:14890, ok:true, hide:false, url:"https://link.coupang.com/a/isyw5hNd7s", img:"ep13n_blk_pleat_mini.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep14n_blk_longboots.jpg"}
      ]},
      { name: "카멜 스웨이드 자켓 룩", imgs: ["ep15s_l2_1.jpg"], items: [
        {name:"카멜 스웨이드 카라 세미크롭 자켓", price:38500, ok:true, hide:false, url:"https://link.coupang.com/a/iwvSDpp4SG", img:"ep15n_brown_suede_jkt.jpg"},
        {name:"블루 데님 A라인 미니 스커트", price:20900, ok:true, hide:false, url:"https://link.coupang.com/a/iww6Oq0PJc", img:"ep15n_denim_mini.jpg"},
        {name:"아이보리 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iu3gatQSVo", img:"ep14n_elle_turtle_ivory.jpg"},
        {name:"ZIVIA 여성 V컷 롱부츠 가을겨울 중굽 단색 하이부츠 굽 5cm", price:20330, ok:true, hide:false, url:"https://link.coupang.com/a/isxUmLPNhQ", img:"ep13n_brown_longboots.jpg"}
      ]},
      { name: "초코 퍼 자켓 룩", imgs: ["ep15s_l3_1.jpg"], items: [
        {name:"브라운(밤색) 페이크퍼 숏 자켓", price:54680, ok:true, hide:false, url:"https://link.coupang.com/a/iwvUyiOP2i", img:"ep15n_choco_fur_jkt.jpg"},
        {name:"화이트 골지 슬림 세미크롭 티", price:10900, ok:true, hide:false, url:"https://link.coupang.com/a/iwyapbubM4", img:"ep15n_white_rib_tee.jpg"},
        {name:"여성용 코듀로이 플리츠 미니 스커트", price:14890, ok:true, hide:false, url:"https://link.coupang.com/a/isyw5hNd7s", img:"ep14n_blk_pleat_mini.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep14n_blk_longboots.jpg"}
      ]},
      { name: "베이지 머스탱 룩", imgs: ["ep15s_l4_1.jpg"], items: [
        {name:"베이지 양털 카라 크롭 스웨이드 무스탕", price:64900, ok:true, hide:false, url:"https://link.coupang.com/a/iwvVvPBPuS", img:"ep15n_beige_mustang.jpg"},
        {name:"화이트 슬림핏 세미크롭 티", price:12230, ok:true, hide:false, url:"https://link.coupang.com/a/iwvWtlfsLA", img:"ep15n_white_crop_tee.jpg"},
        {name:"메이첼 포히 캐주얼 플리츠 스커트 12326", price:15740, ok:true, hide:false, url:"https://link.coupang.com/a/isxRiLMYyi", img:"ep13n_gray_pleat_mini.jpg"},
        {name:"플라틴베이지 빅사이즈 스퀘어토 롱부츠 여성 가죽 부츠 (발볼넓은/다리얇아보이는)", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/isxMv3J9Eq", img:"ep14n_blk_longboots.jpg"},
        {name:"마리하우스 체인 크로스 미니 숄더백", price:9800, ok:true, hide:false, url:"https://link.coupang.com/a/isx22PD6nk", img:"ep14n_blk_chain_bag.jpg"}
      ]},
      { name: "크림 숏패딩 룩", imgs: ["ep15s_l5_1.jpg"], items: [
        {name:"[루엘라]여성 파스텔 글로시 크롭 숏패딩", price:15900, ok:true, hide:false, url:"https://link.coupang.com/a/isxU9Q1iNw", img:"ep13n_cream_crop_padding.jpg"},
        {name:"아이보리 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iu3gatQSVo", img:"ep14n_elle_turtle_ivory.jpg"},
        {name:"화이트 하이웨스트 플리츠 미니스커트", price:9350, ok:true, hide:false, url:"https://link.coupang.com/a/iu3CTdDrs4", img:"ep14n_elle_pleat_white.jpg"},
        {name:"라블 통 큰 웨스턴 스타일 스웨이드 롱부츠 미들부츠 시리즈", price:22900, ok:true, hide:false, url:"https://link.coupang.com/a/isx5ybTmZo", img:"ep14n_beige_longboots.jpg"},
        {name:"미니 바게트백 데일리 숄더백 여성 미니가방", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/isx6l2tTdQ", img:"ep14n_white_mini_bag.jpg"}
      ]}
    ]
  },
  {
    tab: "EP016",
    label: "OOTD 01",
    pov: "패딩 벗는 순간 니트가 예뻐야 하는 겨울 데이트",
    looks: [
      { name: "아이보리 케이블 니트 룩", imgs: ["ep16s_l1_1.jpg"], items: [
        {name:"아이보리 케이블 크롭 니트 가디건", price:23750, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPbHbHw", img:"ootd1_ivory_b.jpg"},
        {name:"블랙 밴딩 플리츠 A라인 미니스커트", price:13400, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPht0ou", img:"ootd1_blk_pleat.jpg"},
        {name:"블랙 스퀘어 통굽 롱부츠", price:31900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPmp61A", img:"ootd1_blk_long_b.jpg"}
      ]},
      { name: "버건디 가디건 타탄 룩", imgs: ["ep16s_l2_1.jpg"], items: [
        {name:"버건디 케이블 크롭 브이넥 니트 가디건", price:20020, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPrBdS0", img:"ootd1_burg_cardi.jpg"},
        {name:"화이트 프릴 칼라 블라우스", price:17500, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPxyiIu", img:"ep16n_white_frill_blouse.jpg"},
        {name:"레드 타탄 체크 A라인 스커트", price:29100, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPC3who", img:"ootd1_red_tartan.jpg"},
        {name:"블랙 V컷 메리제인 플랫슈즈", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPIhd2y", img:"ootd1_maryjane_chakhan.jpg"}
      ]},
      { name: "그레이 니트 데님 룩", imgs: ["ep16s_l3_1.jpg"], items: [
        {name:"그레이 오픈 카라넥 크롭 니트", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPMS8DQ", img:"ep16n_gray_collar_knit.jpg"},
        {name:"블루 데님 투톤 청치마 미니스커트", price:12000, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPSg1dc", img:"ootd1_blue_denim.jpg"},
        {name:"여성 니트 레그워머 발토시", price:8640, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPW6Hka", img:"ep13n_white_legwarmer.jpg"},
        {name:"블랙 통굽 키높이 워커 부츠 6cm", price:17140, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSoveQm", img:"ep13n_blk_chunky_boots.jpg"}
      ]},
      { name: "블랙 레이스 레더 룩", imgs: ["ep16s_l4_1.jpg"], items: [
        {name:"블랙 스퀘어넥 세미크롭 니트 조끼", price:16900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGStrlts", img:"ep16n_black_knit_vest.jpg"},
        {name:"블랙 H라인 레더 미니스커트", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSyINwG", img:"ep13n_blk_leather_mini.jpg"},
        {name:"블랙 스판 니하이 롱부츠", price:47880, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSEd6pU", img:"ootd1_kneehigh_a.jpg"}
      ]},
      { name: "핑크 가디건 화이트 룩", imgs: ["ep16s_l5_1.jpg"], items: [
        {name:"연핑크 케이블 크롭 니트 가디건", price:17400, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSJpdhk", img:"ootd1_pink_b.jpg"},
        {name:"아이보리 골지 터틀넥", price:7490, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSPs8cu", img:"ep14n_elle_turtle_ivory.jpg"},
        {name:"화이트 하이웨스트 플리츠 미니스커트", price:9350, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSV6PBY", img:"ep14n_elle_pleat_white.jpg"},
        {name:"베이지 스웨이드 롱부츠", price:35900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGS4o10e", img:"ootd1_beige_b.jpg"}
      ]}
    ]
  },
  {
    tab: "EP017",
    label: "OOTD 02",
    pov: "약속 12분 전인데 가디건만 4벌째 갈아입는 데이트날",
    looks: [
      { name: "블랙 트위드 그레이 스커트 룩", imgs: ["ep17s_l1_1.jpg"], items: [
        {name:"블랙 금장버튼 트위드 크롭 자켓", price:35640, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGS9JzQ4", img:"ootd1_tweed_blk.jpg"},
        {name:"화이트 골지 슬림 세미크롭 티", price:10900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGTfbMWG", img:"ep15n_white_rib_tee.jpg"},
        {name:"그레이 A라인 플리츠 미니스커트", price:11320, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGVXvU4W", img:"ep12n_pleat_mini.jpg"},
        {name:"블랙 슬림핏 앵클부츠", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGV3iJLU", img:"ep12n_ankle_boots.jpg"}
      ]},
      { name: "아이보리 블레이저 룩", imgs: ["ep17s_l2_1.jpg"], items: [
        {name:"아이보리 크롭 테일러드 블레이저", price:20100, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGV9Wrbo", img:"ootd1_blazer_c.jpg"},
        {name:"블랙 슬림 골지 라운드넥 니트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGWfoEg0", img:"ep12n_rib_knit.jpg"},
        {name:"블랙 밴딩 플리츠 A라인 미니스커트", price:13400, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPht0ou", img:"ootd1_blk_pleat.jpg"},
        {name:"블랙 V컷 메리제인 플랫슈즈", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPIhd2y", img:"ootd1_maryjane_chakhan.jpg"}
      ]},
      { name: "네이비 재킷 타탄 룩", imgs: ["ep17s_l3_1.jpg"], items: [
        {name:"네이비 트위드 금장버튼 리본 크롭 자켓", price:58800, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGWkCgHQ", img:"ootd1_navy_bibidia.jpg"},
        {name:"화이트 프릴 칼라 블라우스", price:17500, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPxyiIu", img:"ep16n_white_frill_blouse.jpg"},
        {name:"레드 타탄 체크 A라인 스커트", price:29100, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGPC3who", img:"ootd1_red_tartan.jpg"},
        {name:"블랙 클래식 로퍼", price:14240, ok:true, hide:false, url:"https://link.coupang.com/a/iDl7JKjavs", img:"ootd1_loafer.jpg"}
      ]},
      { name: "핑크 가디건 화이트 룩", imgs: ["ep17s_l4_1.jpg"], items: [
        {name:"연핑크 케이블 크롭 니트 가디건", price:17400, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSJpdhk", img:"ootd1_pink_b.jpg"},
        {name:"화이트 골지 슬림 세미크롭 티", price:10900, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGTfbMWG", img:"ep15n_white_rib_tee.jpg"},
        {name:"화이트 하이웨스트 플리츠 미니스커트", price:9350, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGSV6PBY", img:"ep14n_elle_pleat_white.jpg"},
        {name:"화이트 스니커즈", price:14990, ok:true, hide:false, url:"https://link.coupang.com/a/iDkGWpPYs0", img:"ep12n_white_snk.jpg"}
      ]}
    ]
  }
];
