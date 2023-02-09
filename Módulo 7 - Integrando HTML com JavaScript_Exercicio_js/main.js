const form = document.getElementById('form-calculo');
//const campoB = document.getElementById('numero-b');
let formEvalido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const campoA = document.getElementById('numero-a');
    const campoB = document.getElementById('numero-b');
    
    formEvalido = parseInt(campoB.value) > parseInt(campoA.value);
    
    
    if (formEvalido){
        
       // campoA.value = '';
        //campoB.value = '';
        campoB.classList.add('success');
        document.querySelector('.success-message').style.display = 'block';
        
        
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
    
});
