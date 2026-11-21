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
  },
  {
    tab: "OOTD03",
    label: "OOTD 03",
    pov: "검은 옷에 레이스 하나 더했더니 밤거리 고스 여주 됨",
    looks: [
      { name: "레더 재킷 레이스 룩", imgs: ["ootd3y_l1_1.jpg"], items: [
        {name:"크롭 레더 라이더 재킷", price:34800, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWuHHqBU", img:"ootd3y_n_1_1.jpg"},
        {name:"레이스 브이넥 캐미솔", price:12920, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWx3TN0K", img:"ootd3y_n_1_2.jpg"},
        {name:"하이웨이스트 PU 레더 스커트", price:19480, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWygWmbY", img:"ootd3y_n_1_3.jpg"},
        {name:"버클 라이더 롱부츠", price:34900, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWynIcF2", img:"ootd3y_n_1_4.jpg"}
      ]},
      { name: "블루종 플리츠 니삭스 룩", imgs: ["ootd3y_l2_1.jpg"], items: [
        {name:"오버핏 블루종 점퍼", price:34840, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWuNddkW", img:"ootd3y_n_2_1.jpg"},
        {name:"레이스 골지 캐미솔", price:17000, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWu2ZlmK", img:"ootd3y_n_2_2.jpg"},
        {name:"모직 플리츠 미니스커트", price:13900, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWveb6uO", img:"ootd3y_n_2_3.jpg"},
        {name:"클래식 니삭스", price:9800, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWuSQFiK", img:"ootd3y_n_2_4.jpg"},
        {name:"레이스업 청키 워커 부츠", price:20900, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWvuneUu", img:"ootd3y_n_2_5.jpg"}
      ]},
      { name: "오프숄더 벨벳 롱스커트 룩", imgs: ["ootd3y_l3_1.jpg"], items: [
        {name:"오프숄더 크롭 긴팔 탑", price:20100, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWvj1haC", img:"ootd3y_n_3_1.jpg"},
        {name:"벨벳 레이스 캉캉 롱스커트", price:20200, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWvpL8oe", img:"ootd3y_n_3_2.jpg"},
        {name:"옆지퍼 레이스업 청키 워커 앵클부츠", price:15200, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWuXrLO0", img:"ootd3y_n_3_3.jpg"}
      ]},
      { name: "볼레로 카고 룩", imgs: ["ootd3y_l4_1.jpg"], items: [
        {name:"크롭 볼레로 가디건", price:18810, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWu84klU", img:"ootd3y_n_4_1.jpg"},
        {name:"레이스 브이넥 캐미솔", price:12920, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWx3TN0K", img:"ootd3y_n_4_2.jpg"},
        {name:"블랙 청키 레이스업 운동화", price:24860, ok:true, hide:false, url:"https://link.coupang.com/a/iGzWyazL4K", img:"ootd3y_n_4_3.jpg"}
      ]}
    ]
  },
  {
    tab: "OOTD04",
    label: "OOTD 04",
    pov: "밤에만 폼 미치는 올블랙 코디 입고 퇴근한 나",
    looks: [
      { name: "퍼 숏 재킷 레더 미니 룩", imgs: ["ootd4y_l1_1.jpg"], items: [
        {name:"양털 후리스 크롭 후드 집업", price:68370, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCydorc", img:"ootd4y_n_1_1.jpg"},
        {name:"하이넥 더블집업 크롭 니트", price:18850, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfv4QAvY", img:"ootd4y_n_1_2.jpg"},
        {name:"하이웨이스트 PU 레더 미니스커트", price:20250, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfwafXMW", img:"ootd4y_n_1_3.jpg"},
        {name:"스웨이드 리본 니하이 롱부츠", price:21780, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfwfNxkG", img:"ootd4y_n_1_4.jpg"}
      ]},
      { name: "그레이 후드집업 데님 쇼츠 룩", imgs: ["ootd4y_l2_1.jpg"], items: [
        {name:"오버핏 후드집업", price:30700, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCorCLc", img:"ootd4y_n_2_1.jpg"},
        {name:"레이스 브이넥 캐미솔", price:12920, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfwlgNqe", img:"ootd4y_n_2_2.jpg"},
        {name:"하이웨이스트 블랙 데님 숏팬츠", price:18740, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvHQ4YK", img:"ootd4y_n_2_3.jpg"},
        {name:"니트 레그워머", price:8300, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvZHhxk", img:"ootd4y_n_2_4.jpg"},
        {name:"청키 레이스업 운동화", price:24860, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfB8PGBE", img:"ootd4y_n_2_5.jpg"}
      ]},
      { name: "벨티드 트렌치 플레어 미니 룩", imgs: ["ootd4y_l3_1.jpg"], items: [
        {name:"블랙 벨트 숏 트렌치", price:29360, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCjsfFQ", img:"ootd4y_n_3_1.jpg"},
        {name:"크롭 기모 폴라티", price:35440, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCeiWHc", img:"ootd4y_n_3_2.jpg"},
        {name:"레이어드 플레어 미니스커트", price:18220, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCtDhIG", img:"ootd4y_n_3_3.jpg"},
        {name:"청키 플랫폼 페니 로퍼", price:37000, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvzviW4", img:"ootd4y_n_3_4.jpg"}
      ]},
      { name: "크롭 가디건 슬립 원피스 룩", imgs: ["ootd4y_l4_1.jpg"], items: [
        {name:"브이넥 숏 니트 가디건", price:15300, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvD7LEq", img:"ootd4y_n_4_1.jpg"},
        {name:"레이스 새틴 슬립 캐미솔", price:20580, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvPxfie", img:"ootd4y_n_4_2.jpg"},
        {name:"벨트 버클 웨스턴 부츠", price:37410, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvUvCzQ", img:"ootd4y_n_4_3.jpg"}
      ]}
    ]
  },
  {
    tab: "OOTD05",
    label: "OOTD 05",
    pov: "블프 시즌 장바구니 털고 퇴근길에 바로 입고 나감",
    looks: [
      { name: "유광 푸퍼 레더 미니 룩", imgs: ["ootd5y_l1_1.jpg"], items: [
        {name:"블랙 유광 크롭 숏패딩", price:40910, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeTzweO", img:"ootd5y_n_1_1.jpg"},
        {name:"블랙 골지 터틀넥 니트", price:19600, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgemWSZ2", img:"ootd5y_n_1_2.jpg"},
        {name:"블랙 레더 기모 A라인 미니스커트", price:20900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgec8kHA", img:"ootd5y_n_1_3.jpg"},
        {name:"블랙 스판 니하이 롱부츠", price:37880, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgd8PO68", img:"ootd5y_n_1_4.jpg"}
      ]},
      { name: "블랙 라이더 와이드 슬랙스 룩", imgs: ["ootd5y_l2_1.jpg"], items: [
        {name:"블랙 PU 라이더 자켓", price:35770, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghHSsO4", img:"ootd5y_n_2_1.jpg"},
        {name:"블랙 골지 하이넥 니트", price:16960, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghQ42eW", img:"ootd5y_n_2_2.jpg"},
        {name:"블랙 기모 와이드 슬랙스", price:12900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeyhBtY", img:"ootd5y_n_2_3.jpg"},
        {name:"블랙 통굽 로퍼", price:49000, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeDYONU", img:"ootd5y_n_2_4.jpg"}
      ]},
      { name: "롱코트 플리츠 롱스커트 룩", imgs: ["ootd5y_l3_1.jpg"], items: [
        {name:"블랙 울 롱코트", price:17010, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgehORWe", img:"ootd5y_n_3_1.jpg"},
        {name:"블랙 반목 골지 니트", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghCKrLg", img:"ootd5y_n_3_2.jpg"},
        {name:"블랙 기모 플리츠 롱스커트", price:27500, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeJJF1w", img:"ootd5y_n_3_3.jpg"},
        {name:"블랙 털 7cm 통굽 앵클부츠", price:44900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeOBnR6", img:"ootd5y_n_3_4.jpg"}
      ]},
      { name: "시어링 보머 카고 룩", imgs: ["ootd5y_l4_1.jpg"], items: [
        {name:"블랙 시어링 카라 가죽 보머", price:22400, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgetgWtM", img:"ootd5y_n_4_1.jpg"},
        {name:"블랙 하이넥 골지 니트", price:21730, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghZ2M9c", img:"ootd5y_n_4_2.jpg"},
        {name:"블랙 기모 와이드 카고 팬츠", price:19500, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghVLztA", img:"ootd5y_n_4_3.jpg"},
        {name:"블랙 통굽 가죽 앵클부츠", price:22590, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghNlIUC", img:"ootd5y_n_4_4.jpg"}
      ]}
    ]
  },
  {
    tab: "OOTD06",
    label: "OOTD 06",
    pov: "거울 앞에서 열 번 갈아입다 약속에 늦음",
    looks: [
      { name: "올블랙 레더 라이더 룩", imgs: ["ootd6y_l1_1.jpg"], items: [
        {name:"블랙 체인 미니 크로스백", price:24350, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTLeFKcm", img:"ootd6y_n_1_1.jpg"},
        {name:"블랙 스판 니하이 롱부츠", price:47880, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfqCMkA8", img:"ootd6y_n_1_2.jpg"},
        {name:"블랙 하이넥 골지 니트 탑", price:21730, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghZ2M9c", img:"ootd6y_n_1_3.jpg"},
        {name:"블랙 PU 라이더 자켓", price:35770, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghHSsO4", img:"ootd6y_n_1_4.jpg"},
        {name:"블랙 레더 트임 미니스커트", price:19480, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTK9jTmC", img:"ootd6y_n_1_5.jpg"}
      ]},
      { name: "레드 가디건 브라운 플리츠 룩", imgs: ["ootd6y_l2_1.jpg"], items: [
        {name:"아이보리 미니 바게트백", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/isx6l2tTdQ", img:"ootd6y_n_2_1.jpg"},
        {name:"레드 브이넥 크롭 니트 가디건", price:17310, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6W3HfC8", img:"ootd6y_n_2_2.jpg"},
        {name:"블랙 더블버클 메리제인 로퍼", price:17640, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6RqyDDM", img:"ootd6y_n_2_3.jpg"},
        {name:"브라운 모직 플리츠 미니스커트", price:13900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTIM037A", img:"ootd6y_n_2_4.jpg"},
        {name:"화이트 골지 오버니삭스", price:9990, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Xe9sHc", img:"ootd6y_n_2_5.jpg"},
        {name:"블랙 슬림 목폴라 이너", price:21900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTLnXCSa", img:"ootd6y_n_2_6.jpg"}
      ]},
      { name: "블랙 롱코트 머플러 룩", imgs: ["ootd6y_l3_1.jpg"], items: [
        {name:"블랙 털 7cm 통굽 앵클부츠", price:44900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeOBnR6", img:"ootd6y_n_3_1.jpg"},
        {name:"블랙 울 롱코트", price:17010, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgehORWe", img:"ootd6y_n_3_2.jpg"},
        {name:"브라운 반목 골지 니트", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghCKrLg", img:"ootd6y_n_3_3.jpg"},
        {name:"그레이 울혼방 대형 머플러", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTIWa6TY", img:"ootd6y_n_3_4.jpg"},
        {name:"블랙 기모 플리츠 롱스커트", price:27500, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgeJJF1w", img:"ootd6y_n_3_5.jpg"}
      ]},
      { name: "그레이 후드집업 레이스 캐미 룩", imgs: ["ootd6y_l4_1.jpg"], items: [
        {name:"화이트 레이스 브이넥 캐미솔", price:12920, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfwlgNqe", img:"ootd6y_n_4_1.jpg"},
        {name:"그레이 오버핏 후드집업", price:30700, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCorCLc", img:"ootd6y_n_4_2.jpg"},
        {name:"블랙 하이웨이스트 데님 숏팬츠", price:18740, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvHQ4YK", img:"ootd6y_n_4_3.jpg"},
        {name:"블랙 청키 키높이 스니커즈", price:24860, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfB8PGBE", img:"ootd6y_n_4_4.jpg"},
        {name:"블랙 니트 레그워머", price:8300, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvZHhxk", img:"ootd6y_n_4_5.jpg"}
      ]},
      { name: "새틴 슬립 숏 가디건 데님 룩", imgs: ["ootd6y_l5_1.jpg"], items: [
        {name:"블랙 웨스턴 버클 롱부츠", price:37410, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvUvCzQ", img:"ootd6y_n_5_1.jpg"},
        {name:"블랙 브이넥 슬림 숏 니트 가디건", price:15300, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvD7LEq", img:"ootd6y_n_5_2.jpg"},
        {name:"라이트 와이드 데님 롱팬츠", price:17440, ok:true, hide:false, url:"https://link.coupang.com/a/iJjf8GN5PM", img:"ootd6y_n_5_3.jpg"},
        {name:"진주 목걸이", price:5400, ok:true, hide:false, url:"https://link.coupang.com/a/igmIPyKQxg", img:"ootd6y_n_5_4.jpg"},
        {name:"블랙 레이스 새틴 슬립 캐미솔", price:20580, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfvPxfie", img:"ootd6y_n_5_5.jpg"}
      ]},
      { name: "트위드 자켓 체크 플리츠 룩", imgs: ["ootd6y_l6_1.jpg"], items: [
        {name:"프릴넥 리본 블라우스", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTDndBfg", img:"ootd6y_n_6_1.jpg"},
        {name:"소프트 레더 메리제인 플랫", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTDGwj5E", img:"ootd6y_n_6_2.jpg"},
        {name:"체크 플리츠 미니스커트", price:21390, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTFVszKK", img:"ootd6y_n_6_3.jpg"},
        {name:"클래식 니삭스", price:4900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTDBxWN2", img:"ootd6y_n_6_4.jpg"},
        {name:"트위드 금장 버튼 크롭 자켓", price:58800, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTFN30zk", img:"ootd6y_n_6_5.jpg"}
      ]},
      { name: "울 숏코트 와이드 슬랙스 룩", imgs: ["ootd6y_l7_1.jpg"], items: [
        {name:"스웨이드 첼시 앵클부츠", price:23900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTIqSlYy", img:"ootd6y_n_7_1.jpg"},
        {name:"세미크롭 울 숏코트", price:59800, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTDhXCPA", img:"ootd6y_n_7_2.jpg"},
        {name:"포근 니트 목도리 머플러", price:11400, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTGfTG7o", img:"ootd6y_n_7_3.jpg"},
        {name:"하이웨이스트 와이드 슬랙스", price:17720, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTK2Xjfo", img:"ootd6y_n_7_4.jpg"},
        {name:"슬림 목폴라 이너", price:21900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTLnXCSa", img:"ootd6y_n_7_5.jpg"}
      ]},
      { name: "숏패딩 데님 미니 룩", imgs: ["ootd6y_l8_1.jpg"], items: [
        {name:"데님 A라인 미니스커트", price:22100, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfq4LddI", img:"ootd6y_n_8_1.jpg"},
        {name:"포근 라운드 니트", price:16900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTDS84R2", img:"ootd6y_n_8_2.jpg"},
        {name:"에나멜 통굽 로퍼힐", price:40900, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfqHyZaK", img:"ootd6y_n_8_3.jpg"},
        {name:"경량 퀼팅 크롭 숏패딩", price:25900, ok:true, hide:false, url:"https://link.coupang.com/a/iGiTF5Uc7U", img:"ootd6y_n_8_4.jpg"},
        {name:"니트 롱 레그워머", price:9800, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfts4eaW", img:"ootd6y_n_8_5.jpg"}
      ]},
      { name: "기모 레더 재킷 카고 룩", imgs: ["ootd6y_l9_1.jpg"], items: [
        {name:"나일론 미니 로우백", price:19800, ok:true, hide:false, url:"https://link.coupang.com/a/isxNHSzvFs", img:"ootd6y_n_9_1.jpg"},
        {name:"기모 가죽 카라 숏 재킷", price:22400, ok:true, hide:false, url:"https://link.coupang.com/a/iJjgetgWtM", img:"ootd6y_n_9_2.jpg"},
        {name:"통굽 가죽 앵클부츠", price:22590, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghNlIUC", img:"ootd6y_n_9_3.jpg"},
        {name:"기모 와이드 카고 팬츠", price:19500, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghVLztA", img:"ootd6y_n_9_4.jpg"},
        {name:"골지 하이넥 니트", price:16960, ok:true, hide:false, url:"https://link.coupang.com/a/iJjghQ42eW", img:"ootd6y_n_9_5.jpg"}
      ]},
      { name: "후리스 더블집업 레더 미니 룩", imgs: ["ootd6y_l10_1.jpg"], items: [
        {name:"하이넥 더블집업 크롭 니트 가디건", price:18850, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfv4QAvY", img:"ootd6y_n_10_1.jpg"},
        {name:"양털 후리스 숏 후드집업", price:68370, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfCydorc", img:"ootd6y_n_10_2.jpg"},
        {name:"레더 하이웨이스트 미니스커트", price:20250, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfwafXMW", img:"ootd6y_n_10_3.jpg"},
        {name:"청키 키높이 스니커즈", price:24860, ok:true, hide:false, url:"https://link.coupang.com/a/iGDfB8PGBE", img:"ootd6y_n_10_4.jpg"},
        {name:"골지 오버니삭스", price:9990, ok:true, hide:false, url:"https://link.coupang.com/a/iFo6Xe9sHc", img:"ootd6y_n_10_5.jpg"}
      ]}
    ]
  }
];
