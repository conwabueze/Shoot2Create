$(document).ready(function() {
    if($(window).width() <= 768) {
        $('#sec4').remove();
        $('#sec5').remove();
        $('#sec6').remove();
        
        $( "#sec1 .carousel-inner" ).append( "<div class='item' id='slide4'></div>" );
        $( "#sec1 .carousel-inner" ).append( "<div class='item' id='slide5'></div>" );
        $( "#sec1 .carousel-inner" ).append( "<div class='item' id='slide6'></div>" );
        
        $( "#sec2 .carousel-inner" ).append( "<div class='item' id='slide4'></div>" );
        $( "#sec2 .carousel-inner" ).append( "<div class='item' id='slide5'></div>" );
        $( "#sec2 .carousel-inner" ).append( "<div class='item' id='slide6'></div>" );
        
        $( "#sec3 .carousel-inner" ).append( "<div class='item' id='slide4'></div>" );
        $( "#sec3 .carousel-inner" ).append( "<div class='item' id='slide5'></div>" );
        $( "#sec3 .carousel-inner" ).append( "<div class='item' id='slide6'></div>" );
        
        
    }
});

$(window).scroll(function(){
    
    
    var wScroll = $(this).scrollTop();
    if(wScroll>$("#stephanie-gallery").offset().top-($(window).height()/1.2)){
        $("#stephanie-gallery .card").each(function(i){
            setTimeout(function(){
                $("#stephanie-gallery .card").eq(i).addClass("is-showing");
            }, 300*(i+1));
        });
    }
});

