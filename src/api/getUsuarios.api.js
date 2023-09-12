const getUsuarios = async () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let response = await fetch("http://localhost:8080/api/v1/users", requestOptions);
  let jsonData = await response.json();
  return jsonData;
};

export default getUsuarios;
