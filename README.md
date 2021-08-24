✨API에 익숙해지기 위한 공부✨

1.javascript fetch api
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





