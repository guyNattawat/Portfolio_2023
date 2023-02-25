function navbar(){
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

let currentSlide = 1;

function showSlides(n){
    let i = 0;
    let slides = document.querySelectorAll('#slideShow');
    let nexSlide = 0;
    if(n == 1){
        nexSlide = (1 + currentSlide) % (slides.length+1)
        if(nexSlide < 1){
            nexSlide = nexSlide + 1;
        }
    }if(n < 1){
        nexSlide = (currentSlide - 1)
        if(nexSlide < 1){
            nexSlide = slides.length
        }
    }
    currentSlide = nexSlide;
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[nexSlide - 1].style.display = 'block';
   
    
}