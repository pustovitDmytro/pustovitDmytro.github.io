$(function() {

        $('select').styler();

        });

      function openNav() {
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("hoover").style.display = "none";
      }

      function closeNav() {
        document.getElementById("myNav").style.height = "0%";document.getElementById("hoover").style.display = "block";
      }
(function($,undefined){
    $.fn.Slider = function(options){
        var options = $.extend({
            leftArrow: 'arrow-left',
            rightArrow: 'arrow-right',
            dots: 'radio-points',
            radios: 'radio-element',
            slide: 'slide',
            infinite: true,
            index: 0,
            arrows: true,
            slidesVisivble: 1,
            slidesToScroll: 1,
            swipeAble: true,
            pagination: true,
            autoPlay: true,
            autoPlayDelay: 5
        }, options);
            var slideIndex=options.index;
        return this.each(function() {
            slider = $(this);
            var slides = $(slider).find('.'+options.slide);
            var radios = $(slider).find('.'+options.radios);
            var num = slides.length;
            if(options.arrows){
            var leftArrow = $(slider).find('.'+options.leftArrow)[0];
            var rightArrow = $(slider).find('.'+options.rightArrow)[0];
            }
            $(rightArrow).click(function(){
                console.log("right-click", slideIndex);
                slideIndex = ShowSlide(slideIndex);
            })
            $(leftArrow).click(function(){
                console.log("left-click", slideIndex);
                slideIndex = ShowSlide(slideIndex-2);
            })
            function ShowSlide(index){
                if(index==num){
                    index=0;
                }
                console.log(index);
                for (i = 0; i < num; i++) {
                    slides[i].style.display = "none";
                }
                slides[index].style.display = "block";
                $(radios[index]).prop('checked', true);
                if(options.arrows){                   
                    if(index == num-1){
                      rightArrow.style.visibility = "hidden";
                    } else{
                      rightArrow.style.visibility = "visible";
                    }
                    if(index == 0){
                        leftArrow.style.visibility = "hidden";
                    }else{
                    leftArrow.style.visibility = "visible";                       
                    }
                }
                return index+1;
            }
            if (options.autoPlay) {
                function aPlay() {
                    slideIndex = ShowSlide(slideIndex);
                    setTimeout(aPlay, options.autoPlayDelay * 1000); 
                }
                aPlay();
            }
        });
    };
})(jQuery);
$("#listing-slider-1").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlayDelay: 3
});
$("#listing-slider-2").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlay: false
});
$("#listing-slider-3").Slider({
	rightArrow:'result__radio__next',
	leftArrow: 'result__radio__prev',
	autoPlayDelay: 8
});
$(".transparent-block").Slider({
	slide: "transparent-slide",
	arrows: false,
	autoPlayDelay: 3
})