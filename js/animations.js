$(document).ready(function(){
    var testimonial_box = $(".testimonial-box");
    var why_us_box = $(".why-us-box");    

    $(".testimonial-box").click(function(){
        $(this).toggleClass('testimonial-box-click');
        $(document).find('.testimonial-content').toggleClass('testimonial-content-show');

    })

    

    //why-us transition
    why_us_box.click(function(){
        if($(this).hasClass('why-us-box-click')==false){
            $(this).addClass('why-us-box-click');
            $('.why-us-heading').css('display','none');
            $('.why-us-all-contents').css('display','block');
        } else if($(this).hasClass('why-us-box-click')==true){
            $(this).removeClass('why-us-box-click');
            $('.why-us-heading').css('display','block');
            $('.why-us-all-contents').css('display','none');
        }
    })





    // services page
    $(document).on('click', '.show-more', function(){
        if($(this).hasClass('show-more-click')==false){
            $(this).addClass('show-more-click');
            $('.show-more-text').text('Show less');
            $('.show-more-arrow').css('transform', 'rotate(180deg)');
            $(this).removeClass('show-more-hover');
        } else if($(this).hasClass('show-more-click')==true){
            $(this).removeClass('show-more-click');
            $('.show-more-text').text('Show more');
            $(this).addClass('show-more-hover');
            $('.show-more-arrow').css('transform', 'rotate(0deg)');
        }
    })



    // lets-work-btn-transition
    $(document).on('click', '.work-link-button',function(){
        animation();
        navTrans();     
        $(this).addClass("work-active active");        
        setTimeout(function(){
            $("#body").empty();            
            $("#body").loadTemplate("templates/lets-work.html");
        },1000)
    })

    
    function animation(){
        if($("#homepage").length){
            homepage_exit();
            a = document.querySelector('.homepage-left-column');
        }
    }
    
    function homepage_exit(){
        $(".homepage-left-column").removeClass('animate__animated animate__rotateInDownLeft')
        $(".homepage-left-column").addClass('animate__animated animate__rotateOutDownLeft')
        $(".homepage-right-column").removeClass('animate__animated animate__rotateInUpRight')
        $(".homepage-right-column").addClass('animate__animated animate__rotateOutUpRight')
    }
    
    function navTrans(){
        console.log($('.nav-items'));
        if($(".home-active").length>0){
            $(".nav-items").removeClass("home-active active");
        }
        $('.nav-items:nth-child(4)').addClass("work-active active")
    }
    
    

})


