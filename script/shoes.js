const title = document.querySelectorAll ('.right > ul > li > h4')
const txt = document.querySelectorAll('.txt_contents > .txt')
console.log(txt,title)

for(let i of txt){i.style.display='none'}
// for(let i of title){
//     i.addEventListener('click',function(){
//         txt[0].classList.toggle('active')
//     })
// }
title.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of txt){j.classList.remove('active')}
        //console.log(t,i,txt[i])
        txt[i].classList.toggle('active')
    })
})