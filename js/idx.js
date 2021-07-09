const alertaBuscar = () => {
    let busqueda = document.getElementById("Buscar").value;

    if (busqueda != '') {
        Swal.fire({
            icon: 'error',
            title: `La busqueda con nombre ${busqueda}`,
            text: 'No se encuentra, por lo cual te solicitamos intentarlo mas tarde'
        })
    }

}

const descargar =()=>{
    let response = grecaptcha.getResponse();
    if(response.length != 0){
        window.open("https://google.com/")
    }else{
        document.getElementById("status").innerHTML = "Acepta el captcha primero";
    }
}
