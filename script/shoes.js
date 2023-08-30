const title = document.querySelectorAll ('right > ul > li > h4')
const txt = document.querySelectorAll('.txt_contents > .txt')
console.log(txt,title)

for(let i of txt){i.style.display='none'}
for(let i of title){
    console.log(i)
    i.addEventListener('click',function(){
        txt[0].classList.toggle('.active')
        txt[1].classList.toggle('.active')
        txt[2].classList.toggle('.active')
    })
}