function onLoad() {
  loadPageProgress();
  navBarMobile();
  var pageName = location.pathname.split("/").pop();
  switch (pageName) {
    case "index.html":
      slideTitle();
      break;
    case "facaparte.html":
      HideOrShowCategoryModel();
      checkUploadFiles();
      break;
    case "shows.html":
      AudioControls();
      break;
    default:
      break;
  }
}

function navBarMobile() {
  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  var navbarRootDiv = document.querySelector(".navbar-mobile-root");

  iconMenuClick.addEventListener("click", () => {
    if (navButton.classList[2] == "w--open") {
      navButton.classList.remove("w--open");
      navbarDiv.classList.remove("an-nav-bf");
      iconMenuClick.classList.remove("w-menu-open-nav");
      navbarRootDiv.classList.add("display-none-content");
    } else {
      navButton.classList.add("w--open");
      navbarDiv.classList.add("an-nav-bf");
      iconMenuClick.classList.add("w-menu-open-nav");
      navbarRootDiv.classList.remove("display-none-content");
    }
  });

  var navMenuLink = document.querySelectorAll(".w-nav-menu a");

  navMenuLink.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
    });
    element.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "white";
    });
  });
}

function AudioControls() {
  var audio1 = document.querySelector(".audio1");
  var audio2 = document.querySelector(".audio2");
  var image1 = document.querySelector(".show1");
  var image2 = document.querySelector(".show2");
  var iconAudioControl1 = document.querySelector(".iconplay1");
  var iconAudioControl2 = document.querySelector(".iconplay2");
  var isplay1 = false;
  var isplay2 = false;

  audio1.src = "./media/shows/show1audio.mpeg";
  audio2.src = "./media/shows/show2audio.mpeg";

  function playAudio1() {
    audio1.play();
    iconAudioControl1.src = "./media/shows/pauseIcon.png";
    isplay1 = true;
  }

  function pauseAudio1() {
    audio1.pause();
    isplay1 = false;
    iconAudioControl1.src = "./media/shows/playIcon.png";
  }

  function playAudio2() {
    audio2.play();
    iconAudioControl2.src = "./media/shows/pauseIcon.png";
    isplay2 = true;
  }

  function pauseAudio2() {
    audio2.pause();
    isplay2 = false;
    iconAudioControl2.src = "./media/shows/playIcon.png";
  }

  iconAudioControl1.addEventListener("click", () => {
    if (!isplay1) {
      playAudio1();
      pauseAudio2();
    } else {
      pauseAudio1();
    }
  });

  iconAudioControl2.addEventListener("click", () => {
    if (!isplay2) {
      playAudio2();
      pauseAudio1();
    } else {
      pauseAudio2();
    }
  });
}

function slideParceiros() {
  var index = 0;

  // function nextSlide() {
  //   var Divimgs = document.querySelectorAll('.imgp-slide')
  //   Divimgs.forEach((img) => img.style.display = "none")

  //   index++;
  //   if (index > Divimgs.length) index = 1;
  //   Divimgs[index - 1].style.display = "block"

  //   setTimeout(nextSlide, 4000)
  // }

  let time = 4000,
    imags = document.querySelectorAll(".imgp-slide"),
    imgsLenght = imags.length,
    imgIndex = 0;

  setInterval(() => {
    imags[imgIndex].classList.remove("show-img");
    imgIndex++;
    if (imgIndex >= imgsLenght) imgIndex = 0;
    imags[imgIndex].classList.add("show-img");
  }, time);
}

