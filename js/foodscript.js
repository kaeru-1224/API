//임시 버튼 만들어 놓기 
const btn=document.querySelector(".btn");

const cont= document.querySelector(".main-box")
const overlay =document.querySelector(".overlay")
const closeBtn=document.querySelector(".box-close")


//첫 로딩 시에 랜덤으로 음식을 보여주도록진행
window.addEventListener('DOMContentLoaded',randomFood())
//랜덤으로 음식을 보여주고, 보여준 음식 클릭시에 레시피 보여주도록 진행 
function randomFood(){
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res=>res.json())
    .then(data=>{
        let html ="";
        //.main-box클래스 추가해서 css바꿔주기..
        const random= document.querySelector(".main-box")
        const recommend=document.querySelector(".result>h4")
        if(data.meals){
            data.meals.forEach(meal=>{
                html =`<section class="main-contaier newthings" data-id= "${meal.idMeal}" > 
                <div class="Thumb">
                    <img src="${meal.strMealThumb}" alt="food-pic"> 
                </div>
                <div class="info">
                    <h4 class="name">${meal.strMeal}</h4>
                    <button class="check">click</button>
                </div>
            </section>`} )
        }random.classList.toggle("random")
     
        recommend.innerText="Today's Meal"
        cont.innerHTML=html;});}

//api를 이용해서 음식 재료를 통해서 음식 리스트 출력
btn.addEventListener('click',searchFood)
function searchFood(){
    // 검색시 입력해 주는 값을 공백 없이 받아 주기위함
    let serchInputTxt= document.querySelector(".search-box").value.trim();
    //api 링크가 무사히 진행되었을 경우 결과를 1차적으로  json으로 받아줌
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${serchInputTxt}`)
    .then(res=>res.json())
    .then(data=>{
        //array로 받아준 data를 각 html으로 만들어주기위함
        let html ="";
        const random= document.querySelector(".main-box")
        const recommend=document.querySelector(".result>h4")
        //data.meals가 존재하는 경우 진행
        if(data.meals){
            random.classList.remove("over")
            random.classList.remove("random")
            random.classList.remove("main-none")
            data.meals.forEach(meal=>{
                //html에 meal의 요소들을 하나씩하나씩 넣어준다 
                html +=`<section class="main-contaier" data-id= "${meal.idMeal}"> 
                <div class="Thumb">
                    <img src="${meal.strMealThumb}" alt="food-pic"> 
                </div>
                <div class="info">
                    <h4 class="name">${meal.strMeal}</h4>
               
                </div>
                <div class="recipi">
                    <p>Check recipi</p>
                    <button class="check">click</button>
                </div>
            `

            } )
        }else {
            random.classList.remove("over")
            random.classList.remove("random")
            random.classList.add("main-none")
            html=`Sorry We Dont Have ${serchInputTxt}😢`

        }
        recommend.innerText="Check your result"
        cont.innerHTML=html;


    });



}


//음식 레시피 보여주기위한 modal 
closeBtn.addEventListener('click',()=>{overlay.classList.toggle("none")})

//음식 레시피 넣어주기위해서, 현재 클릭한 이벤트 버튼을 찾아주도록함 
 
function getRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains("check")){
        //mealItem의경우 현재 선택한 타겟의 부모의 부모 엘리먼트를 데려오므로,
        //전체값을 구해줄 수있음
        let mealItem= e.target.parentElement.parentElement;
        //여기서 각 식사메뉴를 구분해주는 것은 id이므로 id로 레시피 창으로 보여주기 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(items=> items.json())
        .then(data=>{
            showRecipe(data.meals)
            
        })
   
    }
    

}

function showRecipe(meal){
    console.log(meal);
    //meal이 array형태로 나오므로 meal의 첫번째 대상이 meal이라고 해준다
    meal=meal[0];
    let html=`
    <div class="over-box" > 
    <div class="over-info"> 
        <h1 class="over-name">${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}"class="overlay-img" alt="food-img">
        <div class="de"> 
            <p>${meal.strInstructions}.</p>
        </div>
        <button class="see"><a href = "${meal.strYoutube}" target = "_blank">Watch Video</a></button> 

</div>

   
   <button class="box-close">close</button>
    `
    overlay.innerHTML=html;
    overlay.classList.remove('none')




}

//진행시에는 버튼을 찾아주어야한다 생각해주었는데,그러면 진행이안되고 
//조금더 큰 범위를 잡아주어야햇음 왜지???
cont.addEventListener('click', getRecipe)