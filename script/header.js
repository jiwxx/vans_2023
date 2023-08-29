const gnb = document.querySelectorAll('.gnb')
const nav = document.querySelectorAll('.snb_all')
const nav_bg = document.querySelector('.nav_bg')
console.log(gnb,nav,nav_bg)

nav[0].style.display ='none'
nav[1].style.display ='none'
nav[2].style.display ='none'
nav[3].style.display ='none'
nav[4].style.display ='none'
nav_bg.style.display ='none'

gnb[0].addEventListener('mouseover',function(){
    nav[0].style.display ='flex'
    nav_bg.style.display ='flex'
})
gnb[0].addEventListener('mouseout',function(){
    nav[0].style.display ='none' 
    nav_bg.style.display ='none'
})

gnb[1].addEventListener('mouseover',function(){
    nav[1].style.display ='flex'
    nav_bg.style.display ='flex'
})
gnb[1].addEventListener('mouseout',function(){
    nav[1].style.display ='none' 
    nav_bg.style.display ='none'
})

gnb[2].addEventListener('mouseover',function(){
    nav[2].style.display ='flex'
    nav_bg.style.display ='flex'
})
gnb[2].addEventListener('mouseout',function(){
    nav[2].style.display ='none' 
    nav_bg.style.display ='none'
})

gnb[3].addEventListener('mouseover',function(){
    nav[3].style.display ='flex'
    nav_bg.style.display ='flex'
})
gnb[3].addEventListener('mouseout',function(){
    nav[3].style.display ='none' 
    nav_bg.style.display ='none'
})