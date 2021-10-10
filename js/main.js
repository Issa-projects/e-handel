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
        navigate( ".welcome-page")
    }
})


function navigate(to){
    $(".page").removeClass("active")
    $(to).addClass("active");

}