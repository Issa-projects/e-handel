$("#register-form").submit(function(e){
    e.preventDefault();

    phone = $('#phone').val();
    if(phone.length == 0){
        $("#phone-feedback").removeClass("d-none");
        phone=false;
    }else{
        $("#phone-feedback").addClass("d-none");
        phone=true;
    }
    password = $('#password').val();
    if(password.length == 0){
        $("#password-feedback").removeClass("d-none");
        password=false;
    }else{
        $("#password-feedback").addClass("d-none");
        password=true;
    }
    conditions=false;
    if(!$("#conditions").is(":checked")){
        $("#conditions-feedback").removeClass("d-none");
    }else{
        $("#conditions-feedback").addClass("d-none");
        conditions=true;
    }

    if(password && phone && conditions){
        navigate(".verification-page")
    }

})

$("#verification-form").submit(function(e){
    e.preventDefault();
    code = $("#code").val();
    if(Number(code) !== 1234){
        $("#code-feedback").removeClass("d-none");
    }else{
        $("#code-feedback").addClass("d-none");
        navigate( ".login-page")
    }
})
$("input").keypress(function(){
   input_id = $(this).attr('id');
   feedback_id= '#'+input_id + '-' + 'feedback';
   $(feedback_id).addClass("d-none");

})

$("input[type=checkbox]").change(function() {
    if(this.checked) {
        input_id = $(this).attr('id');
   feedback_id= '#'+input_id + '-' + 'feedback';
   $(feedback_id).addClass("d-none");
    }
});

$("#welcome-form").submit(function(e){
    e.preventDefault();
    navigate( ".login-page")
})

$("#login-form").submit(function(e){
    e.preventDefault();
    phone = $("#phone").val();
    password = $("#password").val();
    if(Number(phone) !== 46575460){
        $("#phone-feedback").removeClass("d-none");
    }else{
        $("#phone-feedback").addClass("d-none");
        navigate( ".home-page")
    }
    if(password === "46575460"){
        $("#phone-feedback").removeClass("d-none");
    }else{
        $("#phone-feedback").addClass("d-none");
        navigate( ".home-page")
    }

})


function navigate(to){
    $(".page").removeClass("active")
    $(to).addClass("active");

}
function tab(to){
    $(".tab-screen").removeClass("active")
    $(to).addClass("active");

}


$('.tabs .tab').click(function(){
    $('.tabs .tab').removeClass('active-tab');
    $(this).addClass("active-tab");
})