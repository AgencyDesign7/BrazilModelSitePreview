var navButton = document.querySelector('.menu-button');
var iconMenuClick = document.querySelector('.icon-2')
var section = document.querySelector('.section')
var navMenu = document.querySelector('.nav-menu')
var spanInset = document.querySelector('.menu-bar')

var indexSlide = 0;
var imgContent = document.querySelectorAll('.w-slide img')

var divImag2 = document.querySelectorAll('.mask div')

console.log(navMenu)




iconMenuClick.addEventListener('click', () => {

    if (navButton.classList[2] == 'w--open') {
        navButton.classList.remove('w--open')
        navMenu.innerHTML = `<a href="./index.html" class="nav-link-2 w-nav-link">HOME</a><a
        href="./composite.html" class="nav-link-3 w-nav-link">COMPOSITE</a><a href="./book.html"
        class="nav-link-4 w-nav-link">BOOK</a><a href="./parceiros.html" class="nav-link-5 w-nav-link">PARCEIROS</a><a
        href="./contato.html" class="nav-link-6 w-nav-link">CONTATO</a>`
        spanInset.innerHTML = '';

    } else {

        section.innerHTML = `<div class="div-block-4">
            <div class="section"><img src="https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2.png" width="500" srcset="https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-500.png 500w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-800.png 800w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e6af21a03eb1a683f004c63/5e6cefc775d1aedfc599e866_logoBrazilModel2.png 1181w"
            sizes="(max-width: 767px) 100vw, 500px" alt="" class="image-2"></div>`;
        navMenu.innerHTML = '';
        spanInset.innerHTML = `<div class="w-nav-overlay" data-wf-ignore="" style="height: 1239.05px; display: block;">
        <nav role="navigation" class="nav-menu w-nav-menu" style="transform: translateY(0px) translateX(0px); transition: transform 400ms ease 0s;" data-nav-menu-open=""><a href="./index.html" class="nav-link-2 w-nav-link w--nav-link-open" style="">HOME</a><a href="./composite.html" class="nav-link-3 w-nav-link w--nav-link-open" style="">COMPOSITE</a><a href="./book.html" class="nav-link-4 w-nav-link w--nav-link-open" style="">BOOK</a>
            <a href="./parceiros.html" class="nav-link-5 w-nav-link w--nav-link-open" style="">PARCEIROS</a><a href="./contato.html" class="nav-link-6 w-nav-link w--nav-link-open" style="">CONTATO</a></nav>
    </div>`;
        navButton.classList.add('w--open')

    }

})


var navMenuLink = document.querySelectorAll('.w-nav-menu a');

navMenuLink.forEach(element => {
    element.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'white';
    })
    element.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
    })
})

