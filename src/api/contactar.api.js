const crearContacto = async (nombreYApellido, email, telefono, mensaje) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    nombreYApellido: nombreYApellido,
    email: email,
    telefono: telefono,
    mensaje: mensaje,
    leido: false,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/v1/contacto", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default crearContacto;
