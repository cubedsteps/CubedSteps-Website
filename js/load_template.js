$("#header").loadTemplate("templates/header.html");
$("#body").loadTemplate("templates/homepage.html");

setTimeout(function(){
    $("#footer").loadTemplate("templates/footer.html");
},2000)
