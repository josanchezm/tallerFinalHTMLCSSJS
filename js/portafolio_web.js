const main = () => {
    let elementosAcord = document.getElementsByClassName('talleresPseintJava');
    for (let i = 0; i < elementosAcord.length;  i++) {
        elementosAcord[i].addEventListener('click', function(){
            let panel = this.nextElementSibling;
            if(panel.style.display == "block") {
                panel.style.display = "none";  
            } else {
                panel.style.display = "block";
            } 
        });
    }
}