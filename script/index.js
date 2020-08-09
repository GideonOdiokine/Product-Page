let slider = document.querySelectorAll('.products .product');

const delay= 3000;

let indexOfCurrentImage = 0;

slider[indexOfCurrentImage].style.display="block";

setInterval(nextImage, delay);

function nextImage() {
	slider[indexOfCurrentImage].style.display="none";
	indexOfCurrentImage = (indexOfCurrentImage + 1) % slider.length;
	slider[indexOfCurrentImage].style.display="block";
}


const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;
 
 function fixNav(){
     // console.log(topOfNav)
     if(window.scrollY>=topOfNav){
         document.body.classList.add('fixedNav')
         
     }else{
         document.body.classList.remove('fixedNav')
         document.body.style.paddingTop = 0;
     }
 }
window.addEventListener('scroll', fixNav);


let modal = document.getElementById('modal');
let loginModal = document.getElementById('login')

loginModal.addEventListener("click", ()=>{
    modal.style.display="block";
    document.body.style.overflow ="hidden"
})

let closeModal = document.getElementById('closeBtn');

closeBtn.addEventListener('click', ()=>{
     modal.style.display="none";
      document.body.style.overflow ="auto"
})

let btns = document.querySelectorAll('.btn-alert').forEach(btn => btn.addEventListener("click",()=>{
    alert("You clicked")
}))