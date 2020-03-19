var navButton = document.querySelector('.menu-button');
var iconMenuClick = document.querySelector('.icon-2')
var section = document.querySelector('.section')
var navMenu = document.querySelector('.nav-menu')
var spanInset = document.querySelector('.w-nav-overlay')
var indexSlide = 0;
var imgContent = document.querySelectorAll('.w-slide img')
var divImag2 = document.querySelectorAll('.mask div')
var navbarDiv = document.querySelector("[data-wf-ignore]")
iconMenuClick.addEventListener('click', () => {

    if (navButton.classList[2] == 'w--open') {
        navButton.classList.remove('w--open')
        navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`
        spanInset.innerHTML = '';
        navbarDiv.classList.remove('an-nav-bf')
        iconMenuClick.classList.remove('menu-open-icon')
        iconMenuClick.classList.add('w-icon-nav-menu')

    } else {


        section.innerHTML = `<div class="div-block-4">
            <div class="section"><img src="https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2.png" width="500" srcset="https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-500.png 500w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-800.png 800w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2.png 1181w"
            sizes="(max-width: 767px) 100vw, 500px" alt="" class="image-2"></div>`;
        navMenu.innerHTML = '';
        spanInset.innerHTML = `
        <nav role="navigation" class="nav-menu w-nav-menu mob-nav" style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;" data-nav-menu-open=""><a href="./index.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">HOME</a><a href="./composite.html" class="nav-link-3 w-nav-link w--nav-link-open" style="">COMPOSITE</a><a href="./book.html" class="nav-link-4 w-nav-link w--nav-link-open" style="">BOOK</a>
            <a href="./parceiros.html" class="nav-link-5 w-nav-link w--nav-link-open" style="">PARCEIROS</a><a href="./contato.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">CONTATO</a><a href="./shows.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">SHOWS</a></nav>
    </div>`;
        navButton.classList.add('w--open')
        navbarDiv.classList.add('an-nav-bf')
        iconMenuClick.classList.remove('w-icon-nav-menu')
        iconMenuClick.classList.add('menu-open-icon')

    }

})


var navMenuLink = document.querySelectorAll('.w-nav-menu a');

navMenuLink.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = "black"
    })
    element.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
        event.target.style.color = "white"
    })
})

var audio1 = document.querySelector('.audio1');
var audio2 = document.querySelector('.audio2');
var image1 = document.querySelector('.show1')
var image2 = document.querySelector('.show2')
var iconAudioControl1 = document.querySelector('.iconplay1')
var iconAudioControl2 = document.querySelector('.iconplay2')
var isplay1 = false;
var isplay2 = false;

audio1.src = "./shows/contents/5e6af21a03eb1a683f004c63/show1audio.mpeg";
audio2.src = "./shows/contents/5e6af21a03eb1a683f004c63/show2audio.mpeg";


function playAudio1() {
    audio1.play();
    iconAudioControl1.src = "./shows/contents/5e6af21a03eb1a683f004c63/pauseIcon.png"
    isplay1 = true;
}
function pauseAudio1() {
    audio1.pause();
    isplay1 = false;
    iconAudioControl1.src = "./shows/contents/5e6af21a03eb1a683f004c63/playIcon.png"
}
function playAudio2() {
    audio2.play();
    iconAudioControl2.src = "./shows/contents/5e6af21a03eb1a683f004c63/pauseIcon.png"
    isplay2 = true;
}
function pauseAudio2() {
    audio2.pause()
    isplay2 = false;
    iconAudioControl2.src = "./shows/contents/5e6af21a03eb1a683f004c63/playIcon.png"
}

iconAudioControl1.addEventListener('click', () => {

    if (!isplay1) {
        playAudio1();
        pauseAudio2();
    } else { pauseAudio1() }

})

iconAudioControl2.addEventListener('click', () => {
    if (!isplay2) {
        playAudio2()
        pauseAudio1()
    } else { pauseAudio2() }



})



