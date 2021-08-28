const hambuerguer = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(hambuerguer)

hambuerguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target !=menu  && e.target != hambuerguer    ){
        menu.classList.toggle("spread")
    }
})