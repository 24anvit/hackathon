$(document).ready(function () {
    
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