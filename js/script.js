 const dog=document.querySelector(".dog");
 const fox=document.querySelector(".fox")
 //btn한개로만해서 진행을 하는경우 
 const btn =document.querySelectorAll(".btn");

 btn.forEach(item=> 
    item.addEventListener('click',
    ()=>{
        if(item.classList.contains("dogb")){
            getRandom()
        }else{
            getRandom2()
        }

    }
    
    ))
function getRandom(){
    fetch(`https://random.dog/woof.json`)
    .then(res=> res.json())
    .then(data=>
       { if(data.url.includes('.mp4')){
        dog.innerHTML="Press one more time:("
       }else{ dog.innerHTML=
        `<img src="${data.url}"/> `}})
}

function getRandom2(){
    fetch(`https://randomfox.ca/floof/`)
    .then(res=> res.json())
    .then(  data=>  { if(data.image.includes('.mp4')){
        fox.innerHTML="Sorry"
       }else{ fox.innerHTML=
        `<img src="${data.image}"/> `}})
}



 //각각의 버튼을 눌러 진행이되는 경우
