// 야르(yaar.ootd, 슬롯 nocturne) 코디 데이터. 파트너스 채널 ID yaarootd. 새 편 label은 OOTD 01, OOTD 02 … (2026-11-13 OOTD 01 추가).
// (옛 설명) 서아 채널 코디 데이터. 에피소드 추가: EPISODES 배열 끝에 객체를 넣는다.
// 상품: P(이름, 가격, productId, itemId, vendorItemId, 이미지파일명(img/nocturne/ 안), ok)  ok=true는 색상·사이즈 확인 후에만
// 룩 사진: IMGS 에 넣고 img/nocturne/ 폴더에 파일을 올린다.
const IMGS = {};
const PLINK = {};   // "쿠팡 긴 주소": "https://link.coupang.com/a/..."  (이 채널 ID로 만든 파트너스 링크)
const P = (name, price, id, item, vendor, img, ok, hide) => {
  const long = "https://www.coupang.com/vp/products/" + id + "?itemId=" + item + "&vendorItemId=" + vendor;
  return { name, price, ok, hide: !!hide, url: PLINK[long] || long, img };
};
const EPISODES = [
{
    tab: "OOTD01",
    label: "OOTD 01",
    pov: "검은 옷밖에 없는데 오늘도 입을 게 없는 나",
    looks: [
      { name: "블랙 레더 재킷 룩", imgs: ["noc1_l1_1.jpg"], items: [
        {name:"블랙 슬림핏 크롭 가죽 라이더 자켓", price:30240, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxBW0XNk", img:"noc1_lj1.jpg"},
        {name:"블랙 슬림핏 U넥 골지 니트 긴팔 이너", price:26800, ok:true, hide:false, url:"https://link.coupang.com/a/iEgGJfWX9g", img:"noc1_rib6.jpg"},
        {name:"블랙 하이웨이스트 PU 가죽 A라인 미니스커트", price:19480, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxB2OlEq", img:"noc1_lmini.jpg"},
        {name:"블랙 광택 통굽 청키힐 앵클부츠", price:22700, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCaSkPk", img:"noc1_boot.jpg"}
      ]},
      { name: "차콜 블레이저 룩", imgs: ["noc1_l2_1.jpg"], items: [
        {name:"차콜 그레이 싱글버튼 블레이저 자켓", price:27800, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCmhgm4", img:"noc1_blazer9.jpg"},
        {name:"화이트 스판 슬림 셔츠 블라우스", price:26400, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCrM256", img:"noc1_wshirt2.jpg"},
        {name:"블랙 밴딩 플리츠 미니스커트", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCw02Ym", img:"noc1_pleat5.jpg"},
        {name:"블랙 골지 오버니삭스 2족 세트", price:9990, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCCzN2y", img:"noc1_knsock5.jpg"},
        {name:"블랙 인조가죽 롱부츠 3.5cm", price:65000, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCH5o2S", img:"noc1_lboot5.jpg"}
      ]},
      { name: "버건디 벨벳 재킷 룩", imgs: ["noc1_l3_1.jpg"], items: [
        {name:"버건디 벨벳 집업 크롭 자켓", price:17500, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFvdmc8", img:"noc1_velv1.jpg"},
        {name:"블랙 슬림핏 U넥 골지 니트 긴팔 이너", price:26800, ok:true, hide:false, url:"https://link.coupang.com/a/iEgGJfWX9g", img:"noc1_rib6.jpg"},
        {name:"블랙 밴딩 플리츠 미니스커트", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCw02Ym", img:"noc1_pleat5.jpg"},
        {name:"블랙 슬림핏 스판 앵클부츠", price:42800, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFBfgsK", img:"noc1_ankle.jpg"}
      ]},
      { name: "차콜 가디건 룩", imgs: ["noc1_l4_1.jpg"], items: [
        {name:"그레이 라운드넥 오픈 니트 가디건", price:17150, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFHTrH2", img:"noc1_cardi9.jpg"},
        {name:"화이트 스퀘어넥 골지 나시", price:11800, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFNnGxg", img:"noc1_tank4.jpg"},
        {name:"블랙 밴딩 플리츠 미니스커트", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxCw02Ym", img:"noc1_pleat5.jpg"},
        {name:"블랙 골지 니하이 오버니삭스", price:7900, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFTHbUW", img:"noc1_thigh9.jpg"},
        {name:"블랙 에나멜 통굽 페니 로퍼", price:48850, ok:true, hide:false, url:"https://link.coupang.com/a/iEgxFZMaT6", img:"noc1_loaf3.jpg"}
      ]}
    ]
  },
  {
    tab: "OOTD02",
    label: "OOTD 02",
    pov: "올블랙인데 4벌 다 분위기 달라서 기강잡는 코디",
    looks: [
      { name: "블랙 테일러드 고딕 출근 룩", imgs: ["ootd2d_l1_1.jpg"], items: [
        {name:"블랙 싱글버튼 테일러드 자켓", price:25900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WOlLdk", img:"ootd2d_n_1_1.jpg"},
        {name:"화이트 리본타이 시폰 블라우스", price:22000, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6W9DFYa", img:"ootd2d_n_1_2.jpg"},
        {name:"블랙 H라인 스판 스커트", price:13900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WIpkSi", img:"ootd2d_n_1_3.jpg"},
        {name:"블랙 니하이 롱부츠", price:47880, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WknGGi", img:"ootd2d_n_1_4.jpg"}
      ]},
      { name: "버건디 벨벳 디너 룩", imgs: ["ootd2d_l2_1.jpg"], items: [
        {name:"버건디 브이넥 크롭 가디건", price:17310, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6W3HfC8", img:"ootd2d_n_2_1.jpg"},
        {name:"블랙 골지 슬림핏 이너", price:26800, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6ZPG03U", img:"ootd2d_n_2_2.jpg"},
        {name:"블랙 레더 하이웨이스트 미니스커트", price:19480, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6ZDTgQ0", img:"ootd2d_n_2_3.jpg"},
        {name:"블랙 골지 오버니삭스", price:9990, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Xe9sHc", img:"ootd2d_n_2_4.jpg"},
        {name:"블랙 5cm 앵클부츠", price:25900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Zhlyj6", img:"ootd2d_n_2_5.jpg"}
      ]},
      { name: "블랙 하프코트 겨울 룩", imgs: ["ootd2d_l3_1.jpg"], items: [
        {name:"블랙 울 블렌드 핸드메이드 하프코트", price:39000, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WwiP80", img:"ootd2d_n_3_1.jpg"},
        {name:"차콜 세미하이넥 슬림핏 이너", price:15800, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6ZJ5U4W", img:"ootd2d_n_3_2.jpg"},
        {name:"블랙 와이드 슬랙스", price:17720, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Zxe5BI", img:"ootd2d_n_3_3.jpg"},
        {name:"블랙 첼시 앵클부츠", price:23900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Wq5NWm", img:"ootd2d_n_3_4.jpg"}
      ]},
      { name: "딥퍼플 가디건 룩", imgs: ["ootd2d_l4_1.jpg"], items: [
        {name:"퍼플 딥브이넥 크롭 니트 가디건", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6ZqrRSu", img:"ootd2d_n_4_1.jpg"},
        {name:"블랙 모직 플리츠 미니스커트", price:13900, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WX40fQ", img:"ootd2d_n_4_2.jpg"},
        {name:"블랙 에나멜 통굽 로퍼", price:14870, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6WCM5u0", img:"ootd2d_n_4_3.jpg"},
        {name:"블랙 골지 오버니삭스", price:9990, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Xe9sHc", img:"ootd2d_n_4_4.jpg"}
      ]}
    ]
  }
];
