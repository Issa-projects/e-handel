$("#login-form").submit(function(e){
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
        navigate(".landing-page", ".verification-page")
    }

})

$("#verification-form").submit(function(e){
    code = $("#code").val();
    if(code !== 1234){
        $("#code-feedback").removeClass("d-none");
        navigate(".verification-page", ".welcome-page")
    }else{
        $("#code-feedback").addClass("d-none");
    }
})


function navigate(current, next){
    $(current).addClass("d-none");
    $(next).removeClass("d-none")
}