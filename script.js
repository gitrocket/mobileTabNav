// const homeImg = document.getElementById('home');
// const workImg = document.getElementById('work');
// const blogImg = document.getElementById('blog');
// const aboutusImg = document.getElementById('aboutus');
// const images = document.querySelectorAll('.feature');

// const homeBtn = document.getElementById('homeBtn');
// const workBtn = document.getElementById('workBtn');
// const blogBtn = document.getElementById('blogBtn');
// const aboutusBtn = document.getElementById('aboutusBtn');


// homeBtn.addEventListener('click', () => {
//     removeActiveClass();
//     homeImg.classList.add('active')
// })

// workBtn.addEventListener('click', () => {
//     removeActiveClass();
//     workImg.classList.add('active')
// })

// blogBtn.addEventListener('click', () => {
//     removeActiveClass();
//     blogImg.classList.add('active')
// })
// aboutusBtn.addEventListener('click', () => {
//     removeActiveClass();
//     aboutusImg.classList.add('active')
// })

// function removeActiveClass() {
//     images.forEach(image => {
//         if(image.classList.contains('active')) {
//             image.classList.remove('active'); 
//         }
//     })
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const images = document.querySelectorAll('.feature');
const buttons = document.querySelectorAll('.nav-item');

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        removeShowClass();
        images[idx].classList.add('show');
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        removeActiveClass()
        e.currentTarget.classList.add('active')
    })
})

function removeShowClass() {
    images.forEach(image => {
        image.classList.remove('show')
    })
}

function removeActiveClass() {
    buttons.forEach(button => {
        button.classList.remove('active')
    })
}