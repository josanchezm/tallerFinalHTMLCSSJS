const main = () => {
    // Codigo formulario
    let nombre = document.querySelector('#nombre');
    let correo = document.querySelector('#correo');
    let asunto = document.querySelector('#asunto');
    let mensaje = document.querySelector('#mensaje');
    let btnEnviar = document.querySelector('#btnEnviar');
    let btnResetear = document.querySelector('#btnResetear');
    
    btnEnviar.addEventListener('click', () => {
        const expresionValidacionCorreo = /[a-zA-Z0-9._-]+\@(hotmail|outlook|gmail)\.(com|es)/; // Expresion con el conjunto valido de elementos que componen un correo
        const validarCorreo = (correo) => { // Se evalua el correo ingresado por el ususario por medio de la expresion
            if (expresionValidacionCorreo.test(correo)) { 
                return true;
            } else {
                return false;
            }
        }
        const validacionCorreo = validarCorreo(String(correo.value));

        let arr = [
            {'campo': 'Nombre', 'campoUsuario': nombre.value},
            {'campo': 'Correo', 'campoUsuario': correo.value},
            {'campo': 'Asunto', 'campoUsuario': asunto.value},
            {'campo': 'Mensaje', 'campoUsuario':mensaje.value}
        ]

        let camposVacios = [];

        arr.forEach(element => {
            if(element.campoUsuario === '') {
                camposVacios.push(element.campo);
            }
        });

        if(camposVacios.length >= 1) {
            alert(`Debe diligenciar los siguientes campos: ${camposVacios}`);    
        } else if(camposVacios.length === 0 && validacionCorreo) {
            console.log(`
            Nombre: ${nombre.value}
            Correo: ${correo.value}
            Asunto: ${asunto.value}
            Mensaje: ${mensaje.value}`);
        }
        if(!validacionCorreo && correo.value != '') {
            alert('Debe ingresar un correo válido');
        }
    })

    btnResetear.addEventListener('click', () => {
        let arr = [nombre,correo,asunto,mensaje];

        arr.forEach(element => {
            element.value = '';
        });
    })
}
