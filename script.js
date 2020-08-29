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

function PopupMsg(title, cat, closeMenuMobile = 0, classCloseMenu) {
  var ObjectsContainer = {
    Hero: {
      ref: document.querySelector(".hero"),
      StyleAttributes(Style) {
        //this.ref.setAttribute("style", `${Style}`);
      },
    },
    PopUpMsgContainer: {
      ref: document.querySelector(".container-popup-gallery"),
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

GalleryImages()

function GalleryImages() {
  
  let photosBook = document.querySelectorAll(".image-book");
  let PopupGallery = document.querySelector('.container-popup-gallery');
  let ContainerImgs = document.querySelector('.container-imgs')
  let imagesPreview = document.querySelector('.images-preview')
  var currentImageMain = { x: 0 };

  var s = ()=>{
    var element = document.querySelector('[data-main]')
    element.addEventListener('click', (event)=>{
      console.log('scroll')
    })
  }

  var x = () => {
    // console.log(currentImageMain.x + "  - Before")
    // currentImageMain.x = document.querySelector('.container-imgs > img').getAttribute('data-index')
    // console.log(currentImageMain.x + "  - After")
    //buttons slide
    let buttonMainLeft = document.querySelector('.arrow-in-main-left')
    let buttonMainRight = document.querySelector('.arrow-in-main-right')
    let buttonPreviewLeft = document.querySelector('.arrow-in-preview-left')
    let buttonPreviewRight = document.querySelector('.arrow-in-preview-right')

    //count images
    let pCount = document.querySelector('.img-count')
    let totalImages = photosBook.length;
    let currentIndex = (1 +  parseInt(UpdateIndexImagesGallery()))
    pCount.innerHTML = `${(currentIndex)}/${totalImages}`


    //Back images
    buttonMainLeft.addEventListener('click', event => {
      // if (currentImageMain.x === 0) {
      //   currentImageMain.x = 0;
      // }
      // else if (currentImageMain.x > 0) {
      //   currentImageMain.x--
      // }
      let currentIndex = UpdateIndexImagesGallery("Back")
      ContainerImgs.innerHTML = `
      <div class="arrow-left arrow-in-main-left" data-link-on></div>
      <img src="${photosBook[currentIndex].src}" data-index="${currentIndex}" data-main="1">
      <div class="arrow-right arrow-in-main-right" data-link-on></div>
      `;

      x()
      s()
    });

    //Next images
    buttonMainRight.addEventListener('click', event => {
      // if (currentImageMain.x === photosBook.length) {
      //   currentImageMain.x = photosBook.length;

      // }
      // else if (currentImageMain.x < photosBook.length) {
      //   currentImageMain.x++


      // }
      let currentIndex = UpdateIndexImagesGallery("Next")
      ContainerImgs.innerHTML = `
      <div class="arrow-left arrow-in-main-left" data-link-on></div>
      <img src="${photosBook[currentIndex].src}" data-index="${currentIndex}" data-main="1">
      <div class="arrow-right arrow-in-main-right" data-link-on></div>
      `;

      x()
      s()
    });


    buttonPreviewLeft.addEventListener('click', event => {

      imagesPreview.scroll(scrollControl('left', imagesPreview))
    });

    buttonPreviewRight.addEventListener('click', event => {
      imagesPreview.scroll(scrollControl('Right', imagesPreview))
    });
  }





  //Add images in the main and preview container
  photosBook.forEach((img, index) => {

    imagesPreview.innerHTML += `<img src="${img.src}" >`;

    img.addEventListener('click', event => {
      PopupGallery.classList.remove('display-none-content')
      ContainerImgs.innerHTML = `
      <div class="arrow-left arrow-in-main-left" data-link-on></div>
      <img src="${event.target.src}" data-index=${index} data-main="1">
      <div class="arrow-right arrow-in-main-right" data-link-on></div>
      `;

      //ButtonsEvent()
      x()
      s()
    });

  });


  //Calling function was added click event in the preview images after has been created
  PreviewImagesEvent();

  //Event Add click image in preview container, when click it add in the main container
  function PreviewImagesEvent() {

    let imagesPreview = document.querySelectorAll('.images-preview > img')

    imagesPreview.forEach((img, index) => {
      img.setAttribute('data-index', index)

      img.addEventListener('click', event => {
        ContainerImgs.innerHTML = `
        <div class="arrow-left arrow-in-main-left" data-link-on></div>
        <img src="${event.target.src}" data-index="${index} " >
        <div class="arrow-right arrow-in-main-right" data-link-on></div>
        `;
        x()
        s()
      })

    })

  }


  function UpdateIndexImagesGallery(operation) {
    let currentIndex;
    let photosBook = document.querySelectorAll(".image-book");
    var check = currentIndex = document.querySelector('.container-imgs > img').getAttribute('data-index')
    console.log(check)
    if (operation === 'Next') {
      currentIndex = document.querySelector('.container-imgs > img').getAttribute('data-index')
      if (currentIndex < (photosBook.length - 1)) {
        currentIndex++;
        console.log(currentIndex + "  - After")
      }
    }
    if (operation === "Back") {
      console.log(operation)
      currentIndex = document.querySelector('.container-imgs > img').getAttribute('data-index')
      if (currentIndex > 0) {
        currentIndex--
        console.log(currentIndex + "  - After")
      }
    }
    return currentIndex
  }

  function scrollControl(props, refElement) {
    x()
    let imagesPreview = refElement;
    let currentScroll = imagesPreview.scrollLeft;
    var objectScroll = { left: currentScroll, top: 0, behavior: 'smooth' }

    if (props === 'Left') {
      objectScroll.left = - 30;
    }
    if (props === 'Right') {
      objectScroll.left = + 30;
    }
    console.log(objectScroll)
    return objectScroll
  }


}

