$(document).ready(function(){
    var testimonial_box = $(".testimonial-box");
    var why_us_box = $(".why-us-box");    

    //left-side transitions
    // testimonial_box.each(function(){
    //     $(this).click(function(){
    //     if($(this).hasClass('testimonial-box-click')==false){            
    //         $(this).addClass('testimonial-box-click');
    //         //$('.testimonial-content').addClass('testimonial-content-show');
    //         $(this + ' .testimonial-content').addClass('testimonial-content-show');
    //     }else if($(this).hasClass('testimonial-box-click')==true){
    //         $(this).removeClass('testimonial-box-click');
    //         $('.testimonial-content').removeClass('testimonial-content-show');
    //     }
    //     })
    // });

    $(".testimonial-box").click(function(){
        // $('.testimonial-box').each(function(){
        //     if ($(this).hasClass('testimonial-box-click')){
        //         $(this).removeClass('testimonial-box-click');
        //         $(this).removeClass('testimonial-content-show');
        //     }
        // })

        $(this).toggleClass('testimonial-box-click');
        $(this).find('.testimonial-content').toggleClass('testimonial-content-show');
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

    // lets-work-btn-transition
    $(".work-link-button").click(function(){
        console.log("asd");
$("#body").loadTemplate("templates/lets-work.html");

    }
    )

    // services page
    $('.show-more').click(function(){
        console.log("asd");
        if($(this).hasClass('show-more-click')==false){
            $(this).addClass('show-more-click');
            $(this).removeClass('show-more-hover');
        } else if($(this).hasClass('show-more-click')==true){
            $(this).removeClass('show-more-click');
            $(this).addClass('show-more-hover');
        }
    })

})


