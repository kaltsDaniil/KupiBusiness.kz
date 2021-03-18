let m = []
let sp = []
let dt = []
let rt = []
let intr = []

let span = document.querySelector('.span')

let stars = document.querySelector('.rate__stars')

let star = document.querySelectorAll('.rate__star')[0]

let star2 = document.querySelectorAll('.rate__star')[1]

let star3 = document.querySelectorAll('.rate__star')[2]

let star4 = document.querySelectorAll('.rate__star')[3]

let star5 = document.querySelectorAll('.rate__star')[4]

let st1 = document.querySelectorAll('.st')[0]

let st2 = document.querySelectorAll('.st')[1]

let st3 = document.querySelectorAll('.st')[2]

let st4 = document.querySelectorAll('.st')[3]

let st5 = document.querySelectorAll('.st')[4]

let bl = true

let rate = document.querySelector('.rate__txt')

if (localStorage.getItem('todo')) {
    m = JSON.parse(localStorage.getItem('todo'))
    sp = JSON.parse(localStorage.getItem('todoListick'))
    dt = JSON.parse(localStorage.getItem('data'))
    fn()
}
if (localStorage.getItem('rating')) {
    rt = JSON.parse(localStorage.getItem('rating'))
    if (rt[0]===1) {
        star.classList.add('rate__star3')
        star2.classList.add('rate__star4')
        star3.classList.add('rate__star4')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        rate.innerHTML = 'Вы проголосвали за эту статью на 1/5'
        fn()
    }else if (rt[0]===2) {
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star4')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        rate.innerHTML = 'Вы проголосвали за эту статью на 2/5'
        fn()
    }else if (rt[0]===3) {
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        rate.innerHTML = 'Вы проголосвали за эту статью на 3/5'
        fn()
    }else if (rt[0]===4) {
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star3')
        star5.classList.add('rate__star4')
        rate.innerHTML = 'Вы проголосвали за эту статью на 4/5'
        fn()
    }else if (rt[0]===5) {
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star3')
        star5.classList.add('rate__star3')
        rate.innerHTML = 'Вы проголосвали за эту статью на 5/5'
        fn()
    }else if (rt[0]===undefined){
        localStorage.setItem('todo', JSON.stringify(m))
        localStorage.setItem('todoListick', JSON.stringify(sp))
        localStorage.setItem('data', JSON.stringify(dt))
    }
}

