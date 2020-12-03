
$(document).on('click', '.logo_img', function(){
    animation();
    navTrans();      
    $('.nav-items:nth-child(1)').addClass('home-active active');
    setTimeout(function(){
        $("#body").empty();
        $("#body").loadTemplate("templates/homepage.html");
    },1000)
})

$(document).on('click','.nav-items',function(){
    if($(this).text()==HOME){
        animation();
        navTrans();     
        $(this).addClass("home-active active");
        setTimeout(function(){
            $("#body").empty();
            loadTemplate("homepage.html", {});
        },1000)
    } 
    else if($(this).text()==SERVICES)
    {
        animation();
        navTrans();     
        $(this).addClass("service-active active");

        setTimeout(function(){
            $("#body").empty();
            loadTemplate("services.html", {});
        },1000) 
    } 
    else if($(this).text()==PROJECTS)
    {        
        animation();
        navTrans();     
        $(this).addClass("projects-active active");

        setTimeout(function(){
            $("#body").empty();
            loadTemplate("our-projects.html", {});
        },1000)   
    } 
    else if($(this).text()==WORK)
    {
        animation();
        navTrans();     
        $(this).addClass("work-active active");        
        setTimeout(function(){
            $("#body").empty();            
            loadTemplate("lets-work.html", {});
        },1000)  
    }
})

function animation(){
    if($("#homepage").length){
        homepage_exit();
    } else if($("#services").length){
        servicepage_exit();
    } else if($("#projects").length){
        projectspage_exit();
    } else if($("#lets-work").length){
        letswork_exit();
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
    $(".linkedin").removeClass('animate__animated animate__fadeInLeft')
    $(".linkedin").addClass('animate__animated animate__fadeOutRight')
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