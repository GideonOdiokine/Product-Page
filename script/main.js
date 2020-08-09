let currentImg = document.getElementById('current');

let imgs = document.querySelectorAll('.imgs_item img');
// console.log(imgs)

imgs.forEach(function(img){
	img.addEventListener("click", (e) =>{
		currentImg.src = e.target.src;
	})
})


let slider = document.querySelectorAll('.img_container img');

const delay= 3000;

let indexOfCurrentImage = 0;

setInterval(nextImage, delay);

function nextImage() {
	slider[indexOfCurrentImage].style.display="none";
	indexOfCurrentImage = (indexOfCurrentImage + 1) % slider.length;
	slider[indexOfCurrentImage].style.display="block";
}


let btnAccordion = document.querySelectorAll(".accordion")

for(let i =0; i < btnAccordion.length; i++){
	btnAccordion[i].addEventListener("click", function(e){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show")
	})
}
let btns = document.querySelectorAll('.btn-alert').forEach(btn => btn.addEventListener("click",()=>{
    alert("You clicked")
}))