const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
// const emailRegex =
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    // emailValidate();
    mainPasswordValidate();
    comparePassword();
})


function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none'
}

function setError(index){
    // alert(index)
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block'
}

function nameValidate(){
    if(campos[0].value.length < 3){
        // console.log("NOME DEVE TER 3 CARACTERES")
        setError(0);
    }else{
        removeError(0);
    }
}


// function emailValidate(){
//     if(!emailRegex.test(campos[1].value)){
//         console.log("validado")
//         setError(1);
//
//     }else{
//         console.log("não validado")
//         removeError(1);
//
//     }
// }

function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setError(2);
    }else{
        removeError(2);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3);
    }else {
        setError(3);
    }
}