function slideTitle() {
  var index = 0;
  var index2 = 1;
  var index3 = 2;
  nextSlide();
  nextSlide2();
  nextSlide3();

  function nextSlide() {
    var divImgs = document.querySelectorAll(".w-slide");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index++;
    if (index > divImgs.length) {
      index = 1;
    }
    if (images[index - 1].naturalHeight < 0) {
      divImgs[index - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide, 7000);
  }
  function nextSlide2() {
    var divImgs = document.querySelectorAll(".w-slide-2");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index2++;
    if (index2 > divImgs.length) {
      index2 = 1;
    }
    if (images[index2 - 1].naturalHeight < 0) {
      divImgs[index2 - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index2 - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide2, 7000);
  }
  function nextSlide3() {
    var divImgs = document.querySelectorAll(".w-slide-3");
    var images = document.querySelectorAll(".w-slide img");
    var loader = document.querySelector(".loader");
    divImgs.forEach((element) => (element.style.display = "none"));
    index3++;
    if (index3 > divImgs.length) {
      index3 = 1;
    }
    if (images[index3 - 1].naturalHeight < 0) {
      divImgs[index3 - 1].style.visibility = "none";
      loader.style.display = "none";
    } else {
      divImgs[index3 - 1].style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(nextSlide3, 7000);
  }
}

function showCategoryModelsDesktop(selectedCategory, counterVal) {
  var Modelcategory = document.querySelector(`.${selectedCategory}`);
  var subcatSub = document.querySelector(".model-cat-sub");
  var subSubDivContainer = document.querySelector(".sub-sub-model");

  subSubDivContainer.classList.add("display-none-content");

  Modelcategory.classList.remove("display-none-content");
  subcatSub.innerHTML = "";
}

function showOrHideContent(selectedCategory) {
  var subCategoryModels = document.querySelector(`.${selectedCategory}`);
  subCategoryModels.classList.contains("showContentBlock")
    ? subCategoryModels.classList.remove("showContentBlock")
    : subCategoryModels.classList.add("showContentBlock");
}

function showSubs(categorySelected) {
  var refSpanContainer = document.querySelector(".sub-sub-model");
  var modelMain = document.querySelector(".main-categorys");
  var subSubDivContainer = document.querySelector(".sub-sub-model");
  subSubDivContainer.classList.remove("display-none-content");
  modelMain.classList.add("display-none-content");
  var CategoryObjects = {
    Category: {
      Baby: {
        title: "BABY",
        imgSrc: "./media/home/menu-category/BabyCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Kids: {
        title: "KID",
        imgSrc: "./media/home/menu-category/KidsCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      PreTeens: {
        title: "PRE-TEEN",
        imgSrc: "./media/home/menu-category/PreTeenCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Commercials: {
        title: "COMMERCIAL",
        imgSrc: "./media/home/menu-category/CommercialsCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      PlusSize: {
        title: "PLUS SIZE",
        imgSrc: "./media/home/menu-category/PlusSizeCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      MoreAge: {
        title: "MORE AGE",
        imgSrc: "./media/home/menu-category/MoreAgeCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Fashion: {
        title: "FASHION",
        imgSrc: "./media/home/menu-category/FashionCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Fitness: {
        title: "FITNESS",
        imgSrc: "./media/home/menu-category/FitnessCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Urban: {
        title: "URBAN",
        imgSrc: "./media/home/menu-category/UrbanCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
      Androgens: {
        title: "ANDROGYNE",
        imgSrc: "./media/home/menu-category/AndrogensCategory.jpg",
        Mlink: "",
        FLink: "",
        AllLink: "",
      },
    },
  };

  var HtmlBabyCategory = `
                    <div class="model-cat-sub">
                      <li class="title-category">CATEGORIAS</li>
                      <li data-link-on onclick="showCategoryModelsDesktop('main-categorys',0)" id="back-btn"><span id="back-menu"></span><a href="javascript:void(0)">VOLTAR</a></li>
                      <li id="title-sub">${CategoryObjects["Category"][categorySelected]["title"]}</li>
                      <li><img src="${CategoryObjects["Category"][categorySelected]["imgSrc"]}"></li>
                      <div class="options-models">
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Flink"]}">FEMININO</a></li>
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Mlink"]}">MASCULINO</a></li>
                      <li><a href="${CategoryObjects["Category"][categorySelected]["Alllink"]}">TODOS</a></li>
                      </div>
                    </div>
  `;
  refSpanContainer.innerHTML = HtmlBabyCategory;
}

function ShowSCategorysMainMobile(category) {
  var subCategorys = document.querySelectorAll(".subs-category-ref");
  var allLinks = document.querySelectorAll("nav a");
  subCategorys.forEach((element) => {
    element.classList[1] === category
      ? element.classList.toggle("showContentBlock")
      : null;
  });

  allLinks.forEach((element) => {
    if (element.classList.contains("display-none-content")) {
      element.classList.remove("display-none-content");
    } else {
      element.classList.add("display-none-content");
      window.scrollTo(0, 0);
    }
  });
}

/*
function searchAndShowSlide() {

  var divimg2 = document.querySelectorAll('.w-slide img');
  var spanSlide = document.querySelector('.slideshow');
  divimg2.forEach(elements => {
    setInterval(() => {
      if (elements.naturalHeight == 0) {
        var loader = document.querySelector('.loader').style.display = "block";
        elements.innerHTML = "";
      }
      else {
        console.log('hello')
      }
    }, 500)

  })
}*/

function PopupMsg(title, cat, closeMenuMobile = 0, classCloseMenu) {
  var ObjectsContainer = {
    Hero: {
      ref: document.querySelector(".hero"),
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `${Style}`);
      },
    },
    PopUpMsgContainer: {
      ref: document.querySelector(".container-popup-mgs"),
      refImgs: document.querySelector(".container-imgs"),
      CopyContainer(copy) {
        //this.refImgs.setAttribute("style", `${copy}`);
      },
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `${Style}`);
        //this.CopyContainer(Style);
      },
    },
  };

  var navButtonMenuMobile = document.querySelector(".menu-button");
  var popupCategory = document.querySelector(".sub-category");
  var containerImgs = document.querySelector(".hero");
  var actualCategory = cat;

  var navButton = document.querySelector(".menu-button");
  var iconMenuClick = document.querySelector(".icon-2");
  var navMenu = document.querySelector(".nav-menu");
  var spanInset = document.querySelector(".w-nav-overlay");
  var navbarDiv = document.querySelector("[data-wf-ignore]");

  var navbarRootDiv = document.querySelector(".navbar-mobile-root");

  var sectionSocialMedia = document.querySelector(".contact-socialMedia");
  var form = document.querySelector("form");

  var MediaQueryAjust768 = window.matchMedia("(max-width: 768px) and (min-width: 320px)");
  var MediaQueryAjust1322 = window.matchMedia("(max-width: 1322px) and (min-width: 800px)");
  if (sectionSocialMedia)
    sectionSocialMedia.setAttribute("style", "display: none !important;");

  if (MediaQueryAjust768.matches === true) {
    ObjectsContainer.Hero.StyleAttributes(
      "height: 700px !important; visibility:hidden !important; overflow: hidden !important;"
    );
    //containerImgs.setAttribute("style", "height: 700px !important;");
    if (title === "parceiros" || title === "pitagoras-propaganda") {
      ObjectsContainer.Hero.StyleAttributes(
        "height: 1100px !important; visibility:hidden !important; overflow: hidden !important;"
      );
      ObjectsContainer.PopUpMsgContainer.StyleAttributes(
        "height: 1100px !important;"
      );
    }
  } else {
    ObjectsContainer.Hero.StyleAttributes(
      "height: 1100px !important; visibility:hidden !important; overflow: hidden !important;"
    );

    //containerImgs.setAttribute("style", "height: 1090px !important;");
    if (form !== null && sectionSocialMedia !== null) {
      sectionSocialMedia.setAttribute("style", "display: none !important;");
      form.setAttribute("style", "display: none !important;");
    }
  }

  if (closeMenuMobile === 1) {
    navButton.classList.remove("w--open");
    navbarDiv.classList.remove("an-nav-bf");
    iconMenuClick.classList.remove("w-menu-open-nav");
    navbarRootDiv.classList.add("display-none-content");
  }

  if (false) {
    //popupCategory.classList.remove("popup-models-category");
    popupCategory.classList.add("display-none-content");
  } else {
    popupCategory.classList.remove("container-popup-mgs");
    popupCategory.classList.add("popup-models-category");
    popupCategory.classList.replace("category", actualCategory);
    popupCategory.classList.remove("display-none-content");
    setTimeout(() => {
      popupCategory.classList.add("container-popup-mgs");
    }, 200);
  }
  if (title === "revista") {
    popupCategory.style.backgroundColor = "black";
  }

  popupCategory.classList.add("display-none-content");
  containerImgs.style.backgroundColor = "white"
  containerImgs.classList.add('flex-d-column-center')
  /*if (title === 'parceiros' || title === 'pitagoras-propaganda') {
    ObjectsContainer.Hero.StyleAttributes('height: 1100px !important; visibility:hidden !important')
    ObjectsContainer.PopUpMsgContainer.StyleAttributes('height: 1100px !important;')
  } else {
    ObjectsContainer.Hero.StyleAttributes('height: fit-content !important; visibility:hidden !important')
  }*/

  switch (title) {
    case "cursos":
      popupCategory.style.backgroundColor = "white";

      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-passarela','curso-passarela',1)"><img src="./media/home/menu-cursos/cursoPassarela.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-modeloFotografica','curso-modeloFotografica',1)"><img src="./media/home/menu-cursos/cursoFotografiaModa.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-teatro','curso-teatro',1)"><img src="./media/home/menu-cursos/cursoTeatro.png" ></a>
                          <a  href="javascript:void(0)" onclick="PopupMsg('curso-maquiagem','curso-maquiagem',1)"><img src="./media/home/menu-cursos/cursoMaquiagem.png" ></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "revista":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                      <a  href="javascript:void(0)"><img src="./media/home/menu-revista/revista-fixa.png"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "noneArtistas":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/artistas/noneArtist.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "shows":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19shows.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "desfiles":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19desfiles.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "concursos":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                          <a  href="javascript:void(0)"><img src="./media/eventos-menu/Covid19concursos.jpg"></a>
                      </div>
      `;
      window.scrollTo(0, 0);
      break;
    case "lives":
      popupCategory.style.backgroundColor = "black";
      containerImgs.innerHTML = `
                      <div class="imgs-cursos ${title}">
                      <a  href="javascript:void(0)"><img src="./media/"></a>
                      </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-passarela":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloManequim.png"></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente. </p></div> 
                                  <div class="details-course" onClick="DisplayDetail()"><a href="javascript:void(0)">Mostrar detalhes</a>
                                    <div class="details-nv-2 display-none-content">
                                      <p>CONTEÚDO PROGRAMÁTICO</P>
                                      <p>* Mercado de Trabalho</p>
                                      <p>* Técnica em Passarela</p>
                                      <p>* Fotografia, Fotogenia e Filmagem</p>
                                      <p>* Interpretação</p>
                                      <p>* Video</p>
                                      <p>* Expressão Corporal e Facial</p>
                                      <p>* Etiqueta Social e Profissional</p>
                                      <p>* Comportamento</p>
                                      <p>* Legislação Trabalhista</p>
                                      <p>* Vestuário / Moda e Estilo</p>
                                      <p>* Nutrição, Higiene e Beleza</p>
                                      <p>* Marketing Pessoal</p>
                                      <p>* Gerenciamento de Carreira</p>
                                    </div>
                                  </div>
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-modeloFotografica":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-modeloFotografica.png"></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-maquiagem":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-maquiagem.png"></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 39.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "curso-teatro":
      countdown()
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `<div class="container-course-description">
                                  <div class="image-course-container"><img src="./media/home/menu-cursos/imgs-cursos/curso-teatro.png"></div>
                                  <div class="description-course"><p>O curso é totalmente on-line. Para obter o certificado, você deverá atingir a nota minima 6,0 na avaliação e completar a carga horária. Para a confecção e envio postal do certificado existe apenas uma taxa de R$ 79.90, que será enviado por e-mail e através dos correios. A solicitação do certificado é opcional e não impedirá você de estudar gratuitamente.</p></div> 
                                  <div class="btn-aplly"><span class="apllyIcon"></span><p>CLIQUE AQUI PARA MATRICULAR AGORA</p></div>
                                  <span class="countdown">countdown</span> 
                                </div>
                      
      `;
      window.scrollTo(0, 0);
      break;
    case "parceiros":
      if (MediaQueryAjust768.matches === true) {
        ObjectsContainer.Hero.StyleAttributes(
          "height: 3000px !important; visibility:hidden !important; overflow: hidden !important;"
        );
        ObjectsContainer.PopUpMsgContainer.StyleAttributes(
          "height: 3000px !important;"
        );
      }
      if (MediaQueryAjust1322.matches === true) {
        ObjectsContainer.Hero.StyleAttributes(
          "height: 1600px !important; visibility:hidden !important; overflow: hidden !important;"
        );

        ObjectsContainer.PopUpMsgContainer.StyleAttributes(
          "height: 1600px !important;"
        );
      }

      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                        <div class="container-parceiros">
                          <div class="texts-parceiros-main">
                            <p id="title-Pmain">CLUBE DE VANTAGENS BRAZIL MODEL</p>
                            <p>Clica na logo dos nossos parceiros e veja os descontos e ofertas que cada um  oferece.</p>
                          </div>
                          <div class="images-container-parceiros">
                            <a href="#" onClick="PopupMsg('pitagoras-propaganda', 'pitagoras-propaganda',1,1)"><img src="./media/parceiros/parceiro1.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('constance-propaganda', 'constance-propaganda', 1, 1)"><img src="./media/parceiros/parceiro2.jpg" alt="parceiro"></a>
                            <a href="#" onClick="PopupMsg('fha-propaganda', 'fha-propaganda', 1, 1)"><img src="./media/parceiros/parceiro3.jpg" alt="parceiro"></a>
                            <img src="./media/parceiros/parceiro5.jpg" alt="parceiro">
                            <img src="./media/parceiros/parceiro7.jpg" alt="parceiro">
                            <img src="./media/parceiros/parceiro8.jpg" alt="parceiro">
                            <a href="#" onClick="PopupMsg('only-propaganda', 'only-propaganda', 1, 1)"><img src="./media/parceiros/only/parceiro9.jpg" alt="parceiro"></a>
                            <img src="./media/parceiros/parceiro11.jpg" alt="parceiro">
                            <img src="./media/parceiros/parceiro12.jpg" alt="parceiro">
                          </div>
                        </div>
                      `;
      break;

    case "pitagoras-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div><h3>Pitágoras</h3></div>
                          <div class="images-main">
                            <div class="slider-propaganda">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-1.png" class="imgp-slide show-img" alt="pitagoras">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-2.png" class="imgp-slide" alt="piragoras">
                              <img src="./media/parceiros/pitagoras/propaganda-pitagoras-3.png" class="imgp-slide" alt="pitagoras">
                            </div>
                          </div>
                          <div class="txts-propaganda">
                            <div class="container-text-propa"><p>Os alunos da <b>Brazil Model Agency</b> tem descontos especiais nos cursos de graduação e pós-graduação na Faculdade Pitágoras.</p>
                            <div class="sub-prop-text"><p><b>ESCOLHA A FACULDADE MAIS PRÓXIMA DE VOCÊ</b></p>
                            <p>Não perca tempo, matricule-se já!</p></div><div>
                            
                            <div class="contact-watsapp">
                            <div class="contact-watsapp-icons" style="display: none;">
                                <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a>
                                <p>Whatsapp</p>
                              </div>
                            <select id="state-pitagoras" name="select-state" onchange="selectedState()">
                              <option>Selecione um estado...</option>
                              <option value="ac">AC</option>
                              <option value="al">AL</option>
                              <!--<option value="ap">AP</option>-->
                              <!--<option value="am">AM</option>-->
                              <option value="ba">BA</option>
                              <option value="ce">CE</option>
                              <!--<option value="df">DF</option>-->
                              <option value="es">ES</option>
                              <option value="go">GO</option>
                              <option value="ma">MA</option>
                              <!--<option value="mt">MT</option>-->
                              <!--<option value="ms">MS</option>-->
                              <option value="mg">MG</option>
                              <option value="pa">PA</option>
                              <option value="pb">PB</option>
                              <option value="pr">PR</option>
                              <option value="pe">PE</option>
                              <!--<option value="pi">PI</option>-->
                              <!--<option value="rj">RJ</option>-->
                              <option value="rn">RN</option>
                              <!--<option value="rs">RS</option>-->
                              <!--<option value="ro">RO</option>-->
                              <!--<option value="rr">RR</option>-->
                              <!--<option value="sc">SC</option>-->
                              <!--<option value="sp">SP</option>-->
                              <!--<option value="se">SE</option>-->
                              <!--<option value="to">TO</option>-->
                            </select>
                              <div class="list-pitagoras-states"></div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;
      setTimeout(slideParceiros(), 500);
      break;
    case "constance-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda">
                          <div class="images-main flex-d-column">
                            <a href="https://www.constance.com.br"> <img class="logo-cost" src='https://www.constance.com.br/skin/frontend/constance-v2018/default/images/constance-nova-marca.png' ></a>
                           <iframe src="https://www.youtube.com/embed/s5sBoWJ41vM?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;rel=0&amp;version=3&amp;playlist=diGLn0kUPXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </div>
                          <div class="txts-propaganda">
                            <div id="const-link"><a href="https://www.constance.com.br/"><b>www.constance.com.br</b></a></div>
                            <div class="container-text-propa"><p>Vá em uma loja constance com sua carteirinha de estudante Brazil Model Agency ou Faculdade Pitágoras e confira as vantagens que só você tem.</p><div>

                              </div>
                            </div>
                          </div>

                        </div>
                        </div>
                      `;

      break;
    case "fha-propaganda":

      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                       <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda" style="max-width: 100% !important;">
                           <div class="fha-prop-container">
                            <p>Fundação Helena Antipoff em parceria com a Brazil Model Agency, oferecem curso gratuito de Modelo e Manequim.</p>
                            <div class="container-img-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-1.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-2.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-3.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-4.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-5.jpg" alt="propaganda-fha">
                              <img src="./media/parceiros/fha/fha-propaganda-6.jpg" alt="propaganda-fha">
                            </div>
                            <p id="fha-description-course">Curso de Modelo e Manequim com objetivo de trabalhar postura, técnica, desenvolvimento em passarela, noções de vestuário, noções de uma vida saudável e principalmente formar modelos e manequins, além de auxiliar o desenvolvimento pessoal em situações cotidianas.  Ao final do curso, o aluno estará capacitado, atualizado e alinhado no mundo da moda, beleza e publicidade. Podendo assim com o certificado de conclusão do curso de modelo em mãos, dar entrada ao seu registro para adquirir o DRT e se tornar um modelo profissional.</p>
                            <div class="contact-watsapp-icons">
                                <p>Para maiores informações: <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/IconSocial/IwatsappColor.png"></a></p>
                              </div>
                            <p> Acesse: <a href="http://www.fha.mg.gov.br/">www.fha.mg.gov.br</a></p>
                           </div>

                        </div>
                        </div>
                      `;

      break;
    case "only-propaganda":
      popupCategory.style.backgroundColor = "white";
      containerImgs.innerHTML = `
                      <div class="propaganda-nv-2">
                        <div class="back-parceiros-prop" onClick="PopupMsg('parceiros', 'parceiros',1,1)" data-link-on ><p>Voltar Parceiros</p></div>
                        <div class="container-propaganda images-main-only">
                          
                            <a href="https://www.instagram.com/oonlyexclusive_oficial/"> <img class="logo-cost" src='./media/parceiros/only/parceiro10.jpg' ></a>
                          

                        </div>
                        </div>
                      `;
    default:
      break;
  }

  if (classCloseMenu) {
    var artistDoc = document.querySelector(".artist-btn");
    var spanIconArtist = document.querySelector(".artist-btn > span");
    var divArtista = document.querySelector(".subnav-artista");

    var cantoresBtn = document.querySelector(".contores-btn");
    var divCantores = document.querySelector(".sub-cantores-1");
    var mainLi = document.querySelectorAll(".MainMenu-1");

    var eventsDoc = document.querySelector(".events-btn");
    var divEvento = document.querySelector(".subnav-evento");
    var spanEvent = document.querySelector(".events-btn > span");

    var courseBtn = document.querySelector(".course-btn");
    var courseSpan = document.querySelector(".course-btn > span");
    var divCourse = document.querySelector(".subnav-course");

    var modelsDiv = document.querySelector(".main-categorys");
    var modelbtn = document.querySelector(".model-button");
    var modelspan = document.querySelector(".model-button  > span");
    var modelSubCategory = document.querySelector(".sub-sub-model");

    modelsDiv.classList.remove("showContentBlock");
    modelbtn.classList.remove("activeBtn");
    modelspan.classList.remove("activeIconArrow");
    modelSubCategory.classList.add("display-none-content");

    artistDoc.classList.remove("activeBtn");
    divArtista.classList.add("display-none-content");
    spanIconArtist.classList.remove("activeIconArrow");

    divCantores.classList.add("display-none-content");

    artistDoc.classList.remove("activeBtn");
    divArtista.classList.add("display-none-content");
    spanIconArtist.classList.remove("activeIconArrow");

    divEvento.classList.add("display-none-content");
    spanEvent.classList.remove("activeIconArrow");
    eventsDoc.classList.remove("activeBtn");

    divCourse.classList.add("display-none-content");
    courseSpan.classList.remove("activeIconArrow");
    courseBtn.classList.remove("activeBtn");

    divCantores.classList.add("display-none-content");
  }
}

function DisplayDetail() {
  var Detailnv2 = document.querySelector('.details-nv-2')
  if (Detailnv2 !== null) {
    Detailnv2.classList.toggle('display-none-content')
  }
}

function selectedState() {
  let Selected = document.querySelector("#state-pitagoras");
  let divList = document.querySelector(".list-pitagoras-states");
  // let HeroContainer = document.querySelector(".hero");
  // let ContainerPopUp = document.querySelector(".container-popup-mgs");
  // let ContainerImgs = document.querySelector(".container-imgs");

  let SocialWhatsapp = document.querySelector(".contact-watsapp-icons");
  if (SocialWhatsapp) SocialWhatsapp.setAttribute("style", "display: block");

  var ObjectsContainer = {
    Hero: {
      ref: document.querySelector(".hero"),
      StyleAttributes(height) {
        /*this.ref.setAttribute(
          "style",
          `height: ${height}px; visibility: hidden !important; `
        );*/
      },
    },
    PopUpMsgContainer: {
      ref: document.querySelector(".container-popup-mgs"),
      refImgs: document.querySelector(".container-imgs"),
      CopyContainer(copy) {
        //this.refImgs.setAttribute("style", `height: ${copy}px !important;`);
      },
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `height: ${Style}px !important;`);
        //this.CopyContainer(Style);
      },
    },
    AllContainerMsgPopUp: {
      SetHeight(height) {
        ObjectsContainer.Hero.StyleAttributes(height + 500);
        ObjectsContainer.PopUpMsgContainer.StyleAttributes(height + 600);
      },
    },
  };
  ObjectsContainer.AllContainerMsgPopUp.SetHeight(1500);
  divList.setAttribute("style", "overflow-y: hidden;");
  switch (Selected.value) {
    case "ac":
      divList.innerHTML = `
      <li>
        <p><b>RIO BRANCO/AC</b></p>
        <p id="end-id">Estrada do São Francisco, S/N, Baixa da Colina, - Rio Branco - AC</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "al":
      divList.innerHTML = `
      <li>
        <p><b>ARAPIRACA/AL</b></p>
        <p id="end-id">Rua Domingos Correia, nº 1461, São Luiz, - Arapiraca - AL</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>MACEIO/AL</b></p>
        <p id="end-id">AVENIDA MENINO MARCELO, 3800, CIDADE UNIVERSITÁRIA - MACEIÓ - AL</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "ap":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "am":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "ba":
      divList.setAttribute("style", "overflow-y: scroll;");
      divList.innerHTML = `
      <li>
        <p><b>ALAGOINHAS/BA</b></p>
        <p id="end-id">Rua Lauro de Freitas, nº 198, Centro, - Alagoinhas - BA</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BOM JESUS DA LAPA/BA</b></p>
        <p id="end-id">Av.: Manoel Novais, nº 1499 , Centro, - Bom Jesus da Lapa - BA</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>BRUMADO/BA</b></p>
        <p id="end-id">RUA EUGENIA DANTAS DE ARAUJO, 55, BAIRRO DO HOSPITAL - BRUMADO - BA</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>CAMAÇARI/BA</b></p>
        <p id="end-id">V PARAFUSO, S/N, INDUSTRIAL - CAMAÇARI - BA</p>
        <p>Semipresencial | A distância</p>
      </li>
      <li>
        <p><b>EUNAPOLIS/BA</b></p>
        <p id="end-id">Rua Edgar Trancoso, nº 21, Edgar Trancoso, - Eunápolis - BA</p>
        <p>Presencial</p>
    </li>
    <li>
      <p><b>FEIRA DE SANTANA/BA</b></p>
      <p id="end-id">AVENIDA JOSE FALCAO DA SILVA, 1283, QUEIMADINHA - FEIRA DE SANTANA - BA</p>
      <p>Semipresencial | A distância | Presencial</p>
   </li>
   <li>
    <p><b>GUANAMBI/BA</b></p>
    <p id="end-id">Avenida Pedro Braz dos Santos, nº 350, Belo Horizonte, - Guanambi - BA</p>
    <p>Presencial</p>
  </li>
  <li>
    <p><b>IRECE/BA</b></p>
    <p id="end-id">RUA MARIA DA CONCEICAO LORDELO NUNES, 87, CENTRO - IRECÊ - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
  <li>
    <p><b>JEQUIE/BA</b></p>
    <p id="end-id">AVENIDA GOVERNADOR LOMANTO JUNIOR, 1571, JOAQUIM ROMAO - JEQUIÉ - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
  <li>
    <p><b>LUIS EDUARDO MAGALHAES/BA</b></p>
    <p id="end-id">Avenida Kiichiro Murata, 343, Jardim Imperial, - Luís Eduardo Magalhães - BA</p>
    <p>Presencial</p>
  </li>
  <li>
    <p><b>SANTO ANTONIO DE JESUS/BA</b></p>
    <p id="end-id">PRACA FELIX GASPAR, 1, CENTRO - SANTO ANTÔNIO DE JESUS - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
  <li>
    <p><b>SERRINHA/BA</b></p>
    <p id="end-id">RUA AVENIDA GETULIO VARGAS, 1585, ESTACAO - SERRINHA - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
  <li>
    <p><b>TEIXEIRA DE FREITAS/BA</b></p>
    <p id="end-id">AVENIDA JUSCELINO KUBITSCHEK, 3000, MONTE CASTELO - TEIXEIRA DE FREITAS - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
  <li>
    <p><b>VITORIA DA CONQUISTA/BA</b></p>
    <p id="end-id">AVENIDA JURACY MAGALHAES, 3000, BOA VISTA - VITÓRIA DA CONQUISTA - BA</p>
    <p>Semipresencial | A distância | Presencial</p>
  </li>
                          `;
      break;
    case "ce":
      divList.innerHTML = `
      <li>
        <p><b>ARACATI/CE</b></p>
        <p id="end-id">Rodovia CE 040 - KM 138, S/N, Aeroporto, S/N - Aracati - CE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>FORTALEZA/CE - EDUFOR</b></p>
        <p id="end-id">Rua Carapinima, nº 1615, Benfica, - Fortaleza - CE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>FORTALEZA/CE - FATECI</b></p>
        <p id="end-id">Rua Barão de Aratanha, nº 51, Centro, - Fortaleza - CE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>JUAZEIRO DO NORTE/CE</b></p>
        <p id="end-id">AV. PADRE CICERO ESQ. C/ RUA FRANCISCO MARTINS DE SOUZA, S/N, SÃO JOSÉ - JUAZEIRO DO NORTE - CE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>SOBRAL/CE</b></p>
        <p id="end-id">AVENIDA MONSENHOR JOSE ALOISIO PINTO, 300, DOM EXPEDITO - SOBRAL - CE</p>
        <p>Semipresencial | A distância | Presencial</p>
    </li>
                          `;
      break;
    case "df":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
    case "es":
      divList.innerHTML = `
      <li>
        <p><b>CACHOEIRO DE ITAPEMIRIM/ES</b></p>
        <p id="end-id">AVENIDA JONES DOS SANTOS NEVES, 256, MARIA ORTIZ - CACHOEIRO DE ITAPEMIRIM - ES</p>
        <p>Semipresencial | A distância</p>
      </li>
      <li>
        <p><b>GUARAPARI/ES</b></p>
        <p id="end-id">Rodovia Jones dos Santos Neves, 1000, Lagoa Funda, - Guarapari - ES</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>LINHARES/ES</b></p>
        <p id="end-id">Av. São Mateus, 1458, Araçá, - Linhares - ES</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>SERRA/ES</b></p>
        <p id="end-id">Rua Nelcy Lopes Vieira, nº 199, Jardim Limoeiro, - Serra - ES</p>
        <p>Presencial</p>
      </li>
                          `;
      break;
    case "go":
      divList.innerHTML = `
      <li>
        <p><b>GOIANIA/GO</b></p>
        <p id="end-id">AVENIDA MUTIRAO, S/N, SETOR BUENO - GOIÂNIA - GO</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "ma":
      divList.innerHTML = `
      <li>
        <p><b>BACABAL/MA</b></p>
        <p id="end-id">RUA DOZE DE OUTUBRO, 377, CENTRO - BACABAL - MA</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>IMPERATRIZ/MA - CAMPUS 1</b></p>
        <p id="end-id">Rua Godofredo Viana, 1271, São José do Egito, - Imperatriz - MA</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>SAO LUIS/MA - COHAMA</b></p>
        <p id="end-id">Avenida São Luís Rei de França, 32, Turu, - São Luís - MA</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>SAO LUIS/MA - TURU</b></p>
        <p id="end-id">Avenida São Luís Rei de França, 59, Turu, - São Luís - MA</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "mt":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
    case "ms":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
    case "mg":
      divList.setAttribute("style", "overflow-y: scroll;");
      divList.innerHTML = `
      <li>
        <p><b>BELO HORIZONTE/MG - AFONSO PENA</b></p>
        <p id="end-id">Av. Afonso Pena, 1901, Funcionários, - Belo Horizonte - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - ANTONIO CARLOS</b></p>
        <p id="end-id">AV. PRESIDENTE ANTONIO CARLOS, 4157, SÃO FRANCISCO - BELO HORIZONTE - MG</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - BARREIRO</b></p>
        <p id="end-id">RUA CABO VALERIO SANTOS, 297, BARREIRO - BELO HORIZONTE - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - CIDADE ACADEMICA</b></p>
        <p id="end-id">RUA SANTA MADALENA SOFIA, 25, (VILA PARIS) CIDADE JARDIM - BELO HORIZONTE - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - GUAJAJARAS</b></p>
        <p id="end-id">RUA GUAJAJARAS, 591, CENTRO - BELO HORIZONTE - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - RAJA</b></p>
        <p id="end-id">Av. Raja Gabaglia, 1306, Gutierrez , - Belo Horizonte - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - TIMBIRAS</b></p>
        <p id="end-id">R. Timbiras, 1375, Funcionários, - Belo Horizonte - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BELO HORIZONTE/MG - VENDA NOVA</b></p>
        <p id="end-id">R. Padre Pedro Pinto, 1315, Venda Nova, - Belo Horizonte - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>BETIM/MG</b></p>
        <p id="end-id">AVENIDA JUSCELINO KUBITSCHECK, 229, CENTRO - BETIM - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>CONTAGEM/MG</b></p>
        <p id="end-id">Avenida Babita Camargos, 1295, - Contagem - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>DIVINOPOLIS/MG</b></p>
        <p id="end-id">R. Santos Dumont, 1001, Bairro Do Carmo, - Divinópolis - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>GOVERNADOR VALADARES/MG</b></p>
        <p id="end-id">Av. Doutor Raimundo Monteiro de Rezende, 330, Centro, - Governador Valadares - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>IPATINGA/MG - CIDADE NOBRE</b></p>
        <p id="end-id">Av. Carlos Chagas, 789 , Cidade Nobre, - Ipatinga - MG</p>
        <p>Presencial</p>
      </li>
      <li>
        <p><b>IPATINGA/MG - HORTO</b></p>
        <p id="end-id">RUA JEQUITIBA, 401, HORTO - IPATINGA - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>ITABIRA/MG</b></p>
        <p id="end-id">RUA SANTANA, 235, PENHA - ITABIRA - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>JUIZ DE FORA/MG</b></p>
        <p id="end-id">AVENIDA BARAO DO RIO BRANCO, 2572, CENTRO - JUIZ DE FORA - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>POCOS DE CALDAS/MG</b></p>
        <p id="end-id">Av João Pinheiro, 1046, Centro, - Poços de Caldas - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>POUSO ALEGRE/MG</b></p>
        <p id="end-id">Praça Dom Otávio, nº 270, Centro, - Pouso Alegre - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>RIBEIRAO DAS NEVES/MG</b></p>
        <p id="end-id">Rua Ari Teixeira da Costa, nº 1500, Savassi, - Ribeirão das Neves - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>UBERLANDIA/MG</b></p>
        <p id="end-id">AVENIDA DOS VINHEDOS, 1200, MORADA DA COLINA - UBERLÂNDIA - MG</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "pa":
      divList.innerHTML = `
      <li>
        <p><b>ALTAMIRA/PA</b></p>
        <p id="end-id">Avenida Tancredo Neves, nº 3414, Premem, - Altamira - PA</p>
        <p>Presencial</p>
      </li>
      <li>
      <p><b>MARABA/PA - METROPOLITANA</b></p>
      <p id="end-id">ROD BR 230, KM 7, NOVA MARABÁ - MARABÁ - PA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
    <p><b>PARAGOMINAS/PA</b></p>
    <p id="end-id">Rua Lameira Bittencourt, nº 523, Célio Miranda, - Paragominas - PA</p>
    <p>Presencial</p>
    </li>
    <li>
      <p><b>PARAGOMINAS/PA - METROPOLITANA</b></p>
      <p id="end-id">ROD PA 256 KM 05, S/ NÚMERO, ZONA RURAL - PARAGOMINAS - PA</p>
      <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
    <p><b>PARAUAPEBAS/PA - METROPOLITANA</b></p>
    <p id="end-id">ROD PA 160 KM 10, S/ NÚMERO, ZONA RURAL - PARAUAPEBAS - PA</p>
    <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
    <p><b>SANTAREM/PA</b></p>
    <p id="end-id">Av. Engenheiro Fernando Guilhon, S/N, Santarenzinho, Rio Tapajós Shopping - Santarém - PA</p>
    <p>Semipresencial | A distância | Presencial</p>
    </li>
    <li>
    <p><b>TUCURUI/PA</b></p>
    <p id="end-id">A, Jardim Paraíso, - Tucuruí - PA</p>
    <p>Semipresencial | A distância | Presencial</p>
    </li>

                          `;
      break;
    case "pb":
      divList.innerHTML = `
      <li>
        <p><b>CAMPINA GRANDE/PB</b></p>
        <p id="end-id">Rua Marquês do Herval, nº 39, Centro, - Campina Grande - PB</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
      <p><b>JOAO PESSOA/PB</b></p>
      <p id="end-id">RUA ORLANDO SOARES DE OLIVEIRA, 36, MIRAMAR - JOÃO PESSOA - PB</p>
      <p>Semipresencial | A distância</p>
    </li>
                          `;
      break;
    case "pr":
      divList.innerHTML = `
      <li>
        <p><b>LONDRINA/PR - PITAGORAS</b></p>
        <p id="end-id">RUA EDWY TAQUES DE ARAUJO, 1100, GLEBA PALHANO - LONDRINA - PR</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "pe":
      divList.innerHTML = `
      <li>
        <p><b>BELO JARDIM/PE</b></p>
        <p id="end-id">Rua Doutor Henrique Nascimento, nº 41, São Pedro , - Belo Jardim - PE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
      <li>
        <p><b>CARUARU/PE</b></p>
        <p id="end-id">AVENIDA CLETO CAMPELO, 36, MAURICIO DE NASSAU - CARUARU - PE</p>
        <p>Semipresencial | A distância</p>
      </li>
      <li>
        <p><b>JABOATAO DOS GUARARAPES/PE</b></p>
        <p id="end-id">RUA AURORA DINIZ CARNEIRO LEAO, 5281, CANDEIAS - JABOATÃO DOS GUARARAPES - PE</p>
        <p>Semipresencial | A distância | Presencial</p>
      </li>
                          `;
      break;
    case "pi":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "rj":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
    case "rn":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      <li>
        <p><b>MOSSORO/RN</b></p>
        <p id="end-id">RUA DOUTOR JOAO MARCELINO, 1107, SANTO ANTONIO - MOSSORÓ - RN</p>
        <p>Semipresencial | A distância</p>
      </li>
                          `;
      break;
    case "rs":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "ro":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "rr":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
    case "sc":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "sp":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "se":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
        <p id="not-found"><b>NÃO ENCONTRADO</b></p>
      
                          `;
      break;
    case "to":
      ObjectsContainer.AllContainerMsgPopUp.SetHeight(1000);
      divList.innerHTML = `
      
      <p id="not-found"><b>NÃO ENCONTRADO</b></p>
    
                        `;
      break;
  }
}

function closeWindow() {
  var popupCategory = document.querySelector(".sub-category");
  popupCategory.classList.remove("popup-models-category");
  popupCategory.classList.add("display-none-content");
}

function SelectedContact() {
  var selectRefContact = document.querySelector(".img-estado-selecionado");
  selectRefContact.innerHTML = `<div class="container-contacts-1">
                                      <div class="img-continer">
                                      <a href="https://api.whatsapp.com/send?phone=5531994530485"><img src="./media/facaparte/socialMedia.png"></a>
                                      </div>
                                      <div class="text-container">
                                      <p></p>
                                      </div>
                                </div>`;
}

function loadPageProgress() {
  var loadDiv = document.querySelector(".div-loader");
  loadDiv.classList.add("hidden-loader");
}

function HideOrShowCategoryModel() {
  var divCategory = document.querySelector(".model-category-select");
  var valueSelected = document.querySelector(".talent-select");
  valueSelected.addEventListener("change", (event) => {
    if (valueSelected.value === "modelo") {
      divCategory.style.display = "block";
    } else {
      divCategory.style.display = "none";
    }
  });
}

function checkUploadFiles() {
  var referenceField = document.querySelectorAll(".inpt");
  var buttonSub = document.querySelector(".w-button");
  var isUplodead = 0;
  var talentSelect = document.querySelector(".talent-select");
  buttonSub.addEventListener("click", (event) => {
    if (talentSelect.value === "modelo") {
      referenceField.forEach((input) => {
        if (input.value != "") isUplodead += 1;
      });
      if (isUplodead < 5) {
        event.preventDefault();
        alert("Favor selecionar as fotos para enviar...");
      }
      isUplodead = 0;
    }
  });
}

function checkLenghtMax(id, lenghtFieldMax, referenceField, errMessage1) {
  var Entervalue = referenceField.value;

  var spanError = document.createElement("p");
  var erroNode1 = document.createTextNode(errMessage1);
  spanError.appendChild(erroNode1);
  spanError.className = "errorMessage";
  spanError.classList.add(id);
  var errorMessageShow = document.querySelectorAll(".errorMessage");

  if (Entervalue.length > lenghtFieldMax) {
    referenceField.style.backgroundColor = "#ff9999";
    if (!errorMessageShow != "undefined") {
      spanError.appendChild(erroNode1);
      referenceField.parentNode.insertBefore(spanError, referenceField);

      var checkMessagesDuplicate = document.querySelectorAll("." + id);
      if (checkMessagesDuplicate.length > 1) {
        checkMessagesDuplicate[1].remove();
      }
    }
  } else {
    referenceField.style.backgroundColor = "white";
    if (!errorMessageShow != "undefined") {
      errorMessageShow.forEach((indexof) => {
        indexof.classList[1] === id
          ? indexof.remove()
          : console.log(indexof.classList[1]);
      });
    }
  }
}

function checkLenghtMin(id, lenghtFieldMin, referenceField, errMessage1) {
  var Entervalue = referenceField.value;

  var spanError = document.createElement("p");
  var erroNode1 = document.createTextNode(errMessage1);
  spanError.appendChild(erroNode1);
  spanError.className = "errorMessage";
  spanError.classList.add(id);
  var errorMessageShow = document.querySelectorAll(".errorMessage");

  if (Entervalue.length < lenghtFieldMin) {
    //referenceField.style.backgroundColor = "#ff9999";
    if (!errorMessageShow != "undefined") {
      spanError.appendChild(erroNode1);
      referenceField.parentNode.insertBefore(spanError, referenceField);
      var checkMessagesDuplicate = document.querySelectorAll("." + id);
      if (checkMessagesDuplicate.length > 1) {
        checkMessagesDuplicate[1].remove();
      }
    }
  } else {
    //referenceField.style.backgroundColor = "white"
    if (!errorMessageShow != "undefined") {
      errorMessageShow.forEach((indexof) => {
        indexof.classList[1] === id
          ? indexof.remove()
          : console.log(indexof.classList[1]);
      });
    }
  }
}

(function loadHideImg() {
  document.head.insertAdjacentHTML(
    "afterend",
    `<div style="display: none;">
  <dt><img id="ifacebook" src="./media/IconSocial/IfacebookColor.png" alt=""></a>
  <dt><img id="iinstagram" src="./media/IconSocial/IinstagramColor.png" alt=""></dt>
  <dt><img id="iwatsapp" src=" ./media/IconSocial/IwatsappColor.png" alt=""></dt>
</div>`
  );
});



function ShowOrHideSubMenus(classSelected, BackButton = 0) {
  var arrayChildsNav = document.querySelectorAll("nav > a");
  var ShowDiv = document.querySelector(`.${classSelected}`);
  var ElementshowDiv = document.querySelectorAll(`.${classSelected} > a`);

  if (BackButton === 0) {
    arrayChildsNav.forEach((element) => {
      element.classList.add("noneForce");
    });
    ElementshowDiv.forEach((element) => {
      element.classList.remove("noneForce");
      ShowDiv.style.display = "block";
    });
  } else {
    arrayChildsNav.forEach((element) => {
      element.classList.remove("noneForce");
    });
    ElementshowDiv.forEach((element) => {
      element.classList.add("noneForce");
      ShowDiv.style.display = "none";
    });
  }
}



function PhothosShow(element) {
  var photos = document.querySelectorAll("");
}