let btn = document.querySelectorAll('.declare-card__btn')

let modal = document.querySelector('.popup')
let crest = document.querySelector('.popup__close')
btn.forEach(function fn(item) {
    item.addEventListener('click',() => {
        console.log('hello')
        modal.classList.add('activation')
    })
})

crest.addEventListener('click',() => {
    modal.classList.remove('activation')
})

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

let search = document.querySelector('.search__btn')
let coffee = document.querySelectorAll('#coffee')
let card = document.querySelectorAll('.main-card')
let blogs = document.querySelector('.main-section')
let choice = document.querySelectorAll('.serch-varriation__var')
// search.addEventListener('click',function srch() {
//     let inp = document.querySelector('.search__input').value.trim()
//     console.log(inp)
//     if (inp==='Каффе') {
//         card.forEach(function name(crd) {
//             crd.style.display = 'none'
//         })
//         coffee.forEach(function name(item) {
//             item.style.display = 'block'
//         })
//         blogs.style.top = 560 + 'px'
//     }
//     if (inp !== '') {
        
//     }
// })

let serch = document.querySelector('.search__input')

let stSrch = document.querySelector('.serch-varriation')

serch.addEventListener('click',() => {
    stSrch.classList.add('block')
    stSrch.classList.remove('none')
    stSrch.classList.add('capitalize')
})

// let choiceMain = document.querySelectorAll('.serch-varriation__var')
// choice.forEach(function (it) {
//     it.addEventListener('click',() => {
//         it.style.display = 'none'
//     })
// })
let cf = document.querySelectorAll('.serch-varriation__var')[0]
let th = document.querySelectorAll('.serch-varriation__var')[1]
let cn = document.querySelectorAll('.serch-varriation__var')[2]
let fr = document.querySelectorAll('.serch-varriation__var')
let franshiz = document.querySelectorAll('.serch-varriation__var')[3]
let cinema = document.querySelectorAll('#cinema')
let theatre = document.querySelectorAll('#theatre')
cf.addEventListener('click',() => {
    card.forEach(function name(crd) {
        crd.style.display = 'none'
    })
    coffee.forEach(function name(item) {
        item.style.display = 'block'
    })
    document.querySelector('.search__input').value = 'Каффе'
})

th.addEventListener('click',() => {
    card.forEach(function name(crd) {
        crd.style.display = 'none'
    })
    theatre.forEach(function(test) {
        test.style.display = 'block'
    })
    document.querySelector('.search__input').value = 'Театр'
})

cn.addEventListener('click',() => {
    card.forEach(function name(crd) {
        crd.style.display = 'none'
    })
    cinema.forEach(function name(item) {
        item.style.display = 'block'
    })
    document.querySelector('.search__input').value = 'Кино'
})

franshiz.addEventListener('click',() => {
    card.forEach(function name(crd) {
        crd.style.display = 'block'
    })
    theatre.forEach(function(test) {
        test.style.display = 'none'
    })
    coffee.forEach(function name(item) {
        item.style.display = 'none'
    })
    cinema.forEach(function name(item) {
        item.style.display = 'none'
    })
    document.querySelector('.search__input').value = 'Франшиза'
})

document.querySelector('.search__input').oninput = function inpFn() {
    let inp = document.querySelector('.search__input').value.trim()
    let choice = document.querySelectorAll('.serch-varriation__var')
    let stSrch = document.querySelector('.serch-varriation')
    stSrch.classList.add('block')
    stSrch.classList.remove('none')
    stSrch.style.height = 121 + 'px'
    stSrch.style.top = 0 + 'px'
    let b = []
    if (inp !== '') {
        choice.forEach(function (elem) {
            if (elem.innerText.search(inp)==-1) {
                elem.classList.remove('block')
                elem.classList.add('none')
                console.log(inp)
                if (inp==='Каффе') {
                    stSrch.onclick = function(){
                        card.forEach(function name(crd) {
                            crd.style.display = 'none'
                        })
                        coffee.forEach(function name(item) {
                            item.style.display = 'block'
                        })
                    }
                }
            }else{
                elem.classList.add('block')
                elem.classList.remove('none')
                b.push(1)
                console.log(b.length)
                if (b.length===2) {
                    stSrch.style.height = 52 + 'px'
                    stSrch.style.top = -32 + 'px'
                }else if (b.length===1) {
                    stSrch.style.height = 27 + 'px'
                    stSrch.style.top = -45 + 'px'
                }
            }
        })
    }else{
        choice.forEach(function (elem) {
            elem.classList.add('block')
            elem.classList.remove('none')
        })
    }
}

