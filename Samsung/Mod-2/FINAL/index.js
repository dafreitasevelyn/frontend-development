function validateName()
{ 
    var u_name=document.myForm.u_name;
    var u_submit=document.myForm.u_submit;
    var nameError=document.getElementById("u_name_msj")
    var check=document.getElementById("check-name")

    if (/\d/.test(u_name.value))
    {
        u_name.style.borderColor='red';
        nameError.innerHTML="No puede contener número" 
        nameError.className="error-message" 
        check.className="fa solid fa-exclamation-circle"
    }
    else if (u_name.value=="")
    {
        u_name.style.borderColor='red';
        nameError.innerHTML="Rellene este campo" 
        nameError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
    }
    else
    {
        u_name.style.borderColor= "green";
        check.className="fa solid fa-check-circle"
        nameError.innerHTML=""
        
    }
}

function validateEmail()
{ 
    var u_mail=document.myForm.u_mail
    var mailError=document.getElementById("u_mail_msj")
    var check=document.getElementById("check-mail")

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(u_mail.value))
    {
        u_mail.style.borderColor='green';
        mailError.innerHTML=""
        check.className="fa solid fa-check-circle"
    }
    else if (u_mail.value=="")
    {
        u_mail.style.borderColor='red';
        mailError.innerHTML="Rellene este campo" 
        mailError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
    }
    else
    {
        u_mail.style.borderColor='red';
        mailError.innerHTML="Email inválido" 
        mailError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
    }
}

function validatePasswordLength()
{ 
    var u_pass=document.myForm.u_pass
    var passError=document.getElementById("u_pass_msj")
    var check=document.getElementById("check-pass")


    if (u_pass.value.length>8)
    {
        u_pass.style.borderColor='red';
        passError.innerHTML="No debe tener más de 8 caracteres" 
        passError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
        validatePassword()
    }
    else if (u_pass.value=="")
    {
        u_pass.style.borderColor='red';
        passError.innerHTML="Rellene campo contraseña" 
        passError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
        validatePassword()

    }
    else
    {
        u_pass.style.borderColor='green';
        passError.innerHTML=""
        check.className="fa solid fa-check-circle"
        validatePassword()
    }
}

function validatePassword()
{ 
    var u_confirmpass=document.myForm.u_confirmpass
    var u_pass=document.myForm.u_pass
    var confirmpassError=document.getElementById("u_confirmpass_msj")
    var check=document.getElementById("check-confirm")

    if (u_confirmpass.value==u_pass.value && u_pass.value!="")
    {
        confirmpassError.innerHTML=""
        u_confirmpass.style.borderColor='green'
        check.className="fa solid fa-check-circle"
        
    }
    else if (u_confirmpass.value=="")
    {
        u_confirmpass.style.borderColor='red';
        confirmpassError.innerHTML="Rellene campo confirmacion" 
        confirmpassError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
    }
    else
    {
        u_confirmpass.style.borderColor='red';
        confirmpassError.innerHTML="Las contraseñas no coinciden" 
        confirmpassError.className="error-message"
        check.className="fa solid fa-exclamation-circle"
    }
}

function validateForm()
{
    var nameError=document.getElementById("u_name_msj")
    var mailError=document.getElementById("u_mail_msj")
    var passError=document.getElementById("u_pass_msj")
    var confirmpassError=document.getElementById("u_confirmpass_msj")
        
    if(nameError.innerHTML=="" && mailError.innerHTML=="" && passError.innerHTML=="" && confirmpassError.innerHTML=="" )
    {
        alert("Sus datos han sido enviados con éxito");
        return true;
    }else{
        alert("Por favor confirme sus datos");
        return false
    }
}
