
$(document).on('click','.nav-items',function(){
    let a;
    if($(this).text()=="Home"){
        animation();
        navTrans();     
        $(this).addClass("home-active active");
        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/homepage.html");
        },1000)
        setTimeout(function(){
            $("#footer").loadTemplate("templates/footer.html");
        },2000)
    } 
    else if($(this).text()=="Services")
    {
        animation();
        navTrans();     
        $(this).addClass("service-active active");

        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/services.html");
        },1000)        
        setTimeout(function(){
            $("#footer").loadTemplate("templates/footer.html");
        },2000)
    } 
    else if($(this).text()=="Our Projects")
    {        
        animation();
        navTrans();     
        $(this).addClass("projects-active active");

        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/our-projects.html");
        },1000)        
        setTimeout(function(){
            $("#footer").loadTemplate("templates/footer.html");
        },2000)
    } 
    else if($(this).text()=="Lets Work")
    {
        animation();
        navTrans();     
        $(this).addClass("work-active active");        
        setTimeout(function(){
            $("#body").empty();            
            $("#body").loadTemplate("templates/lets-work.html");
        },1000)        
        setTimeout(function(){
            $("#footer").loadTemplate("templates/footer.html");
        },2000)
    }
})

function animation(){
    if($("#homepage").length){
        homepage_exit();
        a = document.querySelector('.homepage-left-column');
    } else if($("#services").length){
        servicepage_exit();
        a = document.querySelector('.service-box');
    } else if($("#projects").length){
        projectspage_exit();
        a = document.querySelector('.project-box');
    } else if($("#lets-work").length){
        letswork_exit();
        a = document.querySelector('.phone-number');
    }
}

function homepage_exit(){
    $(".homepage-left-column").removeClass('animate__animated animate__rotateInDownLeft')
    $(".homepage-left-column").addClass('animate__animated animate__rotateOutDownLeft')
    $(".homepage-right-column").removeClass('animate__animated animate__rotateInUpRight')
    $(".homepage-right-column").addClass('animate__animated animate__rotateOutUpRight')
}

function servicepage_exit(){
    $(".service-box").removeClass('animate__animated animate__fadeInUp')
    $(".service-box").addClass('animate__animated animate__fadeOutUp')
}

function projectspage_exit(){
    $(".project-box").removeClass('animate__animated animate__fadeInUp')
    $(".project-box").addClass('animate__animated animate__fadeOutUp')
}

function letswork_exit(){
    $(".phone-number").removeClass('animate__animated animate__fadeInLeft')
    $(".phone-number").addClass('animate__animated animate__fadeOutRight')
    $(".mail").removeClass('animate__animated animate__fadeInLeft')
    $(".mail").addClass('animate__animated animate__fadeOutRight')
    $(".facebook").removeClass('animate__animated animate__fadeInLeft')
    $(".facebook").addClass('animate__animated animate__fadeOutRight')
    $(".instagram").removeClass('animate__animated animate__fadeInLeft')
    $(".instagram").addClass('animate__animated animate__fadeOutRight')
    $(".medium").removeClass('animate__animated animate__fadeInLeft')
    $(".medium").addClass('animate__animated animate__fadeOutRight')
    $("#map").removeClass('animate__animated animate__fadeIn')
    $("#map").addClass('animate__animated animate__fadeOut')
}

function navTrans(){
    if($(".home-active").length>0){
        $(".nav-items").removeClass("home-active active");
    }else if($(".service-active").length>0){
        $(".nav-items").removeClass("service-active active");
    } else if($(".projects-active").length>0){
        $(".nav-items").removeClass("projects-active active");
    } else if($(".work-active").length>0){
        $(".nav-items").removeClass("work-active active");
    }
}

