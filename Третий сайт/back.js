let backbtn = document.querySelector('.back-to-top')
window.addEventListener('scroll',() => {
    if (window.pageYOffset>400) {
        backbtn.style.opacity = 1
        backbtn.style.visibility = 'visible'
    }else{
        backbtn.style.opacity = 0
        backbtn.style.visibility = 'hidden'
    }
})

backbtn.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})