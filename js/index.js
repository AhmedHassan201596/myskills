$("a").click(function(){
    
    var aHref = $(this).attr("href");
    $("body").animate({scrollTop: $(aHref).offset().top} , 1000)
    
})