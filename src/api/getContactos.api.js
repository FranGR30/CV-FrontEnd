const getContactosNoLeidos = async (token, setContactos, leido) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);
  //myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  if (leido == null) {
    leido = true;
  }
  let response = await fetch(
    "http://localhost:8080/api/v1/contacto?leido=" + leido,
    requestOptions
  );
  let jsonData = await response.json();
  setContactos(jsonData.response);
};

export default getContactosNoLeidos;
