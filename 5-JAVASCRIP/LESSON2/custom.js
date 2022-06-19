// console.log("hello world");

// var images=document.getElementsByTagName('img');
// console.log(images);
// var heading=document.getElementById("heading");
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType);


// var main_content=document.getElementById('main_content');
// main_content.setAttribute('align','right');


// var heading=document.getElementById('heading');
// heading.innerHTML='Historia'


// var main_content=document.getElementById('main_content');

// var new_heading=document.createElement('h2');
// new_heading.innerHTML='Welcome';
// main_content.appendChild(new_heading);

// var new_phrase=document.createElement('p');
// new_phrase.innerHTML='lo logramos';
// main_content.appendChild(new_phrase);


// var button=document.getElementById('btn');
// button.onclick=function()
// {
// alert( 'hello');
// alert('bye');
// }

// function runMe()
// {
//     alert('¿Desea seguir Navegando?');
// }
// setTimeout(runMe,2000);

// function runMe()
// {
//     console.log('¿Desea seguir Navegando?');
// }
// setInterval(runMe,2000);


var u_name=document.myForm.u_name;
var u_pass=document.myForm.u_pass;

var userName='dafreitas'
var passWord='123'

function runMe()
{
    if (u_name.value==userName && u_pass.value==passWord)
    {
        console.log('Loging Success');
    }else
    {
        console.log('Loging Error');
    }
}