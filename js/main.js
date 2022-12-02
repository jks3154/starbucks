const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function () {
searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); //#to-top인 특정한 요소를 찾아서 toTopEl 변수에 할당

window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지요소 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300))
// _.throttle 메소드를 실행 (함수, 시간)
toTopEl.addEventListener('click',function() { //TotopEl클릭하면 뒤에 익명의 함수를 실행
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 3, {
    delay: (index + 1) *.7,
    opacity: 1
  });
});

// new swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});//new : 생성자(클래스)

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay:3000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true  //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween: 30, //사이 사이의 여백을 몇px? -> 30px
  slidesPerView: 5, //하나의 슬라이드에 몇개의 슬라이드를 보일거냐 -> 5개
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

// PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 프로모션이 보이니? = 아니

promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion // 반대의 상태를 나타내는 느낌표, fasle와 true
  if (isHidePromotion) {
    // 숨김처리 : 프로모션이 숨겨졌니? 아니fasle -> 숨겨줘true 
    promotionEl.classList.add('hide');
  } else {
    // 보임처리 : 프로모션이 안보이니? 응ture -> 보여줘 false
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, // 선택자
     random(1.5, 2.5), // 애니메이션 동작 시간
  { //옵션
    y: size,
    repeat: -1,
    yoyo:true,
    ease: "power1.inOut",
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);




const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
new ScrollMagic
.Scene({
  triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
  triggerHook: .8 // 감시하고 있는 요소가 뷰포트에 어떤 지점에서 감시 되었다는 것을 판단할것인가 라는것을 지정해주는 옵션
})
.setClassToggle(spyEl, 'show') //(토글할요소, 토글할 이름)
.addTo(new ScrollMagic.Controller()); //스크롤 매직에서 내부의 컨트롤러에 데이터를 할당하여 동작하게 해줌.
})

const thisYear = document.querySelector('.this-year');//클레스 요소를 찾아서
thisYear.textContent = new Date().getFullYear(); //2021

//javascript 생성자 함수 date() //요소가 가지고 있는 글자 내용들의 값을 알거나 지정할 수 있다.