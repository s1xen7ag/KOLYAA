$(function(){
        let header=$("#header");
        let header_top=$("#header_top");
        let headerHeight=header.height();
        let scrollPos=$(window).scrollTop();
    
        $(window).on("scroll", function(){
            scrollPos=$(this).scrollTop();
            if (scrollPos>headerHeight){
                header_top.addClass("fixed");
            }
            else {
                header_top.removeClass("fixed");
            }
            
    });
});
   $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 340);
    });


    $(document).on('mouseenter', '.dropdown', function() {
    if ($(window).width() > 768) {
        $(this).addClass('active');
    }
}).on('mouseleave', '.dropdown', function() {
    if ($(window).width() > 768) {
        $(this).removeClass('active');
    }
});


$(document).on('click', '.dropdown > a', function(e) {
    if ($(window).width() <= 768) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings('.dropdown').removeClass('active');
    }
});
$(document).on('click', function(e) {
    if (!$(e.target).closest('.dropdown').length && $(window).width() <= 768) {
        $('.dropdown').removeClass('active');
    }
});


// сам мигаюча стрілка

$('.scroll-arrow').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.product-grid').offset().top
    }, 100);
});
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
         $('.scroll-indicator').addClass('hidden');
    } else {
        $('.scroll-indicator').removeClass('hidden');
    }
});
// Додатковоо плавний скрол при кліку на саму стрілочку
$(document).on('click', '.scroll-indicator', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.product-grid').offset().top
    }, 520);
});

