<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Home - Brazil Model Agency</title>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link href="./home/contents/img/webclip.png" rel="apple-touch-icon" />
  <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Great+Vibes&amp;display=swap" rel="stylesheet">
  <link href="./css/rootStyle.css" rel="stylesheet" type="text/css" />
  <link href="./css/responsiveStyle.css" rel="stylesheet" type="text/css" />
</head>

<body class="body" onload="onLoad()">
  <div class="div-loader">
    <img src="./media/loading/loader.gif" alt="" />
  </div>
  <div class="logo-image">
    <div class="section">
      <a href="http://www.brazilmodel.com.br"><img src="./media/logo/LogoMain.png" alt="" class="image-2" /></a>
    </div>
  </div>
  <div class="sub-category display-none-content category container-popup-mgs">
    <div class="container-imgs"></div>
  </div>

  <!-- Navbar Desktop -->
  <?php include('./resources/includes/navbar.desktop.include.html') ?>

  <!--Nav Mobile -->
  <?php include('./resources/includes/navbar.mobile.include.html') ?>

  <header id="hero" class="hero">
    <div class="Main-name">
      <p>Luiza Monique</p>
    </div>
    <!-- <div class="video-container">
      <video controls autoplay>
        <source src="./media/home/homeVid.mp4" type="video/mp4">
        Conteúdo não suportado pelo browser
      </video></div> -->
    <div class="hero-image-mask">
      <div class="slider-container slide-1">
        <div data-delay="500" data-animation="fade" data-autoplay="1" data-easing="ease-in-out" data-duration="10"
          data-infinite="1" class="slider w-slider">
          <div class="loader"></div>
          <div class="mask w-slider-mask">
            <div class="w-slide">
              <img src="./media/home/1.jpg" width="328" alt="" />
            </div>
            <div class="w-slide">
              <img src="./media/home/2.jpg" width="328" alt="" />
            </div>
            <div class="w-slide">
              <img src="./media/home/3.jpg" width="328" alt="" />
            </div>
            <!--<div class="w-slider-arrow-left"></div>
                          <div class="w-slider-arrow-right"></div>
                          <div class="slide-nav w-slider-nav w-shadow w-round"></div>-->
          </div>
        </div>
      </div>
      <div class="slider-container slide-2">
        <div data-delay="500" data-animation="fade" data-autoplay="1" data-easing="ease-in-out" data-duration="10"
          data-infinite="1" class="slider w-slider">
          <div class="loader"></div>
          <div class="mask w-slider-mask">
            <div class="w-slide-2">
              <img src="./media/home/1.jpg" width="328" alt="" id="img-1" />
            </div>
            <div class="w-slide-2">
              <img src="./media/home/2.jpg" width="328" alt="" />
            </div>
            <div class="w-slide-2">
              <img src="./media/home/3.jpg" width="328" alt="" />
            </div>
            <!--<div class="w-slider-arrow-left"></div>
                          <div class="w-slider-arrow-right"></div>
                          <div class="slide-nav w-slider-nav w-shadow w-round"></div>-->
          </div>
        </div>
      </div>
      <div class="slider-container slide-3">
        <div data-delay="500" data-animation="fade" data-autoplay="1" data-easing="ease-in-out" data-duration="10"
          data-infinite="1" class="slider w-slider">
          <div class="loader"></div>
          <div class="mask w-slider-mask">
            <div class="w-slide-3">
              <img src="./media/home/1.jpg" width="328" alt="" />
            </div>
            <div class="w-slide-3">
              <img src="./media/home/2.jpg" width="328" alt="" />
            </div>
            <div class="w-slide-3">
              <img src="./media/home/3.jpg" width="328" alt="" />
            </div>
            <!--<div class="w-slider-arrow-left"></div>
                          <div class="w-slider-arrow-right"></div>
                          <div class="slide-nav w-slider-nav w-shadow w-round"></div>-->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Footer -->
  <?php include('./resources/includes/footer.include.html') ?>
</body>

</html>