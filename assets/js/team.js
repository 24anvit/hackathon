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

    function enableTab($selector){
        $selector.parent().css('pointer-events', 'initial');
        $selector.parent().removeClass('disabled');
    }

    $('#myteam-submit').click(function(){
        enableTab($('#nav-build'));
        $('#nav-build').click();
    });

    $('#build-participant-count').change(function(){
            var count = parseInt($('#build-participant-count > option:selected').val());
            if (isNaN(count)){
                alert("Please select a valid no. of participants.");
                return false;
            } else {
                for (i = 0; i < count; i++){
                    $('#build-team-members').append('<div class="form-group"><div class="row"><div class="col-lg-5 col-md-5 col-sm-12 col-xs-12"></div><div class="col-lg-7 col-md-7 col-sm-12 col-xs-12"></div></div></div>');
                }
            }
    });


});