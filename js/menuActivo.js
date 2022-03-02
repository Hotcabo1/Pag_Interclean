$(".ul").find("a").click(function(){

    $(".ul a").removeClass('active')
    $(".ul a").removeClass('lines')
    $(this).addClass('active')
    $(this).addClass('lines')
})
$(".ul").find("a").click(function(){

    $(this).addClass('colore')
    $(".ul a").removeClass('colore')
})
