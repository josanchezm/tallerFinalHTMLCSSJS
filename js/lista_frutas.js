const main = () => {
    // Codigo estilos pares
    let lista = document.getElementsByClassName('lista');
    let listaImg = document.getElementsByClassName('imgLista');

    // Codigo boton estilos
    let header = document.querySelector('#header');
    let main = document.querySelector('#main');
    let footer = document.querySelector('#footer');
    let modoColor = localStorage.getItem("modo"); // Se establece el localStorage con key modo para guardar el estilo de la pagina
    
    if (modoColor === "oscuro") {               
        header.classList.add("estiloOscuroHeader");             
        main.classList.add("estiloOscuroMain");             
        footer.classList.add("estiloOscuroFooter");
        for (let index = 0; index < lista.length; index++) {
            if((index+1) % 2 != 0) {
            lista[index].classList.add('estiloParImpar');
            listaImg[index].classList.add('estiloParImparImg');  
            } else {
                lista[index].classList.remove('estiloParImpar');
                listaImg[index].classList.remove('estiloParImparImg');
            }
        }  
    } else {
        header.classList.remove("estiloOscuroHeader");             
        main.classList.remove("estiloOscuroMain");             
        footer.classList.remove("estiloOscuroFooter");
        for (let index = 0; index < lista.length; index++) {
            if((index+1) % 2 === 0) {
            lista[index].classList.add('estiloParImpar');
            listaImg[index].classList.add('estiloParImparImg');  
            } else {
                lista[index].classList.remove('estiloParImpar');
                listaImg[index].classList.remove('estiloParImparImg');
            }
        }
    }

    let boton = false; // Se inicializa el boton en falso

    let btnEstilo = document.querySelector('.btnCambiarEstilo');
    btnEstilo.addEventListener('click', () => {
        if (boton) { // Cuando el boton no es presionado
            header.classList.remove("estiloOscuroHeader");
            main.classList.remove("estiloOscuroMain");
            footer.classList.remove("estiloOscuroFooter");
            for (let index = 0; index < lista.length; index++) {
                if((index+1) % 2 === 0) {
                lista[index].classList.add('estiloParImpar');
                listaImg[index].classList.add('estiloParImparImg');  
                } else {
                    lista[index].classList.remove('estiloParImpar');
                    listaImg[index].classList.remove('estiloParImparImg');
                }
            }
            localStorage.setItem("modo", "claro");
            boton = false;
        } else {  // El boton es presionado
            if (modoColor === "oscuro") { 
                localStorage.removeItem('modo');
                location.reload(); 
                boton = true;           
            } else {
                localStorage.setItem("modo", "oscuro");
                header.classList.add("estiloOscuroHeader");             
                main.classList.add("estiloOscuroMain");             
                footer.classList.add("estiloOscuroFooter");
                for (let index = 0; index < lista.length; index++) {
                    if((index+1) % 2 != 0) {
                    lista[index].classList.add('estiloParImpar');
                    listaImg[index].classList.add('estiloParImparImg');  
                    } else {
                        lista[index].classList.remove('estiloParImpar');
                        listaImg[index].classList.remove('estiloParImparImg');
                    }
                }  
                boton = true;
            }        
        }
    })
}
