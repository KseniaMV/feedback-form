$("#myMail").on("click", function(){

    $(".decor").css({zIndex: "10", filter: "blur(5px)"}).addClass("blur");
    $("#form_conteiner").css("display", "flex").addClass("formIsOpen");
    $(".form_conteiner").css("filter", "blur(5px)").addClass("blur");
    if($(window).width() < 1200){
        $(".form_conteiner").css("display", "none");
    }  
});

$("#mailForm").submit(function(event){
    event.preventDefault();
    $("#errorMessage").empty();
    let spamInput = $("#spamInput").val().trim();
    let email = $("#email").val().trim();
    let name = $("#name").val().trim();
    let message = $("#message").val().trim();

        $("#message").focusin(function(){
            $("#message").css("border", "none");
            $("#errorMessage").empty();
        });
        $("input").focusin(function(){
            $("input").css("border", "none");
            $("#errorMessage").empty();
        });

    if(email == ""){
        emptyInput("email");
        return false;
    }
    else if(name == ""){
        emptyInput("name");
        return false;
    }
    else if(message == ""){  
        emptyInput("message");
        return false;
    }
  
   
        $.ajax({
            url: "src/php/mail.php",
            type: "POST",
            cache: false,
            data: {
                "name": name,
                "email": email,
                "message": message,
                "spamInput": spamInput
            
        },
            dataType: "html",
            beforeSend: function(){
                $("#sendMessage").prop("disable", true);
            },
            success: function(data){
                $("#form_conteiner").css("display", "none");
                $("<div>",{
                    html: "<p>Your message was send</p>",
                    id: "successMessage"
                }).appendTo("#portfolio");
    setTimeout(()=>{
        $("#successMessage").css("display", "none");
        $(".decor").css({zIndex: "30", filter: "blur(0)"}).removeClass("blur");
        $(".form_conteiner").css("filter", "blur(0)").removeClass("blur");
            if($(window).width() < 1200){
                $(".form_conteiner").css("display", "flex");
             }
    },1500);
                
},
            error: function(){
                    $("#errorMessage").text("Your message wasn't send");
            }
                
        
        });
       
        
    });
     
let resetForm = document.querySelector("#resetForm");
resetForm.addEventListener("click", ()=>{
    let form = document.querySelector("#mailForm");
    form.reset();
});
    
function emptyInput(inputName){
    let input = $("#" + inputName);
    $("#errorMessage").text("Please, inter your " + inputName);
    $(input).css("border", "2px solid rgba(247, 4, 25, 0.3)");
}

$("#mailFormClose").on("click", function(){
    $("#form_conteiner").css("display", "none");
    $(".decor").css({zIndex: "30", filter: "blur(0)"}).removeClass("blur");
    $(".form_conteiner").css("filter", "blur(0)").removeClass("blur");
    if($(window).width() < 1200){
        $(".form_conteiner").css("display", "flex");
    }
});