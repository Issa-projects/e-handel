//Start: Sjekk register-form
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
//End: Sjekk register-form


//Start: Fjern feilmelding når brukeren begynner å fylle inputtene
$("input").keypress(function(){
   input_id = $(this).attr('id');
   feedback_id= '#'+input_id + '-' + 'feedback';
   $(feedback_id).addClass("d-none");
})
//End: Fjern feilmelding når brukeren begynner å fylle inputtene


//Start: Fjern feilmelding når brukeren input type = radio er checked
$("input[type=radio]").change(function() {
    if(this.checked) {
        input_id = $(this).attr('id');
   feedback_id= '#'+input_id + '-' + 'feedback';
   $(feedback_id).addClass("d-none");
    }
});
//End: Fjern feilmelding når brukeren input type = radio er checked


//Start: Sjekk verification-form om koden er 1234
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
//End: Sjekk verification-form om koden er 1234


//Start: Sjekk login-form om tlf og passord er 12345678
$("#login-form").submit(function(e){
    e.preventDefault();
    phone = $("#login-phone").val();
    password = $("#login-password").val();
    if(Number(phone) !== 12345678){
        $("#login-phone-feedback").removeClass("d-none");
        phone = false
    }else{
        phone=true
        $("#login-phone-feedback").addClass("d-none");

    }
    if(Number(password) !== 12345678){
        password=false;
        $("#login-password-feedback").removeClass("d-none");
    }else{
        password=true;
        $("#login-password-feedback").addClass("d-none");

    }
    if(password && phone){
        navigate( ".welcome-page")
    }

})
//End: Sjekk login-form om tlf og passord er 12345678


//Start: Navigate to home page after welcome page
$("#welcome-form").submit(function(e){
    e.preventDefault();
    navigate( ".home-page")
})
//End: Navigate to home page after welcome page


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