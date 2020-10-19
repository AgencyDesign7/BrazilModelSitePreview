<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Videos - Brazil Model Agency</title>
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
    <p id="main-videos-title">Videos</p>
    <div class="main-videos-container">
      <video controls>
        <source src="./media/videos/homeVid.mp4" type="video/mp4">
        Não é possível exibir este video na versão atual do seu navegador.
      </video>
    </div>
  </header>

  <!-- Footer -->
  <?php include('./resources/includes/footer.include.html') ?>
</body>

</html>