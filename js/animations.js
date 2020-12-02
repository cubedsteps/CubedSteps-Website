
$(document).ready(function(){
    var testimonial_box = $(".testimonial-box");
    var why_us_box = $(".why-us-box");   

    $(document).on('click','.testimonial-box',function(){
        // debugger;
        for (var i = 0; i<testimonial_box.length; i++){
            testimonial_box[i].setAttribute("data-clicked", "false");
        }
        // debugger;
        $(this).attr("data-clicked","true");
        for (var i = 0; i<testimonial_box.length; i++){
            if(testimonial_box[i].getAttribute("data-clicked")==="true"){                
                console.log("qwe")
                $(testimonial_box[i]).toggleClass('testimonial-box-click');
                $(testimonial_box[i]).find('.testimonial-content').toggleClass('testimonial-content-show');
            }else{
                console.log("asdasd")
                $(testimonial_box[i]).removeClass('testimonial-box-click');
                $(testimonial_box[i]).find('.testimonial-content').removeClass('testimonial-content-show');
            }
            // $(testimonial_box[i]).toggleClass('testimonial-box-click');
            // $(testimonial_box[i]).find('.testimonial-content').toggleClass('testimonial-content-show');
        }
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
            $(this).find('.show-more-text').text('Show less');
            $(this).find('.show-more-arrow').css('transform', 'rotate(180deg)');
            $(this).removeClass('show-more-hover');
        } else if($(this).hasClass('show-more-click')==true){
            $(this).removeClass('show-more-click');
            $(this).find('.show-more-text').text('Show more');
            $(this).addClass('show-more-hover');
            $(this).find('.show-more-arrow').css('transform', 'rotate(0deg)');
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


