const marcarLeido = async (id, token, leidoActual) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    leido: leidoActual,
  });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/v1/contacto/" + id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default marcarLeido;
