// 하린 채널 코디 데이터. 에피소드 추가: EPISODES 배열 끝에 객체를 넣는다.
// 상품: P(이름, 가격, productId, itemId, vendorItemId, 이미지파일명(img/peachmilk/ 안), ok)  ok=true는 색상·사이즈 확인 후에만
// 룩 사진: IMGS 에 넣고 img/peachmilk/ 폴더에 파일을 올린다.
const IMGS = {};
const PLINK = {};   // "쿠팡 긴 주소": "https://link.coupang.com/a/..."  (이 채널 ID로 만든 파트너스 링크)
const P = (name, price, id, item, vendor, img, ok, hide) => {
  const long = "https://www.coupang.com/vp/products/" + id + "?itemId=" + item + "&vendorItemId=" + vendor;
  return { name, price, ok, hide: !!hide, url: PLINK[long] || long, img };
};
const EPISODES = [];
