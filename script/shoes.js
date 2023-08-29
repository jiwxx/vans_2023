const li = document.querySelector ('li')
const txt = document.querySelector('.txt')
const title = document.querySelector('h4')
console.log(li,txt,title)

txt.style.display = 'none'
li.addEventListener('click',function(){
    contents.style.display = 'block'
    title.style.fontweight = '500'
})