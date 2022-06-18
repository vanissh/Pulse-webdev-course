$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    prevArrow: `<button type="button" class="slick-prev">
                    <img src="icons/left_arrow.png"/>
                </button>`, 
    nextArrow: `<button type="button" class="slick-next">
                    <img src="icons/right_arrow.png"/>
                </button>`, 
  });
});