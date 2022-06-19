var u_name=document.myForm.u_name;
var message=document.getElementById('message');

function runMe()
{ 
    if (u_name.value.length<3)
    {
        message.innerHTML='Faltan Caracteres';
        message.style.color='orange';
        u_name.style.backgroundColor='black';
        u_name.style.color='white'
    }
    else if (u_name.value.length==5)
        {
            message.innerHTML='Usuario Valido';
            message.style.color='green'
        }
    else if (u_name.value.length>8)
        {
        message.innerHTML='Caracteres Excedidos';
        message.style.color='red'
        }
}