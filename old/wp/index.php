<?php
include 'components/slider.php';
$images = [
  [
    'desktop' => '',
    'mobile' => ''
  ],
  [
    'desktop' => '',
    'mobile' => ''
  ],
  [
    'desktop' => '',
    'mobile' => ''
  ],
  [
    'desktop' => '',
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
