//5. 
const btnSave = document.getElementById('save_id');
const inputValue=document.getElementById('input_id');

btnSave.addEventListener("click", ()=>{

    if(inputValue.value == null || inputValue.value == ''){
        alert('INFORMACION INVALIDA');
    }else{
        localStorage.setItem(`input_id`,`${inputValue.value}`);
        location.reload(true);
    }
});

if(localStorage.getItem('input_id') != null){
    const bienv = document.getElementById('bienvenida_id');
    bienv.innerHTML='';

    bienv.innerHTML=`
        <h1>BIENVENIDO NUEVAMENTE ${localStorage.getItem('input_id')}</h1>
        <button onclick="reset_bienv()">Reiniciar</button>
    `;
}

const reset_bienv = ()=>{
    localStorage.clear();
    location.reload(true);
}
