const cross = document.querySelector(".responsive-menu");
const links = document.querySelector(".links-wrapper");

cross.addEventListener("click", function(){
  cross.classList.toggle('rotate-cross'); 
  links.classList.toggle('responsive-links');
});