window.onclick = function() {
    if (stSrch.classList.contains('block')) {
        window.onclick = function(){
            stSrch.classList.add('none')
            stSrch.classList.remove('block')
        }
    }
}

let searchInp = document.querySelector('.search__input')

let searchButton = document.querySelector('.search__btn')

searchInp.addEventListener('keydown',(ent) => {
    if (ent.keyCode ===13) {
        let inp = document.querySelector('.search__input').value
        console.log(inp)
        if (inp==='Кино') {
            card.forEach(function name(crd) {
                crd.style.display = 'none'
            })
            cinema.forEach(function name(item) {
                item.style.display = 'block'
            })
        }
    }
})

searchInp.addEventListener('keydown',(ent) => {
    if (ent.keyCode ===13) {
        let inp = document.querySelector('.search__input').value
        console.log(inp)
        if (inp==='Театр') {
            card.forEach(function name(crd) {
                crd.style.display = 'none'
            })
            cinema.forEach(function name(item) {
                item.style.display = 'block'
            })
        }
    }
})

searchInp.addEventListener('keydown',(ent) => {
    if (ent.keyCode ===13) {
        let inp = document.querySelector('.search__input').value
        console.log(inp)
        if (inp==='Каффе') {
            card.forEach(function name(crd) {
                crd.style.display = 'none'
            })
            coffee.forEach(function name(item) {
                item.style.display = 'block'
            })
            document.querySelector('.search__input').value = 'Каффе'
        }
    }
})

searchInp.addEventListener('keydown',(ent) => {
    if (ent.keyCode ===13) {
        let inp = document.querySelector('.search__input').value
        console.log(inp)
        if (inp==='Театр') {
            card.forEach(function name(crd) {
                crd.style.display = 'none'
            })
            theatre.forEach(function(test) {
                test.style.display = 'block'
            })
            document.querySelector('.search__input').value = 'Театр'
        }
    }
})

searchInp.addEventListener('keydown',(ent) => {
    if (ent.keyCode ===13) {
        let inp = document.querySelector('.search__input').value
        console.log(inp)
        if (inp==='Франшиза') {
            card.forEach(function name(crd) {
                crd.style.display = 'block'
            })
            theatre.forEach(function(test) {
                test.style.display = 'none'
            })
            coffee.forEach(function name(item) {
                item.style.display = 'none'
            })
            cinema.forEach(function name(item) {
                item.style.display = 'none'
            })
            document.querySelector('.search__input').value = 'Франшиза'
        }
    }
})

searchButton.onclick = () => {
    if (document.querySelector('.search__input').value==='Франшиза') {
        card.forEach(function name(crd) {
            crd.style.display = 'block'
        })
        theatre.forEach(function(test) {
            test.style.display = 'none'
        })
        coffee.forEach(function name(item) {
            item.style.display = 'none'
        })
        cinema.forEach(function name(item) {
            item.style.display = 'none'
        })
        document.querySelector('.search__input').value = 'Франшиза'
    }else if (document.querySelector('.search__input').value==='Театр') {
        card.forEach(function name(crd) {
            crd.style.display = 'none'
        })
        theatre.forEach(function(test) {
            test.style.display = 'block'
        })
        document.querySelector('.search__input').value = 'Театр'
    }else if (document.querySelector('.search__input').value==='Кино') {
        card.forEach(function name(crd) {
            crd.style.display = 'none'
        })
        cinema.forEach(function name(item) {
            item.style.display = 'block'
        })
    }else if (document.querySelector('.search__input').value==='Каффе') {
        card.forEach(function name(crd) {
            crd.style.display = 'none'
        })
        coffee.forEach(function name(item) {
            item.style.display = 'block'
        })
        document.querySelector('.search__input').value = 'Каффе'
    }
}