
// 스크립트 요소를 생성해서 tag변수에 할당
var tag = document.createElement('script');

// 유튜브를 재생할 수 있는 외부자바스크립트 라이브러리를 태그의 소스에 할당
tag.src = "https://www.youtube.com/iframe_api";

// 스크립트 요소 중 제일 첫번째에 있는 요소를 찾아서 firstScriptTag 변수에 할당
var firstScriptTag = document.getElementsByTagName('script')[0];
/* firstScriptTag의 부모요소를 찾아서 기존 스크립트 요소 중 맨 처음으로
  이 스크립트 태그를 삽입해서 실행*/
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* onYouTubeIframeAPIReady 함수이름은 YOUTUBE IFRAME API에서 사용하는 이름이기 때문에
   절대 다르게 지정하면 안됨 */
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', /*최초 재생할 유튜브 영상 ID*/
    // playerVars: 영상을 재생하기 위한 여러가지 변수들
    playerVars:{
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8'   // loop: true이면 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      //영상이 준비되었을 때, 동영상이 플레이되는 상황을 event라는 매개변수로 넘겨줌
      'onReady': function(event){
        event.target.mute(); //음소거
      }     
    }
  });
}