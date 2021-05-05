function loadTemplate(template,data={}) {
    $("#body").loadTemplate("templates/"+template, data , {
        success: function(data){
                load_footer();          
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function load_footer(){
    $("#footer").loadTemplate("templates/footer.html");
}