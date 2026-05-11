<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Game Album</title>

  <link rel="stylesheet" href="style.css">
</head>

<div id="lightbox" onclick="closeImage()">

  <span class="close-btn">&times;</span>

  <img id="lightbox-img">

</div>

<script src="script.js"></script>

<!-- LOADER -->
<div id="loader">
  <div class="spinner"></div>
</div>

<body>

<canvas id="bg-blobs"></canvas>

<nav class="navbar">
  <div class="logo">SYIFA'</div>

  <ul>
    <li><a href="index.php">BACK</a></li>
  </ul>
</nav>

<section class="page">

    <h1 class="title">Game Moment</h1>

    <div class="gallery">

    <div class="gallery-item">
        <img
            src="assets/game/sky3.jpeg"
            onclick="openImage(this.src)"
        >
    </div>

    <div class="gallery-item">
        <img
            src="assets/game/sky1.jpeg"
            onclick="openImage(this.src)"
        >
    </div>

    <div class="gallery-item">
        <img
            src="assets/game/sky2.jpeg"
            onclick="openImage(this.src)"
        >
    </div>

    <div class="gallery-item">
        <img
            src="assets/game/sky4.jpeg"
            onclick="openImage(this.src)"
        >
    </div>

    <div class="gallery-item">
        <img
            src="assets/game/sky5.jpeg"
            onclick="openImage(this.src)"
        >
    </div>

    </div>
</section>

</body>
</html>