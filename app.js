const backClick = document.querySelector(".js-backclick");
const popup = document.querySelector(".js-popup");
const subscribeForm = document.querySelector(".js-subscribe-form");
const popupBtn = document.querySelector(".js-popup-btn");

//eventlistener


subscribeForm.addEventListener("submit", function(event){
event.preventDefault()
backClick.classList.add("active")
popup.classList.add("active")

})


backClick.addEventListener("click", function(event){
 
 backClick.classList.remove("active")
 popup.classList.remove("active");
 
 })
 popupBtn.addEventListener("click" , function(event){
    popup.classList.remove("active");
    backClick.classList.remove("active")

 })