if (localStorage.getItem('int')) {
    intr = JSON.parse(localStorage.getItem('int'))
    if (intr[0]===1) {
        plFn()
        let pl = document.querySelectorAll('.interview__btn')[0].classList.add('active')
    }else if(intr[0]===2){
        mnFn()
        let pl = document.querySelectorAll('.interview__btn')[1].classList.add('active')
    }
}
let res = document.getElementById('result')
function fn() {
    let p = document.getElementById('p')
    let str = ''
    let inp = document.querySelector('.input')
    let strImg = ''
    let strnick = ''
    for (let i = 0; i < m.length; i++) {
        if (rt[0] === 1) {
            str += '<img src="https://a.disquscdn.com/1613175430/images/noavatar92.png" class="commentImg">' + `<p class="p2">${sp[i]} <span class="data">${dt[i]}</span> <span class="stars__comment">
            <img src="./icons/star1.svg" class="star__comment">
            <img src="./icons/star2.svg" class="star__comment2">
            <img src="./icons/star2.svg" class="star__comment3">
            <img src="./icons/star2.svg" class="star__comment4">
            <img src="./icons/star2.svg" class="star__comment5">
            </span>
            </p>` + m[i] + '<p class="p"></p>' 
            p.innerHTML = str
            // console.log(dt)
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
            localStorage.setItem('data', JSON.stringify(dt))
        }else if (rt[0] === 2) {
            str += '<img src="https://a.disquscdn.com/1613175430/images/noavatar92.png" class="commentImg">' + `<p class="p2">${sp[i]} <span class="data">${dt[i]}</span> <span class="stars__comment">
            <img src="./icons/star1.svg" class="star__comment">
            <img src="./icons/star1.svg" class="star__comment2">
            <img src="./icons/star2.svg" class="star__comment3">
            <img src="./icons/star2.svg" class="star__comment4">
            <img src="./icons/star2.svg" class="star__comment5">
            </span>
            </p>` + m[i] + '<p class="p"></p>' 
            p.innerHTML = str
            // console.log(dt)
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
            localStorage.setItem('data', JSON.stringify(dt))
        }else if (rt[0] === 3) {
            str += '<img src="https://a.disquscdn.com/1613175430/images/noavatar92.png" class="commentImg">' + `<p class="p2">${sp[i]} <span class="data">${dt[i]}</span> <span class="stars__comment">
            <img src="./icons/star1.svg" class="star__comment">
            <img src="./icons/star1.svg" class="star__comment2">
            <img src="./icons/star1.svg" class="star__comment3">
            <img src="./icons/star2.svg" class="star__comment4">
            <img src="./icons/star2.svg" class="star__comment5">
            </span>
            </p>` + m[i] + '<p class="p"></p>' 
            p.innerHTML = str
            // console.log(dt)
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
            localStorage.setItem('data', JSON.stringify(dt))
        }else if (rt[0] === 4) {
            str += '<img src="https://a.disquscdn.com/1613175430/images/noavatar92.png" class="commentImg">' + `<p class="p2">${sp[i]} <span class="data">${dt[i]}</span> <span class="stars__comment">
            <img src="./icons/star1.svg" class="star__comment">
            <img src="./icons/star1.svg" class="star__comment2">
            <img src="./icons/star1.svg" class="star__comment3">
            <img src="./icons/star1.svg" class="star__comment4">
            <img src="./icons/star2.svg" class="star__comment5">
            </span>
            </p>` + m[i] + '<p class="p"></p>' 
            p.innerHTML = str
            // console.log(dt)
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
            localStorage.setItem('data', JSON.stringify(dt))
        }else if (rt[0] === 5) {
            str += '<img src="https://a.disquscdn.com/1613175430/images/noavatar92.png" class="commentImg">' + `<p class="p2">${sp[i]} <span class="data">${dt[i]}</span> <span class="stars__comment">
            <img src="./icons/star1.svg" class="star__comment">
            <img src="./icons/star1.svg" class="star__comment2">
            <img src="./icons/star1.svg" class="star__comment3">
            <img src="./icons/star1.svg" class="star__comment4">
            <img src="./icons/star1.svg" class="star__comment5">
            </span>
            </p>` + m[i] + '<p class="p"></p>' 
            p.innerHTML = str
            // console.log(dt)
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
            localStorage.setItem('data', JSON.stringify(dt))
        }
    }
}
function add(event) {
    let text = prompt('Как вас зовут?')
    let input = document.getElementById('input').value
    if (text.length>0) {
        sp.push(text)
        m.push(input)
    }else{
        alert('Вы не ввели ваше имя. Попробуйте еще раз!')
    }
    if (text.length>0) {
        let time = new Date
        // console.log(time)
        time = String(time)
        dateAim = time.slice(4,15) + ',' + time.slice(15,25)
        dt.push(dateAim)
        fn()
        // console.log(dt)
        if (rt.length>1) {
            document.getElementById('input').value = ''
            localStorage.setItem('todo', JSON.stringify(m))
            localStorage.setItem('todoListick', JSON.stringify(sp))
        }
    }
    if(rt[0] === undefined){
        alert('Чтобы голосовать,оцените пожалуйста наш сайт от 1 до 5')
        m = []
        sp = []
        dt = []
        localStorage.setItem('todo', JSON.stringify(m))
        localStorage.setItem('todoListick', JSON.stringify(sp))
        localStorage.setItem('data', JSON.stringify(dt))
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    // console.log(date.slice(4,15))
}

let btn = document.querySelectorAll('.interview__btn')
// let span = document.querySelector('.span')
btn.forEach(function(item){
    item.addEventListener('click',() => {
        btn.forEach(function(item) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

function plFn(){
    span.innerHTML = 1501
    intr[0] = 1
    localStorage.setItem('int',JSON.stringify(intr))
}

function mnFn() {
    span.innerHTML = 1500 
    intr[0] = 2
    localStorage.setItem('int',JSON.stringify(intr))
}
star.addEventListener('click',function() {
    if (bl===true && rt.length===0) {
        alert('Спасибо за вашу оценку! Можете пожалуйста написать в коментариях ваши пожелания для улучшения нашего сайта/продукта?')
        star.classList.add('rate__star3')
        star2.classList.add('rate__star4')
        star3.classList.add('rate__star4')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        bl = false
        rt.push(1)
        localStorage.setItem('rating',JSON.stringify(rt))
        rate.innerHTML = 'Вы проголосвали за эту статью на 1/5'
    }
})

star.addEventListener('mouseover',() => {
    if (bl===true && rt.length===0) {
        star.classList.add('rate__star2')
    }
})

star.addEventListener('mouseout',() => {
    if (bl===true && rt.length===0) {
        star.classList.remove('rate__star2')
    }
})

star2.addEventListener('click',function() {
    if (bl===true && rt.length===0) {
        alert('Спасибо за вашу оценку! Можете пожалуйста написать в коментариях ваши пожелания для улучшения нашего сайта/продукта?')
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star4')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        bl = false
        rt.push(2)
        localStorage.setItem('rating',JSON.stringify(rt))
        rate.innerHTML = 'Вы проголосвали за эту статью на 2/5'
    }
})

star2.addEventListener('mouseover',() => {
    if (bl===true && rt.length===0) {
        star.classList.add('rate__star2')
        star2.classList.add('rate__star2')
    }
})

star2.addEventListener('mouseout',() => {
    if (bl===true && rt.length===0) {
        star.classList.remove('rate__star2')
        star2.classList.remove('rate__star2')
    }
})

star3.addEventListener('click',function() {
    if (bl===true && rt.length===0) {
        alert('Спасибо за вашу оценку! Можете пожалуйста написать в коментариях ваши пожелания для улучшения нашего сайта/продукта?')
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star4')
        star5.classList.add('rate__star4')
        bl = false
        rt.push(3)
        localStorage.setItem('rating',JSON.stringify(rt))
        rate.innerHTML = 'Вы проголосвали за эту статью на 3/5'
    }
})

star3.addEventListener('mouseover',() => {
    if (bl===true && rt.length===0) {
        star.classList.add('rate__star2')
        star2.classList.add('rate__star2')
        star3.classList.add('rate__star2')
    }
})

star3.addEventListener('mouseout',() => {
    if (bl===true && rt.length===0) {
        star.classList.remove('rate__star2')
        star2.classList.remove('rate__star2')
        star3.classList.remove('rate__star2')
    }
})

star4.addEventListener('click',function() {
    if (bl===true && rt.length===0) {
        alert('Спасибо за вашу оценку! Можете пожалуйста написать в коментариях ваши пожелания для улучшения нашего сайта/продукта?')
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star3')
        star5.classList.add('rate__star4')
        bl = false
        rt.push(4)
        localStorage.setItem('rating',JSON.stringify(rt))
        rate.innerHTML = 'Вы проголосвали за эту статью на 4/5'
    }
})

star4.addEventListener('mouseover',() => {
    if (bl===true && rt.length===0) {
        star.classList.add('rate__star2')
        star2.classList.add('rate__star2')
        star3.classList.add('rate__star2')
        star4.classList.add('rate__star2')
    }
})

star4.addEventListener('mouseout',() => {
    if (bl===true && rt.length===0) {
        star.classList.remove('rate__star2')
        star2.classList.remove('rate__star2')
        star3.classList.remove('rate__star2')
        star4.classList.remove('rate__star2')
    }
})


star5.addEventListener('click',function() {
    if (bl===true && rt.length===0) {
        alert('Спасибо за вашу оценку! Можете пожалуйста написать в коментариях ваши пожелания для улучшения нашего сайта/продукта?')
        star.classList.add('rate__star3')
        star2.classList.add('rate__star3')
        star3.classList.add('rate__star3')
        star4.classList.add('rate__star3')
        star5.classList.add('rate__star3')
        bl = false
        rt.push(5)
        localStorage.setItem('rating',JSON.stringify(rt))
        rate.innerHTML = 'Вы проголосвали за эту статью на 5/5'
    }
})

star5.addEventListener('mouseover',() => {
    if (bl===true && rt.length===0) {
        star.classList.add('rate__star2')
        star2.classList.add('rate__star2')
        star3.classList.add('rate__star2')
        star4.classList.add('rate__star2')
        star5.classList.add('rate__star2')
    }
})

star5.addEventListener('mouseout',() => {
    if (bl===true && rt.length===0) {
        star.classList.remove('rate__star2')
        star2.classList.remove('rate__star2')
        star3.classList.remove('rate__star2')
        star4.classList.remove('rate__star2')
        star5.classList.remove('rate__star2')
    }
})

