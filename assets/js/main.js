jQuery(document).ready(function($) {


    /*======= Skills Función para barras de skills*=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
   
 /*======= Change Language Función cambio de lenguaje  *=======*/
    
  $('#language').change(function() {
    console.log(this.checked);
    if(this.checked){
        $(".english").removeClass("hidden");
        $(".spanish").addClass("hidden");
    }else{
        $(".spanish").removeClass("hidden");
        $(".english").addClass("hidden");
    }
  })
});