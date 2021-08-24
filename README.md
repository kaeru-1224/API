✨API에 익숙해지기 위한 공부✨

1. javascript fetch api
(참고 유툽: https://www.youtube.com/watch?v=7f2HNadULOs)

- 전체 진행되어야할 부분 
✔고양이와 여우의 사진이 버튼을 누를시에 랜덤으로 등장하는지 

🤔 진행시 의문점
-랜덤으로 넣어주는 함수에서 fetch가 무엇일까함
function getRandom(){
    fetch(`https://random.dog/woof.json`)
    .then(res=> res.json())
    .then(data=>dog.innerHTML=
        `<img src="${data.url}"/> `)
}

1)fetch? 
-네트워크로 부터 리소스를 취득을 개시해 
리스폰스를 이용할수있게 되었다면 만족한 프로미스를 반환합니다 
👉fetch(`https://random.dog/woof.json`)
: url로 부터 리소스를 취득한다 
👉 .then(res=> res.json())
: 만약 취득을 성공한경우 네트워크로 부터 json파일을 가져와 data로 보내줍니다 
👉 .then(data=>dog.innerHTML=
        `<img src="${data.url}"/> `)
: 가져온 data에서 api json을 참고해 사용할 
데이터를  html에 넣어주면끝! 

🤦‍♀️mp4나 다른 양식의 파일이 들어갈것을 예상하지 못함 
👉.includes 메소드이용 
즉 data.image가  string을 반환해주므로 
내부에 mp4와 같은 파일명의 유무를 확인해서 
if else로 진행해주면된다 
if(data.image.includes('.mp4')){
        fox.innerHTML="Sorry"
유의점은 dog와  fox의 api가 서로..달랏다는거..응.....

2. api를 이용한 레시피사이트 만들기... 
-전체 진행해야할 부분 
✔ 검색 기능 
✔ 단어 필터링 통해서 단어와 일치하는 목록 띄우기 





