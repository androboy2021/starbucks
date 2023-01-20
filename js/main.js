

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('.to-top');

// _.throttle(함수, 시간(밀리초))
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 0.3초 단위로 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  // window.scrollY : 스크롤이 화면의 몇 픽셀지점에 있는지 수치로 알려줌
  // 페이지 스크롤 위치가 500px를 넘으면
  if(window.scrollY>500){
    //뱃지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    //to-top button 보이기
    gsap.to(toTopEl, .2, {
      x:0
    })

  }else{
    //뱃지 보이기  
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : 'block'
    });

    //to-top button 숨기기
    gsap.to(toTopEl, .2, {
      // 버튼이 x축으로 숨겨질 수 있도록 이동값을 추가
      x:100
    })

  }
},300));

// 화면의 지정된 위치로 0.7초동안 스크롤링될 수 있도록 애니메이션 처리
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

// 순서대로 나타나는 기능
const fadeEls = document.querySelectorAll(".visual .fade-in")

//나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index){

  /* 각 요소들을 순서대로 보여주게 하기 위해 대기시간을 
     0.7초씩 가지면서 1초동안 애니메이션 실행*/
  gsap.to(fadeEl, 1, {
    delay:(index+1)*.7, //0.7 1.4 2.1 2.7...
    opacity:1
  })
})

// 슬라이드 요소 관리(Swiper)
//new Swiper(선택자, 옵션): 클래스 선택자 요소를 이용하여 시작
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical', //수직 슬라이드
  autoplay : true, // 자동 재생 여부
  loop : true // 반복 재생 여부
})

new Swiper('.promotion .swiper-container',{
  // direction : 'horizontal' 수평슬라이드(기본값)
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay:{ //자동 재생 여부
    delay:5000 //5초마다 슬라이드 바뀜
  },
  loop : true,
  pagination:{//페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //클릭 가능여부
  },
  navigation:{//슬라이드 이전/다음 버튼 사용 여부
    prevEl:'.promotion .swiper-prev', //이전 버튼 선택자
    nextEl:'.promotion .swiper-next' //다음 버튼 선택자
  }
})

new Swiper('.awards .swiper-container', {
  // direction : 'horizontal' 수평슬라이드(기본값)
  autoplay:{ //자동 재생 여부
    delay:5000 //5초마다 슬라이드 바뀜
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})



// 슬라이드 토글 기능
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  // !:부정연산자(true->false, false->true)
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
})

// 요소가 화면에 보여짐 여부에 따른 요소 관리
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({//감시할 장면을 추가
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 //화면의 80%지점에서 보여짐 여부 감시
  }).setClassToggle(spyEl,'show')//요소가 화면에 보이면 show 클래스 추가
  //추가할 옵션들을 내부의 컨트롤러에 할당해서 동작할 수 있도록 구조를 만들어 줌(필수!)
  .addTo(new ScrollMagic.Controller()) 

})
