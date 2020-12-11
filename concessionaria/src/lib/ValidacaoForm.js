export function validarFormulario(camposFormulario)
{
    let isValido = true;

    for (let campo of camposFormulario)
    {
        if (campo.value.trim() === '' && campo.dataset.msg) 
        {
            alert(campo.dataset.msg);
            campo.focus();
            isValido = false;
            break;
        }
    }

    return isValido;
}