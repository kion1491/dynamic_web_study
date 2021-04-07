let x = 0,
  y = 0,
  mx = 0,
  my = 0,
  speed = 0.03,
  scrollTop = 0;
let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_5, parallax_6, parallax_7;

window.onload = function () {
  progressBar = document.getElementsByClassName("progressBar")[0];

  parallax_0 = document.getElementById("parallax_0");
  parallax_1 = document.getElementById("parallax_1");
  parallax_2 = document.getElementById("parallax_2");
  parallax_3 = document.getElementById("parallax_3");
  parallax_4 = document.getElementById("parallax_4");
  parallax_5 = document.getElementById("parallax_5");
  parallax_6 = document.getElementById("parallax_6");

  window.addEventListener('resize', stageResize, false);
  window.addEventListener('mousemove', mouseMove, false);
  window.addEventListener('scroll', scrollFunc, false);

  stageResize();
  loop();
}

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;

  let per = Math.ceil(scrollTop / (_documentHNum - _windowHNum) * 100);
  progressBar.style.width = per + "%";

  parallax_0.style.transform = `translate3d(0px, ${scrollTop * .03}px, 0px)`;
  parallax_1.style.transform = `translate3d(0px, ${-scrollTop * .03}px, 0px)`;
  parallax_2.style.transform = `translate3d(0px, ${-scrollTop * .12}px, 0px)`;
  parallax_3.style.transform = `translate3d(0px, ${-scrollTop * .16}px, 0px)`;
  parallax_4.style.transform = `translate3d(0px, ${-scrollTop * .22}px, 0px)`;
  parallax_5.style.transform = `translate3d(0px, ${-scrollTop * .25}px, 0px)`;

}

function stageResize() {
  _documentHNum = document.body.offsetHeight;
  _windowHNum = window.outerHeight;
}

// 마우스 움직임에 따른 화면의 구도 변경 기능
function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  parallax_4.style.transform = `translate3d(${mx / 110}px, ${-scrollTop * .22}px, 0px)`;
  parallax_5.style.transform = `scale(1.1) translate(${mx / 35}px, ${-scrollTop * .25}px)`;
  // 화면상 가장 가까이에 있어보이는 바닥쪽 이미지는, y값도 조금씩 변경을 줘서 원근감을 더 살려준다.
  parallax_6.style.transform = `scale(1.2) translate(${-mx / 10}px, ${-my / 10}px)`;

  window.requestAnimationFrame(loop);
}

// x, y 값을 뷰의 한가운데로 설정하기 위함.
function mouseMove(e) {
  x = (e.clientX - window.innerWidth / 2);
  y = (e.clientY - window.innerHeight / 2);
}


