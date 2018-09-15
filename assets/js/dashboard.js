$(document).ready(function () {
    
    // Galery Owl
    $('#galery-owl').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots : false,
        nav: true,
        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay : false,
        autoplaySpeed :500,
        navSpeed :500,
        responsive : {
        0 : {
           stagePadding : 0,
        },
        768 : {
            stagePadding : 120,
        }
        }
    });

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('.collapse.in').removeClass('in');
    });

    $('#page-nav li a').click(function(e){
        e.preventDefault(); 
        if ($(this).parent().attr('id') == 'nav-toggle-btn'){
            $('#sidebar').toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            return false;
        }
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.page-tab').siblings('.page-tab').addClass('hidden-md hidden-lg hidden-sm hidden-xs').removeClass('page-active');
        $($(this).attr('data-target')).removeClass('hidden-md hidden-lg hidden-sm hidden-xs').addClass('page-active');
    });


});