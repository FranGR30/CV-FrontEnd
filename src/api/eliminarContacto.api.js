const eliminarContacto = async (id, token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("http://localhost:8080/api/v1/contacto/" + id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default eliminarContacto;
