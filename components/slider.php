<?php
function createSlider($images, $sliderName)
{
  $html = "<div id='{$sliderName}' class='slider'>";

  foreach ($images as $image) {
    $html .= "
            <picture>
                <source srcset='{$image['mobile']}' media='(max-width: 480px)'/>
                <img src='{$image['desktop']}' />
            </picture>
        ";
  }

  $html .= "</div>";

  return $html;
};
