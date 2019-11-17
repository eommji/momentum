const body = document.querySelector("body");

const IMG_NUM = 3;
const BG_CN = "bg";

function loadBg(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  body.style.backgroundImage = `url(${image.src})`;
  body.classList.add(BG_CN);
}

function genRandom() {
  const num = Math.floor(Math.random() * IMG_NUM) + 1;
  return num;
}

function init() {
  const randomNum = genRandom();
  loadBg(randomNum);
}

init();
