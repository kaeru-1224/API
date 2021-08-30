//임시 버튼 만들어 놓기 
const btn=document.querySelector(".btn");
btn.addEventListener('click',searchFood)
const cont= document.querySelector(".section-item")

//api를 이용해서 음식 재료를 통해서 음식 리스트 출력
function searchFood(){
    // 검색시 입력해 주는 값을 공백 없이 받아 주기위함
    let serchInputTxt= document.querySelector(".food-search").value.trim();
    //api 링크가 무사히 진행되었을 경우 결과를 1차적으로  json으로 받아줌
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serchInputTxt}`)
    .then(res=>res.json())
    .then(data=>{
        //array로 받아준 data를 각 html으로 만들어주기위함
        let html ="";
        //data.meals가 존재하는 경우 진행
        if(data.meals){
            data.meals.forEach(meal=>{
                //html에 meal의 요소들을 하나씩하나씩 넣어준다 
                html +=`<article class="menu-item" data-id="${meal.idMeal}"> 
                             <img src="${meal.strMealThumb}">
                    <div class="item-info">
                    <header class="name-price">
                        <h4 class="name">"${meal.strMeal}"</h4>
                        <h4 class="price">으아아악</h4>
                    </header>
                    <p> 
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Non odio ratione, tempore ipsam earum consequatur quibusdam tenetur error pariatur exercitationem explicabo i
                        n cumque reiciendis recusandae itaque repudiandae doloribus? Assumenda, amet!
                    </p>
                </div>
            </article> 
            
            `

            } )
        } cont.innerHTML=html;


    });



}
