let reviewCard = document.querySelectorAll(".reviewCard");
let foodCard = document.querySelectorAll(".foodCard");
let search =document.getElementById("search");
let user =document.getElementById("user");
let bar =document.getElementById("bar");
let logBtn=document.getElementById("logBtn");

let count = 0;

reviewCard.forEach(function(card, index){
    card.style.left = `${index * 100}%`
})

function myFun(){
    reviewCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == reviewCard.length ){
        count=0;
    }
    myFun();
}, 3000)




foodCard.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);
        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icons" class="fa-solid fa-xmark"></i>
        <img src=${cards.firstElementChild.src} alt="">
        <p>Eat Best Eat Delious</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorem esse?</p>
        `
        document.querySelector("body").appendChild(div)

        document.getElementById("icons").addEventListener("click", function(){
            div.remove()
        })
    })
})
search.addEventListener("click",function(){
    document.querySelector(".searchBar").classList.toggle('active1')
})

user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle('active2')
})

logBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass")
    if(email.value==""&& pass.value==""){
        alert("Fill Details")
    }
    else{
        alert("You Logged IN")
        document.querySelector(".loginPage").style.display="none"
    }
})

bar.addEventListener("click",function(){
    document.querySelector("ul").classList.toggle('showData')
})