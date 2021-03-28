/*
  .cursorItem과 .cursorItem .circle의 역할은 다르다

  .cursorItem - 마우스 이동에 따라서 위치를 잡아서 쫓아가는 역할
  .cursorItem .circle - 마우스 커서가 특정 구역 안에 들어갔을때 커서 크기 등 스타일링을 바꿔주는 역할

  이렇게 다르게 한 이유는, 둘 다 transform을 건드리게 되면 충돌이 생길 수 있기 때문에 역할을 각기 다르게 배분해서 코드를 짜기 위함이다.
*/

let btn_yes,
  btn_no,
  cursorItem,
  circle,
  x = 0, y = 0,
  mx = 0, my = 0;

window.onload = function () {
  btn_yes = document.querySelector("#yes");
  btn_no = document.querySelector("#no");

  cursorItem = document.querySelector(".cursorItem");
  circle = cursorItem.querySelector(".circle");

  // yes 버튼 이벤트
  btn_yes.addEventListener("mouseover", function (e) {
    circle.style.transform = "scale(.3)";
  })
  btn_yes.addEventListener("mouseout", function (e) {
    circle.style.transform = "scale(1)";
  })

  // no 버튼 이벤트
  btn_no.addEventListener("mouseover", function (e) {
    circle.style.transform = "scale(.3)";
  })
  btn_no.addEventListener("mouseout", function (e) {
    circle.style.transform = "scale(1)";
  })

  // 마우스 움직이는 이벤트(원이 따라다니는 기능)
  window.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;

    // loop()를 죽이고 이 아래 한 줄을 살리면, 즉각즉각 마우스를 따라오는 원을 볼 수 있다.
    // cursorItem.style.transform = `translate(${x}px, ${y}px)`;
  })

  loop();
}

// 마우스 움직이는 기능을 보다 더 자연스럽게, 스무스 하게 표현하기 위한 함수
function loop() {
  mx += (x - mx) * .09,
    my += (y - my) * .09;

  cursorItem.style.transform = `translate(${mx}px, ${my}px)`;

  requestAnimationFrame(loop);
}