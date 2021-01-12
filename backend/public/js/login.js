



function myEmail() {
    var x = document.getElementById("email").value;

    if(x == ''){
       $("#span-error").text("Campo E-mail é obrigatório");
    }else{
       $("#span-error").text(""); 
    }
}

function mypassword() {
    var x = document.getElementById("password").value;

    if(x == ''){
       $("#span-error-two").text("Campo Senha é obrigatório");
    }else{
       $("#span-error-two").text(""); 
    }
}

function formenvi () {

    let senha = $("#password").val();
    let email = $("#email").val();
    var _token = $("input[name='_token']").val();

    if(email == ''){
       $("#span-error").text("Campo E-mail é obrigatório");
       return false;
    }else{
       $("#span-error").text("");
    }

    if(senha == ''){
       $("#span-error-two").text("Campo Senha é obrigatório");
       return false;
    }else{
       $("#span-error-two").text(""); 
    }

    $.ajax({
        url: "http://192.168.100.2:4000/login",
        method: 'POST',
        data: {
          email: email,
          password: senha,
          _token:_token
        },
        success: function(data){

            if(data.data == false){
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Senha ou E-mail estão incorretos!',
                })
                return false;
            }

            window.location.href  = "http://192.168.100.2:4000/home";

        }
    });
    

    
    
}