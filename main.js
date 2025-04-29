const submitBtn=document.querySelector('#submit-btn');
//console.log(submitBtn);
const selectCard=document.querySelector('#select');
const thankYouCard=document.querySelector('#thank-you');
const circlesBtn= document.querySelectorAll('.circle');
const scoreElement=document.querySelector('#score');

console.log("hi");

circlesBtn.forEach(circleBtn => {
    circleBtn.addEventListener('click', (e)=>{
        console.log(e.target.innerText);

        //se hace un recorrido previo en caso de haber seleccionado un btn y se le quitan los estilos a todos
        //para q solo quede uno marcado que seria la sentencia de abajo
        circlesBtn.forEach(circleBtn => {
            circleBtn.classList.remove('bg-medium-grey'); 
            circleBtn.classList.remove('text-white');
        })

        circleBtn.classList.add('bg-medium-grey'); //cambiaso el estilo del boton al seleccionarlo
        circleBtn.classList.add('text-white');
        scoreElement.innerHTML= e.target.innerText;  //tomo el valor del span id score del btn pulsado

        //se pone la funcion de enviar el btn para q no s emande sin haber seleccionado ningun btn
        submitBtn.addEventListener('click', ()=>{
            console.log('click');  //probando q funciona
            selectCard.classList.add('hidden'); //uso esto para agregar una clase dw tailwind llamado hodden
            thankYouCard.classList.remove('hidden'); //la q aparece despues de darle submit, aparece la card thanks
        })
    })
})