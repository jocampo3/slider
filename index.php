<?php
include 'components/slider.php';
$images = [
  [
    'desktop' => 'http://localhost:8000/imgs/img-1.jpg',
    'mobile' => ''
  ],
  [
    'desktop' => 'http://localhost:8000/imgs/img-2.jpg',
    'mobile' => ''
  ],
  [
    'desktop' => 'http://localhost:8000/imgs/img-3.jpg',
    'mobile' => ''
  ],
  [
    'desktop' => 'http://localhost:8000/imgs/img-4.jpg',
    'mobile' => ''
  ]
]
?>

<!DOCTYPE html>
<html>

<head>
  <title>Slider</title>
  <link rel="stylesheet" href="resources/css/styles.css">
</head>

<body>
  <h1 class="header">Test Slider</h1>
  <?php
  echo createSlider($images, "hero-slider")
  ?>
</body>
<script src="resources/js/index.js"></script>

</html>
