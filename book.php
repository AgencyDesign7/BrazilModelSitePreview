<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Book - Brazil Model Agency</title>
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <link href="./home/contents/img/webclip.png" rel="apple-touch-icon" />
  <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Great+Vibes&amp;display=swap" rel="stylesheet">
  <link href="./css/rootStyle.css" rel="stylesheet" type="text/css" />
  <link href="./css/responsiveStyle.css" rel="stylesheet" type="text/css" />
</head>

<body class="body" onload="onLoad()">

  <div class="display-none-content container-popup-gallery">
    <div class="menu-exit"><a href="#">X</a></div>
    <div class="container-imgs">
    </div>

    <p class="img-count"></p>
    <div class="container-preview-imgs">
      <div class="arrow-left arrow-in-preview-left"></div>
      <div class="img-show"></div>
      <div class="images-preview "></div>
      <div class="arrow-right arrow-in-preview-right"></div>
    </div>

  </div>

  <div class="div-loader">
    <img src="./media/loading/loader.gif" alt="" />
  </div>
  <div class="logo-image">
    <div class="section">
      <a href="http://www.brazilmodel.com.br"><img src="./media/logo/LogoMain.png" alt="" class="image-2" /></a>
    </div>
  </div>

  <!-- Navbar Desktop -->
  <?php include('./resources/includes/navbar.desktop.include.html') ?>

  <!--Nav Mobile -->
  <?php include('./resources/includes/navbar.mobile.include.html') ?>

  <header id="hero" class="hero">
    <div class="book-main">
      <img class="image-book" data-link-on src="./media/book/book1.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book2.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book3.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book4.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book5.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book6.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book7.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book8.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book9.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book10.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book11.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book12.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book13.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book14.jpg" alt="">
      <img class="image-book" data-link-on src="./media/book/book15.jpg" alt="">
    </div>
  </header>
  
   <!-- Footer -->
   <?php include('./resources/includes/footer.include.html') ?>
</body>

</html>